/* =========================================================
   CTRL+Z — CHAPTER DATABASE
   Padanan chapter.rpy
========================================================= */

window.CHAPTERS = [

    {
        id: "prolog",
        number: "00",
        label: "introduction",
        title: "PROLOGUE",
        description: "AWAL DARI GARIS WAKTU",
        unlock: true
    },

    {
        id: "1",
        number: "01",
        label: "bab1A",
        title: "FIRST CONTACT",
        description: "KONTAK PERTAMA DENGAN X-TECH",
        unlock: false
    },

    {
        id: "2",
        number: "02",
        label: "bab2A",
        title: "THE MISSING LINK",
        description: "JEJAK ETHAN DAN CHRONOS-9",
        unlock: false
    },

    {
        id: "3",
        number: "03",
        label: "bab3A",
        title: "CROSSROADS",
        description: "PILIHAN YANG MENGUBAH SEGALANYA",
        unlock: false
    },

    {
        id: "4",
        number: "04",
        label: "bab4A",
        title: "THE TRUTH",
        description: "KEBENARAN DI BALIK X-TECH",
        unlock: false
    },

    {
        id: "5",
        number: "05",
        label: "bab5A",
        title: "ZERO HOUR",
        description: "WAKTU YANG TIDAK BISA DIKEMBALIKAN",
        unlock: false
    }

];


window.getChapter =
    function (id) {

        return window.CHAPTERS.find(
            chapter => (
                String(chapter.id)
                ===
                String(id)
            )
        ) || null;

    };


window.getChapterLabel =
    function (id) {

        const chapter =
            window.getChapter(id);


        return chapter
            ? chapter.label
            : null;

    };


window.getChapterUnlocked =
    function (chapter) {

        if (!chapter) {
            return false;
        }


        if (chapter.unlock) {
            return true;
        }


        return Boolean(
            window.GameState
                && window.GameState
                    .persistent
                    .unlocks
                    .bab[String(chapter.id)]
        );

    };
