/* =========================================================
   CTRL+Z — STORY UI
========================================================= */

window.VNUI = {

    background: null,
    character: null,
    characterStage: null,

    speaker: null,
    speakerNameplate: null,

    dialogue: null,
    dialoguePanel: null,

    choicePanel: null,
    choiceList: null,

    quickMenu: null,

    dialogueCode: null,
    notification: null,
    notificationText: null,
    notificationTimer: null,

    logOverlay: null,
    logList: null,

    settingsScreen: null,

    container: null,

    introOverlay: null,
    comingSoonOverlay: null,
    hackModal: null,

    currentSpeaker: "",

    hack: {
        code: "",
        onSuccess: null,
        onFail: null
    },


    /* =====================================================
       THEME FALLBACK
    ===================================================== */

    THEMES: {

        black:
            "radial-gradient(circle at 50% 45%, rgba(14, 28, 40, 0.35), transparent 60%), linear-gradient(180deg, #000 0%, #01040a 100%)",

        "default":
            "radial-gradient(circle at 72% 18%, rgba(20, 80, 120, 0.5), transparent 45%), linear-gradient(160deg, #061626, #01040a 60%, #000)",

        classroom:
            "radial-gradient(circle at 30% 10%, rgba(120, 170, 190, 0.4), transparent 45%), linear-gradient(170deg, #173647, #08131c 65%, #02070c)",

        school:
            "radial-gradient(circle at 20% 10%, rgba(100, 160, 180, 0.35), transparent 50%), linear-gradient(170deg, #142e3b, #071019 70%, #01050a)",

        cafe:
            "radial-gradient(circle at 70% 20%, rgba(190, 120, 60, 0.35), transparent 45%), linear-gradient(160deg, #2a1a12, #0d0b0c 65%, #030405)",

        warm:
            "radial-gradient(circle at 35% 15%, rgba(220, 160, 90, 0.35), transparent 48%), linear-gradient(160deg, #2b1d13, #100d0c 70%, #050403)",

        day:
            "radial-gradient(circle at 70% 5%, rgba(80, 170, 220, 0.5), transparent 55%), linear-gradient(180deg, #1a4d6e, #0a2033 60%, #030a12)",

        cloudy:
            "radial-gradient(circle at 50% 0%, rgba(120, 150, 170, 0.35), transparent 55%), linear-gradient(180deg, #293a44, #101920 65%, #04070a)",

        evening:
            "radial-gradient(circle at 70% 20%, rgba(240, 130, 70, 0.35), transparent 50%), linear-gradient(180deg, #3a1f2a, #140c17 65%, #040306)",

        night:
            "radial-gradient(circle at 72% 12%, rgba(70, 120, 210, 0.35), transparent 50%), linear-gradient(180deg, #071229, #02060f 65%, #000)",

        room:
            "radial-gradient(circle at 30% 20%, rgba(120, 90, 70, 0.28), transparent 50%), linear-gradient(160deg, #1b1613, #0a0908 70%, #030202)",

        city:
            "radial-gradient(circle at 68% 18%, rgba(70, 130, 220, 0.4), transparent 52%), linear-gradient(180deg, #0a1a33, #030814 65%, #000)",

        rain:
            "repeating-linear-gradient(105deg, transparent 0 18px, rgba(150, 190, 220, 0.06) 19px, transparent 20px), radial-gradient(circle at 60% 10%, rgba(70, 110, 150, 0.35), transparent 50%), linear-gradient(180deg, #101c29, #050a10 70%, #000)",

        train:
            "radial-gradient(circle at 50% 10%, rgba(120, 170, 210, 0.3), transparent 50%), linear-gradient(180deg, #12202b, #060b10 70%, #000)",

        dark:
            "radial-gradient(circle at 50% 40%, rgba(30, 60, 90, 0.25), transparent 55%), linear-gradient(180deg, #05090e, #010204 100%)",

        tech:
            "repeating-linear-gradient(0deg, transparent 0 38px, rgba(60, 180, 220, 0.05) 39px, transparent 40px), radial-gradient(circle at 70% 20%, rgba(30, 150, 220, 0.35), transparent 50%), linear-gradient(170deg, #04202f, #010912 70%, #000)",

        terminal:
            "repeating-linear-gradient(0deg, transparent 0 26px, rgba(40, 255, 150, 0.06) 27px, transparent 28px), radial-gradient(circle at 50% 30%, rgba(20, 120, 80, 0.3), transparent 55%), linear-gradient(180deg, #02110c, #000503 100%)",

        interrogation:
            "radial-gradient(circle at 50% 30%, rgba(160, 140, 110, 0.2), transparent 55%), linear-gradient(180deg, #171410, #060504 100%)",

        danger:
            "radial-gradient(circle at 50% 35%, rgba(180, 40, 50, 0.35), transparent 55%), linear-gradient(170deg, #24070b, #080102 70%, #000)",

        glitch:
            "repeating-linear-gradient(90deg, rgba(255, 0, 80, 0.06) 0 3px, transparent 4px 18px), radial-gradient(circle at 50% 40%, rgba(120, 40, 160, 0.35), transparent 55%), linear-gradient(180deg, #120423, #020108 100%)",

        house:
            "radial-gradient(circle at 30% 20%, rgba(150, 110, 80, 0.25), transparent 50%), linear-gradient(170deg, #211812, #0c0907 70%, #020202)",

        luxury:
            "radial-gradient(circle at 65% 15%, rgba(210, 180, 120, 0.28), transparent 50%), linear-gradient(170deg, #241f14, #0d0b06 70%, #030302)",

        cg:
            "radial-gradient(circle at 50% 20%, rgba(80, 140, 180, 0.35), transparent 55%), linear-gradient(170deg, #0a1b29, #02060b 100%)",

        memory:
            "radial-gradient(circle at 50% 45%, rgba(150, 150, 150, 0.25), transparent 55%), linear-gradient(170deg, #171717, #050505 100%)",

        park:
            "radial-gradient(circle at 30% 10%, rgba(90, 160, 110, 0.3), transparent 50%), linear-gradient(170deg, #10261b, #04100a 70%, #000)",

        nature:
            "radial-gradient(circle at 35% 10%, rgba(100, 170, 110, 0.3), transparent 50%), linear-gradient(170deg, #0e2415, #030b06 70%, #000)"

    },


    /* =====================================================
       INITIALIZATION
    ===================================================== */

    initialize() {

        this.container =
            document.getElementById("game-container");

        this.background =
            document.querySelector(".scene-background");

        this.character =
            document.querySelector(".character-sprite");

        this.characterStage =
            document.querySelector(".character-stage");

        this.speaker =
            document.getElementById("speaker-name");

        this.speakerNameplate =
            document.querySelector(".speaker-nameplate");

        this.dialogue =
            document.getElementById("dialogue-text");

        this.dialoguePanel =
            document.querySelector(".dialogue-panel");

        this.choicePanel =
            document.getElementById("choice-panel");

        this.choiceList =
            document.getElementById("choice-list");

        this.quickMenu =
            document.querySelector(".quick-menu");

        this.dialogueCode =
            document.getElementById("dialogue-code");

        this.notification =
            document.getElementById("system-notification");

        this.notificationText =
            document.getElementById("notification-text");

        this.logOverlay =
            document.getElementById("log-overlay");

        this.logList =
            document.getElementById("log-list");

        this.settingsScreen =
            document.getElementById("settings-screen");

        this.introOverlay =
            document.getElementById("intro-overlay");

        this.comingSoonOverlay =
            document.getElementById("coming-soon-overlay");

        this.hackModal =
            document.getElementById("hack-modal");

        this.continueIndicator =
            document.getElementById("continue-indicator");

        this.storyInterface =
            document.getElementById("story-interface");

        this._imageCache = {};
        this._typewriterInterval = null;
        this._typewriterFinish = null;
        this.isTyping = false;

        this.initializeQuickMenu();
        this.initializeOverlays();
        this.initializeSettings();
        this.initializeViewportFallback();
        this.initializeEffects();

        if (this.storyInterface) {
            this.storyInterface.classList.remove("dialogue-box-enter");
            void this.storyInterface.offsetWidth;
            this.storyInterface.classList.add("dialogue-box-enter");
        }

    },


    /* =====================================================
       VIEWPORT FALLBACK
    ===================================================== */

    initializeViewportFallback() {

        if (!this.container) {
            return;
        }


        const supported =
            window.CSS
            && CSS.supports
            && CSS.supports(
                "transform",
                "scale(tan(atan2(1px, 1px)))"
            );


        if (supported) {
            return;
        }


        const fit =
            () => {

                const scale =
                    Math.min(
                        window.innerWidth / 1920,
                        window.innerHeight / 1080
                    );


                this.container.style.transform =
                    `translate(-50%, -50%) scale(${scale})`;

            };


        window.addEventListener("resize", fit);

        fit();

    },


    /* =====================================================
       EFFECTS
    ===================================================== */

    initializeEffects() {

        this.flashElement =
            document.getElementById("fx-flash");

        this.glitchElement =
            document.getElementById("fx-glitch");

    },


    hpunch() {

        if (!this.container) {
            return;
        }


        this.container.classList.remove("fx-hpunch");

        void this.container.offsetWidth;

        this.container.classList.add("fx-hpunch");

        clearTimeout(this.hpunchTimer);

        this.hpunchTimer =
            window.setTimeout(
                () => this.container.classList.remove("fx-hpunch"),
                480
            );

    },


    flash() {

        if (!this.flashElement) {
            return;
        }


        this.flashElement.classList.remove("active");

        void this.flashElement.offsetWidth;

        this.flashElement.classList.add("active");

        clearTimeout(this.flashTimer);

        this.flashTimer =
            window.setTimeout(
                () => this.flashElement.classList.remove("active"),
                520
            );

    },


    glitch(duration = 700) {

        if (!this.glitchElement) {
            return;
        }


        this.glitchElement.classList.add("active");

        if (this.container) {
            this.container.classList.add("fx-glitch");
        }

        clearTimeout(this.glitchTimer);

        this.glitchTimer =
            window.setTimeout(
                () => {

                    this.glitchElement.classList.remove("active");

                    if (this.container) {
                        this.container.classList.remove("fx-glitch");
                    }

                },
                duration
            );

    },


    /* =====================================================
       RESET
    ===================================================== */

    resetView() {

        this.stopTypewriter();
        this.showContinueIndicator(false);
        this.closeLog();
        this.closeSettings();
        this.hideIntro();
        this.hideComingSoon();
        this.closeHack();
        this.clearChoices();


        if (this.dialogue) {
            this.dialogue.textContent = "";
        }

        if (this.dialoguePanel) {
            this.dialoguePanel.classList.remove("centered");
        }

        if (this.speaker) {
            this.speaker.textContent = "";
        }

        if (this.speakerNameplate) {
            this.speakerNameplate.classList.add("nameplate-hidden");
        }

        if (this.character) {
            this.character.style.display = "none";
            this.character.removeAttribute("src");
        }

    },


    /* =====================================================
       QUICK MENU
    ===================================================== */

    initializeQuickMenu() {

        document
            .querySelectorAll(".quick-button")
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        event => {

                            event.preventDefault();
                            event.stopPropagation();

                            const action =
                                (button.dataset.action || "")
                                    .toLowerCase();


                            this.runQuickAction(
                                action,
                                button
                            );

                        }
                    );

                }
            );

    },


    runQuickAction(action, button) {

        switch (action) {


            case "log":

                this.openLog();
                break;


            case "auto":

                VN.toggleAuto();

                if (button) {
                    button.classList.toggle(
                        "active",
                        VN.autoMode
                    );
                }

                this.showNotification(
                    VN.autoMode
                        ? "AUTO MODE ENABLED"
                        : "AUTO MODE DISABLED"
                );

                break;


            case "skip":

                VN.toggleSkip();

                if (button) {
                    button.classList.toggle(
                        "active",
                        VN.skipMode
                    );
                }

                this.showNotification(
                    VN.skipMode
                        ? "SKIP MODE ENABLED"
                        : "SKIP MODE DISABLED"
                );

                break;


            case "save":

                this.showNotification(
                    VN.saveGame()
                        ? "GAME SAVED"
                        : "SAVE FAILED"
                );

                break;


            case "load":

                if (!window.VNSave || !VNSave.exists()) {

                    this.showNotification(
                        "NO SAVE DATA"
                    );

                    break;

                }


                this.showNotification(
                    VN.loadGame()
                        ? "GAME LOADED"
                        : "LOAD FAILED"
                );

                break;


            case "rollback":

                VN.rollback();
                break;


            case "menu":

                this.showNotification(
                    "RETURNING TO MENU"
                );

                window.setTimeout(
                    () => window.location.assign("../index.html"),
                    250
                );

                break;


            case "config":

                this.openSettings();
                break;


            default:

                console.warn(
                    `Quick-menu action tidak dikenal: ${action}`
                );

        }

    },


    /* =====================================================
       OVERLAYS
    ===================================================== */

    initializeOverlays() {

        const closeLogButton =
            document.getElementById("close-log-button");


        if (closeLogButton) {

            closeLogButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();

                    this.closeLog();

                }
            );

        }


        const rollbackButton =
            document.getElementById("log-rollback-button");


        if (rollbackButton) {

            rollbackButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();

                    this.closeLog();

                    VN.rollback();

                }
            );

        }


        if (this.logOverlay) {

            this.logOverlay.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    if (event.target === this.logOverlay) {
                        this.closeLog();
                    }

                }
            );

        }


        if (this.settingsScreen) {

            this.settingsScreen.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    if (event.target === this.settingsScreen) {
                        this.closeSettings();
                    }

                }
            );


            this.settingsScreen
                .querySelectorAll("[data-close-settings]")
                .forEach(
                    button => {

                        button.addEventListener(
                            "click",
                            event => {

                                event.preventDefault();
                                event.stopPropagation();

                                this.closeSettings();

                            }
                        );

                    }
                );

        }


        const introButton =
            document.getElementById("intro-continue");


        if (introButton) {

            introButton.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();

                    VN.resumeOverlay();

                }
            );

        }


        const menuButton =
            document.getElementById("coming-soon-menu");


        if (menuButton) {

            menuButton.addEventListener(
                "click",
                () => window.location.assign("../index.html")
            );

        }


        const replayButton =
            document.getElementById("coming-soon-replay");


        if (replayButton) {

            replayButton.addEventListener(
                "click",
                () => window.location.reload()
            );

        }


        this.initializeHackModal();


        document.addEventListener(
            "keydown",
            event => {

                if (!this.isOverlayOpen()) {
                    return;
                }


                if (
                    event.target instanceof Element
                    && event.target.closest(
                        "#log-overlay, #settings-screen, #intro-overlay, " +
                        "#coming-soon-overlay, #hack-modal"
                    )
                ) {
                    return;
                }


                if (
                    event.code === "Space"
                    || event.code === "Enter"
                ) {

                    event.preventDefault();
                    event.stopPropagation();

                }

                else if (event.key === "Escape") {

                    event.preventDefault();

                    if (this.hackModal && this.hackModal.classList.contains("active")) {
                        return;
                    }

                    this.closeOverlays();

                }

            },
            true
        );

    },


    initializeHackModal() {

        if (!this.hackModal) {
            return;
        }


        const input =
            document.getElementById("hack-input");

        const submit =
            document.getElementById("hack-submit");

        const abort =
            document.getElementById("hack-abort");


        const attempt =
            () => {

                if (!input) {
                    return;
                }


                const value =
                    input.value.trim();


                if (value === this.hack.code) {

                    this.setHackFeedback(
                        ">>> ACCESS GRANTED <<<",
                        "success"
                    );

                    const callback =
                        this.hack.onSuccess;

                    this.hack.onSuccess = null;

                    if (typeof callback === "function") {
                        callback();
                    }

                    return;

                }


                this.setHackFeedback(
                    ">>> ACCESS DENIED — KODE SALAH <<<",
                    "error"
                );

                this.hpunch();

                if (typeof this.hack.onFail === "function") {
                    this.hack.onFail();
                }

                input.value = "";
                input.focus();

            };


        if (submit) {

            submit.addEventListener(
                "click",
                event => {

                    event.preventDefault();
                    event.stopPropagation();

                    attempt();

                }
            );

        }


        if (input) {

            input.addEventListener(
                "keydown",
                event => {

                    event.stopPropagation();

                    if (event.key === "Enter") {

                        event.preventDefault();

                        attempt();

                    }

                }
            );

        }


        if (abort) {

            abort.addEventListener(
                "click",
                () => {

                    this.closeHack();

                    window.location.assign("../index.html");

                }
            );

        }

    },


    isOverlayOpen() {

        return Boolean(
            (this.logOverlay && this.logOverlay.classList.contains("active"))
            || (this.settingsScreen && this.settingsScreen.classList.contains("active"))
            || (this.introOverlay && this.introOverlay.classList.contains("active"))
            || (this.comingSoonOverlay && this.comingSoonOverlay.classList.contains("active"))
            || (this.hackModal && this.hackModal.classList.contains("active"))
        );

    },


    closeOverlays() {

        this.closeLog();
        this.closeSettings();
        this.hideIntro();
        this.hideComingSoon();
        this.closeHack();

    },


    openLog() {

        if (!this.logOverlay) {
            return;
        }


        this.closeSettings();
        this.renderLog();

        this.logOverlay.classList.add("active");
        this.logOverlay.setAttribute("aria-hidden", "false");


        if (this.logList) {
            this.logList.scrollTop =
                this.logList.scrollHeight;
        }

    },


    closeLog() {

        if (!this.logOverlay) {
            return;
        }


        this.logOverlay.classList.remove("active");
        this.logOverlay.setAttribute("aria-hidden", "true");

    },


    openSettings() {

        if (!this.settingsScreen) {
            return;
        }


        this.closeLog();

        this.settingsScreen.classList.add("active");
        this.settingsScreen.setAttribute("aria-hidden", "false");

    },


    closeSettings() {

        if (!this.settingsScreen) {
            return;
        }


        this.settingsScreen.classList.remove("active");
        this.settingsScreen.setAttribute("aria-hidden", "true");

    },


    /* =====================================================
       INTRO / COMING SOON / HACK
    ===================================================== */

    showIntro(title, body) {

        if (!this.introOverlay) {
            return;
        }


        const titleElement =
            document.getElementById("intro-title");

        const bodyElement =
            document.getElementById("intro-body");


        if (titleElement) {
            titleElement.textContent = title || "HOW TO PLAY";
        }

        if (bodyElement) {
            bodyElement.innerHTML =
                this.formatText(body || "");
        }


        this.introOverlay.classList.add("active");
        this.introOverlay.setAttribute("aria-hidden", "false");

    },


    hideIntro() {

        if (!this.introOverlay) {
            return;
        }


        this.introOverlay.classList.remove("active");
        this.introOverlay.setAttribute("aria-hidden", "true");

    },


    showComingSoon(title, subtitle) {

        if (!this.comingSoonOverlay) {
            return;
        }


        const titleElement =
            document.getElementById("coming-soon-title");

        const subtitleElement =
            document.getElementById("coming-soon-subtitle");


        if (titleElement) {

            titleElement.textContent =
                title || "TO BE CONTINUED";

            titleElement.dataset.text =
                title || "TO BE CONTINUED";

        }

        if (subtitleElement) {
            subtitleElement.textContent =
                subtitle || "SIGNAL // END OF TRANSMISSION";
        }


        this.comingSoonOverlay.classList.add("active");
        this.comingSoonOverlay.setAttribute("aria-hidden", "false");

    },


    hideComingSoon() {

        if (!this.comingSoonOverlay) {
            return;
        }


        this.comingSoonOverlay.classList.remove("active");
        this.comingSoonOverlay.setAttribute("aria-hidden", "true");

    },


    openHack(options) {

        if (!this.hackModal) {
            return;
        }


        this.hack.code =
            options.code || "";

        this.hack.onSuccess =
            options.onSuccess || null;

        this.hack.onFail =
            options.onFail || null;


        const prompt =
            document.getElementById("hack-prompt");

        const code =
            document.getElementById("hack-code");

        const input =
            document.getElementById("hack-input");


        if (prompt) {
            prompt.textContent =
                options.prompt || ">> MASUKKAN KODE OTORISASI:";
        }

        if (code) {
            code.textContent =
                this.hack.code;
        }

        if (input) {
            input.value = "";
        }


        this.setHackFeedback(
            "// SISTEM MENUNGGU OTORISASI",
            "idle"
        );


        this.hackModal.classList.add("active");
        this.hackModal.setAttribute("aria-hidden", "false");


        if (input) {

            window.setTimeout(
                () => input.focus(),
                60
            );

        }

    },


    closeHack() {

        if (!this.hackModal) {
            return;
        }


        this.hackModal.classList.remove("active");
        this.hackModal.setAttribute("aria-hidden", "true");

        this.hack.onSuccess = null;
        this.hack.onFail = null;

    },


    setHackFeedback(message, state = "idle") {

        const feedback =
            document.getElementById("hack-feedback");


        if (!feedback) {
            return;
        }


        feedback.textContent = message;
        feedback.dataset.state = state;

    },


    /* =====================================================
       HISTORY / LOG
    ===================================================== */

    renderLog() {

        if (!this.logList) {
            return;
        }


        this.logList.replaceChildren();


        const entries =
            Array.isArray(VN.dialogueLog)
                ? VN.dialogueLog
                : [];


        if (!entries.length) {

            const empty =
                document.createElement("p");

            empty.className = "log-empty";
            empty.textContent = "NO DIALOGUE RECORDED YET";

            this.logList.appendChild(empty);

            return;

        }


        entries.forEach(
            entry => {

                const item =
                    document.createElement("article");

                item.className = "log-entry";


                const meta =
                    document.createElement("div");

                meta.className = "log-meta";


                const number =
                    document.createElement("span");

                number.className = "log-number";
                number.textContent =
                    `#${String(entry.number || 0).padStart(4, "0")}`;


                const speaker =
                    document.createElement("span");

                speaker.className = "log-speaker";
                speaker.textContent =
                    entry.speaker || "NARRATOR";


                meta.append(number, speaker);


                const text =
                    document.createElement("p");

                text.className = "log-text";
                text.textContent =
                    entry.text || "";


                item.append(meta, text);

                this.logList.appendChild(item);

            }
        );


        this.logList.scrollTop =
            this.logList.scrollHeight;

    },


    /* =====================================================
       SETTINGS
    ===================================================== */

    initializeSettings() {

        const music =
            document.getElementById("music-volume");

        const sound =
            document.getElementById("sound-volume");

        const speed =
            document.getElementById("text-speed");


        /*
         * Pasang nilai tersimpan SEBELUM memasang listener agar
         * slider tidak menimpa state dengan nilai default HTML.
         */

        if (music) {
            music.value =
                GameState.persistent.system.music_volume;
        }

        if (sound) {
            sound.value =
                GameState.persistent.system.sfx_volume;
        }

        if (speed) {
            speed.value =
                GameState.persistent.system.text_speed;
        }


        const bind =
            (slider, outputID, onChange) => {

                if (!slider) {
                    return;
                }


                const output =
                    document.getElementById(outputID);


                const update =
                    (commit = false) => {

                        if (output) {
                            output.textContent =
                                `${slider.value}%`;
                        }

                        if (
                            commit
                            && typeof onChange === "function"
                        ) {
                            onChange(Number(slider.value));
                        }

                    };


                slider.addEventListener(
                    "input",
                    () => update(false)
                );

                slider.addEventListener(
                    "change",
                    () => update(true)
                );

                update(false);

            };


        bind(
            music,
            "music-output",
            value => VN.setMusicVolume(value)
        );

        bind(
            sound,
            "sound-output",
            value => VN.setSFXVolume(value)
        );

        bind(
            speed,
            "speed-output",
            value => VN.setState(
                "persistent.system.text_speed",
                value
            )
        );

    },


    /* =====================================================
       NOTIFICATION
    ===================================================== */

    showNotification(message) {

        if (!this.notification || !this.notificationText) {
            return;
        }

        this.notificationText.textContent =
            message;

        this.notification.classList.remove("show");
        void this.notification.offsetWidth;
        this.notification.classList.add("show");

        clearTimeout(this.notificationTimer);

        this.notificationTimer =
            window.setTimeout(
                () => this.notification.classList.remove("show"),
                2400
            );

    },


    /* =====================================================
       PRELOAD & ASSET DYNAMICS
    ===================================================== */

    preloadImage(path, fallbackPath = null) {

        if (!path) {
            return Promise.resolve(fallbackPath || "");
        }

        if (this._imageCache && this._imageCache[path]) {
            return Promise.resolve(this._imageCache[path]);
        }

        if (!this._imageCache) {
            this._imageCache = {};
        }

        return new Promise(resolve => {

            const img = new Image();

            img.onload = () => {
                this._imageCache[path] = path;
                resolve(path);
            };

            img.onerror = () => {

                let altPath = null;
                if (path.includes("../game/assets/")) {
                    altPath = path.replace("../game/assets/", "../assets/");
                } else if (path.includes("../assets/")) {
                    altPath = path.replace("../assets/", "../game/assets/");
                }

                if (altPath && altPath !== path) {
                    const altImg = new Image();
                    altImg.onload = () => {
                        this._imageCache[path] = altPath;
                        resolve(altPath);
                    };
                    altImg.onerror = () => {
                        resolve(fallbackPath || path);
                    };
                    altImg.src = altPath;
                } else {
                    resolve(fallbackPath || path);
                }

            };

            img.src = path;

        });

    },


    /* =====================================================
       SCENE
    ===================================================== */

    setBackground(data) {

        const definition =
            typeof data === "string"
                ? { path: data, theme: "default" }
                : (data || {});


        const layer =
            this.THEMES[definition.theme]
            || this.THEMES.default;


        const layers =
            definition.path
                ? [`url("${definition.path}")`, layer]
                : [layer];


        if (this.background) {

            this.background.style.backgroundImage =
                layers.join(", ");

            this.background.style.backgroundSize =
                definition.path
                    ? "cover, cover"
                    : "cover";

            this.background.style.backgroundPosition =
                "center center";

            this.background.dataset.scene =
                definition.id
                || definition.label
                || "";

            this.background.classList.toggle(
                "has-image",
                Boolean(definition.path)
            );

        }

    },


    async setCharacter(path, options = {}) {

        if (!this.character) {
            return;
        }

        if (!path) {
            this.character.style.display = "none";
            this.character.removeAttribute("src");
            this.character.dataset.expression = "";
            return;
        }

        const image = this.character;
        const base = options.baseSprite || path;

        image.dataset.expression = options.expression || "";
        image.dataset.character = options.character || "";

        image.classList.remove(
            "position-left",
            "position-center",
            "position-right"
        );

        if (options.position) {
            const position = String(options.position).toLowerCase();
            if (position.includes("left")) {
                image.classList.add("position-left");
            } else if (position.includes("right")) {
                image.classList.add("position-right");
            } else {
                image.classList.add("position-center");
            }
        }

        // Preload to eliminate flicker
        const resolvedPath = await this.preloadImage(path, base);

        image.onerror = () => {
            if (image.dataset.fallbackApplied === "1") {
                image.style.display = "none";
                return;
            }
            image.dataset.fallbackApplied = "1";
            if (base && base !== image.getAttribute("src")) {
                image.src = base;
            } else {
                image.style.display = "none";
            }
        };

        image.dataset.fallbackApplied = "0";
        image.style.display = "block";
        image.src = resolvedPath || path;

    },


    setSpeaker(name, character) {

        this.currentSpeaker =
            name || "";


        if (this.speaker) {

            this.speaker.textContent =
                this.currentSpeaker;

            if (character && character.color) {
                this.speaker.style.color =
                    character.color;
            }

        }


        if (this.speakerNameplate) {

            this.speakerNameplate.classList.toggle(
                "nameplate-hidden",
                !this.currentSpeaker
            );

        }

    },


    showContinueIndicator(show = true) {

        if (this.continueIndicator) {
            this.continueIndicator.classList.toggle("active", Boolean(show));
        }

    },


    setDialogue(text, options = {}) {

        if (!this.dialogue) {
            return;
        }

        this.stopTypewriter();

        this.dialogue.innerHTML =
            this.formatText(text);


        if (this.dialoguePanel) {

            this.dialoguePanel.classList.toggle(
                "centered",
                Boolean(options.centered)
            );

        }

    },


    typeDialogue(text, options = {}, onComplete = null) {

        if (!this.dialogue) {
            if (typeof onComplete === "function") {
                onComplete();
            }
            return;
        }

        this.stopTypewriter();
        this.showContinueIndicator(false);

        const formatted = this.formatText(text);
        this.dialogue.innerHTML = formatted;

        if (this.dialoguePanel) {
            this.dialoguePanel.classList.toggle(
                "centered",
                Boolean(options.centered)
            );
        }

        // Collect text nodes to reveal characters while preserving HTML tags intact
        const textNodes = [];
        const walker = document.createTreeWalker(
            this.dialogue,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let n;
        while ((n = walker.nextNode())) {
            textNodes.push(n);
        }

        const nodeData = textNodes.map(node => {
            const str = node.nodeValue || "";
            node.nodeValue = "";
            return {
                node: node,
                fullText: str,
                length: str.length
            };
        });

        const totalLength = nodeData.reduce((sum, item) => sum + item.length, 0);

        if (totalLength === 0) {
            this.isTyping = false;
            this.showContinueIndicator(true);
            if (typeof onComplete === "function") {
                onComplete();
            }
            return;
        }

        this.isTyping = true;
        let currentCharCount = 0;
        const speed = Math.max(8, options.speed || 24);

        const finish = () => {
            this.stopTypewriter();
            nodeData.forEach(item => {
                item.node.nodeValue = item.fullText;
            });
            this.isTyping = false;
            this.showContinueIndicator(true);
            if (typeof onComplete === "function") {
                onComplete();
            }
        };

        this._typewriterFinish = finish;

        this._typewriterInterval = setInterval(() => {
            currentCharCount++;

            let remaining = currentCharCount;
            for (let i = 0; i < nodeData.length; i++) {
                const item = nodeData[i];
                if (remaining <= 0) {
                    item.node.nodeValue = "";
                } else if (remaining >= item.length) {
                    item.node.nodeValue = item.fullText;
                    remaining -= item.length;
                } else {
                    item.node.nodeValue = item.fullText.slice(0, remaining);
                    remaining = 0;
                }
            }

            if (currentCharCount >= totalLength) {
                finish();
            }
        }, speed);

    },


    stopTypewriter() {

        if (this._typewriterInterval) {
            clearInterval(this._typewriterInterval);
            this._typewriterInterval = null;
        }

    },


    skipTypewriter() {

        if (typeof this._typewriterFinish === "function") {
            const fn = this._typewriterFinish;
            this._typewriterFinish = null;
            fn();
        }

    },


    updateLog(number) {

        if (!this.dialogueCode) {
            return;
        }


        this.dialogueCode.textContent =
            `LOG // ${String(number).padStart(4, "0")}`;

    },


    /* =====================================================
       TEXT FORMATTING
    ===================================================== */

    escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");

    },


    playerName() {

        return (
            GameState
            && GameState.persistent
            && GameState.persistent.player_name
        )
            || "Aku";

    },


    cleanText(text) {

        return String(text || "")
            .replace(/\[player_name\]/g, this.playerName())
            .replace(/\{[^}]*\}/g, "")
            .replace(/\s+/g, " ")
            .trim();

    },


    formatText(text) {

        let value =
            this.escapeHTML(
                String(text || "")
                    .replace(/\[player_name\]/g, this.playerName())
            );


        /* Ren'Py control tags yang tidak perlu ditampilkan. */

        value = value
            .replace(/\{w=[^}]*\}/g, "")
            .replace(/\{nw\}/g, "")
            .replace(/\{cps=[^}]*\}/g, "")
            .replace(/\{\/cps\}/g, "")
            .replace(/\{fast\}/g, "")
            .replace(/\{nw\}/g, "");


        /* Tag format dasar. */

        value = value
            .replace(/\{b\}([\s\S]*?)\{\/b\}/g, "<strong>$1</strong>")
            .replace(/\{i\}([\s\S]*?)\{\/i\}/g, "<em>$1</em>")
            .replace(/\{u\}([\s\S]*?)\{\/u\}/g, "<u>$1</u>");


        value = value.replace(
            /\{color=(#[0-9a-fA-F]{3,8})\}([\s\S]*?)\{\/color\}/g,
            '<span style="color:$1">$2</span>'
        );


        value = value.replace(
            /\{size=(\d+)\}([\s\S]*?)\{\/size\}/g,
            (match, size, content) => {

                const numeric =
                    Number(size);


                const scale =
                    Math.max(
                        0.75,
                        Math.min(1.7, numeric / 32)
                    );


                return `<span style="font-size:${scale}em">${content}</span>`;

            }
        );


        value = value.replace(
            /\n/g,
            "<br>"
        );


        return value;

    },


    /* =====================================================
       CHOICES
    ===================================================== */

    suppressQuickMenu() {

        if (this.quickMenu) {
            this.quickMenu.classList.add("is-suppressed");
            this.quickMenu.setAttribute("aria-hidden", "true");
        }


        if (this.container) {
            this.container.classList.add("choices-open");
        }

    },


    restoreQuickMenu() {

        if (this.quickMenu) {
            this.quickMenu.classList.remove("is-suppressed");
            this.quickMenu.removeAttribute("aria-hidden");
        }


        if (this.container) {
            this.container.classList.remove("choices-open");
        }

    },


    clearChoices() {

        if (this.choiceList) {
            this.choiceList.replaceChildren();
        }


        if (this.choicePanel) {

            this.choicePanel.hidden = true;

            this.choicePanel.classList.remove("is-visible");
            this.choicePanel.classList.add("hidden");

            this.choicePanel.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        this.restoreQuickMenu();

    },


    showChoices(choices, onSelect) {

        if (!this.choicePanel || !this.choiceList) {
            console.error("Choice UI tidak ditemukan.");
            return;
        }


        const visible =
            (choices || []).filter(
                choice => {

                    if (typeof choice.condition !== "function") {
                        return true;
                    }


                    try {
                        return Boolean(choice.condition());
                    }

                    catch (error) {

                        console.warn(
                            "Kondisi pilihan gagal:",
                            error
                        );

                        return false;

                    }

                }
            );


        this.choiceList.replaceChildren();


        if (!visible.length) {

            const empty =
                document.createElement("p");

            empty.className = "choice-empty";
            empty.textContent =
                "TIDAK ADA PILIHAN YANG TERSEDIA";

            this.choiceList.appendChild(empty);

            this.choicePanel.hidden = false;
            this.choicePanel.classList.remove("hidden");
            this.choicePanel.classList.add("is-visible");
            this.choicePanel.setAttribute("aria-hidden", "false");

            this.suppressQuickMenu();

            this.showNotification(
                "NO AVAILABLE OPTIONS"
            );

            return;

        }


        visible.forEach(
            (choice, index) => {

                const button =
                    document.createElement("button");

                button.type = "button";
                button.className = "choice-button";
                button.style.animationDelay = `${index * 80 + 50}ms`;

                button.addEventListener(
                    "animationend",
                    () => {
                        button.style.animation = "none";
                    },
                    { once: true }
                );

                const text =
                    document.createElement("span");

                text.className = "choice-text";
                text.textContent =
                    choice.text || "";

                const arrow =
                    document.createElement("span");

                arrow.className = "choice-arrow";
                arrow.textContent = "≫";

                button.append(text, arrow);

                button.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();
                        event.stopPropagation();

                        this.clearChoices();

                        if (typeof onSelect === "function") {
                            onSelect(choice);
                        }

                    }
                );

                this.choiceList.appendChild(button);

            }
        );


        this.choicePanel.hidden = false;
        this.choicePanel.removeAttribute("hidden");
        this.choicePanel.classList.remove("hidden");
        this.choicePanel.classList.add("is-visible");
        this.choicePanel.setAttribute("aria-hidden", "false");

        this.suppressQuickMenu();


        const first =
            this.choiceList.querySelector(".choice-button");


        if (first) {

            window.setTimeout(
                () => first.focus(),
                40
            );

        }

    }

};
