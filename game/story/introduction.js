/* =========================================================
   CTRL+Z — INTRODUCTION
   Migrasi dari introduction.rpy
========================================================= */

label("introduction", () => {

    scene("bg_black", "fade");

    overlayText(
        "HOW TO PLAY",
        [
            "Gunakan MOUSE atau SPASI untuk melanjutkan dialog.",
            "Pilihan Anda sangat penting. Beberapa opsi akan menghilang berdasarkan keputusan Anda.",
            "Anda bisa melihat percakapan di tombol LOG / HISTORY.",
            "Tetap tenang dan nikmati permainannya.",
            "Jangan panik!",
            "Selamat bersenang-senang!",
            "Jika Anda ingin keluar, tekan ESCAPE atau tombol MENU."
        ].map(line => `• ${line}`).join("\n")
    );

    jump("normal_story");

});
