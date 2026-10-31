/* =========================================================
   CTRL+Z — BAB 3
   Migrasi alur utama dari bab3.rpy
========================================================= */

label("bab3A", () => {

    unlockBab(3, true);

    scene("bg_black", "dissolve");

    narrator("Aku mulai ngobrol serius bareng Rachel dan Liam.");
    narrator(
        "Liam merasa ada yang aneh dari kejadian kemarin, jadi dia ngajak kumpul di tempat lain."
    );

    scene("bg_livingroom_night", "fade");

    player_name("Oke, sekarang ceritain-");
    player_name("Kenapa kita harus ngumpul di apartemenku?");

    liam("Menurutku sini tempat paling aman buat sekarang, makanya aku pilih sini.");

    rachel("Aku juga sebenernya gak nyaman di sini, tapi mau gimana lagi ya...");

    player_name("Ya udah terserah kalian deh, yang penting kumpul.");

    liam("Makasih ya udah ngerti.");

    show("liam", "mikir", "dissolve");

    liam("Langsung aja ya.");

    playMusic("audio/thinking.mp3");


    ifElse(
        () => Boolean(VN.getState("story.bab1.liam_route")),

        () => {

            liam("Kita harus ketemu Ethan");
            liam("Paksa dia jelasin apa yang dia ketahui");

        },

        () => {

            liam(
                "Jadi kemarin [player_name] narik paksa Ethan masuk kamarnya."
            );

            player_name("Kedengerannya kayak aku niat jahat gitu ya...");

            hide("liam");
            show("rachel", "kaget");

            pause(2);

            hide("rachel");
            show("liam", "malu");

            liam("Maaf, aku gak bermaksud bilang begitu.");
            liam("Jadi, kalian bahas apa kemarin?");

            hide("liam");

            narrator(
                "Aku jelasin semua detail pembicaraanku sama Ethan kemarin."
            );

            scene("bg_livingroom_night", "dissolve");

            show("liam", "mikir");

            liam("Aku ngerti sekarang.");
            liam(
                "Kamu sudah punya kontak Ethan, jadi kita bisa ngumpul bareng."
            );

            rachel("Coba deh telepon Ethan buat datang ke sini.");

            hide("liam");

        }
    );


    ifElse(
        () => VN.getState("characters.ethan.contact") === true,
        () => jump("nelepon_ethan"),
        () => jump("pencarian_ethan")
    );

});


/* =========================================================
   NELEPON ETHAN
========================================================= */

label("nelepon_ethan", () => {

    playSFX("audio/phone.mp3");

    pause(2);

    ethan("Halo? Ada apa nih?");


    menu({

        "Kamu bisa ke apartemenku? (WIP)": () => {

            ethan("Tumben banget ngajak ke apartemenmu.");

            player_name("Eh serius, kamu datang aja.");

            ethan("Oke, aku langsung ke sana.");

            hide("ethan");

            scene("bg_black", "dissolve");

            jump("pengakuan_ethan");

        },


        "Kamu bisa ke cafe?": () => {

            ethan("Tumben kamu ngajak ngopi");
            ethan(
                "Bolehlah, kamu chat aja lagi kapan-kapannya ya?"
            );

            player_name("Oke");

            hide("ethan");

            scene("bg_livingroom_night", "dissolve");

            playSFX("audio/hangup.mp3");

            player_name("Guys, kita nongkrongnya di cafe ya?");
            player_name("Kita sambil ngopi");

            rachel("Kamu mau ngopi atau mau ketemu owner cafe itu?");

            player_name(
                "Ya ngopi lah, lagian ngapain kita kumpul di apartemen yang sesak ini?"
            );

            show("rachel", "marah");

            rachel(
                "{size=50}Ya sorry aja kalo kita cuman bikin sesak disini.{/size}"
            );
            rachel(
                "{size=50}Lagian aku juga dari awal gak mau disini-{/size}"
            );

            hide("rachel");

            playSFX("audio/shock.ogg");

            show("liam", "marah");

            hpunch();

            liam("{size=70}{b}KALIAN BISA DIEM GAK???{/b}{/size}");

            stopMusic(1);

            rachel("...");
            player_name("...");

            show("liam", "malu", "dissolve");

            liam("...");
            liam("Ehh, maksudnya...");
            liam("Etoo...");

            show("liam", "malu", "dissolve");

            liam("Ki-{w=0.4}kita harus fokus sama tu-{w=0.4}tujuan kita.");
            liam(
                "Debat kaya gini malah bikin hambatan buat kita."
            );

            narrator("Untuk sesaat aku ambil pelajaran.");
            narrator("Jangan sampai buat Liam marah lagi.");
            narrator(
                "Disisi lain, {w=1.0}Liam kalo lagi malu tuh imut ya."
            );

            show("liam", "marah");

            hpunch();
            liam("...");
            liam("APA LIAT-LIAT???");

            player_name(
                "N-nggak, bener kata kamu, yaudah kita fokus sama misi kita dulu."
            );

            playMusic("audio/thinking.mp3");

            show("liam", "senyum");

            liam("Syukur deh kalo kamu udah ngerti.");
            liam(
                "Sekarang langkah kita paksa Ethan buat jelasin Chronos-9."
            );

            hide("liam");
            show("rachel");

            rachel(
                "Tapi, kita jangan terlalu gegabah, Ethan itu hati-hati banget."
            );
            rachel(
                "Satu langkah yang salah bisa kacau rencana kita."
            );

            hide("rachel");
            show("liam");

            liam("Oke, garis besarnya aku sudah paham.");
            liam(
                "Hanya [player_name] saja yang bisa membahas Chronos-9 secara langsung dengan Ethan."
            );
            liam(
                "Jika dia merahasiakannya dari kami, hanya kamu aja yang bisa nentuin ini."
            );

            player_name("Agak ngeri ya.");

            show("liam", "senyum");

            liam(
                "Tenang, selama kamu ada di rencana kami, kamu bakal baik-baik aja."
            );
            liam(
                "Kita susun strategi dulu, target kamu adalah dapat akses ke X-Tech."
            );
            liam("Kemudian kamu tukar informasi ke kami.");

            player_name("Oke kita lakukan dengan hati-hati.");

            liam("Tapi aku pengen kamu datang ke rumah aku.");

            player_name("Kenapa gak disini? Kamu tuh ribet banget.");

            show("liam");

            liam("Yah, kita gak tau apa yang ada disini.");
            liam("Mungkin kita sedang disadap?");

            player_name("Dipikir-pikir, malah kepikiran");
            player_name("Ethan kemarin tau kita lagi kumpul.");

            liam("Nah kan?");
            liam(
                "Sangat berisiko jika kita kumpul gini terus."
            );

            player_name("Oke deh, kamu arahin aku aja di text.");

            show("liam", "senyum");

            liam("Oke, kalo gitu aku pulang dulu.");

            player_name("Iya, hati-hati.");

            hide("liam");

            pause(2);

            stopMusic(1);

            show("rachel", null, "dissolve");

            rachel("[player_name], Aku mau kamu datang ke apartemenku.");

            player_name("Hah? Mau ngapain?");

            show("rachel", "serius");

            rachel("Udah kamu nurut aja.");

            player_name("I-iya.");

            hide("rachel");

            scene("bg_black", "dissolve");

            narrator("Kenapa Rachel tiba-tiba gini?");

            stopMusic(2);

            unlockBab(4);

            pause(1);

            centered("BAB 3 SELESAI");

            pause(3);

            jump("bab4A");

        }

    });

});


/* =========================================================
   PENGAKUAN ETHAN (WIP)
========================================================= */

label("pengakuan_ethan", () => {

    narrator("Narrative Rewrite (WIP)");

    comingSoon(
        "TO BE CONTINUED",
        "BAB 3 // PENGAKUAN ETHAN"
    );

});


/* =========================================================
   PENCARIAN ETHAN
========================================================= */

label("pencarian_ethan", () => {

    scene("bg_city_night", "fade");

    narrator(
        "Kontak Ethan belum ada. Kami harus mencari jejaknya sendiri."
    );

    player_name("Kalau kita nggak bisa nelpon dia, kita cari di tempat yang biasa dia datangi.");

    rachel("Aku tahu beberapa tempat. Tapi kita harus hati-hati.");

    liam("Aku belum bisa bantu banyak. Aku belum punya alamat rumahnya.");

    narrator(
        "Pencarian ini masih panjang. Kami memutuskan untuk menyusun strategi terlebih dahulu."
    );

    scene("bg_black", "dissolve");

    comingSoon(
        "TO BE CONTINUED",
        "BAB 3 // PENCARIAN ETHAN"
    );

});


/* =========================================================
   PERTEMUAN LIAM & RACHEL
========================================================= */

label("pertemuan_liam_rachel", () => {

    scene("bg_cafeteria_day", "fade");

    narrator(
        "Liam dan Rachel akhirnya bertemu untuk membahas langkah berikutnya."
    );

    liam("Kita tidak bisa terus menebak. Kita butuh bukti.");

    rachel("Dan kita butuh Ethan untuk mendapatkan bukti itu.");

    player_name("Kalau begitu, kita lanjutkan rencananya.");

    scene("bg_black", "dissolve");

    comingSoon(
        "TO BE CONTINUED",
        "BAB 3 // PERTEMUAN"
    );

});
