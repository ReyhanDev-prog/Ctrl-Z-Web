/* =========================================================
   CTRL+Z — BAB 1
   Migrasi dari bab1.rpy
========================================================= */

label("bab1A", () => {

    scene("bg_black", "dissolve");

    unlockBab(1, true);

    if (VN.getState("story.bab1.liam_route") === null) {
        VN.setState("story.bab1.liam_route", false);
    }

    centered(
        "Keesokan harinya, Aku bertemu dengan Liam dan Rachel di kafe langganan kami."
    );

    scene("bg_cafeteria_day", "fade");

    stopMusic(0);
    playMusic("audio/music/chill.mp3", { volume: 1 });

    show("liam", null, "dissolve");

    liam("Aku berhasil mengumpulkan informasi yang kalian cari.");

    const liamRoute = () =>
        Boolean(VN.getState("story.bab1.liam_route"));


    menu({

        "Informasi yang kita butuhkan?": {
            condition: () => !liamRoute(),
            action: () => {

                player_name("Eh? Informasi apa maksudmu?");

                hide("liam");
                show("rachel", "marah");

                hpunch();
                rachel("{size=60}{b}Astaga, kamu ini!{/b}{/size}");

                rachel("Kita lagi nyari data terakhir soal temanku yang kerja di X-Tech!");
                rachel("Kamu pelupa banget sih!");

                hide("rachel");

            }
        },


        "Makasih, Liam": () => {

            pause(0.5);

            show("liam", "malu", "dissolve");

            addAffection("liam", 1, "Afeksi Liam bertambah");

            pause(1);

            liam("S-{w=1.0}{cps=20}sama-sama...{/cps}");

            hide("liam");

        },


        "Kamu ketemu Ethan, ya?": {
            condition: liamRoute,
            action: () => {

                pause(1);

                show("liam", "kaget");

                liam("Keren deh kamu bisa nebak bener");

                narrator("Aku sudah tau arah dari alur ini");

                player_name("Hehe, iya dong...");
                player_name("Gak sia-sia aku nonton film detektif");

                show("liam", "pegal");

                liam("Hah? Hubungannya apa coba?");
                liam("Bisa jadi kebetulan doang");

                hide("liam");

            }
        }

    });


    show("rachel");

    rachel("Ehem...");
    rachel("Menurut data, Ethan terakhir kali terlihat di halte bus, sore hari.");
    rachel("...");

    show("rachel", "kaget");

    rachel("Astaga! {w=0.8}Aku nggak nyangka dia muncul di tempat terbuka kayak gitu!");
    rachel("Biasanya dia selalu ngilang entah ke mana, {w=1.0}kayak ninja...");

    player_name("Eksistensinya bener-bener kayak bayangan, ya.");

    show("rachel", "senyum");

    rachel("Iya,{w=1.0} persis banget!");

    show("rachel");

    rachel("Tapi ada yang aneh...{w=1.0} ini nggak cocok sama kebiasaan dia.");

    player_name("Maksudmu...{w=1.5} dia sengaja muncul?{nw}");

    pause(0.4);

    playSFX("audio/sfx/glass-break.mp3", { volume: 2 });
    hpunch();
    stopMusic(0);

    pause(1);

    scene("bg_cafeteria_broken", "flash");

    pause(1);

    narrator(
        "Tiba-tiba, kaca jendela kafe pecah! Sesuatu melesat dari luar dan menghantamnya dengan keras!"
    );

    show("rachel", "kaget");

    playMusic("audio/music/pursuit.mp3");

    rachel("{b}Apa itu barusan?!{/b}");


    menu({

        "(Lihat ke luar jendela)": () => {

            narrator(
                "Aku cepat-cepat mengintip ke luar. Di kejauhan, seseorang berjaket hoodie hitam lari ke gang sempit."
            );

            player_name("Aku lihat seseorang! {w=1.0}Dia lari ke arah gang!");

            show("rachel", "marah");

            rachel("Jangan cuma berdiri! {w=0.5}Ayo kejar dia sekarang!");

            jump("bertemu_ethan");

        },


        "(Langsung keluar dari kafe)": () => {

            scene("bg_big_city", "fade");

            hide("rachel");

            narrator(
                "Tanpa pikir panjang, Aku, Rachel, dan Liam menerobos keluar. Suasana jalan mendadak mencekam."
            );
            narrator("Kita melihat seorang pria misterius berdiri di dekat jalan.");
            narrator(
                "Tiba-tiba, sebuah mobil hitam tanpa plat nomor berhenti mendadak di depan kita."
            );

            scene("car_in_city", "fade");

            narrator(
                "Fokus kita teralihkan oleh aura dari orang ini, sangat misterius."
            );

            rachel("Woy! {w=1.0}ayo cepet, ntar keburu jauh.");

            player_name("Diem, Rachel! {w=1.0}Kita harus hati-hati.");
            player_name("Kita nggak tahu siapa yang ada di dalam mobil itu.");
            player_name("Dan...{w=0.5} apa yang sebenarnya terjadi barusan.");

            liam("Nggak salah lagi,{w=0.5} dia pasti orangnya.");

            player_name(
                "Kamu jangan fitnah dulu dong, siapa tau cuman orang lewat aja"
            );

            scene("car_in_city2", "flash");

            narrator("Mobil itu sudah pergi, dan kita hanya bisa berdiri terpaku.");

            player_name("Aku harus menyelidikinya lebih dalam.");

            stopMusic(1);

            scene("bg_black", "dissolve");

            pause(2);

            jump("cafe_investigation");

        },


        "(Diem aja)": {
            condition: liamRoute,
            action: () => {

                rachel("Ayo kita kejar!");

                player_name("Sangat malas...");
                player_name(
                    "Kenapa kamu harus peduli? Kita fokus aja sama tujuan kita"
                );

                liam("Bener juga...");

                rachel("Akhh kalian ini!");

                narrator("Rachel langsung keluar mengejar pelaku itu");

                player_name("Rachel!!");

                liam("Kita ikut kejar juga?");

                menu({

                    "KEJAR!": () => {

                        player_name("CEPET LAH WOY!");

                        rachel("NAPA HARUS TELMI SIH, DIH!");

                        jump("bertemu_ethan");

                    },


                    "GAK": () => {

                        player_name(
                            "Udah, cukup kita aja yang lanjutin hal penting ini"
                        );
                        player_name(
                            "Kita bisa sharing dengan Rachel setelahnya"
                        );

                        liam("Yaudah...");

                    }

                });

            }
        }

    });

});


/* =========================================================
   BERTEMU ETHAN
========================================================= */

label("bertemu_ethan", () => {

    scene("bg_busstop_summer_cloudy", "fade");

    playSFX("audio/Running_footsteps.mp3");

    narrator(
        "Aku, Liam, dan Rachel akhirnya sampai di halte bus yang disebutkan Liam tadi."
    );

    show("rachel", "marah");

    rachel("Harusnya dia ada di sini... tapi, ke mana dia pergi?");

    hide("rachel");

    narrator(
        "Tiba-tiba, terdengar suara langkah kaki mendekat dari arah belakang."
    );

    playSFX("audio/sfx/step.mp3");

    pause(1);

    show("ethan", null, "dissolve");

    pause(2);

    unlockCharacter("ethan");

    hide("ethan");

    show("rachel", "kaget");

    rachel("{size=70}ETHAN!{/size}");

    hide("rachel");

    playMusic("audio/music/Awkwardly Perfect Day.mp3", { volume: 0.5 });

    show("ethan", "ketawa");

    ethan("Yo! Long time no see!");

    hide("ethan");

    player_name("...");


    ifThen(
        () => Boolean(VN.getState("story.bab1.liam_route")),
        () => player_name(
            "(Yah.. seperti inilah Ethan yang kukenal sebelumnya)"
        )
    );

    narrator(
        "Informasi dari Liam tentang Ethan sama sekali nggak cocok dengan kenyataan sekarang."
    );

    show("ethan", "ketawa");

    ethan("Haha, kebetulan banget bisa ketemu kalian di sini.");

    hide("ethan");

    show("rachel");

    rachel("Yah, ini sih bener-bener kebetulan... tapi...");

    show("rachel", "marah");

    hpunch();
    rachel("{size=45}KENAPA KAMU GAK PERNAH BALES CHAT DARI AKU, HAH!??{/size}");

    hide("rachel");

    show("ethan", "kaget");

    ethan("Whoa! Sabar dong, aku bisa jelasin semuanya.");

    show("ethan", "sedih");

    ethan("HP-ku udah rusak dari lama, terus aku gak sempet benerin...");

    hide("ethan");

    show("rachel", "marah");

    hpunch();
    rachel("{size=50}CUMA ITU!?{/size}");
    rachel("{size=50}KAMU KAN BISA DATENG KE RUMAH!{/size}");
    rachel("{size=50}MINIMAL KASIH KABAR KEK!{/size}");

    hide("rachel");

    show("ethan", "sedih");

    ethan(
        "Y-ya maaf... aku kira kamu udah punya pacar, jadi aku mikir mending gak ganggu."
    );

    hide("ethan");

    show("rachel", "marah");

    hpunch();
    rachel("{size=100}HAH!??{/size}");
    rachel("{size=50}SEJAK KAPAN AKU PUNYA PACAR!?{/size}");

    hide("rachel");

    show("ethan", "kaget");

    ethan("Aku liat kamu kemarin di kafe bareng cowok itu...");

    narrator("Ethan menunjuk ke arahku.");

    hide("ethan");

    show("rachel", "marah");

    hpunch();
    rachel("{size=40}HAAAAHH!?{/size}");
    rachel("{size=30}KITA GAK PACARAN KOK!{/size}");
    hpunch();
    rachel("{size=30}LAGIAN NGAPAIN JUGA AKU PACARAN SAMA DIA!!{/size}");

    hide("rachel");

    stopMusic(0);


    ifElse(
        () => Boolean(VN.getState("story.bab1.liam_route")),

        () => {

            player_name("...");
            player_name("(Aku udah tau jawabannya, tapi tetep aja nyesek)");
            player_name("Btw, kamu liat orang mencurigakan lewat sini?");

        },

        () => {

            narrator(
                "Kata-katanya barusan... entah kenapa menusukku cukup dalam."
            );

            player_name("Tertawa tapi terluka.");

            playMusic("audio/music/Awkwardly Perfect Day.mp3", { volume: 1 });

            show("ethan", "ketawa");

            ethan("Pfft... hahaha!");

            hide("ethan");

            show("ethan", "senyum");

            ethan(
                "Eh Rachel, kamu nggak sadar ya... kata-katamu nyakitin orang lain juga."
            );
            ethan(
                "Anyway, kenalin, aku Ethan. Temannya Rachel dari dulu banget."
            );
            ethan(
                "Dan, ya... dia emang suka ngegas kayak gitu, jadi dimaklumi aja ya."
            );

            hide("ethan");

            player_name("Gapapa kok, aku udah biasa sama Rachel.");
            player_name("Namaku [player_name], teman sekelasnya Rachel.");
            player_name("Dan itu... teman kita, itu Liam-");

            stopMusic(0);

            show("liam");

            liam("Cukup perkenalannya.");
            liam(
                "Ngomong-ngomong, kamu liat gak orang yang lari ke arah sini tadi?"
            );

            hide("liam");

        }
    );


    show("ethan");

    ethan("Hmm...{w=1.0} nggak tuh, aku juga baru sampe.");
    ethan(
        "Kebetulan banget sih, soalnya aku emang ada urusan ke sini."
    );

    hide("ethan");

    show("rachel");

    narrator("Rachel tiba-tiba tampak cemas.");

    rachel("Kamu... {w=1.0}terus kamu ngapain disini?");

    hide("rachel");

    show("ethan", "senyum");

    ethan("Yah.. {w=0.5}Itu.. {w=1.1}Bukan urusan kamu.");

    hide("ethan");

    show("rachel", "serius");

    rachel("Ethan, kami harus bicara denganmu sekarang...");

    narrator(
        "Rachel menjelaskan secara singkat tentang misi mereka pada Ethan."
    );

    hide("rachel");

    ethan("Oh gitu...");

    show("ethan", "senyum");

    ethan("Tapi mungkin kita obrolin ini besok aja ya.");

    show("ethan", "ketawa");

    ethan("Gue harus pergi sekarang. See ya!");

    hide("ethan");


    ifThen(
        () => Boolean(VN.getState("story.bab1.liam_route")),

        () => {

            player_name("Tunggu!");

            rachel("...");
            liam("...");

            ethan("Eyy, ada apa gerangan?");

            player_name("Aku mau ngobrol sama kamu...");
            player_name(" Hanya kita berdua.");

            narrator("Ethan melepas paksa tanganku dari bajunya");

            ethan("...");
            ethan("Aduhhh maaf ya, aku sibuk banget sekarang hehehe...");

            show("ethan", "ketawa");

            ethan("Aku pergi dulu!");

            pause(1);

            hide("ethan");

            pause(0.7);

        }
    );


    narrator("Ethan menaiki bus yang baru saja berhenti, dan pergi begitu saja.");

    show("liam");

    liam("Ada sesuatu yang dia sembunyikan.");


    ifThen(
        () => Boolean(VN.getState("story.bab1.liam_route")),

        () => {

            hide("liam");
            show("rachel");

            rachel("Kamu mau bahas apa sama Ethan?");

            menu({

                "(Kasih tau)": () => {

                    player_name("Aku mau bahas apa yang akan kita bahas");

                    rachel("Terus kenapa kamu pengen berdua?");
                    rachel("Kenapa kami gak diajak?");
                    rachel("Kamu meragukan kami?");

                    player_name("N-nggak! Bukan itu!");

                    rachel("Coba jelasin!");

                    player_name("Untuk sekarang aku belum bisa jelasin");
                    player_name("Aku belum ada bukti kuat");

                    rachel(
                        "Tapi kalo kita bareng, info bisa kita terima tanpa harus ada perantara!"
                    );
                    rachel("Huhh....");
                    rachel(
                        "Yaudah, kalo emang kamu mau berduaan, pergi aja"
                    );
                    rachel(
                        "Dengan syarat, kamu harus kasih info apapun tanpa ada yang disembunyiin"
                    );

                    player_name("Iya.. iya aku janji");

                    rachel("Oke deh, Aku pulang dulu");
                    rachel("Bye!");

                    hide("rachel");

                    pause(1);

                    liam("...");
                    liam("Yakin aku gak boleh ikut?");

                    player_name("Boleh...");

                    liam("Loh? Kenapa kamu pilih kasih?");

                    player_name("Nanti dah aku jelasin");

                    scene("bg_black", "dissolve");

                    stopMusic(2);

                    unlockBab(2);

                    pause(1);

                    centered("BAB 1 SELESAI");

                    playSFX("audio/keyboard_fast.mp3", { volume: 0.5 });

                    pause(2);

                    jump("bab2A");

                },


                "(Gak ngasih tau)(WIP)": () => {

                    player_name("Ini rahasia");

                }

            });

        }
    );


    player_name("Seriusan mau kita lepas gitu aja?");
    player_name(
        "Padahal nemuin dia itu susah banget, dan dia bisa jadi kunci informasi."
    );

    hide("liam");

    playMusic("audio/thinking.mp3", { volume: 0.4 });

    show("rachel", "bingung");

    rachel("Aku udah curiga dari awal.");

    show("rachel");

    rachel("Gak apa-apa, kita akan cari jalan sendiri.");
    rachel(
        "Dan aku yakin... dia terlibat dalam apa yang bakal kita temukan nanti."
    );

    hide("rachel");

    show("liam");

    liam(
        "Kalau gitu, kita lanjutkan lain waktu. Kayaknya mau turun hujan."
    );

    rachel("Oke, sampai jumpa, Liam!");

    hide("liam");

    pause(0.5);


    menu({

        "Rachel, kamu mau pulang bareng aku?": () => {

            show("rachel", "marah");

            rachel("NGGAK! KAMU DULUAN AJA!");

            pause(0.5);

            hide("rachel");

            narrator("Rachel langsung lari nyebrang jalan ke arah apartemennya.");

            player_name(
                "Lah... yang nyuruh aku pulang duluan, dia malah yang pergi duluan."
            );

        },


        "Rachel, aku pulang duluan ya": () => {

            show("rachel", "kaget");

            rachel("Loh? Kamu gak ngajak aku pulang bareng?");

            player_name("Eh, kalo kamu mau ikut, ya hayuk aja.");

            show("rachel", "ketawa");

            rachel("BERCANDAAA~");
            rachel("Ahahaha!");
            rachel("Bye! Aku pulang duluan~");

            pause(0.5);

            hide("rachel");

            narrator(
                "Rachel berlari ke seberang jalan dengan senyum cerah."
            );

            player_name("{size=60}Imut bangetttt...{/size}");

            pause(1);

            scene("diliatin", "dissolve");

            pause(1);

            narrator("...");

        }

    });


    scene("bg_black", "dissolve");

    stopMusic(2);

    unlockBab(2);

    pause(1);

    centered("BAB 1 SELESAI");

    playSFX("audio/keyboard_fast.mp3", { volume: 0.5 });

    pause(2);

    jump("bab2A");

});


/* =========================================================
   CAFE INVESTIGATION
========================================================= */

label("cafe_investigation", () => {

    scene("bg_cafeteria", "dissolve");

    playMusic("audio/thinking.mp3", { volume: 1 });

    narrator(
        "Aku kembali ke kafe, mencoba menenangkan diri dan menganalisis kejadian tadi."
    );
    narrator("Dan, ya...{w=1.0} selalu saja ada yang marah.");

    show("rachel", "marah");

    rachel(
        "Apaan sih! Aku nggak ngerti kenapa orang itu tiba-tiba muncul di sini."
    );
    rachel("Ada aja sesuatu yang absurd!");

    hide("rachel");

    pause(0.5);

    show("liam", "mikir", "dissolve");

    pause(1);

    player_name("Kamu... Mikir apa Liam?");

    liam("Rasanya aku familiar dengan mobil itu.");

    rachel("Kamu tau siapa pelakunya?");

    liam("Gak yakin, tapi aku yakin pernah melihatnya di suatu tempat");

    hide("liam");
    hide("rachel");

    pause(0.5);

    show("cafe", null, "dissolve");

    cafe_owner(
        "Hei,{w=0.3} kalian nggak apa-apa?{w=0.5} Dari tadi wajah kalian pucat."
    );
    cafe_owner("Mau aku buatin minuman hangat?");

    cafe_owner("Tapi udah itu bayar ya");

    player_name("...");

    cafe_owner("Hahahaha!");

    player_name("Kirain gratis,{w=0.2} ya udahlah");
    player_name(
        "Aku... {w=0.5}mau nanya sesuatu. Kamu kenal orang tadi? Yang mecahin kaca ini?"
    );

    cafe_owner(
        "Orang tadi? {w=0.5} Nggak, sama sekali nggak kenal. {w=0.5} Aku sudah lama kelola kafe ini, tapi nggak pernah lihat dia."
    );

    player_name("Mungkin dia punya masalah sama pengunjung sini?");

    cafe_owner(
        "Nggak ada. {w=0.4} Semuanya pelanggan tetap kok, anak kuliahan, pekerja kantoran, turis... {w=0.2}nggak ada yang aneh."
    );

    player_name("Jadi kamu bener-bener nggak tahu siapa dia?");

    cafe_owner(
        "Ya. {w=0.3}Dan kalau pun ada masalah, aku pasti ingat.{w=1.0} {cps=10}Wajah itu... {/cps}{w=0.5}benar-benar asing buatku."
    );

    hide("cafe");

    pause(1);

    narrator(
        "Aku berdiri, mencoba menenangkan diri. Saat melangkah keluar kafe, kakiku menyenggol sesuatu di tanah."
    );

    player_name("Hmmm?");

    playSFX("audio/item_pickup.ogg");

    player_name("Pecahan keramik?");

    liam("Kayanya dia pake itu deh");

    player_name("Bisa jadi, tapi aku bawa aja deh.");

    rachel("Kamu mau ngapain sama benda itu? Jadiin oleh-oleh?");

    player_name("Ya terserahku lah, kamu mana ngerti-");

    liam("Suuttt..!! Kalian ini mau dimanapun selalu berisik!");

    scene("bg_black", "dissolve");

    narrator(
        "Semakin banyak misteri yang menumpuk, rasanya... aku sudah masuk ke dalam permainan yang jauh lebih besar dari dugaanku."
    );
    narrator("Dan aku tidak bisa mundur sekarang.");

    VN.setState("story.bab1.mysterious_object", true);

    stopMusic(2);

    unlockBab(2);

    pause(2);

    centered("BAB 1 SELESAI");

    pause(2);

    narrator("Lanjut bab 2?");

    menu({

        "Lanjut": () => jump("bab2A"),

        "Nggak": () => exitToMenu()

    });

});


/* =========================================================
   TANYA RACHEL
========================================================= */

label("tanya_rachel", () => {

    scene("bg_classroom_day", "fade");

    player_name(
        "Rachel, aku mau tanya deh... kalau disuruh milih, kamu lebih suka cokelat atau boneka?"
    );

    show("rachel", null, "dissolve");

    rachel("Hah?! Ngapain kamu tiba-tiba nanya gitu?");

    player_name("A-anu... cuma penasaran aja, buat... referensi.");

    rachel("Referensi apaan? Buat siapa emangnya?");


    menu({

        "Buat orang yang aku suka": () => {

            rachel(
                "Tsk... kenapa tanya aku kalau buat orang lain? Aneh banget."
            );

            player_name(
                "Ya... aku pikir selera cewek mirip-mirip lah."
            );

            rachel(
                "Hmm... kalau aku sih lebih suka buku. Tapi jangan salah pilih, ya."
            );

            player_name("Oh, kamu suka baca?");

            rachel(
                "Ya jelas lah, kamu aja yang nggak pernah merhatiin."
            );

            player_name("Hehe, noted. Makasih sarannya.");

            narrator(
                "Aku meninggalkan Rachel sambil terus mikirin kata-katanya."
            );

        },


        "Buat kamu": () => {

            rachel(
                "E-Eh?! K-kamu itu apaan sih tiba-tiba ngomong gitu!"
            );

            player_name(
                "Hahaha, bercanda kok. Maksudnya buat orang yang aku suka."
            );

            rachel("Tsk... dasar usil.");

            player_name("Tapi kalau menurut kamu, cewek lebih suka apa?");

            rachel(
                "Aku sih sukanya buku. Tapi itu kan aku, bukan berarti orang lain sama."
            );

            player_name("Hmm... noted. Jadi kamu suka baca, ya?");

            rachel("Udah dari dulu kali. Kamu aja yang baru sadar.");

            player_name("Hehe, baiklah. Makasih, Rachel.");

            narrator(
                "Aku pergi sambil nyengir, tapi dalam hati catet: Rachel suka buku."
            );

        }

    });


    jump("beli_buku");

});


/* =========================================================
   BELI BUKU
========================================================= */

label("beli_buku", () => {

    scene("bg_street_summer_rain", "fade");

    playMusic("audio/romantic.mp3", { volume: 0.2 });

    narrator(
        "Aku berjalan menyusuri jalan kota yang ramai, lampu neon toko-toko mulai menyala satu per satu."
    );
    narrator(
        "Tujuanku jelas: toko buku. Kalau aku beneran mau bikin Rachel luluh, aku harus kasih sesuatu yang dia suka."
    );

    player_name("(Buku... Rachel suka buku. Tapi buku apa yang tepat?)");

    playMusic("audio/mid_theme.ogg", { volume: 0.1 });

    scene("bg_busstop_summer_night_rain", "fade");

    narrator(
        "Di persimpangan jalan, hujan gerimis turun pelan. Orang-orang berlarian sambil mengangkat payung."
    );
    narrator(
        "Saat aku hampir sampai di toko buku, mataku menangkap sosok aneh di seberang jalan."
    );

    playSFX("audio/step.mp3");

    narrator(
        "Orang itu memakai jas panjang hitam, wajahnya setengah tertutup masker. Cara jalannya tenang, terlalu tenang untuk keramaian malam seperti ini."
    );
    narrator(
        "Aku berhenti sejenak, jantungku berdetak lebih cepat."
    );

    player_name(
        "(Siapa dia...? Rasanya familiar... tapi aku nggak bisa ingat.)"
    );

    narrator(
        "Sosok itu lewat begitu saja tanpa menoleh. Aku sempat ingin mengejarnya, tapi—"
    );

    player_name(
        "(Nggak... jangan bodoh. Aku kesini buat Rachel, bukan buat cari masalah baru.)"
    );

    scene("bg_bookstore", "dissolve");

    narrator(
        "Aku masuk ke toko buku yang hangat dan nyaman. Lampu-lampu lembut menerangi rak-rak kayu yang penuh buku."
    );
    narrator("Bau khas kertas dan tinta menyambutku.");
    narrator(
        "Rak-rak tinggi dipenuhi ratusan buku, dari novel klasik, komik, sampai jurnal akademis."
    );

    player_name(
        "Hmm... Rachel bilang dia suka baca, tapi buku apa yang cocok ya?"
    );

    narrator(
        "Aku berjalan menyusuri lorong, jemariku menyapu punggung buku yang tertata rapi."
    );
    narrator(
        "Akhirnya aku mengambil sebuah buku yang menurutku pas: tidak terlalu berat, tapi cukup berkesan."
    );

    player_name("Kayaknya dia bakal suka ini...");

    narrator(
        "Aku membawa buku itu ke kasir dan membayarnya. Satu langkah kecil, tapi penting."
    );
    narrator(
        "Saat keluar dari toko, pikiranku masih memikirkan sosok misterius tadi."
    );

    player_name(
        "(Aku harus tetap fokus. Tapi... perasaan ini nggak enak. Seakan aku sedang diawasi.)"
    );
    narrator(
        "Aku langsung menaiki bus menuju apartemenku, berharap bisa memberikannya buku ini sebagai permintaan maaf."
    );

    jump("kasih_buku");

});


/* =========================================================
   KASIH BUKU
========================================================= */

label("kasih_buku", () => {

    scene("bg_train_night_rain", "fade");

    narrator("Ini udah malem, apa aku kasih ke Rachel sekarang ya?");
    narrator(
        "Ah nggak deh, kasian dia kalau aku ganggu jam istirahatnya."
    );
    narrator(
        "Aku putuskan untuk pulang dulu, besok pagi baru aku kasih ke Rachel."
    );

    scene("bg_black", "fade");

    pause(2);

    scene("bg_apartment_exterior", "fade");

    narrator(
        "Keesokan harinya, aku berdiri di depan apartemen Rachel dengan buku di tangan."
    );

    playSFX("audio/bell_door.mp3");

    show("rachel", null, "dissolve");

    rachel("Siapa ya? Oh, [player_name]?");

    narrator("Rachel membuka pintu dengan ekspresi kaget.");

    rachel("Ada apa kamu kesini?");

    player_name(
        "Aku... aku mau minta maaf atas kemarin. Ini, aku bawa sesuatu buat kamu."
    );

    show("rachel", "kaget");

    rachel("Hah? Apa ini?");
    rachel("...");
    rachel("Buku? Hmm... ini buku yang aku suka.");

    show("rachel");

    rachel("Tapi... kenapa kamu repot-repot kasih ini?");

    player_name(
        "Aku cuma mau bilang, aku minta maaf. Aku nggak mau hubungan kita jadi buruk karena kesalahanku."
    );

    show("rachel", "ketawa");

    rachel(
        "Hmm... aku nggak tahu harus bilang apa. Tapi terima kasih, [player_name]."
    );

    addAffection("rachel", 2, "Afeksi Rachel bertambah");

    jump("bab1A");

});


/* =========================================================
   REDEMPTION ARC — LIAM
========================================================= */

label("redemption_liam", () => {

    scene("bg_computer_lab", "fade");

    playMusic("audio/tech_somber.ogg");

    playSFX("audio/step.mp3");

    narrator(
        "Aku berjalan masuk ke ruang kerja Liam. Dia sedang duduk di depan laptopnya, mengetik cepat tanpa menoleh."
    );
    narrator("Suasana hening, hanya suara keyboard yang terdengar.");

    player_name("Liam... kita bisa bicara sebentar?");

    narrator(
        "Tidak ada respon. Jari-jarinya masih sibuk di atas keyboard."
    );

    player_name(
        "Aku tahu akhir-akhir ini aku bikin kacau. Aku banyak salah langkah, dan aku ngerti kenapa kamu marah."
    );
    player_name("Tapi aku nggak mau terus jadi beban buatmu.");

    show("liam", null, "dissolve");

    liam("Baru sadar sekarang? Kamu pikir ucapan itu cukup?");
    liam("Sekali salah, semua misi bisa gagal. Kita bisa mati, paham?");

    narrator(
        "Nada suaranya tajam. Aku menunduk, menerima kemarahannya."
    );

    player_name(
        "Makanya... kali ini aku mau buktiin. Aku belajar dari kesalahan."
    );

    narrator(
        "Aku duduk di kursi sebelah, membuka laptopku sendiri. Aku mulai mengutak-atik skrip kecil yang kemarin sempat kupelajari."
    );
    narrator("Liam melirik sekilas, ekspresinya skeptis.");

    liam("...Apa yang kamu lakuin?");

    player_name(
        "Bypass sederhana. Kalau kita hadapi firewall kayak kemarin, cara ini bisa jadi jalan pintas. Lihat."
    );

    playSFX("audio/keyboard_fast.ogg");

    narrator(
        "Tanganku gemetar sedikit, tapi aku fokus. Setelah beberapa detik, baris kode terakhir dieksekusi."
    );

    playSFX("audio/access-granted.mp3");

    glitch();

    centered(">>> ACCESS GRANTED <<<");

    pause(2);


    narrator(
        "Layar menunjukkan hasil positif. Aku menahan napas, menunggu reaksinya."
    );

    show("liam", null, "dissolve");

    liam(
        ".... Nggak buruk. Minimal kamu belajar sesuatu."
    );
    liam(
        "Aku nggak bakal langsung percaya seratus persen, tapi... ini awal yang lumayan."
    );

    player_name("Jadi... kamu bakal kasih aku kesempatan lagi?");

    liam("...");
    liam("Ya. Jangan bikin aku nyesel.");

    narrator(
        "Untuk pertama kalinya setelah sekian lama, wajah Liam terlihat lebih tenang. Ada secercah kepercayaan kembali muncul."
    );

    addAffection("liam", 2);

    jump("bab1A");

});


/* =========================================================
   LONELY ROUTE
========================================================= */

label("lonely_route", () => {

    comingSoon(
        "TO BE CONTINUED",
        "LONELY ROUTE // SIGNAL LOST"
    );

});
