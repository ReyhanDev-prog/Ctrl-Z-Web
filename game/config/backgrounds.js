/* =========================================================
   CTRL+Z — BACKGROUND DATABASE
   Migrasi seluruh background dari script Ren'Py.
   File gambar yang belum tersedia otomatis memakai
   gradient fallback dari story-ui.js.
========================================================= */

(function () {

    "use strict";


    const BASE =
        "../game/assets/backgrounds/";


    const DATABASE = {

        /* =============================================
           CAMPUS / DAILY LIFE
        ============================================= */

        bg_classroom_day: ["Classroom_Day.png", "classroom"],
        bg_school_hallway_day: ["bg_school_hallway_day.png", "school"],
        bg_school_gate: ["bg_school_gate.png", "school"],
        bg_cafeteria_day: ["bg_cafeteria_day.png", "cafe"],
        bg_cafeteria: ["bg_cafeteria.png", "cafe"],
        bg_cafeteria_broken: ["bg_cafeteria_broken.png", "danger"],
        bg_cozy_cafe_street_day: ["bg_cozy_cafe_street_day.png", "cafe"],
        bg_bookstore: ["bg_bookstore.png", "warm"],
        bg_apartment_exterior: ["bg_apartment_exterior.png", "evening"],
        bg_bedroom_day: ["bg_bedroom_day.png", "room"],
        bg_bedroom_night: ["bg_bedroom_night.png", "night"],
        bg_room_night: ["bg_room_night.png", "night"],
        bg_kitchen: ["bg_kitchen.png", "room"],
        bg_livingroom_day: ["bg_livingroom_day.png", "room"],
        bg_livingroom_night: ["bg_livingroom_night.png", "night"],
        bg_livingroom_dark: ["bg_livingroom_dark.png", "dark"],
        bg_livingroom_rachel: ["bg_livingroom_rachel.png", "room"],
        bg_livingroom_liam: ["bg_livingroom_liam.png", "room"],

        /* =============================================
           CITY / STREETS
        ============================================= */

        bg_city_morning: ["bg_city_morning.png", "day"],
        bg_city_night: ["bg_city_night.png", "night"],
        bg_big_city: ["bg_big_city.png", "city"],
        bg_backstreet_summer_day: ["bg_backstreet_summer_day.png", "day"],
        bg_backstreet_summer_afternoon: ["bg_backstreet_summer_afternoon.png", "day"],
        bg_backstreet_summer_cloudy: ["bg_backstreet_summer_cloudy.png", "cloudy"],
        bg_street_summer_evening: ["bg_street_summer_evening.png", "evening"],
        bg_street_summer_night: ["bg_street_summer_night.png", "night"],
        bg_street_summer_rain: ["bg_street_summer_rain.png", "rain"],
        bg_busstop_spring_day: ["bg_busstop_spring_day.png", "day"],
        bg_busstop_spring_afternoon: ["bg_busstop_spring_afternoon.png", "day"],
        bg_busstop_summer_cloudy: ["bg_busstop_summer_cloudy.png", "cloudy"],
        bg_busstop_summer_night_rain: ["bg_busstop_summer_night_rain.png", "rain"],
        bg_train_day: ["bg_train_day.png", "train"],
        bg_train_evening: ["bg_train_evening.png", "train"],
        bg_train_night_rain: ["bg_train_night_rain.png", "train"],
        bg_rooftop_city_night: ["bg_rooftop_city_night.png", "night"],
        bg_construction_site: ["bg_construction_site.png", "danger"],
        bg_taman_kota: ["taman_kota.png", "park"],
        bg_river_shore: ["bg_river_shore.png", "nature"],
        bg_hiking_trail: ["bg_hiking_trail.png", "nature"],
        bg_rainforest: ["bg_rainforest.png", "nature"],

        /* =============================================
           X-TECH / LAB / MYSTERY
        ============================================= */

        bg_lobby_x: ["bg_lobby_x.png", "tech"],
        bg_xtech: ["bg_xtech.png", "tech"],
        bg_computer_lab: ["bg_computer_lab.png", "tech"],
        bg_terminal_hack: ["bg_terminal_hack.png", "terminal"],
        bg_office_basement: ["bg_office_basement.png", "dark"],
        bg_corridor_dark: ["bg_corridor_dark.png", "dark"],
        bg_corridor_liam: ["bg_corridor_liam.png", "dark"],
        bg_staircase_dark: ["bg_staircase_dark.png", "dark"],
        bg_ruang_interogasi: ["bg_ruang_interogasi.png", "interrogation"],
        bg_ruang_interogasi_rusak: ["bg_ruang_interogasi_rusak.png", "danger"],
        bg_glitch_timeline: ["bg_glitch_timeline.png", "glitch"],

        /* =============================================
           ETHAN / LIAM / RACHEL HOUSES
        ============================================= */

        bg_ethan_house: ["bg_ethan_house.png", "house"],
        bg_ethan_livingroom: ["bg_ethan_livingroom.png", "room"],
        bg_ruang_tamu_ethan: ["bg_ruang_tamu_ethan.png", "room"],
        bg_kamar_ethan: ["bg_kamar_ethan.png", "room"],
        bg_mansion_liam: ["bg_mansion_liam.png", "luxury"],
        bg_apartment_exterior: ["bg_apartment_exterior.png", "evening"],

        /* =============================================
           CG / SPECIAL SCENES
        ============================================= */

        black: [null, "black"],
        bg_black: [null, "black"],
        car_in_city: ["car_in_city.png", "night"],
        car_in_city2: ["car_in_city2.png", "danger"],
        computer_ethan_bab4: ["computer_ethan_bab4.png", "tech"],
        diliatin: ["diliatin.png", "dark"],
        diskusi_serius: ["diskusi_serius.png", "tech"],
        diskusi_serius2: ["diskusi_serius2.png", "danger"],
        ethan1: ["ethan1.png", "cg"],
        flashback1: ["flashback1.png", "memory"],
        flashback2: ["flashback2.png", "memory"],
        flashback3: ["flashback3.png", "memory"],
        isi_kontak: ["isi_kontak.png", "tech"],
        kejar_ethan: ["kejar_ethan.png", "danger"],
        liam: ["liam.png", "cg"],
        liam_baca: ["liam_baca.png", "cg"],
        liam_bangun: ["liam_bangun.png", "cg"],
        liam_bangun2: ["liam_bangun2.png", "cg"],
        liamdijalan: ["liamdijalan.png", "cg"],
        liam_nangis: ["liam_nangis.png", "memory"],
        liam_nangis2: ["liam_nangis2.png", "memory"],
        liam_nangis3: ["liam_nangis3.png", "memory"],
        liam_tidur: ["liam_tidur.png", "cg"],
        nabrak: ["nabrak.png", "danger"],
        perpisahan: ["perpisahan.png", "memory"],
        rachel_melerai: ["rachel_melerai.png", "cg"],
        rachel_melerai2: ["rachel_melerai2.png", "cg"],
        rachel_melerai3: ["rachel_melerai3.png", "cg"],
        rachel_nangis: ["rachel_nangis.png", "memory"],
        rachel_tidur: ["rachel_tidur.png", "cg"],
        tempatliam: ["tempatliam.png", "cg"]

    };


    Object.entries(DATABASE).forEach(
        ([id, [file, theme]]) => {

            defineBackground(
                id,
                file
                    ? BASE + file
                    : null,
                {
                    theme: theme,
                    label: id
                        .replace(/^bg_/, "")
                        .replace(/_/g, " ")
                        .toUpperCase()
                }
            );

        }
    );


    /*
     * Alias supaya nama scene dari script lama tetap aman.
     */

    defineBackground(
        "classroom",
        BASE + "Classroom_Day.png",
        { theme: "classroom", label: "CLASSROOM" }
    );

    defineBackground(
        "laboratory",
        BASE + "laboratory.webp",
        { theme: "tech", label: "LABORATORY" }
    );

    defineBackground(
        "city-night",
        BASE + "city-night.webp",
        { theme: "night", label: "CITY NIGHT" }
    );

    defineBackground(
        "bg_cafe_day",
        BASE + "bg_cafeteria_day.png",
        { theme: "cafe", label: "CAFETERIA" }
    );

})();
