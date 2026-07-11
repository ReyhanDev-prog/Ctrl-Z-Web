"use strict";


/* ======================================================== */
/* STORY DATA                                               */
/* ======================================================== */

const story = [

    {

        speaker:
            "LIAM",

        text:

            "Akhirnya kamu datang. Aku sudah menunggumu sejak timeline ini kembali diulang.",

        sprite:

            "../assets/sprite/Liam.png"

    },


    {

        speaker:
            "LIAM",

        text:

            "Ada sesuatu yang berbeda kali ini. Beberapa bagian dari ingatanku masih tersisa.",

        sprite:

            "../assets/sprite/Liam.png"

    },


    {

        speaker:
            "LIAM",

        text:

            "Sebelum kita melanjutkan, aku ingin mengetahui satu hal.",

        choices: [

            {

                text:

                    "Apa yang ingin kamu ketahui?",

                next:
                    3

            },


            {

                text:

                    "Aku tidak punya waktu untuk ini.",

                next:
                    4

            }

        ]

    },


    {

        speaker:
            "LIAM",

        text:

            "Apakah kamu masih mengingat apa yang terjadi sebelum timeline ini diulang?",

        sprite:

            "../assets/sprite/Liam.png"

    },


    {

        speaker:
            "LIAM",

        text:

            "Begitu rupanya. Sepertinya pengulangan ini telah mengubahmu.",

        sprite:

            "../assets/sprite/Liam.png"

    }

];


/* ======================================================== */
/* ELEMENTS                                                 */
/* ======================================================== */

const visualNovel =

    document.getElementById(

        "visual-novel"

    );


const speakerName =

    document.getElementById(

        "speaker-name"

    );


const dialogueText =

    document.getElementById(

        "dialogue-text"

    );


const dialogueCode =

    document.getElementById(

        "dialogue-code"

    );


const characterSprite =

    document.getElementById(

        "character-sprite"

    );


const choicePanel =

    document.getElementById(

        "choice-panel"

    );


const choiceList =

    document.getElementById(

        "choice-list"

    );


const continueIndicator =

    document.getElementById(

        "continue-indicator"

    );


/* ======================================================== */
/* STORY STATE                                              */
/* ======================================================== */

let currentStoryIndex =
    0;


let typing =
    false;


let completeText =
    "";


let typingTimer =
    null;


let autoMode =
    false;


let autoTimer =
    null;


/* ======================================================== */
/* TYPEWRITER                                               */
/* ======================================================== */

function typeDialogue(

    text

) {


    clearInterval(

        typingTimer

    );


    dialogueText.textContent =
        "";


    completeText =
        text;


    typing =
        true;


    continueIndicator
        .classList
        .add(

            "hidden"

        );


    let characterIndex =
        0;


    typingTimer =

        setInterval(

            () => {


                dialogueText.textContent +=

                    completeText[
                        characterIndex
                    ];


                characterIndex++;


                if (

                    characterIndex

                    >=

                    completeText.length

                ) {

                    finishTyping();

                }

            },

            28

        );

}


/* ======================================================== */
/* FINISH TYPEWRITER                                        */
/* ======================================================== */

function finishTyping() {


    clearInterval(

        typingTimer

    );


    dialogueText.textContent =
        completeText;


    typing =
        false;


    continueIndicator
        .classList
        .remove(

            "hidden"

        );


    const currentStory =

        story[
            currentStoryIndex
        ];


    if (

        currentStory.choices

    ) {

        showChoices(

            currentStory.choices

        );

    }


    if (

        autoMode

        &&

        !currentStory.choices

    ) {

        autoTimer =

            setTimeout(

                nextDialogue,

                1800

            );

    }

}


/* ======================================================== */
/* SHOW DIALOGUE                                            */
/* ======================================================== */

function showDialogue(

    index

) {


    if (

        index

        >=

        story.length

    ) {

        showNotification(

            "END OF AVAILABLE TIMELINE"

        );


        return;

    }


    currentStoryIndex =
        index;


    const dialogue =

        story[
            currentStoryIndex
        ];


    choicePanel
        .classList
        .add(

            "hidden"

        );


    choiceList.innerHTML =
        "";


    speakerName.textContent =

        dialogue.speaker;


    dialogueCode.textContent =

        "LOG // "

        +

        String(

            currentStoryIndex
            +
            1

        )
        .padStart(

            4,

            "0"

        );


    if (

        dialogue.sprite

    ) {

        characterSprite.src =

            dialogue.sprite;

    }


    typeDialogue(

        dialogue.text

    );

}


/* ======================================================== */
/* NEXT DIALOGUE                                            */
/* ======================================================== */

function nextDialogue() {


    const currentStory =

        story[
            currentStoryIndex
        ];


    if (

        typing

    ) {

        finishTyping();

        return;

    }


    if (

        currentStory.choices

    ) {

        return;

    }


    showDialogue(

        currentStoryIndex
        +
        1

    );

}


/* ======================================================== */
/* CHOICES                                                  */
/* ======================================================== */

function showChoices(

    choices

) {


    choiceList.innerHTML =
        "";


    choicePanel
        .classList
        .remove(

            "hidden"

        );


    choices.forEach(

        choice => {


            const button =

                document
                    .createElement(

                        "button"

                    );


            button.className =

                "choice-button";


            button.textContent =

                choice.text;


            button.addEventListener(

                "click",

                event => {


                    event.stopPropagation();


                    choicePanel
                        .classList
                        .add(

                            "hidden"

                        );


                    showDialogue(

                        choice.next

                    );

                }

            );


            choiceList
                .appendChild(

                    button

                );

        }

    );

}


/* ======================================================== */
/* CLICK TO CONTINUE                                        */
/* ======================================================== */

visualNovel.addEventListener(

    "click",

    event => {


        if (

            event.target.closest(

                "button"

            )

        ) {

            return;

        }


        nextDialogue();

    }

);


/* ======================================================== */
/* NOTIFICATION                                             */
/* ======================================================== */

const notification =

    document.getElementById(

        "system-notification"

    );


const notificationText =

    document.getElementById(

        "notification-text"

    );


let notificationTimer;


function showNotification(

    message

) {


    clearTimeout(

        notificationTimer

    );


    notificationText.textContent =

        message;


    notification
        .classList
        .add(

            "show"

        );


    notificationTimer =

        setTimeout(

            () => {


                notification
                    .classList
                    .remove(

                        "show"

                    );

            },

            2000

        );

}


/* ======================================================== */
/* QUICK MENU                                               */
/* ======================================================== */

document
    .querySelectorAll(

        ".quick-button"

    )
    .forEach(

        button => {


            button.addEventListener(

                "click",

                event => {


                    event.stopPropagation();


                    const command =

                        button
                            .dataset
                            .command;


                    executeCommand(

                        command,

                        button

                    );

                }

            );

        }

    );


function executeCommand(

    command,

    button

) {


    switch (

        command

    ) {


        case "auto":


            autoMode =
                !autoMode;


            button
                .classList
                .toggle(

                    "active",

                    autoMode

                );


            showNotification(

                autoMode

                ?

                "AUTO MODE ENABLED"

                :

                "AUTO MODE DISABLED"

            );


            break;


        case "skip":


            finishTyping();


            showNotification(

                "DIALOGUE SKIPPED"

            );


            break;


        case "save":


            saveStory();


            break;


        case "load":


            loadStory();


            break;


        case "menu":


            window.location.href =

                "../index.html";


            break;


        case "log":


            showNotification(

                "STORY LOG IS NOT AVAILABLE YET"

            );


            break;


        case "config":


            showNotification(

                "CONFIGURATION IS NOT AVAILABLE YET"

            );


            break;

    }

}


/* ======================================================== */
/* SAVE                                                     */
/* ======================================================== */

function saveStory() {


    localStorage.setItem(

        "ctrlz-story-save",

        JSON.stringify(

            {

                storyIndex:

                    currentStoryIndex

            }

        )

    );


    showNotification(

        "TIMELINE DATA SAVED"

    );

}


/* ======================================================== */
/* LOAD                                                     */
/* ======================================================== */

function loadStory() {


    const saveData =

        localStorage.getItem(

            "ctrlz-story-save"

        );


    if (

        !saveData

    ) {

        showNotification(

            "NO TIMELINE DATA FOUND"

        );


        return;

    }


    const data =

        JSON.parse(

            saveData

        );


    showDialogue(

        data.storyIndex

    );


    showNotification(

        "TIMELINE DATA RESTORED"

    );

}


/* ======================================================== */
/* START                                                    */
/* ======================================================== */

showDialogue(

    0

);