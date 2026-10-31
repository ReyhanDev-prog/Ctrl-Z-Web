/* =========================================================
   CTRL+Z — BAB 5
   Migrasi ringkas + minigame hacking in-page.
========================================================= */

label("bab5A", () => {

    unlockBab(5, true);

    scene("bg_livingroom_night", "dissolve");

    playMusic("audio/decided.mp3", { volume: 0.5 });

    narrator("Aku dan Liam sedang duduk di ruang tamu rumahku.");
    narrator(
        "Apa yang kita temukan kemarin masih muter-muter di kepalaku."
    );
    narrator("Aku mulai ragu... Ethan bukan orang sembarangan.");

    show("liam", null, "dissolve");

    liam("Terus... langkah kita selanjutnya apa?");

    player_name("Hah? Bukannya kamu yang nentuin?");

    liam("Aku cuma nguji kamu. Soalnya kamu tuh pelupa parah.");

    player_name("Wah, jahat banget kamu ngomongnya.");

    narrator("....");


    menu({

        "Sebenernya lupa": () => {

            player_name("Hehehe...{w=1.0} aku lupa beneran sih.");
            player_name("Kalo gak salah kita ke taman dulu kan?");

            stopMusic(0.5);

        },


        "Ngasal jawab": () => {

            player_name("Kita...{w=1.0} refreshing ke taman dulu?");

            stopMusic(0.5);

        }

    });


    show("liam", "marah");

    liam("...");
    liam("Ishhh... {w=1.0} kita lagi mau masuk ke markas orang, bukan piknik.");

    player_name("I-iya, iya. {w=0.3}Maaf...");

    show("liam");

    playMusic("audio/decided.mp3", { volume: 0.5 });

    liam("Jadi gini. Langkah kita selanjutnya itu ngambil akses masuk.");

    player_name("Hmm... tapi kayaknya bukan itu deh tahap berikutnya.");

    show("liam", "marah");

    liam("Dengerin dulu, aku jelasin runtutnya.");

    show("liam");

    liam("Pertama, kita udah observasi tadi malam, kan?");

    player_name("Yup, yang itu aku inget.");

    liam("Kedua, identifikasi perangkat dan jalur koneksi.");

    player_name("Eh? Itu udah kita lakuin belum sih?");

    liam("Udah. Aku kerjain sendiri.");

    player_name("Gila... Terus kenapa ngajak aku?");

    liam("Aku penasaran dan adrenaline aku terpacu, jadinya kebablasan");

    show("liam", "mikir", "dissolve");

    liam("Aku juga gak nyangka kejadian semalam bakal kayak gitu.");

    liam(
        "Oke, lanjut. Ketiga, kita cari celah di jaringan Ethan. Itu juga udah aku catat."
    );
    liam(
        "Nah, sekarang tinggal yang keempat: menyusup, masukin pin, dan ambil data dari komputernya Ethan."
    );

    narrator(
        "Liam membuka laptop dan mulai mengetik dengan cepat. Layar terminal menyala hijau."
    );

    playSFX("audio/keyboard_fast.mp3", { volume: 0.6 });

    scene("bg_xtech", "dissolve");

    liam("Inget. Fokus. Jangan gegabah. Sekali salah langkah, tamat riwayatmu.");

    player_name("Iya iya... ngerti kok.");

    scene("bg_ethan_house", "dissolve");

    narrator(
        "Aku sampai di depan pintu. Terkunci. Ada panel PIN. Tentu aja."
    );

    player_name("Liam, kode PIN-nya apa?");

    liam("409282. Masukin itu.");

    player_name("Oke, semoga bener...");

    hack({

        prompt: ">> MASUKKAN PIN RUMAH ETHAN:",
        code: "409282",

        onSuccess: () => {

            playSFX("audio/access-granted.mp3");

            pause(0.5);

            narrator("...");

            player_name("Terlalu mudah...");

            liam("Nggak usah mikir lama. Fokus, kamu udah dapet aksesnya.");

            player_name("Oke, aku masuk sekarang.");

            narrator(
                "Tanpa ragu, aku membuka pintu perlahan dan melangkah masuk, menyusuri lorong menuju kamar Ethan dengan napas tertahan."
            );

            scene("bg_kamar_ethan", "dissolve");

            jump("hack_minigame");

        }

    });

});


/* =========================================================
   HACK MINIGAME — X-TECH TERMINAL
========================================================= */

label("hack_minigame", () => {

    scene("bg_terminal_hack", "fade");

    playMusic("audio/tension-light.mp3", { volume: 0.2 });

    narrator("Aku mengakses sistem X-Tech... Terminal terbuka.");

    show("liam", null, "dissolve");

    liam("Spectre nggak bisa remote terminal ini.");
    liam("Tapi tenang, aku udah kirim kode aksesnya ke... layar kamu.");

    narrator("...");

    liam(
        "Aku udah kirim kode itu ke {fast}{color=#39f}terminal ini{/color}. Cari dan baca baik-baik."
    );
    liam(
        "Jangan salah input. Kalau gagal... lo bakal nyalain alarm-nya."
    );

    hide("liam");

    VNUI.showNotification("AUTHORIZATION MODE // NO SECOND CHANCE");

    hack({

        prompt: ">> MASUKKAN KODE OTORISASI UNTUK LANJUT:",
        code: "Y0u_C4nN0t_ReW1ndT1m3_JustBcz_0fUrM1stak3",

        onSuccess: () => {

            playSFX("audio/access-granted.mp3");

            pause(0.5);

            playSFX("audio/access-granted-royal-high.mp3");

            narrator("Sistem merespons: {color=#00FF00}Akses Diterima.{/color}");
            narrator("Terminal berhasil dibobol...");

            liam("...");
            liam("[player_name]... kamu berhasil.");
            liam("Nice job. Tapi kita belum aman.");
            liam("Sekarang dengarkan aku baik-baik.");
            liam(
                "Tempat selanjutnya—bukan tempat biasa. Ini sarangnya mereka."
            );

            liam("Aku kirim koordinatnya sekarang...");

            pause(2);

            narrator("Lokasi diterima.");

            liam(
                "Lihat denah yang aku kirim. Jangan cuma dilihat—hafalkan jalurnya."
            );
            liam(
                "Gedung itu... penuh dengan percabangan, jebakan, dan blindspot kamera."
            );
            liam(
                "Satu langkah salah—dan kamu bisa terjebak di dalam selamanya."
            );

            liam("Aku nggak akan bisa bantu dari sini kalau koneksi putus.");
            liam("Jadi pastikan kamu siap sebelum masuk.");

            narrator(
                "Nafasku mulai berat. Suasana makin menegang. Ini bukan sekadar misi biasa."
            );
            narrator(
                "Aku menatap layar terminal yang kini menunjukkan akses penuh..."
            );

            scene("bg_black", "dissolve");

            stopMusic(2);

            unlockBab(6, true);

            pause(1);

            centered("BAB 5 SELESAI");

            pause(2);

            comingSoon(
                "TO BE CONTINUED",
                "X-TECH // SIGNAL LOST"
            );

        }

    });

});
