"use strict";


/* ========================================================= */
/* CONSTANTS */
/* ========================================================= */

const SAVE_KEY =
    "ctrlz-vn-save";


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


    clockElement.textContent =
        currentDate.toLocaleTimeString(
            "en-GB",
            {
                hour12: false
            }
        );


    dayElement.textContent =
        currentDate
            .toLocaleDateString(
                "en-US",
                {
                    weekday: "long"
                }
            )
            .toUpperCase();


    dateElement.textContent =
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
    document.getElementById("system-message");

const messageText =
    document.getElementById("message-text");

let messageTimer;


function showMessage(message, type = "info") {

    if (!messagePanel || !messageText) {

        return;

    }


    clearTimeout(
        messageTimer
    );


    messageText.textContent =
        message;


    messagePanel.classList.toggle(
        "error",
        type === "error"
    );


    messagePanel.classList.add(
        "show"
    );


    messageTimer =
        window.setTimeout(
            () => {

                messagePanel.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* ========================================================= */
/* SCREEN NAVIGATION */
/* ========================================================= */

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


const allScreens =
    [
        mainMenuScreen,
        chapterScreen,
        characterScreen,
        achievementScreen,
        settingsScreen
    ].filter(Boolean);


function hideAllScreens() {

    allScreens.forEach(
        screen => {

            screen.classList.remove(
                "active-screen"
            );

        }
    );

}


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


function returnToMainMenu() {

    hideAllScreens();


    if (mainMenuScreen) {

        mainMenuScreen.classList.add(
            "active-screen"
        );

    }

}


/* ========================================================= */
/* CHAPTER DATABASE */
/* ========================================================= */

function chapterIsUnlocked(chapter) {

    if (typeof window.getChapterUnlocked === "function") {
        return window.getChapterUnlocked(chapter);
    }


    return Boolean(
        window.GameState
        && window.GameState.persistent
        && window.GameState.persistent.unlocks
        && window.GameState.persistent.unlocks.bab[String(chapter.id)]
    );

}


function renderChapters() {

    const grid =
        document.getElementById("chapter-grid");


    if (!grid) {
        return;
    }


    if (!Array.isArray(window.CHAPTERS)) {

        grid.replaceChildren();

        const error =
            document.createElement("p");

        error.className = "chapter-empty";
        error.textContent = "CHAPTER DATABASE UNAVAILABLE";

        grid.appendChild(error);

        return;
    }


    grid.replaceChildren();


    window.CHAPTERS.forEach(
        chapter => {

            const unlocked =
                chapterIsUnlocked(chapter);


            const card =
                document.createElement("button");

            card.type = "button";
            card.className =
                `chapter-card ${unlocked ? "unlocked" : "locked"}`;

            card.dataset.chapter = String(chapter.id);
            card.disabled = !unlocked;


            const number =
                document.createElement("span");

            number.textContent =
                `CHAPTER ${chapter.number}`;


            const title =
                document.createElement("h3");

            title.textContent =
                unlocked
                    ? chapter.title
                    : "█████████";


            const description =
                document.createElement("p");

            description.textContent =
                unlocked
                    ? chapter.description
                    : "ACCESS DENIED";


            card.append(number, title, description);

            grid.appendChild(card);

        }
    );

}


function openChapter(chapterID) {

    const chapter =
        typeof window.getChapter === "function"
            ? window.getChapter(chapterID)
            : null;


    if (!chapter) {
        showMessage("CHAPTER DATA NOT FOUND", "error");
        return;
    }


    if (!chapterIsUnlocked(chapter)) {

        showMessage("ACCESS DENIED — CHAPTER LOCKED", "error");

        return;
    }


    showMessage(`LOADING CHAPTER ${chapter.number}...`);


    window.setTimeout(
        () => {

            window.location.href =
                `story/story.html?chapter=${encodeURIComponent(chapter.id)}`;

        },
        200
    );

}


document
    .getElementById("chapter-grid")
    ?.addEventListener(
        "click",

        event => {

            const card =
                event.target.closest(".chapter-card");


            if (!card || card.disabled) {
                return;
            }


            openChapter(card.dataset.chapter);

        }
    );


/* ========================================================= */
/* SAVE DETECTION */
/* ========================================================= */

function hasSaveData() {

    let rawSave;


    try {

        rawSave =
            localStorage.getItem(
                SAVE_KEY
            );

    }

    catch (error) {

        console.warn(
            "localStorage tidak tersedia:",
            error
        );


        return false;

    }


    if (!rawSave) {

        return false;

    }


    try {

        const parsed =
            JSON.parse(
                rawSave
            );


        return (
            parsed
            &&
            typeof parsed
            ===
            "object"
        );

    }

    catch (error) {

        console.warn(
            "Save data tidak valid:",
            error
        );


        return false;

    }

}


/* ========================================================= */
/* TERMINATION */
/* ========================================================= */

function showTerminationScreen() {

    const terminationScreen =
        document.getElementById(
            "termination-screen"
        );


    if (terminationScreen) {

        terminationScreen.classList.add(
            "show"
        );


        terminationScreen.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    /*
     * window.close() sering diblokir browser jika tab
     * tidak dibuka oleh script. Overlay TERMINATED tetap
     * menjadi fallback yang pasti terlihat.
     */

    window.setTimeout(
        () => {

            try {

                window.close();

            }

            catch (error) {

                console.warn(
                    "Window tidak dapat ditutup otomatis:",
                    error
                );

            }

        },
        600
    );

}


/* ========================================================= */
/* MENU ACTIONS */
/* ========================================================= */

function handleMenuAction(action) {

    switch (action) {


        case "start":

            showMessage(
                "INITIALIZING NEW TIMELINE..."
            );


            window.setTimeout(
                () => {

                    window.location.href =
                        "story/story.html";

                },
                180
            );

            break;


        case "continue":

            if (!hasSaveData()) {

                showMessage(
                    "NO SAVE DATA",
                    "error"
                );

                return;

            }


            showMessage(
                "TIMELINE DATA FOUND — RESUMING..."
            );


            window.setTimeout(
                () => {

                    window.location.href =
                        "story/story.html?continue=1";

                },
                250
            );

            break;


        case "chapter":

            showMessage(
                "OPENING CHAPTER DATABASE..."
            );

            openScreen(
                "chapter-screen"
            );

            break;


        case "character":

            showMessage(
                "ACCESSING CHARACTER FILES..."
            );

            openScreen(
                "character-screen"
            );

            break;


        case "achievement":

            showMessage(
                "LOADING ACHIEVEMENT LOG..."
            );

            openScreen(
                "achievement-screen"
            );

            break;


        case "settings":

            showMessage(
                "OPENING SYSTEM SETTINGS..."
            );

            openScreen(
                "settings-screen"
            );

            break;


        case "exit":

            showMessage(
                "TERMINATION REQUEST RECEIVED...",
                "error"
            );

            showTerminationScreen();

            break;


        default:

            console.warn(
                `Menu action tidak dikenal: ${action}`
            );

    }

}


/* ========================================================= */
/* MENU BUTTONS */
/* ========================================================= */

const buttons =
    Array.from(
        document.querySelectorAll(
            ".menu-button"
        )
    );

let selectedIndex =
    0;


function setActiveButton(index) {

    selectedIndex =
        (
            index
            +
            buttons.length
        )
        %
        buttons.length;


    buttons.forEach(
        (button, buttonIndex) => {

            button.classList.toggle(
                "active",
                buttonIndex
                ===
                selectedIndex
            );

        }
    );

}


buttons.forEach(
    (button, index) => {

        button.addEventListener(
            "mouseenter",

            () => {

                setActiveButton(
                    index
                );

            }
        );


        button.addEventListener(
            "click",

            () => {

                handleMenuAction(
                    button.dataset.action
                );

            }
        );

    }
);


/* ========================================================= */
/* DYNAMIC SYSTEM INFORMATION */
/* ========================================================= */

const cpuValue =
    document.getElementById("cpu-value");

const cpuBar =
    document.getElementById("cpu-bar");

const memoryValue =
    document.getElementById("memory-value");

const memoryBar =
    document.getElementById("memory-bar");


function randomSystemValue(minimum, maximum) {

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


    if (cpuValue) {

        cpuValue.textContent =
            `${cpu}%`;

    }


    if (cpuBar) {

        cpuBar.style.width =
            `${cpu}%`;

    }


    if (memoryValue) {

        memoryValue.textContent =
            `${memory}%`;

    }


    if (memoryBar) {

        memoryBar.style.width =
            `${memory}%`;

    }

}


updateSystemInformation();

setInterval(
    updateSystemInformation,
    2500
);


/* ========================================================= */
/* KEYBOARD NAVIGATION */
/* ========================================================= */

document.addEventListener(
    "keydown",

    event => {

        if (!mainMenuScreen) {

            return;

        }


        if (
            !mainMenuScreen.classList.contains(
                "active-screen"
            )
        ) {

            return;

        }


        if (event.key === "ArrowDown") {

            event.preventDefault();

            setActiveButton(
                selectedIndex + 1
            );

        }


        else if (event.key === "ArrowUp") {

            event.preventDefault();

            setActiveButton(
                selectedIndex - 1
            );

        }


        else if (event.key === "Enter") {

            event.preventDefault();

            buttons[
                selectedIndex
            ]?.click();

        }

    }
);


/* ========================================================= */
/* RETURN BUTTONS */
/* ========================================================= */

document
    .querySelectorAll(
        ".screen .back-button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",

                () => {

                    returnToMainMenu();

                }
            );

        }
    );


/* ========================================================= */
/* REBOOT BUTTON */
/* ========================================================= */

document
    .getElementById(
        "reboot-button"
    )
    ?.addEventListener(
        "click",

        () => {

            window.location.reload();

        }
    );


/* ========================================================= */
/* ESCAPE KEY */
/* ========================================================= */

document.addEventListener(
    "keydown",

    event => {

        if (event.key !== "Escape") {

            return;

        }


        const terminationScreen =
            document.getElementById(
                "termination-screen"
            );


        if (
            terminationScreen
            &&
            terminationScreen.classList.contains(
                "show"
            )
        ) {

            return;

        }


        returnToMainMenu();

    }
);


/* ========================================================= */
/* SETTINGS */
/* ========================================================= */

function connectSlider(sliderID, outputID) {

    const slider =
        document.getElementById(
            sliderID
        );


    const output =
        document.getElementById(
            outputID
        );


    if (!slider || !output) {

        return;

    }


    const update =
        () => {

            output.textContent =
                `${slider.value}%`;

        };


    slider.addEventListener(
        "input",
        update
    );


    update();

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


/* ========================================================= */
/* GAME FRAME FALLBACK */
/* ========================================================= */

function fitGameContainerFallback() {

    const container =
        document.getElementById(
            "game-container"
        );


    if (!container) {

        return;

    }


    const supportsTrigonometricScale =
        window.CSS
        &&
        CSS.supports
        &&
        CSS.supports(
            "transform",
            "scale(tan(atan2(1px, 1px)))"
        );


    if (supportsTrigonometricScale) {

        return;

    }


    const scale =
        Math.min(
            window.innerWidth / 1920,
            window.innerHeight / 1080
        );


    container.style.transform =
        `translate(-50%, -50%) scale(${scale})`;

}


window.addEventListener(
    "resize",
    fitGameContainerFallback
);


fitGameContainerFallback();


/* ========================================================= */
/* INITIAL RENDER */
/* ========================================================= */

renderChapters();
