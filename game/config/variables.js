/* =========================================================
   CTRL+Z — GAME STATE / VARIABLES
   Migrasi dari variables.rpy
========================================================= */

(function () {

    "use strict";


    const STATE_KEY =
        "ctrlz-vn-state";


    const clone =
        value => JSON.parse(JSON.stringify(value));


    const isPlainObject =
        value => (
            value !== null
            && typeof value === "object"
            && !Array.isArray(value)
        );


    function merge(target, source) {

        if (!isPlainObject(source)) {
            return target;
        }


        Object.keys(source).forEach(key => {

            const value =
                source[key];


            if (Array.isArray(value)) {
                target[key] = value.slice();
            }

            else if (isPlainObject(value)) {

                if (!isPlainObject(target[key])) {
                    target[key] = {};
                }

                merge(target[key], value);

            }

            else if (value !== undefined) {
                target[key] = value;
            }

        });


        return target;

    }


    function defaults() {

        return {

            persistent: {

                blocked_names: [],
                player_name: "Aku",
                player_blocked: false,
                used_codes: {},

                chronos_used_bab_3: false,
                ethan_contact: false,
                ethan_house: false,

                cg_unlocked: [false, false, false, false, false, false],
                rollback_count: false,
                last_played: false,
                player_data: false,
                player: false,
                unlocked_continue: false,

                mysterious_object: false,
                ethan_defense: false,
                exit_game: false,

                affection_unlocked: {
                    rachel: false,
                    ethan: false,
                    liam: false,
                    ava: false,
                    claire: false,
                    aria: false,
                    julian: false,
                    cain: false,
                    niko: false,
                    raksa: false,
                    rei: false,
                    syntia: false
                },

                characters: {
                    rachel: {
                        affection: 0,
                        trust: 0,
                        awareness: 20,
                        gift: false,
                        at_home: false
                    },
                    ethan: {
                        affection: 0,
                        trust: 0,
                        awareness: 50,
                        contact: false,
                        house_unlocked: false
                    },
                    liam: {
                        affection: 0,
                        trust: 0,
                        awareness: 40,
                        mansion: false
                    },
                    ava: {
                        affection: 0,
                        awareness: 90
                    },
                    marcuz: {
                        affection: 0,
                        awareness: 0
                    }
                },

                story: {
                    met: {
                        marcuz: false,
                        ethan: false,
                        specter: false
                    },
                    bab1: {
                        mysterious_object: false,
                        liam_route: null
                    },
                    bab5: {
                        trust_rachel: null,
                        trust_ethan: null,
                        trust_liam: null,
                        chronos_experiment: null,
                        break_cycle: null,
                        player_escape: null,
                        player_fight: null,
                        changed_plan: null
                    },
                    bab6: {
                        loop_awareness: null,
                        resist: null,
                        confusion: null,
                        defiant: null,
                        question: null,
                        silence: null,
                        paranoia: null,
                        identity_crisis: null,
                        escape_mind: null,
                        acceptance: null,
                        denial: null,
                        break_loop: null
                    }
                },

                unlocks: {
                    bab: {
                        prolog: true,
                        "1": false,
                        "2": false,
                        "3": false,
                        "4": false,
                        "5": false,
                        "6": false,
                        "7": false,
                        "8": false,
                        "9": false,
                        "10": false
                    },
                    characters: {},
                    cg: [false, false, false, false, false, false]
                },

                system: {
                    loop_count: 0,
                    chronos_used: 0,
                    chronos_bab3: false,
                    rollback_enabled: true,
                    rollback_count: 0,
                    exit_mid_game: false,
                    music_volume: 70,
                    sfx_volume: 80,
                    text_speed: 50
                }

            },

            temp_flags: {
                gps: false,
                idcard: false,
                apartment_rachel: true,
                met_marcuz: false,
                met_ethan: false,
                met_specter: false,
                liam_mansion: false,
                rollback_count: 0
            },

            system: {
                loop_count: 0,
                chronos_used: 0,
                chapter: 1
            },

            chapter_state: {
                current: 1,
                day: 1,
                month: 1,
                year: 2042,
                hour: 6,
                minute: 0
            }

        };

    }


    window.GameState = {

        persistent: {},
        temp_flags: {},
        system: {},
        chapter_state: {},


        reset() {

            const fresh =
                defaults();


            this.persistent =
                fresh.persistent;

            this.temp_flags =
                fresh.temp_flags;

            this.system =
                fresh.system;

            this.chapter_state =
                fresh.chapter_state;


            return this;

        },


        serialize() {

            return clone({
                persistent: this.persistent,
                temp_flags: this.temp_flags,
                system: this.system,
                chapter_state: this.chapter_state
            });

        },


        hydrate(data) {

            if (!data || typeof data !== "object") {
                return this;
            }


            /*
             * Save lama hanya berisi data karakter. Kalau objek
             * tidak memiliki section state, anggap itu persistent.
             */

            const source =
                (
                    data.persistent
                    || data.temp_flags
                    || data.system
                    || data.chapter_state
                )
                    ? data
                    : { persistent: data };


            merge(
                this.persistent,
                source.persistent
            );

            merge(
                this.temp_flags,
                source.temp_flags
            );

            merge(
                this.system,
                source.system
            );

            merge(
                this.chapter_state,
                source.chapter_state
            );


            this.ensureDefaults();


            return this;

        },


        ensureDefaults() {

            const fresh =
                defaults();


            merge(
                fresh.persistent,
                this.persistent
            );

            merge(
                fresh.temp_flags,
                this.temp_flags
            );

            merge(
                fresh.system,
                this.system
            );

            merge(
                fresh.chapter_state,
                this.chapter_state
            );


            this.persistent =
                fresh.persistent;

            this.temp_flags =
                fresh.temp_flags;

            this.system =
                fresh.system;

            this.chapter_state =
                fresh.chapter_state;


            this.persistent.unlocks.bab.prolog =
                true;


            return this;

        },


        save() {

            try {

                window.localStorage.setItem(
                    STATE_KEY,
                    JSON.stringify(this.serialize())
                );

                return true;

            }

            catch (error) {

                console.warn(
                    "GameState tidak dapat disimpan:",
                    error
                );

                return false;

            }

        },


        load() {

            try {

                const raw =
                    window.localStorage.getItem(
                        STATE_KEY
                    );


                if (raw) {
                    this.hydrate(
                        JSON.parse(raw)
                    );
                }

            }

            catch (error) {

                console.warn(
                    "GameState tidak dapat dibaca:",
                    error
                );

            }


            this.ensureDefaults();


            return this;

        }

    };


    /* =====================================================
       START
    ===================================================== */

    window.GameState.reset();

    window.GameState.load();


    /* =====================================================
       STATE HELPERS
    ===================================================== */

    window.getAffection =
        function (character) {

            const data =
                window.GameState
                    .persistent
                    .characters[character];


            return Number(
                data
                    ? data.affection
                    : 0
            );

        };


    window.hasAffection =
        function (character, minimum = 1) {

            return (
                window.getAffection(character)
                >=
                minimum
            );

        };


    window.addAffection =
        function (character, amount = 1, message = null) {

            const current =
                window.getAffection(character);


            window.VN.setState(
                `characters.${character}.affection`,
                current + amount
            );


            if (message && window.VN && window.VN.notify) {
                window.VN.notify(message);
            }


            return current + amount;

        };


    window.unlockCharacter =
        function (character) {

            const characters =
                window.GameState.persistent.characters;


            if (!characters[character]) {
                characters[character] = {
                    affection: 0,
                    trust: 0,
                    awareness: 0
                };
            }


            window.GameState.persistent
                .affection_unlocked[character] = true;


            window.GameState.save();


            if (window.VN && window.VN.notify) {
                window.VN.notify(
                    `KARAKTER BARU TERBUKA // ${String(character).toUpperCase()}`
                );
            }

        };


    window.unlockBab =
        function (chapter, silent = false) {

            const unlocks =
                window.GameState.persistent.unlocks.bab;


            unlocks[String(chapter)] =
                true;


            window.GameState.save();


            if (!silent && window.VN && window.VN.notify) {
                window.VN.notify(
                    `BAB ${chapter} TERBUKA`
                );
            }

        };


    window.isBabUnlocked =
        function (chapter) {

            return Boolean(
                window.GameState
                    .persistent
                    .unlocks
                    .bab[String(chapter)]
            );

        };

})();
