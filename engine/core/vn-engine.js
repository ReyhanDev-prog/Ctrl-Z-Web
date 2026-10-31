/* =========================================================
   CTRL+Z — WEB VN ENGINE
   State, label, audio, effect, choice, save/load, minigame.
========================================================= */

window.VN = {

    characters: {},
    backgrounds: {},
    labels: {},

    queue: [],
    currentCommand: 0,
    currentLabel: null,

    dialogueLog: [],
    dialogueCount: 0,

    waitingForInput: false,
    waitingForOverlay: false,
    isTyping: false,

    currentCharacter: null,
    currentExpression: null,
    currentSprite: null,
    currentBackground: null,

    started: false,
    initialized: false,
    ended: false,

    autoMode: false,
    skipMode: false,

    autoTimer: null,
    skipTimer: null,
    waitTimer: null,
    stateSaveTimer: null,

    audio: {
        music: null,
        musicPath: null,
        musicVolume: 0.7,
        sfxVolume: 0.8
    },



    /* =====================================================
       INITIALIZATION
    ===================================================== */

    initialize() {

        if (this.initialized) {
            return;
        }

        if (!window.GameState) {
            console.error("GameState belum dimuat.");
            return;
        }

        if (window.VNUI) {
            VNUI.initialize();
        }

        this.initialized = true;

        this.setMusicVolume(
            GameState.persistent.system.music_volume,
            false
        );

        this.setSFXVolume(
            GameState.persistent.system.sfx_volume,
            false
        );

        this.bindInput();

        this.started = true;

        this.resumeFromQuery();

    },



    bindInput() {

        document.addEventListener(
            "click",
            event => {

                if (!(event.target instanceof Element)) {
                    return;
                }

                if (
                    event.target.closest(
                        ".quick-menu, .choice-panel, .sub-screen, " +
                        ".log-overlay, .intro-overlay, .coming-soon-overlay, " +
                        ".hack-modal, button, input, textarea, select, a"
                    )
                ) {
                    return;
                }

                if (!event.target.closest("#game-container")) {
                    return;
                }

                this.createClickEffect(event.clientX, event.clientY);

                this.next();

            }
        );


        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.code !== "Space"
                    && event.code !== "Enter"
                ) {
                    return;
                }

                if (
                    event.target instanceof Element
                    && event.target.closest(
                        "button, input, textarea, select, .sub-screen, " +
                        ".log-overlay, .intro-overlay, .coming-soon-overlay, " +
                        ".hack-modal"
                    )
                ) {
                    return;
                }

                event.preventDefault();

                this.next();

            }
        );

    },


    createClickEffect(x, y) {

        const ripple = document.createElement("div");
        ripple.className = "click-ripple";
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        document.body.appendChild(ripple);

        const particleCount = 4;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "click-particle";
            const angle = (i * (360 / particleCount) + (Math.random() * 20 - 10)) * (Math.PI / 180);
            const dist = 16 + Math.random() * 12;
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist;

            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.setProperty("--tx", `${tx}px`);
            particle.style.setProperty("--ty", `${ty}px`);
            document.body.appendChild(particle);

            window.setTimeout(() => particle.remove(), 420);
        }

        window.setTimeout(() => ripple.remove(), 450);

    },



    /* =====================================================
       START / RESUME
    ===================================================== */

    resolveRequestedLabel(value) {

        if (!value) {
            return null;
        }

        if (this.labels[value]) {
            return value;
        }

        if (typeof window.getChapterLabel === "function") {
            return window.getChapterLabel(value);
        }

        return null;

    },



    resumeFromQuery() {

        const parameters =
            new URLSearchParams(window.location.search);

        const requested =
            parameters.get("chapter")
            || parameters.get("label");

        const requestedLabel =
            this.resolveRequestedLabel(requested)
            || "introduction";

        const wantsContinue =
            parameters.get("continue") === "1";


        if (
            wantsContinue
            && window.VNSave
            && VNSave.exists()
        ) {

            const save = VNSave.load();

            if (save) {

                const label =
                    this.labels[save.currentLabel]
                        ? save.currentLabel
                        : requestedLabel;

                this.startStory(label, { run: false });
                this.applySave(save);
                this.run();

                if (window.VNUI) {
                    VNUI.showNotification("TIMELINE RESTORED");
                }

                return;

            }

        }


        if (!this.labels[requestedLabel]) {

            console.warn(
                `Label "${requestedLabel}" tidak ditemukan. Fallback ke introduction.`
            );

            this.startStory("introduction");

            return;

        }

        this.startStory(requestedLabel);

    },



    startStory(label, options = {}) {

        const builder = this.labels[label];

        if (typeof builder !== "function") {

            console.error(`Label "${label}" belum terdaftar.`);

            if (window.VNUI) {
                VNUI.showNotification("STORY DATA NOT FOUND");
            }

            return false;

        }

        this.stopTimers();

        this.queue = [];
        this.currentCommand = 0;
        this.currentLabel = label;

        this.dialogueLog = [];
        this.dialogueCount = 0;

        this.waitingForInput = false;
        this.waitingForOverlay = false;
        this.ended = false;

        this.autoMode = false;
        this.skipMode = false;

        this.currentCharacter = null;
        this.currentExpression = null;
        this.currentSprite = null;
        this.currentBackground = null;

        if (window.VNUI) {
            VNUI.resetView();
        }

        this.queue = this._build(builder);

        if (options.run !== false) {
            this.run();
        }

        return true;

    },



    /* =====================================================
       STATE MANAGEMENT
    ===================================================== */

    _stateTarget(key, create = false) {

        const parts =
            String(key || "")
                .split(".")
                .filter(Boolean);

        if (!parts.length) {
            return null;
        }

        const sections = [
            "persistent",
            "temp_flags",
            "system",
            "chapter_state"
        ];

        let root = GameState;

        if (!sections.includes(parts[0])) {
            root = GameState.persistent;
        }

        for (let i = 0; i < parts.length - 1; i++) {

            const part = parts[i];

            if (
                root[part] === undefined
                || root[part] === null
                || typeof root[part] !== "object"
            ) {

                if (!create) {
                    return null;
                }

                root[part] = {};

            }

            root = root[part];

        }

        return {
            target: root,
            property: parts[parts.length - 1]
        };

    },



    setState(key, value) {

        const resolved = this._stateTarget(key, true);

        if (!resolved) {
            console.warn(`State key tidak valid: ${key}`);
            return value;
        }

        resolved.target[resolved.property] = value;

        this.scheduleStateSave();

        return value;

    },



    getState(key, fallback = null) {

        const resolved = this._stateTarget(key, false);

        if (!resolved) {
            return fallback;
        }

        const value = resolved.target[resolved.property];

        return value === undefined
            ? fallback
            : value;

    },



    scheduleStateSave() {

        clearTimeout(this.stateSaveTimer);

        this.stateSaveTimer =
            window.setTimeout(
                () => {
                    GameState.save();
                },

                150
            );

    },



    /* =====================================================
       QUEUE BUILDER
    ===================================================== */

    add(command) {

        this.queue.push(command);

        return command;

    },



    _build(builder) {

        const oldQueue = this.queue;
        const oldIndex = this.currentCommand;

        this.queue = [];
        this.currentCommand = 0;

        try {
            builder();
        }
        catch (error) {
            console.error("Gagal membangun label:", error);
        }

        const built = this.queue;

        this.queue = oldQueue;
        this.currentCommand = oldIndex;

        return built;

    },



    /* =====================================================
       RUN LOOP
    ===================================================== */

    async run() {

        if (this.ended) {
            return;
        }

        if (this.currentCommand >= this.queue.length) {

            console.log("Story selesai.");

            this.ended = true;

            if (window.VNUI) {
                VNUI.showNotification("END OF TIMELINE");
            }

            return;

        }

        const command = this.queue[this.currentCommand];

        switch (command.type) {

            case "scene":
                await this.executeScene(command);
                this.currentCommand++;
                this.run();
                break;


            case "show":
                await this.executeShow(command);
                this.currentCommand++;
                this.run();
                break;


            case "hide":
                await this.executeHide(command);
                this.currentCommand++;
                this.run();
                break;


            case "dialogue":
                this.executeDialogue(command);
                break;


            case "menu":
                this.executeMenu(command);
                break;


            case "jump":
                this.executeJump(command);
                break;


            case "if":
                this.executeIf(command);
                break;


            case "wait":
                this.executeWait(command);
                break;


            case "effect":
                this.executeEffect(command);
                this.currentCommand++;
                this.run();
                break;


            case "music":
                this.playMusic(command.path, command.options);
                this.currentCommand++;
                this.run();
                break;


            case "sfx":
                this.playSFX(command.path, command.options);
                this.currentCommand++;
                this.run();
                break;


            case "stop-music":
                this.stopMusic(command.fade || 0);
                this.currentCommand++;
                this.run();
                break;


            case "notify":
                if (window.VNUI) {
                    VNUI.showNotification(command.message);
                }
                this.currentCommand++;
                this.run();
                break;


            case "overlay-text":
                this.executeOverlayText(command);
                break;


            case "hack":
                this.executeHack(command);
                break;


            case "coming-soon":
                this.executeComingSoon(command);
                break;


            case "exit-menu":
                window.location.assign("../index.html");
                break;


            default:
                console.warn("Command tidak dikenal:", command);
                this.currentCommand++;
                this.run();

        }

    },



    /* =====================================================
       SCENE / CHARACTER
    ===================================================== */

    async executeScene(command) {

        let definition = this.backgrounds[command.background];

        if (!definition) {
            definition = command.background;
        }

        const data =
            typeof definition === "string"
                ? { path: definition, theme: "default" }
                : { ...definition, id: command.background };

        this.currentBackground = data;

        if (window.VNUI) {
            VNUI.setBackground(data);
        }

        let transition = command.transition || "crossfade";

        if (transition === "flash" && window.VNUI) {
            VNUI.flash();
        }

        if (transition === "glitch" && window.VNUI) {
            VNUI.glitch();
        }

        if (window.VNTransitions) {
            await VNTransitions.play(transition, VNUI.background);
        }

    },



    resolveSprite(character, expression) {

        if (!character) {
            return null;
        }

        if (expression) {
            if (
                character.expressions
                && character.expressions[expression]
            ) {
                return character.expressions[expression];
            }

            if (character.sprite) {
                const spritePath = character.sprite;
                const lastSlash = spritePath.lastIndexOf("/");
                const dir = lastSlash >= 0 ? spritePath.slice(0, lastSlash + 1) : "";
                const file = lastSlash >= 0 ? spritePath.slice(lastSlash + 1) : spritePath;
                const dotIndex = file.lastIndexOf(".");
                const name = dotIndex >= 0 ? file.slice(0, dotIndex) : file;
                const ext = dotIndex >= 0 ? file.slice(dotIndex) : ".png";

                return `${dir}${name}_${expression}${ext}`;
            }
        }

        return character.sprite || null;

    },



    async executeShow(command) {

        const character = this.characters[command.character];

        if (!character) {

            console.warn(
                `Karakter "${command.character}" belum terdaftar (show diabaikan).`
            );

            return;

        }

        const expression = command.expression || null;

        if (!character.sprite) {
            return;
        }

        const sprite = this.resolveSprite(character, expression);

        this.currentCharacter = command.character;
        this.currentExpression = expression;
        this.currentSprite = sprite;

        if (window.VNUI) {

            await VNUI.setCharacter(
                sprite,
                {
                    character: command.character,
                    expression: expression,
                    position: command.position,
                    baseSprite: character.sprite
                }
            );

        }

        if (window.VNTransitions) {
            await VNTransitions.play(
                command.transition || "slide-bottom",
                VNUI.character
            );
        }

    },



    async executeHide(command) {

        if (
            this.currentCharacter
            && command.character
            && this.currentCharacter !== command.character
        ) {
            return;
        }

        this.currentCharacter = null;
        this.currentExpression = null;
        this.currentSprite = null;

        if (window.VNUI) {
            VNUI.setCharacter(null);
        }

    },



    executeDialogue(command) {

        const character = this.characters[command.character];

        const speaker =
            character
                ? character.name
                : "";

        const centered =
            Boolean(
                command.centered
                || (character && character.centered)
            );

        if (window.VNUI) {
            VNUI.setSpeaker(speaker, character);
        }

        this.dialogueCount++;

        const entry = {
            number: this.dialogueCount,
            speaker: speaker || "NARRATOR",
            text:
                VNUI && VNUI.cleanText
                    ? VNUI.cleanText(command.text)
                    : command.text,
            raw: command.text,
            centered: centered
        };

        this.dialogueLog.push(entry);

        if (this.dialogueLog.length > 500) {
            this.dialogueLog.shift();
        }

        if (window.VNUI) {
            VNUI.updateLog(this.dialogueCount);
        }

        this.waitingForInput = true;

        if (this.skipMode) {
            this.isTyping = false;
            if (window.VNUI) {
                VNUI.setDialogue(command.text, {
                    speaker: speaker,
                    centered: centered
                });
                VNUI.showContinueIndicator(true);
            }
            clearTimeout(this.skipTimer);
            this.skipTimer =
                window.setTimeout(
                    () => this.next(),
                    120
                );
            return;
        }

        this.isTyping = true;

        if (window.VNUI) {
            VNUI.showContinueIndicator(false);
            VNUI.typeDialogue(
                command.text,
                {
                    speaker: speaker,
                    centered: centered,
                    speed: 24
                },
                () => {
                    this.onTypingComplete();
                }
            );
        } else {
            this.isTyping = false;
        }

    },


    onTypingComplete() {

        this.isTyping = false;

        if (window.VNUI) {
            VNUI.showContinueIndicator(true);
        }

        if (this.autoMode) {
            this.scheduleAuto();
        }

    },



    scheduleAuto() {

        clearTimeout(this.autoTimer);

        if (!this.autoMode || !this.waitingForInput || this.isTyping) {
            return;
        }

        this.autoTimer =
            window.setTimeout(
                () => this.next(),
                2600
            );

    },



    /* =====================================================
       MENU / BRANCH / JUMP
    ===================================================== */

    normalizeChoices(choices) {

        if (Array.isArray(choices)) {

            return choices.map(
                item => ({

                    text:
                        item.text
                        ?? item.label
                        ?? "",

                    condition:
                        typeof item.condition === "function"
                            ? item.condition
                            : null,

                    action:
                        typeof item.action === "function"
                            ? item.action
                            : (
                                typeof item.callback === "function"
                                    ? item.callback
                                    : null
                            )

                })
            );

        }


        return Object.entries(choices || {}).map(
            ([text, value]) => {

                if (typeof value === "function") {
                    return {
                        text,
                        condition: null,
                        action: value
                    };
                }

                return {
                    text:
                        value && value.text
                            ? value.text
                            : text,

                    condition:
                        value && typeof value.condition === "function"
                            ? value.condition
                            : null,

                    action:
                        value && typeof value.action === "function"
                            ? value.action
                            : null
                };

            }
        );

    },



    executeMenu(command) {

        this.waitingForInput = false;

        const choices = this.normalizeChoices(command.choices);

        VNUI.showChoices(
            choices,
            selected => {

                const action = selected && selected.action;

                const rest =
                    this.queue.slice(this.currentCommand + 1);

                const built =
                    typeof action === "function"
                        ? this._build(action)
                        : [];

                this.queue = [...built, ...rest];
                this.currentCommand = 0;

                this.run();

            }
        );

    },



    executeJump(command) {

        const builder = this.labels[command.label];

        if (typeof builder !== "function") {

            console.error(
                `Label "${command.label}" tidak ditemukan.`
            );

            this.executeComingSoon({
                title: "TO BE CONTINUED",
                subtitle: `SIGNAL LOST // ${command.label}`
            });

            return;

        }

        this.queue = this._build(builder);
        this.currentCommand = 0;
        this.currentLabel = command.label;

        this.run();

    },



    executeIf(command) {

        let branch = null;

        try {
            branch =
                command.condition()
                    ? command.thenBranch
                    : command.elseBranch;
        }
        catch (error) {
            console.error("Kondisi cerita gagal:", error);
        }

        const built =
            typeof branch === "function"
                ? this._build(branch)
                : [];

        this.queue.splice(
            this.currentCommand,
            1,
            ...built
        );

        this.run();

    },



    /* =====================================================
       WAIT / EFFECT
    ===================================================== */

    executeWait(command) {

        this.waitingForInput = false;

        const duration =
            this.skipMode
                ? 20
                : Math.max(
                    0,
                    Number(command.duration || 0) * 1000
                );

        clearTimeout(this.waitTimer);

        this.waitTimer =
            window.setTimeout(
                () => {
                    this.currentCommand++;
                    this.run();
                },

                duration
            );

    },



    executeEffect(command) {

        if (!window.VNUI) {
            return;
        }

        switch (command.effect) {

            case "hpunch":
                VNUI.hpunch();
                break;

            case "flash":
                VNUI.flash();
                break;

            case "glitch":
                VNUI.glitch();
                break;

        }

    },



    /* =====================================================
       OVERLAY / HACK / END
    ===================================================== */

    executeOverlayText(command) {

        this.waitingForInput = false;
        this.waitingForOverlay = true;

        VNUI.showIntro(
            command.title,
            command.body
        );

    },



    resumeOverlay() {

        if (!this.waitingForOverlay) {
            return;
        }

        this.waitingForOverlay = false;

        VNUI.hideIntro();

        this.currentCommand++;

        this.run();

    },



    generateAuthorizationCode() {

        const substitutions = {
            a: ["4", "@"],
            b: ["8"],
            c: ["("],
            e: ["3"],
            g: ["9"],
            h: ["#"],
            i: ["1", "!"],
            l: ["1"],
            o: ["0"],
            s: ["5", "$"],
            t: ["7", "+"],
            z: ["2"]
        };

        const phrases = [
            "you cannot rewind time just because of your mistake",
            "this is your only chance",
            "no second chance this time",
            "are you sure you want this",
            "not everything can be undone",
            "some doors must stay closed"
        ];

        const phrase =
            phrases[Math.floor(Math.random() * phrases.length)];

        let result = "";

        for (const character of phrase) {

            const lower = character.toLowerCase();

            if (substitutions[lower]) {

                const options = substitutions[lower];

                result +=
                    options[
                        Math.floor(Math.random() * options.length)
                    ];

            }
            else {
                result += character;
            }

        }

        return result;

    },



    executeHack(command) {

        this.waitingForInput = false;

        const code =
            command.code
            || this.generateAuthorizationCode();

        VNUI.openHack({

            prompt:
                command.prompt
                || ">> MASUKKAN KODE OTORISASI:",

            code: code,

            onSuccess: () => {

                VNUI.closeHack();

                const built =
                    this._build(
                        command.onSuccess
                        || (() => {})
                    );

                this.queue.splice(
                    this.currentCommand,
                    1,
                    ...built
                );

                this.run();

            },


            onFail: () => {

                this.playSFX("audio/incorrect.mp3");

            }

        });

    },



    executeComingSoon(command) {

        this.waitingForInput = false;
        this.ended = true;

        VNUI.showComingSoon(
            command.title || "TO BE CONTINUED",
            command.subtitle || ""
        );

    },



    /* =====================================================
       MODES
    ===================================================== */

    toggleAuto() {

        this.autoMode = !this.autoMode;

        if (!this.autoMode) {
            clearTimeout(this.autoTimer);
            this.autoTimer = null;
        }
        else if (this.waitingForInput) {
            this.scheduleAuto();
        }

    },



    toggleSkip() {

        this.skipMode = !this.skipMode;

        if (!this.skipMode) {
            clearTimeout(this.skipTimer);
            this.skipTimer = null;
        }
        else if (this.waitingForInput) {
            this.next();
        }

    },



    /* =====================================================
       AUDIO
    ===================================================== */

    resolveAudio(path, type = "sfx") {

        if (!path) {
            return null;
        }

        let value =
            String(path).replace(/\\/g, "/");

        if (
            value.startsWith("../")
            || value.startsWith("/")
            || value.startsWith("http")
        ) {
            return value;
        }

        const name = value.split("/").pop();

        if (
            type === "music"
            || value.startsWith("audio/music/")
        ) {
            return `../game/assets/music/${name}`;
        }

        return `../game/assets/sounds/${name}`;

    },



    playMusic(path, options = {}) {

        const resolved = this.resolveAudio(path, "music");

        if (!resolved) {
            return null;
        }

        if (
            this.audio.music
            && this.audio.musicPath === resolved
        ) {
            return this.audio.music;
        }

        this.stopMusic(0);

        try {

            const audio = new Audio(resolved);

            audio.loop = options.loop !== false;

            const volume =
                options.volume === undefined
                    ? 1
                    : Number(options.volume);

            audio.volume =
                Math.max(
                    0,
                    Math.min(1, volume * this.audio.musicVolume)
                );

            audio.play().catch(() => {});

            this.audio.music = audio;
            this.audio.musicPath = resolved;

            return audio;

        }
        catch (error) {

            console.warn(
                "Audio musik tidak tersedia:",
                resolved
            );

            return null;

        }

    },



    stopMusic(fade = 0) {

        const audio = this.audio.music;

        if (!audio) {
            return;
        }

        this.audio.music = null;
        this.audio.musicPath = null;

        if (fade > 0) {

            const steps = 12;
            const delay = (fade * 1000) / steps;
            const start = audio.volume;

            let step = 0;

            const timer =
                window.setInterval(
                    () => {

                        step++;

                        audio.volume =
                            Math.max(
                                0,
                                start * (1 - step / steps)
                            );

                        if (step >= steps) {
                            clearInterval(timer);
                            audio.pause();
                        }

                    },

                    delay
                );

        }
        else {
            audio.pause();
        }

    },



    playSFX(path, options = {}) {

        const resolved = this.resolveAudio(path, "sfx");

        if (!resolved) {
            return null;
        }

        try {

            const audio = new Audio(resolved);

            const volume =
                options.volume === undefined
                    ? 1
                    : Number(options.volume);

            audio.volume =
                Math.max(
                    0,
                    Math.min(1, volume * this.audio.sfxVolume)
                );

            audio.play().catch(() => {});

            return audio;

        }
        catch (error) {
            return null;
        }

    },



    setMusicVolume(value, persist = true) {

        const volume =
            Math.max(
                0,
                Math.min(100, Number(value) || 0)
            );

        this.audio.musicVolume = volume / 100;

        if (persist) {
            this.setState(
                "persistent.system.music_volume",
                volume
            );
        }

        if (this.audio.music) {
            this.audio.music.volume = this.audio.musicVolume;
        }

    },



    setSFXVolume(value, persist = true) {

        const volume =
            Math.max(
                0,
                Math.min(100, Number(value) || 0)
            );

        this.audio.sfxVolume = volume / 100;

        if (persist) {
            this.setState(
                "persistent.system.sfx_volume",
                volume
            );
        }

    },



    notify(message) {

        if (window.VNUI) {
            VNUI.showNotification(message);
        }

    },



    /* =====================================================
       SAVE / LOAD
    ===================================================== */

    saveGame() {

        if (!window.VNSave) {
            return false;
        }

        try {

            VNSave.save({

                version: 2,

                currentLabel: this.currentLabel,
                currentCommand: this.currentCommand,
                dialogueCount: this.dialogueCount,
                dialogueLog: this.dialogueLog.slice(-250),

                currentCharacter: this.currentCharacter,
                currentExpression: this.currentExpression,
                currentBackground: this.currentBackground,
                sprite: this.currentSprite,

                state: GameState.serialize()

            });

            GameState.save();

            return true;

        }
        catch (error) {

            console.error("Save gagal:", error);

            return false;

        }

    },



    applySave(save) {

        if (!save) {
            return false;
        }

        if (save.state) {
            GameState.hydrate(save.state);
            GameState.save();
        }

        const savedIndex = Number(save.currentCommand);

        const maximumIndex =
            Math.max(this.queue.length - 1, 0);

        this.currentCommand =
            Math.max(
                0,
                Math.min(
                    Number.isFinite(savedIndex)
                        ? Math.floor(savedIndex)
                        : 0,
                    maximumIndex
                )
            );

        this.dialogueLog =
            Array.isArray(save.dialogueLog)
                ? save.dialogueLog.slice(-250)
                : [];

        const lastEntry =
            this.dialogueLog[this.dialogueLog.length - 1];

        this.dialogueCount =
            Number.isFinite(Number(save.dialogueCount))
                ? Number(save.dialogueCount)
                : (
                    lastEntry
                        ? Number(lastEntry.number || 0)
                        : this.dialogueLog.length
                );

        this.currentCharacter = save.currentCharacter || null;
        this.currentExpression = save.currentExpression || null;

        this.waitingForInput = false;
        this.waitingForOverlay = false;
        this.ended = false;

        if (window.VNUI) {
            VNUI.clearChoices();
            VNUI.closeOverlays();
        }

        if (save.currentBackground && window.VNUI) {

            this.currentBackground = save.currentBackground;

            VNUI.setBackground(save.currentBackground);

        }

        const character =
            this.characters[this.currentCharacter];

        const sprite =
            save.sprite
            || (
                character
                    ? this.resolveSprite(
                        character,
                        this.currentExpression
                    )
                    : null
            );

        if (window.VNUI) {

            if (sprite) {

                this.currentSprite = sprite;

                VNUI.setCharacter(
                    sprite,
                    {
                        character: this.currentCharacter,
                        expression: this.currentExpression,
                        baseSprite: character
                            ? character.sprite
                            : null
                    }
                );

            }
            else {
                VNUI.setCharacter(null);
            }

        }

        const current = this.queue[this.currentCommand];

        if (
            current
            && current.type === "dialogue"
            && lastEntry
            && lastEntry.raw === current.text
        ) {

            this.dialogueLog.pop();

            this.dialogueCount =
                Math.max(0, this.dialogueCount - 1);

        }

        return true;

    },



    loadGame() {

        if (!window.VNSave || !VNSave.exists()) {
            return false;
        }

        const save = VNSave.load();

        if (!save) {
            return false;
        }

        const label =
            save.currentLabel
            || this.currentLabel;

        if (
            label
            && label !== this.currentLabel
            && this.labels[label]
        ) {
            this.startStory(label, { run: false });
        }

        this.stopTimers();

        this.applySave(save);

        this.run();

        return true;

    },



    /* =====================================================
       ROLLBACK
    ===================================================== */

    rollback() {

        for (
            let index = this.currentCommand - 1;
            index >= 0;
            index--
        ) {

            if (
                this.queue[index]
                && this.queue[index].type === "dialogue"
            ) {

                if (
                    this.currentCommand < this.queue.length
                    && this.queue[this.currentCommand]
                    && this.queue[this.currentCommand].type === "dialogue"
                ) {
                    this.dialogueLog.pop();
                    this.dialogueCount =
                        Math.max(0, this.dialogueCount - 1);
                }

                this.waitingForInput = false;
                this.currentCommand = index;

                if (window.VNUI) {
                    VNUI.clearChoices();
                }

                this.run();

                return true;

            }

        }

        if (window.VNUI) {
            VNUI.showNotification("NO PREVIOUS TIMELINE");
        }

        return false;

    },



    /* =====================================================
       NEXT
    ===================================================== */

    next() {

        if (!this.waitingForInput || this.ended) {
            return;
        }

        // If typewriter is currently typing, skip to the full text immediately
        if (this.isTyping) {
            if (window.VNUI && typeof VNUI.skipTypewriter === "function") {
                VNUI.skipTypewriter();
            } else {
                this.onTypingComplete();
            }
            return;
        }

        this.waitingForInput = false;

        clearTimeout(this.autoTimer);
        clearTimeout(this.skipTimer);

        this.autoTimer = null;
        this.skipTimer = null;

        if (window.VNUI) {
            VNUI.showContinueIndicator(false);
        }

        this.currentCommand++;

        this.run();

    },



    stopTimers() {

        clearTimeout(this.autoTimer);
        clearTimeout(this.skipTimer);
        clearTimeout(this.waitTimer);

        this.autoTimer = null;
        this.skipTimer = null;
        this.waitTimer = null;

    }

};


/* =========================================================
   STORY SCRIPT API
========================================================= */

window.defineCharacter =
    function (id, configuration) {

        let config = configuration;
        if (typeof configuration === "string") {
            config = {
                name: id.toUpperCase(),
                sprite: configuration
            };
        }

        if (!config.expressions) {
            config.expressions = {};
        }

        VN.characters[id] = config;

        // Preload base sprite
        if (config.sprite && window.VNUI && typeof VNUI.preloadImage === "function") {
            VNUI.preloadImage(config.sprite);
        }

        // Preload known expressions
        if (config.expressions && typeof config.expressions === "object") {
            Object.values(config.expressions).forEach(exprPath => {
                if (typeof exprPath === "string" && window.VNUI && typeof VNUI.preloadImage === "function") {
                    VNUI.preloadImage(exprPath);
                }
            });
        }

        window[id] =
            function (text) {

                VN.add({
                    type: "dialogue",
                    character: id,
                    text: text,
                    centered: Boolean(config.centered)
                });

            };

    };


window.defineBackground =
    function (id, path, options = {}) {

        VN.backgrounds[id] = {
            id: id,
            path: path,
            theme: options.theme || "default",
            label: options.label || id
        };

    };


window.scene =
    function (background, transition = "crossfade") {

        VN.add({
            type: "scene",
            background: background,
            transition: transition
        });

    };


window.show =
    function (character, expression = null, transition = "slide-bottom", options = {}) {

        if (expression && typeof expression === "object") {
            options = expression;
            expression = options.expression || null;
            transition = options.transition || "slide-bottom";
        }
        else if (transition && typeof transition === "object") {
            options = transition;
            transition = options.transition || "slide-bottom";
        }
        else if (
            expression
            && [
                "dissolve",
                "fade",
                "slide-left",
                "slide-right",
                "slide-bottom",
                "slide-in",
                "slide-up",
                "fade-blur",
                "blur",
                "flash",
                "glitch",
                "crossfade"
            ].includes(expression)
        ) {
            transition = expression;
            expression = null;
        }

        VN.add({
            type: "show",
            character: character,
            expression: expression,
            transition: transition,
            position: options.position || null
        });

    };


window.hide =
    function (character, transition = "dissolve") {

        VN.add({
            type: "hide",
            character: character,
            transition: transition
        });

    };


window.menu =
    function (choices) {

        VN.add({
            type: "menu",
            choices: choices
        });

    };


window.label =
    function (name, builder) {

        VN.labels[name] = builder;

    };


window.jump =
    function (name) {

        VN.add({
            type: "jump",
            label: name
        });

    };


window.ifElse =
    function (condition, thenBranch, elseBranch = null) {

        VN.add({
            type: "if",
            condition: condition,
            thenBranch: thenBranch,
            elseBranch: elseBranch
        });

    };


window.ifThen =
    function (condition, thenBranch) {

        ifElse(condition, thenBranch, null);

    };


window.wait =
    function (seconds) {

        VN.add({
            type: "wait",
            duration: seconds
        });

    };


window.pause =
    function (seconds) {

        wait(seconds);

    };


window.hpunch =
    function () {

        VN.add({
            type: "effect",
            effect: "hpunch"
        });

    };


window.flash =
    function () {

        VN.add({
            type: "effect",
            effect: "flash"
        });

    };


window.glitch =
    function () {

        VN.add({
            type: "effect",
            effect: "glitch"
        });

    };


window.playMusic =
    function (path, options = {}) {

        VN.add({
            type: "music",
            path: path,
            options: options
        });

    };


window.stopMusic =
    function (fade = 0) {

        VN.add({
            type: "stop-music",
            fade: fade
        });

    };


window.playSFX =
    function (path, options = {}) {

        VN.add({
            type: "sfx",
            path: path,
            options: options
        });

    };


window.notify =
    function (message) {

        VN.add({
            type: "notify",
            message: message
        });

    };


window.overlayText =
    function (title, body) {

        VN.add({
            type: "overlay-text",
            title: title,
            body: body
        });

    };


window.hideOverlay =
    function () {

        VN.resumeOverlay();

    };


window.hack =
    function (options = {}) {

        VN.add({
            type: "hack",
            prompt: options.prompt,
            code: options.code,
            onSuccess: options.onSuccess,
            onFail: options.onFail
        });

    };


window.comingSoon =
    function (title = "TO BE CONTINUED", subtitle = "") {

        VN.add({
            type: "coming-soon",
            title: title,
            subtitle: subtitle
        });

    };


window.exitToMenu =
    function () {

        VN.add({
            type: "exit-menu"
        });

    };


/* =========================================================
   START ENGINE
========================================================= */

window.addEventListener(
    "DOMContentLoaded",
    () => {
        VN.initialize();
    }
);
