"use strict";


/* ========================================================= */
/* CLOCK */
/* ========================================================= */

const clockElement =
    document.getElementById("clock");


const dayElement =
    document.getElementById("day");


const dateElement =
    document.getElementById("date");


function updateClock() {

    const currentDate =
        new Date();


    const time =

        currentDate
            .toLocaleTimeString(
                "en-GB",
                {
                    hour12: false
                }
            );


    const day =

        currentDate
            .toLocaleDateString(
                "en-US",
                {
                    weekday: "long"
                }
            )
            .toUpperCase();


    const date =

        currentDate
            .toLocaleDateString(
                "en-US",
                {
                    day: "2-digit",

                    month: "long",

                    year: "numeric"
                }
            )
            .toUpperCase();


    clockElement.textContent =
        time;


    dayElement.textContent =
        day;


    dateElement.textContent =
        date;

}


updateClock();


setInterval(
    updateClock,
    1000
);


/* ========================================================= */
/* SYSTEM MESSAGE */
/* ========================================================= */

const messagePanel =

    document
        .getElementById(
            "system-message"
        );


const messageText =

    document
        .getElementById(
            "message-text"
        );


let messageTimer;


function showMessage(message) {

    clearTimeout(
        messageTimer
    );


    messageText.textContent =
        message;


    messagePanel
        .classList
        .add("show");


    messageTimer =

        setTimeout(
            () => {

                messagePanel
                    .classList
                    .remove("show");

            },

            2200
        );

}


/* ========================================================= */
/* MENU ACTIONS */
/* ========================================================= */

const menuActions = {

    start:

        "INITIALIZING NEW TIMELINE...",


    continue:

        "SEARCHING FOR TIMELINE DATA...",


    chapter:

        "OPENING CHAPTER DATABASE...",


    character:

        "ACCESSING CHARACTER FILES...",


    achievement:

        "LOADING ACHIEVEMENT LOG...",


    settings:

        "OPENING SYSTEM SETTINGS...",


    exit:

        "TERMINATION REQUEST RECEIVED..."

};


const buttons =

    document
        .querySelectorAll(
            ".menu-button"
        );


buttons.forEach(

    button => {


        button.addEventListener(

            "mouseenter",

            () => {

                buttons.forEach(

                    item =>

                        item.classList
                            .remove("active")

                );


                button
                    .classList
                    .add("active");

            }

        );


        button.addEventListener(

            "click",

            () => {

                const action =

                    button
                        .dataset
                        .action;


                showMessage(

                    menuActions[action]

                );

            }

        );

        // If this is the Start button, navigate to the story page
        button.addEventListener(
            "click",
            () => {
                const action = button.dataset.action;

                if (action === "start") {
                    window.location.href = "story/story.html";
                }
            }
        );

    }

);


/* ========================================================= */
/* DYNAMIC SYSTEM INFORMATION */
/* ========================================================= */

const cpuValue =

    document
        .getElementById(
            "cpu-value"
        );


const cpuBar =

    document
        .getElementById(
            "cpu-bar"
        );


const memoryValue =

    document
        .getElementById(
            "memory-value"
        );


const memoryBar =

    document
        .getElementById(
            "memory-bar"
        );


function randomSystemValue(

    minimum,
    maximum

) {

    return Math.floor(

        Math.random()

        *

        (
            maximum
            -
            minimum
            +
            1
        )

        +

        minimum

    );

}


function updateSystemInformation() {

    const cpu =

        randomSystemValue(
            20,
            92
        );


    const memory =

        randomSystemValue(
            29,
            87
        );


    cpuValue.textContent =

        `${cpu}%`;


    cpuBar.style.width =

        `${cpu}%`;


    memoryValue.textContent =

        `${memory}%`;


    memoryBar.style.width =

        `${memory}%`;

}


setInterval(

    updateSystemInformation,

    2500

);


/* ========================================================= */
/* KEYBOARD NAVIGATION */
/* ========================================================= */

let selectedIndex = 0;


document.addEventListener(

    "keydown",

    event => {


        if (

            event.key
            ===
            "ArrowDown"

        ) {

            selectedIndex =

                (
                    selectedIndex
                    +
                    1
                )

                %

                buttons.length;

        }


        else if (

            event.key
            ===
            "ArrowUp"

        ) {

            selectedIndex =

                (
                    selectedIndex
                    -
                    1
                    +
                    buttons.length
                )

                %

                buttons.length;

        }


        else if (

            event.key
            ===
            "Enter"

        ) {

            buttons[
                selectedIndex
            ]
            .click();

        }


        else {

            return;

        }


        buttons.forEach(

            button =>

                button
                    .classList
                    .remove("active")

        );


        buttons[
            selectedIndex
        ]
        .classList
        .add("active");

    }

);

/* =========================================================
   SCREEN NAVIGATION
========================================================= */

const mainMenuScreen =
    document.getElementById("main-menu-screen");


const chapterScreen =
    document.getElementById("chapter-screen");


const characterScreen =
    document.getElementById("character-screen");


const achievementScreen =
    document.getElementById("achievement-screen");


const settingsScreen =
    document.getElementById("settings-screen");


const allScreens = [

    mainMenuScreen,

    chapterScreen,

    characterScreen,

    achievementScreen,

    settingsScreen

];


/* =========================================================
   HIDE ALL SCREENS
========================================================= */

function hideAllScreens() {

    allScreens.forEach(

        screen => {

            if (screen) {

                screen.classList.remove(
                    "active-screen"
                );

            }

        }

    );

}


/* =========================================================
   OPEN SCREEN
========================================================= */

function openScreen(screenID) {

    const targetScreen =

        document.getElementById(
            screenID
        );


    if (!targetScreen) {

        console.error(

            "Screen tidak ditemukan:",

            screenID

        );

        return;

    }


    hideAllScreens();


    targetScreen.classList.add(

        "active-screen"

    );

}


/* =========================================================
   RETURN TO MAIN MENU
========================================================= */

function returnToMainMenu() {

    hideAllScreens();


    mainMenuScreen.classList.add(

        "active-screen"

    );

}


/* =========================================================
   MENU BUTTON
========================================================= */

document
    .querySelector(
        '[data-action="chapter"]'
    )
    .addEventListener(

        "click",

        function () {

            openScreen(

                "chapter-screen"

            );

        }

    );


document
    .querySelector(
        '[data-action="character"]'
    )
    .addEventListener(

        "click",

        function () {

            openScreen(

                "character-screen"

            );

        }

    );


document
    .querySelector(
        '[data-action="achievement"]'
    )
    .addEventListener(

        "click",

        function () {

            openScreen(

                "achievement-screen"

            );

        }

    );


document
    .querySelector(
        '[data-action="settings"]'
    )
    .addEventListener(

        "click",

        function () {

            openScreen(

                "settings-screen"

            );

        }

    );


/* =========================================================
   RETURN BUTTONS
========================================================= */

const returnButtons =

    document.querySelectorAll(

        ".back-button"

    );


returnButtons.forEach(

    button => {

        button.addEventListener(

            "click",

            function () {

                returnToMainMenu();

            }

        );

    }

);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(

    "keydown",

    function (event) {

        if (

            event.key === "Escape"

        ) {

            returnToMainMenu();

        }

    }

);

document.addEventListener(

    "keydown",

    event => {


        if (

            event.key
            ===
            "Escape"

        ) {

            returnToMainMenu();

        }

    }

);


/* ========================================================= */
/* SETTINGS */
/* ========================================================= */

function connectSlider(

    sliderID,
    outputID

) {

    const slider =

        document
            .getElementById(
                sliderID
            );


    const output =

        document
            .getElementById(
                outputID
            );


    slider.addEventListener(

        "input",

        () => {

            output.textContent =

                `${slider.value}%`;

        }

    );

}


connectSlider(

    "music-volume",

    "music-output"

);


connectSlider(

    "sound-volume",

    "sound-output"

);


connectSlider(

    "text-speed",

    "speed-output"

);