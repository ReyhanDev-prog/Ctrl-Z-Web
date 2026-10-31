/* =========================================================
   CTRL+Z — CHARACTER DATABASE
========================================================= */

(function () {

    "use strict";


    const SPRITES =
        "../game/assets/sprites/";


    function expressions(base, list) {

        const result = {};


        list.forEach(
            expression => {

                result[expression] =
                    `${SPRITES}${base}_${expression}.png`;

            }
        );


        return result;

    }


    defineCharacter("liam", {

        name: "LIAM",
        color: "#63d8ff",
        sprite: SPRITES + "Liam.png",

        expressions: expressions(
            "Liam",
            [
                "senyum", "malu", "kaget", "pegal", "mikir",
                "marah", "sedih", "serius", "ketawa", "bingung",
                "nangis", "tidur"
            ]
        )

    });


    defineCharacter("rachel", {

        name: "RACHEL",
        color: "#ff7ac8",
        sprite: SPRITES + "Rachel.png",

        expressions: expressions(
            "Rachel",
            [
                "nyapa", "cemberut", "marah", "kaget", "senyum",
                "bingung", "ketawa", "sedih", "serius", "sombong",
                "nangis", "tidur"
            ]
        )

    });


    defineCharacter("ethan", {

        name: "ETHAN",
        color: "#ffd166",
        sprite: SPRITES + "Ethan.png",

        expressions: expressions(
            "Ethan",
            [
                "ketawa", "sedih", "kaget", "senyum", "marah",
                "sombong", "serius", "bingung", "nodong"
            ]
        )

    });


    defineCharacter("player", {

        name: "PLAYER",
        color: "#9ff7ff",
        sprite: null

    });


    defineCharacter("player_name", {

        name: "PLAYER",
        color: "#9ff7ff",
        sprite: null

    });


    defineCharacter("narrator", {

        name: "",
        color: "#7fb6c9",
        sprite: null

    });


    defineCharacter("centered", {

        name: "",
        color: "#ffffff",
        sprite: null,
        centered: true

    });


    defineCharacter("unknown", {

        name: "???",
        color: "#ff6b6b",
        sprite: null

    });


    defineCharacter("unknown_man", {

        name: "???",
        color: "#ff6b6b",
        sprite: null

    });


    defineCharacter("cafe", {

        name: "CAFE OWNER",
        color: "#ffbf69",
        sprite: null

    });


    defineCharacter("cafe_owner", {

        name: "CAFE OWNER",
        color: "#ffbf69",
        sprite: null

    });


    defineCharacter("marcuz", {

        name: "DR. MARCUZ",
        color: "#c77dff",
        sprite: null

    });


    defineCharacter("valeria", {

        name: "VALERIA",
        color: "#ff4d6d",
        sprite: null

    });


    defineCharacter("specter", {

        name: "SPECTER",
        color: "#8ecae6",
        sprite: null

    });


    defineCharacter("ava", {

        name: "AVA",
        color: "#a0e7a0",
        sprite: null

    });

})();
