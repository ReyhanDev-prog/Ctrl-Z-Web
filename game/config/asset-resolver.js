/* =========================================================
   CTRL+Z — ASSET RESOLVER (native web replacement for .rpy)
   Memetakan nama ekspresi/scene dari script Ren'Py ke file
   aset yang BENAR-BENAR ADA di game/assets, dengan:
     - manifest direktori (dibangun via fetch listing server)
     - pencocokan case-insensitive + slug (strip _ dan -)
     - probe <img> untuk folder yang tidak bisa di-list
========================================================= */

(function () {

    "use strict";


    const SPRITE_BASE = "../game/assets/sprites/";
    const BG_BASE = "../game/assets/backgrounds/";
    const SCENE_BASE = "../game/assets/Scenes/";


    /* Daftar folder sprite yang diketahui (fallback bila
       directory listing tidak tersedia). */

    const KNOWN_SPRITE_FOLDERS = [
        "Aria", "Ava", "Cafe_owner", "Claire", "Ethan", "Liam",
        "Lisa", "Marcuz", "Nameless", "Noa", "Rachel", "Rei",
        "Ryuu", "Syntia", "Valeria", "YOU"
    ];


    /* Nama file latar yang diketahui (fallback). */

    const KNOWN_BACKGROUNDS = [
        "Apartment_Exterior.png", "Apartment_Exterior_Night.png",
        "Backstreet_Spring_Afternoon.png", "Backstreet_Spring_Cloudy.png",
        "Backstreet_Spring_Day.png", "Backstreet_Spring_Night.png",
        "Backstreet_Summer_Day.png", "Backstreet_Summer_Night_Rain.png",
        "Bathroom.png", "Bedroom_Day.png", "Bedroom_Evening.png",
        "Bedroom_Liam.png", "Bedroom_Night.png", "Bedroom_Night_Dark.png",
        "BusStop_Spring_Afternoon.png", "BusStop_Spring_Day.png",
        "BusStop_Summer_Cloudy.png", "BusStop_Summer_Night_Rain.png",
        "Cafeteria_Day.png", "Cafeteria_Day_Broken.png",
        "City_Afternoon.png", "City_Morning.png", "City_Night.png",
        "Classroom_Day.png", "Corridor_Liam.png", "Ethan_livingroom.png",
        "Kitchen_Day.png", "Kitchen_Night.png", "Livingroom_Day.png",
        "Livingroom_Liam.png", "Livingroom_Night.png", "Lobby_X.png",
        "Mansion_Liam.png", "School_Hallway_Day.png", "Shop.png",
        "Street_Summer_Evening.png", "Street_Summer_Night.png",
        "Street_Summer_Rain.png", "System.png", "Train_Evening.png",
        "Train_Night_Rain.png", "big-city.png", "computer-lab.png",
        "cozy-cafe-street-day.png", "library.png", "kamar_ethan.png",
        "ruang_tamu_ethan.png", "black.jpg"
    ];


    const MANIFEST_FILES = {
        "sprites": KNOWN_SPRITE_FOLDERS,
        "backgrounds": KNOWN_BACKGROUNDS
    };


    /* Peta manual ekspresi .rpy -> nama berkas nyata (tanpa ekstensi).
       Dipakai SEBELUM resolver otomatis supaya 100% akurat meski
       server tidak menyediakan directory listing. */

    const EXPRESSION_MAP = {

        Rachel: {
            nyapa: "1", cemberut: "2", marah: "3", kaget: "4",
            senyum: "5", bingung: "6", ketawa: "7", sedih: "8",
            merajuk: "9", serius: "10", sombong: "11", nangis: "5a",
            tidur: "4a"
        },

        Liam: {
            senyum: "1", malu: "2", kaget: "3", pegal: "4",
            mikir: "5", marah: "6", sedih: "7", serius: "8",
            ketawa: "9", bingung: "10", nangis: "11", tidur: "12",
            menunduk: "13", merajuk: "14", sombong: "15",
            terkejut: "16", datar: "17"
        },

        Ethan: {
            ketawa: "ethan-ketawa", sedih: "ethan-kemejahitam-nangis",
            kaget: "ethan-terkejut", terkejut: "ethan-terkejut",
            senyum: "ethan-menyeringai", marah: "ethan-tegas",
            marah2: "ethan-kemejahitam-serius2", marah3: "ethan-kemejahitam-serius2",
            marah4: "ethan-kemejahitam-serius2", sombong: "ethan-smug",
            serius: "ethan-serius", bingung: "ethan-mikir",
            nodong: "ethan-kemejahitam-dugaan", dugaan: "ethan-kemejahitam-dugaan",
            malu: "ethan-malu", mikir: "ethan-mikir", heran: "ethan-mikir2",
            ramah: "ethan-ramah", takut: "ethan-takut", kecewa: "ethan-kecewa",
            datar: "ethan-datar", buangmuka: "ethan-buangmuka"
        },

        Valeria: {
            senyum: "1", marah: "2", kaget: "3", sedih: "4",
            serius: "5", ketawa: "6", bingung: "7", malu: "8",
            sombong: "9", nangis: "10", datar: "11", tidur: "12"
        },

        Marcuz: {
            senyum: "1", marah: "2", kaget: "3", serius: "4",
            mikir: "5", ketawa: "6", bingung: "7", sedih: "8",
            sombong: "9", nangis: "10", datar: "11"
        },

        Cafe_owner: {
            senyum: "1", biasa: "2", kaget: "3", bingung: "4",
            serius: "5", marah: "6"
        },

        Ava: {
            senyum: "1", biasa: "2", kaget: "3", marah: "4",
            sedih: "6", bingung: "8", ketawa: "9",
            mikir: "Ava5", serius: "Ava7"
        },

        Claire: {
            senyum: "1", biasa: "2", kaget: "3", marah: "4",
            sedih: "5", ketawa: "6", bingung: "7", serius: "8"
        },

        Aria: {
            senyum: "1", biasa: "2", kaget: "3", marah: "4",
            sedih: "5", ketawa: "6"
        },

        Rei: {
            senyum: "1", biasa: "2", kaget: "3", marah: "4",
            sedih: "5", ketawa: "6", bingung: "7", serius: "8",
            malu: "9", sombong: "10", nangis: "11", mikir: "12", datar: "13"
        },

        Noa: {
            senyum: "1", biasa: "2", kaget: "3", marah: "4",
            sedih: "5", ketawa: "6", bingung: "7"
        },

        Syntia: {
            senyum: "1", biasa: "2", kaget: "3", marah: "4",
            sedih: "5", ketawa: "6", bingung: "7", serius: "8",
            malu: "9", sombong: "10", nangis: "11"
        },

        Ryuu: {
            senyum: "1", biasa: "2", kaget: "3", marah: "4",
            sedih: "5", ketawa: "6", bingung: "7", serius: "8",
            malu: "9", sombong: "10", nangis: "11", mikir: "12",
            datar: "13", terkejut: "14", pegal: "15", menunduk: "16",
            merajuk: "17"
        }

    };


    /* Alias id karakter -> folder sprite. */

    const SPRITE_FOLDER_ALIAS = {
        cafe: "Cafe_owner",
        cafe_owner: "Cafe_owner",
        marcuz: "Marcuz",
        valeria: "Valeria",
        ava: "Ava",
        claire: "Claire",
        aria: "Aria",
        rei: "Rei",
        noa: "Noa",
        syntia: "Syntia",
        ryuu: "Ryuu",
        lisa: "Lisa",
        nameless: "Nameless",
        you: "YOU",
        rachel: "Rachel",
        liam: "Liam",
        ethan: "Ethan"
    };


    /* Strategi penamaan file per folder. */

    const FOLDER_STRATEGY = {
        Ethan: "descriptive",
        Lisa: "root"
    };


    /* Peta id background dari .rpy -> nama berkas nyata. */

    const BG_FILE_MAP = {

        bg_classroom_day: "Classroom_Day.png",
        bg_school_hallway_day: "School_Hallway_Day.png",
        bg_school_gate: "school-gate.png",
        bg_cafeteria_day: "Cafeteria_Day.png",
        bg_cafeteria: "Cafeteria_Day.png",
        bg_cafeteria_broken: "Cafeteria_Day_Broken.png",
        bg_cozy_cafe_street_day: "cozy-cafe-street-day.png",
        bg_bookstore: "library.png",
        bg_apartment_exterior: "Apartment_Exterior.png",
        bg_bedroom_day: "Bedroom_Day.png",
        bg_bedroom_night: "Bedroom_Night.png",
        bg_room_night: "bedroom-night.png",
        bg_kitchen: "Kitchen_Day.png",
        bg_livingroom_day: "Livingroom_Day.png",
        bg_livingroom_night: "Livingroom_Night.png",
        bg_livingroom_dark: "Livingroom_Dark.png",
        bg_livingroom_liam: "Livingroom_Liam.png",
        bg_city_morning: "City_Morning.png",
        bg_city_night: "City_Night.png",
        bg_big_city: "big-city.png",
        bg_backstreet_summer_day: "Backstreet_Summer_Day.png",
        bg_backstreet_summer_afternoon: "Backstreet_Summer_Afternoon.png",
        bg_backstreet_summer_cloudy: "Backstreet_Summer_Cloudy.png",
        bg_backstreet_summer_night_rain: "Backstreet_Summer_Night_Rain.png",
        bg_street_summer_evening: "Street_Summer_Evening.png",
        bg_street_summer_night: "Street_Summer_Night.png",
        bg_street_summer_rain: "Street_Summer_Rain.png",
        bg_busstop_spring_day: "BusStop_Spring_Day.png",
        bg_busstop_spring_afternoon: "BusStop_Spring_Afternoon.png",
        bg_busstop_summer_cloudy: "BusStop_Summer_Cloudy.png",
        bg_busstop_summer_night_rain: "BusStop_Summer_Night_Rain.png",
        bg_train_day: "Train_Day.png",
        bg_train_evening: "Train_Evening.png",
        bg_train_night_rain: "Train_Night_Rain.png",
        bg_rooftop_city_night: "rooftop-city-night.png",
        bg_construction_site: "construction-site.png",
        bg_taman_kota: "park.png",
        bg_river_shore: "river-shore.png",
        bg_hiking_trail: "hiking-trail.png",
        bg_rainforest: "rainforest.png",
        bg_lobby_x: "Lobby_X.png",
        bg_xtech: "Lobby_X.png",
        bg_computer_lab: "computer-lab.png",
        bg_terminal_hack: "../Scenes/bg_terminal_hack.jpg",
        bg_office_basement: "Office_Basement.png",
        bg_corridor_dark: "corridor.png",
        bg_corridor_liam: "Corridor_Liam.png",
        bg_staircase_dark: "Outdoor_Stairs.png",
        bg_ruang_interogasi: "../Scenes/bab6/ruang_interogasi.jpg",
        bg_ruang_interogasi_rusak: "../Scenes/bab6/ruang_interogasi_rusak.png",
        bg_glitch_timeline: "System.png",
        bg_ethan_house: "../Scenes/bab1/mobil_di_kota.png",
        bg_ethan_livingroom: "Ethan_livingroom.png",
        bg_ruang_tamu_ethan: "ruang_tamu_ethan.png",
        bg_kamar_ethan: "kamar_ethan.png",
        bg_mansion_liam: "Mansion_Liam.png",
        bg_black: null,
        black: null,

        /* CG dari folder Scenes per bab */
        car_in_city: "../Scenes/bab1/mobil_di_kota.png",
        car_in_city2: "../Scenes/bab1/mobil_di_kota2.png",
        diliatin: "../Scenes/bab1/diliatin.png",
        diskusi_serius: "../Scenes/bab2/diskusi_serius.png",
        diskusi_serius2: "../Scenes/bab2/diskusi_serius2.png",
        isi_kontak: "../Scenes/bab2/kontak.png",
        kejar_ethan: "../Scenes/bab2/tangkep_ethan.png",
        computer_ethan_bab4: "../Scenes/bab4/komputer_ethan.png",
        liam_baca: "../Scenes/bab1/liam1.png",
        nabrak: "../Scenes/bab5/nabrak.png",
        tempatliam: "../Scenes/bab5/l1.png",
        liam: "../Scenes/bab5/l2.png",
        ethan1: "../Scenes/bab7/ethan1.png",
        perpisahan: "../Scenes/bab7/perpisahan.png",
        rachel_melerai: "../Scenes/bab7/rachel_melerai.png",
        rachel_melerai2: "../Scenes/bab7/rachel_melerai2.png",
        rachel_melerai3: "../Scenes/bab7/rachel_melerai3.png",
        rachel_tidur: "../Scenes/bab7/rachel_tidur.png",
        liam_nangis: "../Scenes/bab6/liam_nangis.png",
        rachel_nangis: "../Scenes/bab6/rachel_nangis.png",
        liamdijalan: "../Scenes/bab6/liam_dijalan.png",
        flashback1: "../Scenes/bab6/f1.png",
        flashback2: "../Scenes/bab6/f2.png",
        flashback3: "../Scenes/bab6/f3.png"

    };


    const state = {
        directories: {},           // path -> [entries]
        probed: new Map(),         // url -> bool
        bgIndex: null,             // slug(lower, no _/-) -> filename
        built: false
    };


    function slug(name) {
        return String(name)
            .toLowerCase()
            .replace(/\.[a-z0-9]+$/i, "")
            .replace(/[_\-\s]/g, "");
    }


    async function listDirectory(path) {

        if (state.directories[path]) {
            return state.directories[path];
        }

        try {

            const response = await fetch(path, { cache: "no-store" });

            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }

            const text = await response.text();

            /* Format HTML listing (Apache/nginx autoindex). */

            const hrefs = [...text.matchAll(/href="([^"?#][^"]*)"/gi)]
                .map(match => decodeURIComponent(match[1]))
                .filter(name => name !== "../" && !name.startsWith("/"));

            if (hrefs.length) {
                state.directories[path] = hrefs;
                return hrefs;
            }

            /* Format JSON listing. */

            try {
                const json = JSON.parse(text);
                if (Array.isArray(json)) {
                    const names = json
                        .map(item => (typeof item === "string" ? item : item.name))
                        .filter(Boolean);
                    state.directories[path] = names;
                    return names;
                }
            } catch (jsonError) { /* abaikan */ }

            throw new Error("listing kosong");

        } catch (error) {

            /* Fallback: pakai manifest statis. */

            const key = Object.keys(MANIFEST_FILES)
                .find(name => path.includes("/" + name));

            const fallback = key
                ? MANIFEST_FILES[key].map(
                    entry => key === "sprites" ? entry + "/" : entry
                )
                : [];

            state.directories[path] = fallback;
            return fallback;

        }

    }


    function probeUrl(url) {

        if (state.probed.has(url)) {
            return Promise.resolve(state.probed.get(url));
        }

        return new Promise(resolve => {

            const image = new Image();

            const finish = ok => {
                state.probed.set(url, ok);
                resolve(ok);
            };

            image.onload = () => finish(true);
            image.onerror = () => finish(false);
            image.src = url;

            window.setTimeout(() => finish(false), 2500);

        });

    }


    /* Bangun index case/slug-insensitive untuk background. */

    async function buildBackgroundIndex() {

        if (state.bgIndex) {
            return state.bgIndex;
        }

        const entries = (await listDirectory(BG_BASE))
            .filter(name => /\.(png|jpe?g|webp)$/i.test(name));

        const index = new Map();

        entries.forEach(file => {
            index.set(slug(file), file);
            index.set(file.toLowerCase(), file);
        });

        state.bgIndex = index;
        return index;

    }


    window.VNAssets = {


        /* Selesaikan id scene (.rpy style) menjadi URL gambar nyata.
           candidateList = daftar nama berkas alternatif tanpa ekstensi. */

        async resolveBackground(id, candidateList = []) {

            /* 1) Peta manual eksplisit (paling akurat). */

            if (Object.prototype.hasOwnProperty.call(BG_FILE_MAP, id)) {

                const mapped = BG_FILE_MAP[id];

                if (mapped === null) return null;      // black screen

                return mapped.startsWith("../")
                    ? mapped                                  // path Scenes/ relatif
                    : BG_BASE + mapped;

            }

            /* 2) Index otomatis case/slug-insensitive. */

            const index = await buildBackgroundIndex();

            const tried = new Set();

            const candidates = [
                ...candidateList,
                id.replace(/^bg_/, ""),
                id,
                id.replace(/^bg_/, "").replace(/_/g, "-")
            ];

            for (const raw of candidates) {

                if (!raw || tried.has(raw)) continue;
                tried.add(raw);

                const direct = index.get(slug(raw));

                if (direct) {
                    return BG_BASE + direct;
                }

            }

            /* Probe terakhir: coba ektensi umum pada kandidat pertama. */

            for (const raw of candidates.slice(0, 3)) {

                for (const ext of [".png", ".jpg", ".jpeg", ".webp"]) {

                    const url = BG_BASE + raw + ext;

                    if (await probeUrl(url)) {
                        return url;
                    }

                }

            }

            return null;

        },


        /* Selesaikan karakter + ekspresi menjadi URL sprite nyata.
           strategy:
             - "numbered" : sprites/<Folder>/<n>.png
             - "descriptive": sprites/<Folder>/<folder>-<expr>.png
             - "root"      : sprites/<Base>_<expr>.png lalu <Base>.png
        */

        async resolveSprite(folder, expression, strategy = "numbered", baseFile = null) {

            /* 0) Peta manual ekspresi .rpy -> nama berkas nyata. */

            const manual = EXPRESSION_MAP[folder];

            if (manual && expression && manual[expression]) {

                const file = manual[expression];

                const direct = SPRITE_BASE + folder + "/" + file + ".png";

                if (await probeUrl(direct)) {
                    return direct;
                }

            }

            const dirPath = SPRITE_BASE + folder + "/";
            const entries = await listDirectory(dirPath);

            const files = entries.filter(name => /\.(png|jpe?g|webp)$/i.test(name));

            const pickFrom = (wantedSlugs) => {

                for (const wanted of wantedSlugs) {

                    const hit = files.find(file => slug(file) === wanted);

                    if (hit) {
                        return dirPath + hit;
                    }

                }

                return null;

            };

            if (expression) {

                let found = null;

                if (strategy === "descriptive") {

                    found = pickFrom([
                        slug(`${folder}-${expression}`),
                        slug(`${folder}_${expression}`),
                        slug(expression)
                    ]);

                } else if (strategy === "root") {

                    found = pickFrom([
                        slug(`${baseFile}_${expression}`),
                        slug(`${baseFile}-${expression}`)
                    ]);

                } else {

                    found = pickFrom([
                        slug(expression),
                        slug(`${folder}_${expression}`),
                        slug(`${folder}${expression}`)
                    ]);

                }

                if (found) {
                    return found;
                }

            }

            /* Tanpa ekspresi / tidak ketemu: cari pose netral. */

            const neutralSlugs = [
                "datar", "default", "netral", "normal", "idle", "1"
            ];

            if (strategy === "descriptive") {
                const fallback = pickFrom([slug(`${folder}-datar`), ...neutralSlugs]);
                if (fallback) return fallback;
            }

            const anyOne = pickFrom(["1", ...neutralSlugs])
                || (files.length ? dirPath + files[0] : null);

            if (anyOne) {
                return anyOne;
            }

            /* Probe root sprite (Rachel.png dst). */

            const rootUrl = baseFile
                ? SPRITE_BASE + baseFile + (expression ? "_" + expression : "") + ".png"
                : null;

            if (rootUrl && await probeUrl(rootUrl)) {
                return rootUrl;
            }

            const plainRoot = baseFile ? SPRITE_BASE + baseFile + ".png" : null;

            if (plainRoot && await probeUrl(plainRoot)) {
                return plainRoot;
            }

            return null;

        },


        /* Scene CG per-bab di game/assets/Scenes/<bab>/ */

        async resolveSceneCG(subfolder, name) {

            const dirPath = SCENE_BASE + subfolder + "/";
            const entries = await listDirectory(dirPath);

            const files = entries.filter(f => /\.(png|jpe?g|webp)$/i.test(f));

            const wanted = slug(name);

            const hit = files.find(f => slug(f) === wanted)
                || files.find(f => slug(f).includes(wanted));

            if (hit) {
                return dirPath + hit;
            }

            for (const ext of [".png", ".jpg", ".jpeg", ".webp"]) {
                const url = dirPath + name + ext;
                if (await probeUrl(url)) return url;
            }

            return null;

        },


        warmup() {

            /* Pra-load manifest agar keputusan show()/scene() sinkron. */

            const folders = [...new Set(Object.values(SPRITE_FOLDER_ALIAS))];

            return Promise.all([
                buildBackgroundIndex(),
                ...folders.map(folder => listDirectory(SPRITE_BASE + folder + "/"))
            ]).then(() => {
                state.built = true;
            });

        },

        isBuilt() {
            return state.built;
        },

        /* Akses data peta untuk konfigurasi/UI lain. */

        SPRITE_FOLDER_ALIAS,
        FOLDER_STRATEGY,
        EXPRESSION_MAP,
        BG_FILE_MAP,
        SPRITE_BASE,
        BG_BASE

    };

})();
