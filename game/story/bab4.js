/* =========================================================
   CTRL+Z — BAB 4
   Migrasi ringkas dari bab4.rpy
========================================================= */

label("bab4A", () => {

    unlockBab(4, true);

    stopMusic(0);

    playMusic("audio/happy_road.mp3", { volume: 0.3 });

    scene("bg_black", "dissolve");

    centered("Keesokan harinya");

    pause(2);

    scene("bg_livingroom_night", "fade");


    ifElse(
        () => Boolean(VN.getState("story.bab1.liam_route")),

        () => {

            stopMusic(1);
            player_name("Aku gak mau ngelakuin hal yang sama");

        },

        () => {

            player_name("Hm... Berdasarkan diskusi kita kemarin");
            player_name("Masih banyak yang harus aku lakukan");
            player_name("Yahh... Ini akan menjadi cerita yang panjang...");
            player_name("Baiklah, sekarang apa yang harus aku lakukan dulu?");

        }
    );


    VN.setState("temp_flags.bab4_rachel", false);
    VN.setState("temp_flags.bab4_ethan", false);
    VN.setState("temp_flags.bab4_liam", false);

    jump("tugas");

});


label("tugas", () => {

    const rachelDone =
        Boolean(VN.getState("temp_flags.bab4_rachel"));

    const ethanDone =
        Boolean(VN.getState("temp_flags.bab4_ethan"));

    const liamDone =
        Boolean(VN.getState("temp_flags.bab4_liam"));


    if (rachelDone && ethanDone && liamDone) {
        jump("pengintaian_ethan");
        return;
    }


    const choices = {};


    choices["Ke rumah Rachel"] = {
        condition: () => !rachelDone,
        action: () => jump("ketemu_rachel1")
    };


    choices["Temui Ethan"] = {
        condition: () => !ethanDone,
        action: () => {

            if (!rachelDone) {
                narrator("Aku harus temui Rachel dulu sebelum bicara dengan Ethan.");
                jump("tugas");
                return;
            }

            jump("ketemu_ethan1");

        }
    };


    choices["Ke rumah Liam"] = {
        condition: () => !liamDone,
        action: () => {

            if (!ethanDone) {
                narrator("Temui Ethan dulu sebelum pergi ke rumah Liam.");
                jump("tugas");
                return;
            }

            jump("ketemu_liam1");

        }
    };


    menu(choices);

});


/* =========================================================
   RACHEL
========================================================= */

label("ketemu_rachel1", () => {

    narrator("Aku menemui Rachel.");

    scene("bg_apartment_exterior", "dissolve");

    pause(1);

    playSFX("audio/bell_door.mp3");

    pause(1);

    player_name("Punten.");

    show("rachel", null, "dissolve");

    rachel("Loh, kamu? Ada apa?");

    player_name("Aku mau nanya soal X-Tech. Apa kamu punya info baru?");

    rachel("Aku udah nyoba cari, tapi... ada sesuatu yang aneh.");

    show("rachel", "serius");

    rachel("Ethan sepertinya menyembunyikan sesuatu yang besar.");

    player_name("Aku juga merasa begitu.");

    rachel("Kalau kamu mau tahu lebih banyak, temui Ethan dulu. Aku yakin dia tahu jalan masuknya.");

    show("rachel");

    rachel("Tapi hati-hati. Jangan sampai kamu diperalat.");

    player_name("Aku ngerti. Makasih, Rachel.");

    hide("rachel");

    VN.setState("temp_flags.bab4_rachel", true);

    scene("bg_black", "dissolve");

    jump("tugas");

});


/* =========================================================
   ETHAN
========================================================= */

label("ketemu_ethan1", () => {

    narrator("Aku menemui Ethan di tempat yang dia janjikan.");

    scene("bg_cozy_cafe_street_day", "fade");

    show("ethan", null, "dissolve");

    ethan("Kamu datang. Aku sudah duga kamu nggak akan menyerah.");

    player_name("Aku butuh jawaban. Tentang Chronos-9, tentang X-Tech.");

    show("ethan", "serius");

    ethan("Semua yang aku tahu sudah aku kasih. Sisanya... kamu harus lihat sendiri.");

    player_name("Maksudmu?");

    ethan("Rumah Liam punya akses ke jaringan mereka. Kalau kamu ingin bukti, mulai dari sana.");

    ethan("Aku sudah kirim alamatnya. Jangan bilang siapa-siapa.");

    player_name("Kenapa kamu bantu aku?");

    show("ethan", "sedih");

    ethan("Karena kalau bukan kita yang menghentikan ini, nggak akan ada yang bisa.");

    hide("ethan");

    VN.setState("temp_flags.bab4_ethan", true);
    VN.setState("temp_flags.liam_mansion", true);

    scene("bg_black", "dissolve");

    jump("tugas");

});


/* =========================================================
   LIAM
========================================================= */

label("ketemu_liam1", () => {

    narrator("Aku pergi ke rumah Liam.");

    scene("bg_mansion_liam", "fade");

    show("liam", null, "dissolve");

    liam("Kamu datang tepat waktu. Aku sudah menyiapkan semuanya.");

    player_name("Kamu yakin kita bisa masuk ke sistem mereka?");

    liam("Tidak ada sistem yang benar-benar aman. Yang ada hanya sistem yang belum dibobol.");

    show("liam", "serius");

    liam("Aku sudah memetakan jalur akses. Besok malam kita bergerak.");

    player_name("Apa rencana kita?");

    liam("Kita masuk, ambil data, lalu keluar sebelum mereka sadar.");

    liam("Dan satu hal lagi...");

    liam("Jangan percaya siapa pun di dalam sana. Termasuk orang yang mengaku membantu.");

    player_name("Aku mengerti.");

    hide("liam");

    VN.setState("temp_flags.bab4_liam", true);

    scene("bg_black", "dissolve");

    jump("tugas");

});


/* =========================================================
   PENGINTAIAN
========================================================= */

label("pengintaian_ethan", () => {

    scene("bg_city_night", "fade");

    playMusic("audio/tension-light.mp3", { volume: 0.5 });

    narrator(
        "Malam itu, kami mengawasi gedung X-Tech dari kejauhan."
    );

    show("liam", null, "dissolve");

    liam("Lihat itu? Kamera di setiap sudut. Tapi ada jeda tiga detik saat pergantian shift.");

    player_name("Cukup untuk masuk?");

    liam("Cukup untuk masuk. Tidak cukup untuk keluar dengan santai.");

    hide("liam");

    scene("bg_black", "dissolve");

    narrator(
        "Rencana sudah matang. Besok, semuanya akan berubah."
    );

    unlockBab(5);

    centered("BAB 4 SELESAI");

    pause(2);

    jump("bab5A");

});
