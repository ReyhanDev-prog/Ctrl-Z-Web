/* =========================================================
   CTRL+Z — BAB 0
   Migrasi dari bab0.rpy & Polishing Test Suite
========================================================= */

label("normal_story", () => {

    playMusic("audio/music/chill.mp3", { volume: 1 });

    scene("bg_classroom_day", "crossfade");

    narrator("Aku sedang mengikuti perkuliahan. Kebetulan, sekarang tidak ada mata kuliah. Aku harus menunggu jam berikutnya.");
    narrator("Alih-alih pulang, aku memutuskan untuk tetap di kelas.");
    narrator("Aku belum punya teman...");
    narrator("Menyedihkan.");

    // TEST POLISHING: Sprite entrance with slide-bottom and typewriter effect
    show("rachel", "senyum", "slide-bottom");

    unknown_man("Hai [player_name]! Kamu lagi apa nih? Ngobrol sama yang lain kek.");
    player_name("Hai juga, eumm... kamu siapa?");

    // TEST POLISHING: Dynamic sprite expression change (Rachel marah)
    show("rachel", "marah", "slide-bottom");

    unlockCharacter("rachel");

    rachel("Aku Rachel! Temen sekelas kamu!");
    rachel("Masa kamu nggak tahu sih?");


    menu({

        "Oh! Rachel! Aku baru inget, kamu yang duduk di depan ya?": () => {

            show("rachel", "marah");

            rachel("Dasar lemot!");

            pause(1);

            show("rachel", "kaget");

            rachel("Ehh... maaf, kelepasan.");

        },

        "Maaf, aku lupa": () => {

            show("rachel", "marah");

            rachel("Ih kamu nggak ingat aku? Padahal aku sering duduk di depan kamu!");

        }

    });


    show("rachel", "senyum");

    rachel("BTW, kamu tahu nggak?");
    rachel("Ada kabar terbaru soal teknologi yang lagi dikembangin, lho.");

    show("rachel", "bingung");

    rachel("Katanya sih, ini bakal jadi penemuan paling gila sepanjang sejarah!");

    show("rachel", "senyum");

    rachel("Menurut kamu gimana?");


    menu({

        "Ah, aku nggak ngikutin berita itu": () => {

            addAffection("rachel", -1);

            show("rachel", "cemberut");

            rachel("Oh gitu ya...");

            narrator("Rachel terlihat kecewa karena kamu nggak tertarik dengan topik yang dia suka.");

            rachel("Yah, mungkin aku bakal cari temen ngobrol lain yang lebih ngerti.");
            rachel("Tapi makasih udah dengerin aku, ya.");

            hide("rachel", "dissolve");

            narrator("Rachel terlihat kecewa karena merasa kamu nggak menarik.");

            scene("bg_black", "dissolve");

            jump("rachel_dingin");

        },


        "Tentang penemuan itu ya!? Menurutku sih itu bisa ngubah hidup manusia banget": () => {

            addAffection("rachel", 1);

            show("rachel", "senyum");

            narrator("Rachel terlihat antusias karena nemuin seseorang yang punya minat yang sama.");

            rachel("Iya kan!? Aku juga penasaran banget. Gimana kalau kita coba selidikin bareng?");


            menu({

                "Ide bagus! Aku juga penasaran banget!": () => {

                    show("rachel", "ketawa");

                    rachel("Nice! Aku suka semangatmu!");

                },

                "Hmm... Aku nggak tahu, bisa aja itu malah berbahaya": () => {

                    show("rachel", "ketawa");

                    rachel("Ahahaa, kamu lebay banget deh. Kita kan belum tahu, bisa aja itu bermanfaat buat kita.");

                    player_name("Iya juga sih... Oke deh, aku ikut kamu aja.");

                }

            });

        }

    });


    jump("bab0");

});


/* =========================================================
   BAB 0 — HARI BERIKUTNYA
========================================================= */

label("bab0", () => {

    scene("bg_school_hallway_day", "fade");

    narrator("Setelah kelas selesai, aku dan Rachel berjalan pulang bersama.");

    scene("bg_apartment_exterior", "fade");

    narrator("Beberapa jam kemudian, Aku dan Rachel pulang ke rumah masing-masing.");
    narrator("Ternyata... Aku dan Rachel itu tetanggaan. Padahal selama ini cuma lihat dia di sekolah.");

    show("rachel", "kaget");

    rachel("Serius!? Kamu tinggal di sini juga?");

    player_name("Iya, aku juga nggak nyangka. Mungkin ini takdir? Haha.");
    player_name("Haha...");

    show("rachel", "senyum", "dissolve");

    stopMusic(1);

    player_name("...");

    show("rachel", "marah");

    playMusic("audio/music/chill.mp3", { volume: 1 });

    rachel("A-apa sih kamu, ngomongnya aneh banget!");

    show("rachel", null, "dissolve");

    rachel("Ehem... ja-jadi, besok kamu bisa datang ke Kafe Hoshizora?");

    player_name("Kenapa nggak di rumahmu aja? Atau rumahku?");

    show("rachel", "marah");

    rachel("D-dasar kamu! Kita baru kenalan, kamu udah ngajak ke rumah aja!?");
    rachel("Pokoknya kita ketemuan di sana! Aku nggak sembarangan ngundang orang ke kamarku, oke?");

    player_name("I-iya, maaf... Aku janji bakal datang kok.");

    show("rachel", "ketawa");

    rachel("Sip. Sampai jumpa besok~");

    hide("rachel", "dissolve");

    playSFX("audio/sfx/door-slam.mp3");

    narrator("Rachel masuk ke ruangannya.");

    player_name("Imut banget si Rachel...");

    scene("bg_black", "dissolve");

    centered("Keesokan harinya, aku bergegas ke Kafe Hoshizora.");

    scene("bg_city_morning", "dissolve");

    narrator("Aku telat karena semalam tidur terlalu larut...");

    scene("bg_cafeteria_day", "dissolve");

    narrator("Sesampainya di kafe, aku lihat Rachel sudah datang duluan.");

    show("rachel", "marah", "dissolve");

    rachel("Lama banget sih!?");
    rachel("Kita janjian satu jam yang lalu, dan kamu baru nongol sekarang!?");
    rachel("Apa yang bikin kamu telat segitunya, hah?");


    menu({

        "Maaf, aku kemarin terlalu mikirin kamu": () => {

            pause(1);

            show("rachel", "senyum");

            rachel("A-apa sih kamu, suka tiba-tiba ngomong gitu...");

        },

        "Maaf, kemarin aku terlalu mikirin penemuan yang kita bahas itu": () => {

            show("rachel", "kaget");

            rachel("Hah!? Sampe nggak bisa tidur gitu? Parah sih!");

        }

    });


    stopMusic(1);

    pause(0.5);

    playMusic("audio/music/fog.mp3", { volume: 1 });

    show("rachel");

    rachel("Jadi, kamu dapet info apa dari penelusuranmu kemarin?");

    player_name("Aku baru dapet petunjuk. Teknologi itu dikembangin sama perusahaan bernama X-Tech, dan pemimpinnya adalah...");

    rachel("Dr. Marcuz Holloway.");

    player_name("Lah? Kamu tahu juga?");

    rachel("Aku punya kenalan yang kerja di sana. Tapi Dr. Marcuz itu... katanya sih orangnya super misterius.");

    hide("rachel", "dissolve");

    scene("bg_lobby_x", "dissolve");

    rachel("Dan belum jelas apa sebenarnya motivasi dia ngembangin teknologi ini.");

    player_name("Tapi kamu tahu soal CTRL+Z, kan?");

    rachel("Sayangnya belum banyak info yang aku dapet. Kontaknya juga susah banget dihubungi akhir-akhir ini.");
    rachel("Aku udah coba nyari dia, tapi kayaknya dia lagi ngilang.");

    player_name("Tapi kamu tahu lokasi perusahaannya?");

    rachel("Iya, aku tahu... tapi jujur aja, itu tempat yang berisiko banget.");
    rachel("Aku nggak mau nekat dateng ke sana tanpa persiapan.");

    player_name("Berarti sekarang kita harus gali informasi lebih dalam soal perusahaan ini.");

    rachel("Hmm... tapi aku ragu kamu bisa dapet info yang lebih banyak.");

    player_name("Mungkin... tapi aku nggak akan nyerah. Aku akan coba, sekecil apa pun peluangnya.");

    scene("bg_cafeteria_day", "dissolve");

    show("rachel", "kaget");

    addAffection("rachel", 1);

    player_name("Mulai sekarang, kita kerja sama buat ungkap rahasia di balik teknologi ini.");
    player_name("Tapi aku butuh bantuanmu.");

    show("rachel");

    rachel("...");
    rachel("Oke, kita tutup pertemuan hari ini. Selanjutnya, kita cari orang yang mungkin punya koneksi ke perusahaan itu.");

    player_name("Siap!");

    hide("rachel", "dissolve");

    scene("bg_black", "dissolve");

    stopMusic(0);

    jump("diskusi");

});


/* =========================================================
   DISKUSI — KEDATANGAN LIAM
========================================================= */

label("diskusi", () => {

    wait(0.5);

    centered("Pagi hari di Kurokawa Institute of Technology");

    playSFX("audio/sfx/keyboard_fast.mp3", { volume: 0.5 });

    pause(1.5);

    playMusic("audio/music/chill.mp3", { volume: 1 });

    scene("bg_classroom_day");

    narrator("Aku menghampiri Rachel di kelas.");

    show("rachel", null, "dissolve");

    player_name("Aku harus ngobrol sama kamu abis ini.");

    show("rachel", "kaget");

    rachel("Eh!? Kamu dapet info yang kita cari kemarin?");

    player_name("Belum pasti sih... tapi aku nemu sesuatu yang menarik.");

    show("rachel", "marah");

    rachel("Kamu kalo ngasih info harus jelas dulu dong.");

    player_name("...");

    show("rachel", "marah");

    hpunch();

    rachel("WOY, DENGER GAK SIH!?");

    hide("rachel", "dissolve");

    scene("liam_baca", "dissolve");

    pause(2);

    rachel("Eh, kamu naksir ke dia?");

    player_name("Eh, nggak, cuman...");
    player_name("Dia cantik juga ya?");

    rachel("Mulaii... kita kan mau diskusi, bukan cari bini!");
    rachel("Tapi iya juga sih, si Liam itu jenius banget. Dia selalu dapat nilai tertinggi di kelas.");

    player_name("Iri ya?");

    rachel("Ishh.. mulai...");

    player_name("Dilihat-lihat dia jarang ngobrol sama orang lain.");

    rachel("Ya, biasa lah kutu buku gak mau diganggu.");
    rachel("Gimana kalau kita coba ajak dia gabung? Siapa tau bisa bantu banyak.");

    player_name("Wah... kamu pinter juga ya kalau urusan 'manfaatin' orang. Tapi aku setuju.");
    player_name("Ayo, abis kelas ini langsung kita samperin.");

    hide("rachel", "dissolve");

    scene("bg_black", "dissolve");

    centered("Setelah kelas selesai, Aku dan Rachel mendekati Liam yang masih duduk di mejanya.");


    menu({

        "A-anu...": () => {

            scene("bg_classroom_day");

            narrator("Aku nyoba manggil Liam... tapi dia nggak noleh sama sekali.");
            narrator("Serius banget baca bukunya.");

            show("rachel", "marah");

            narrator("Rachel mulai kelihatan kesal.");

            hide("rachel", "dissolve");

        },


        "Hai, Liam!": () => {

            scene("bg_classroom_day");

            show("liam", null, "dissolve");

            liam("Hmm?");

        }

    });


    unlockCharacter("liam");

    show("liam");

    liam("Ada apa?");

    player_name("Setelah ini kamu kosong? Kita pengen ngobrol bentar.");

    liam("...");

    narrator("Asik bener ni orang baca bukunya.");
    narrator("Rachel yang dari tadi nahan diri akhirnya nggak tahan lagi.");

    hide("liam");

    show("rachel", "marah");

    playSFX("audio/glass-break.mp3", { volume: 0.3 });

    hpunch();

    rachel("WOY! Lu diajak ngobrol, dengerin kek!");


    menu({

        "Sabar Rachel!": () => {

            hide("rachel", "marah");

            player_name("Liam, jadi gini, kita punya sesuatu yang penting buat dibahas. Kamu tertarik nggak?");

            show("liam");

            liam("... Tentang apa?");

            narrator("Aku pun menjelaskan semuanya ke Liam dari teknologi misterius, sampai perusahaan X-Tech.");
            narrator("Ekspresinya tenang... tapi matanya gak bisa bohong.");

            addAffection("liam", 1);

            player_name("Jadi, kamu mau ikut bareng kami nyelidikin ini lebih jauh?");

            show("liam", "senyum");

            liam("Heehhh... kedengerannya menarik. Baiklah, aku ikut.");

            hide("liam", "senyum");

            scene("bg_black", "dissolve");

        },


        "Iya bener, sok jual mahal banget sih kamu": () => {

            addAffection("liam", -1);

            narrator("Liam langsung diam. Tatapannya datar. Sepertinya dia malas menanggapi.");
            narrator("Kami pun menyerah.");

        }

    });


    ifElse(
        () => getAffection("liam") >= 1,
        () => jump("bab1A"),
        () => jump("pendekatan_liam")
    );

});


/* =========================================================
   RACHEL DINGIN
========================================================= */

label("rachel_dingin", () => {

    scene("bg_classroom_day", "dissolve");

    player_name("Sepertinya Rachel kecewa sama aku...");
    player_name("Aku merasa dia jadi lebih dingin sama aku.");
    player_name("Mungkin aku harus usaha lebih keras supaya dia percaya sama aku.");
    player_name("Hmm...");
    player_name("Aku deketin Rachel lagi deh.");

    narrator("Aku deketin Rachel lagi.");

    player_name("Rachel, maaf ya tadi aku nggak terlalu tertarik sama topik yang kamu suka.");
    player_name("Aku janji bakal lebih perhatian sama kamu.");

    centered("(Rasanya aku kaya gombalin si Rachel ya?)");

    show("rachel", null, "dissolve");

    pause(1);

    show("rachel", "marah");

    rachel("Ih, kamu gombal banget sih!");

    show("rachel", "senyum");

    rachel("Tapi yaudahlah, aku maafin deh.");

    addAffection("rachel", 1);

    hide("rachel", "dissolve");

    scene("bg_black", "dissolve");

    narrator("Setelah itu, hubungan aku dan Rachel jadi lebih baik.");
    narrator("Kelas akan dimulai.");

    jump("bab0");

});


/* =========================================================
   LIAM NORMAL STORY — ROUTE ALTERNATIF
========================================================= */

label("liam_normal_story", () => {

    unknown_man("...");
    unknown_man("[player_name]..!");
    unknown_man("[player_name]..!!");

    hpunch();

    rachel("WOY, DENGER GAK SIH!?");

    hide("rachel", "dissolve");

    scene("liam_baca", "dissolve");

    pause(2);

    playMusic("audio/chill.mp3", { volume: 1 });

    rachel("Eh, kamu naksir ke dia?");

    player_name("...");
    player_name("...");

    rachel("Daritadi kamu diem mulu ih");
    rachel("Awas kerasukan...");

    player_name("Ughh.... hiks...");

    rachel("Lah ini mah beneran kerasukan");

    player_name("Liam...");

    rachel("Kamu kenapa sih!?");

    player_name("Ohh.. n-nggak ada apa-apa...");
    player_name("Ngomong apa tadi?");

    rachel("Aneh banget kamu ih");

    player_name("Maaf tadi aku inget sesuatu");

    rachel("Hah? Apaan?");

    player_name("Waifu aku kemarin mati");

    rachel("...");
    rachel("Cengeng amat ih... Ya gak apa-apa kali");

    player_name("Habis ceritanya seru, jadi kebawa emosi");

    rachel("Iya.. iya.. sekarang kita ke tempat Liam dulu");

    scene("bg_black", "dissolve");


    menu({

        "...": () => {

            scene("bg_classroom_day");

            narrator("Hatiku campur aduk antara takut dan senang");
            narrator("Tapi kali ini aku gak akan buat kesalahan lagi");

            show("rachel", "marah");

            narrator("Rachel mulai kelihatan kesal.");

            hide("rachel", "dissolve");

        },

        "Liam...": () => {

            scene("bg_classroom_day");

            show("liam", null, "dissolve");

            liam("Hmm?");

        }

    });


    unlockCharacter("liam");

    show("liam");

    liam("Ada apa?");

    player_name("...");

    liam("...");

    rachel("Maaf Liam, orang ini emang aneh");

    liam("Kalian ada perlu apa?");

    rachel("Kita punya sesuatu yang penting buat dibahas. Kamu tertarik nggak?");

    show("liam");

    liam("... Tentang apa?");

    narrator("Rachel pun menjelaskan semuanya ke Liam dari teknologi misterius, sampai perusahaan X-Tech.");
    narrator("Aku masih gak bisa ngomong karena syok berat");

    addAffection("liam", 1);

    rachel("Jadi, kamu mau ikut bareng kami gak?");

    show("liam", "senyum");

    liam("Heehhh... kedengerannya menarik. Baiklah, aku ikut.");

    hide("liam", "senyum");

    scene("bg_black");

    VN.setState("story.bab1.liam_route", true);

    jump("liam_route");

});


label("liam_route", () => {

    wait(0.6);

    scene("bg_black");

    narrator("Aku harus mengulang lagi?");
    narrator("Apa aku harus fokus selamatin Liam?");
    narrator("Apa aku harus jujur ke Liam?");

    jump("bab1A");

});


/* =========================================================
   PENDEKATAN LIAM
========================================================= */

label("pendekatan_liam", () => {

    const liamAffection =
        getAffection("liam");

    const rachelAffection =
        getAffection("rachel");


    if (
        liamAffection <= 1
        && rachelAffection <= 1
    ) {

        jump("coming_soon");

        return;

    }


    if (liamAffection <= 1) {

        scene("bg_classroom_day", "fade");

        narrator("Aku harus membuat Liam tertarik padaku.");

        player_name("Bagaimana cara agar aku menarik perhatian Liam?");


        menu({

            "Tanya Rachel": () => {

                player_name("Rachel, gimana cara aku dapetin perhatian si Liam?");

                show("rachel", "kaget");

                pause(1.5);

                show("rachel", "sombong");

                rachel("Ciee kamu naksir yaa, hahaha.");

                player_name("Sembarangan, kamu sendiri yang mau ngajak Liam buat kerjasama.");

                show("rachel", "senyum");

                rachel("Hmm.. coba kamu ajak dia ngobrol tentang pelajaran atau sebuah kontroversi seputar keamanan siber.");

                player_name("Ide bagus.");

                hide("rachel", "senyum");

                narrator("Aku menghampiri Liam.");

                player_name("Hai Liam! Maaf aku ngatain kamu.");

                liam("...");


                menu({

                    "Aku mau nanya pendapat kamu tentang maraknya kasus akhir-akhir ini": () => {

                        player_name("Liam, kamu nggak ngerasa akhir-akhir ini makin banyak kasus data orang diretas?");

                        liam("Hmm? Maksudmu kasus bocornya data kampus sama perusahaan itu?");

                        player_name("Iya. Gila aja, seolah-olah sistem keamanan kita tuh rapuh banget.");

                        liam("Sebenarnya bukan sekadar rapuh... ada tiga kemungkinan.");

                        player_name("Tiga?");

                        liam("Satu, sistemnya memang outdated. Dua, ada orang dalam yang sengaja ngejual data. Dan tiga... lawannya terlalu pintar.");

                        narrator("Nada suaranya rendah, matanya tajam. Untuk sesaat, suasana jadi serius.");

                        player_name("Kedengarannya serem juga ya...");

                        liam("Heh, tapi justru itu bikin menarik. Setiap lubang keamanan itu kayak puzzle buat dipecahkan.");

                        narrator("Aku dan Liam terus mengobrol panjang soal kasus itu. Anehnya, dia terlihat jauh lebih terbuka dari biasanya.");

                        addAffection("liam", 1, "Afeksi Liam bertambah");

                        scene("bg_black", "dissolve");

                        pause(1);

                        jump("bab1A");

                    },


                    "Aku mau nanya tentang materi IDS dan IPS": () => {

                        player_name("Eh, aku masih agak bingung deh soal IDS sama IPS. Bisa jelasin nggak?");

                        liam("Oh, itu? Hahaha... akhirnya kamu nanya juga.");

                        player_name("Kok ketawa sih?");

                        liam("Soalnya aku pikir kamu nggak bakal peduli. Oke, gini...");

                        liam("IDS itu Intrusion Detection System, fungsinya buat deteksi kalau ada aktivitas mencurigakan.");

                        liam("Sedangkan IPS itu Intrusion Prevention System, bukan cuma deteksi tapi langsung blokir serangan.");

                        player_name("Ohhh... jadi IDS cuma kasih alarm, sedangkan IPS itu kayak satpam yang langsung hajar malingnya?");

                        liam("...Analogi kamu... agak kasar, tapi iya juga sih.");

                        narrator("Liam terlihat agak malu tapi jelas dia semangat ngejelasinnya.");

                        player_name("Wah, ternyata gampang dimengerti kalo kamu yang jelasin. Lain kali aku belajar dari kamu aja deh.");

                        liam("Te-... terima kasih.");

                        addAffection("liam", 2, "Afeksi Liam bertambah");

                        scene("bg_black", "dissolve");

                        pause(1);

                        jump("bab1A");

                    }

                });

            }

        });


        return;

    }


    if (rachelAffection <= 1) {

        scene("bg_classroom_day", "fade");

        narrator("Aku harus cari cara supaya Rachel nggak terus dingin ke aku.");

        player_name("Hmm... gimana ya caranya deketin Rachel...");


        menu({

            "Tanya Liam": () => {

                player_name("Liam, boleh tanya sesuatu nggak?");

                show("liam");

                liam("Kalau tentang pelajaran, silakan. Kalau tentang cinta-cintaan... nggak deh");

                player_name("Ehehe... ya semacam itu.");

                liam("Kukira kamu lagi puber.");

                player_name("Bukan gitu... aku cuma butuh saran.");

                liam("Kalau menurutku, Rachel tipe orang yang lebih menghargai sesuatu yang ada makna personal. Nggak harus mahal, tapi harus ngena di hati.");

                player_name("Barang kaya apa?");

                liam("Itu kamu yang harus tau. Kamu lebih sering sama dia dibanding aku.");

                hide("liam", "dissolve");

                player_name("Iya juga sih. Makasih, Liam.");

                narrator("Aku mulai mikirin serius hadiah apa yang bisa bikin Rachel luluh.");


                menu({

                    "Beli barang kesukaan Rachel": () => {

                        player_name("Ehh, aku gak tau Rachel suka apaan.");
                        player_name("Takutnya aku kasih barang yang dibenci Rachel lagi.");

                        narrator("Aku harus cari tahu apa yang Rachel suka.");

                        jump("tanya_rachel");

                    },


                    "Tanya Rachel secara langsung": () => {

                        player_name("Rachel, aku mau nanya deh... kalau disuruh milih, kamu lebih suka cokelat atau boneka?");

                        rachel("Hah?! Ngapain kamu tiba-tiba nanya gitu?");

                        player_name("A-anu... cuma penasaran aja, buat... referensi.");

                        rachel("Referensi apaan? Buat siapa emangnya?");


                        menu({

                            "Buat orang yang aku suka": () => {

                                rachel("Tsk... kenapa tanya aku kalau buat orang lain? Aneh banget.");

                                player_name("Ya... aku pikir selera cewek mirip-mirip lah.");

                                rachel("Hmm... kalau aku sih lebih suka buku. Tapi jangan salah pilih, ya.");

                                player_name("Oh, kamu suka baca?");

                                rachel("Ya jelas lah, kamu aja yang nggak pernah merhatiin.");

                                player_name("Hehe, noted. Makasih sarannya.");

                                narrator("Aku meninggalkan Rachel sambil terus mikirin kata-katanya.");

                            },


                            "Buat kamu": () => {

                                rachel("E-Eh?! K-kamu itu apaan sih tiba-tiba ngomong gitu!");

                                player_name("Hahaha, bercanda kok. Maksudnya buat orang yang aku suka.");

                                rachel("Tsk... dasar usil, ih.");

                                player_name("Tapi kalau menurut kamu, cewek lebih suka apa?");

                                rachel("Aku sih sukanya buku. Tapi itu kan aku, bukan berarti orang lain sama.");

                                player_name("Hmm... noted. Jadi kamu suka baca, ya?");

                                rachel("Udah dari dulu kali. Kamu aja yang baru sadar.");

                                player_name("Hehe, baiklah. Makasih, Rachel.");

                                narrator("Aku pergi sambil nyengir, tapi dalam hati catet: Rachel suka buku.");

                            }

                        });

                    }

                });


                jump("beli_buku");

            }

        });


        return;

    }


    jump("bab1A");

});
