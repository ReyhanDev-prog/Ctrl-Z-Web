label bab2A:

    scene bg_backstreet_summer_cloudy with fade

    if persistent.story["bab1"]["liam_route"]:
        liam "Kita mau kemana?"
        player_name "Rumahku"
        liam "..."
        liam "HAAAAAAAAAAHHHHHHHHH!!!????"
        liam "Kamu mau apa!?"
        player_name "Aku yakin disini aku bisa ketemu Ethan."
        liam "Kenapa kamu seyakin ini?"
        liam "Gak masuk akal banget"
        player_name "Gini-gini juga aku cenayang loh..."
        liam "Terserah apa katamu"
        scene bg_black with dissolve
        pause 1.0
        scene bg_backstreet_summer_cloudy with dissolve
        "..."
        player_name "Kenapa Ethan gak muncul?"
        liam "Kamu gak riset dulu sih!"
        player_name "Bentar, aku telepon dia dulu"
        scene isi_kontak with dissolve
        player_name "Gak ada?"
        player_name "Yah, wajar sih..."
        player_name "Di step ini aku belum dapet kontak Ethan..."
        player_name "Aku bahkan gak tau jalan menuju rumah Ethan"
        liam "Terus gimana?"
        player_name "Buat sekarang kamu pulang aja dulu deh"
        player_name "Ntar kamu dicariin lagi"
        liam "Emangnya aku anak kecil!?"
        player_name "{size=15}anak juragan pasti selalu dicariin{/size}"
        liam "APA?!"
        player_name "N-nggak! Yaudah deh Aku anter kamu aja..."
        liam "Bentar..."
        liam "Kamu tau rumah aku?"
        menu:
            "(Jujur)":
                player_name "Ya tau dong, percaya dah sama aku"
                liam "Yaudah"
                pause 0.5
                scene bg_busstop_spring_afternoon with dissolve
                pause 1.0
                scene bg_train_evening with dissolve
                pause 1.0
                scene bg_black with dissolve
                pause 0.5
                scene bg_mansion_liam with dissolve
                liam "Kok kamu tau?"
                liam "Padahal aku belum ngasih tau loh..."
                liam "Hmmm......."
                player_name "I.. itu.. aku punya intel loh, jangan salah..."
                liam "Umm....."
                liam "Mencurigakan"
                player_name "Udah ah, aku mau pulang dulu, kemaleman nanti"
                player_name "Bye...!"
                "Mungkin ini bukan waktu yang tepat"
                scene bg_black with dissolve
                pause 1.0
                scene bg_street_summer_night with dissolve
                pause 0.5
                scene bg_street_summer_evening at glitch
                pause 0.2
                scene bg_street_summer_night
                pause 1.0
                scene bg_black with dissolve
                "Sesampainya dirumah, aku langsung istirahat"
                scene bg_bedroom_night with dissolve
                pause 1.0
                scene bg_black with dissolve
                pause 2.0
                $ persistent.characters["ethan"]["contact"] = False
                jump bab3A



            "(Ngeles)":
                player_name "Ya..."
                player_name "Hmmm..."
                player_name "Kan kamu bisa tunjukin jalannya"
                liam "Ntar kamu ga bisa pulang lagi"



    "Saat Aku sedang dalam perjalanan pulang ke Apartemen, Aku melihat Ethan berjalan santai."
    play music "audio/pursuit.mp3" volume 1


    show screen countdown(5.0, "coming_soon")
    
    menu:
        "Kejar dia!" if True:
            hide screen countdown
            #pakai scene baru
            "Aku buru-buru ngejar Ethan dan tiba-tiba menariknya."
            scene kejar_ethan

            ethan "Ey bro, santai dong! Mau ngapain, sih?"
            player_name "Ikut sini dulu, nggak usah banyak alasan."

            ethan "Jangan gitu dong!"
            "Aku menarik Ethan masuk ke apartemenku."

            scene bg_bedroom_day with fade
            stop music fadeout 1.0
            player_name "Oke, jelasin dulu sebelum aku kasih izin kamu pulang. Apa yang sebenarnya kamu sembunyikan?"
            if persistent.ethan_defense:
                "WIP" #ethan jadi sulit membuka diri
            show ethan marah
            ethan "Sembunyiin? Aku nggak ngerti maksudmu."
            player_name "Aku tahu kamu rahasiain sesuatu dari kita. Makanya kamu kabur begitu."
            "Ethan mulai serius."
            show ethan sombong
            play music "audio/suspicious.mp3" volume 1 fadein 1.0
            ethan "Hah, kamu cukup peka juga ya."
            ethan "Oke deh, aku bakal jujur. Tapi kamu janji nggak bakal bawa Rachel ke dalam ini."
            player_name "Kenapa harus Rachel?"
            show ethan
            ethan "Aku nggak mau dia terluka. Makanya aku sengaja nggak bales chatnya, takut dia bakal kepo."
            player_name "Kenapa kita nggak boleh tahu? Apa ini soal nyawa kita?"
            ethan "Betul banget."
            scene bg_xtech with dissolve
            $ persistent.cg_unlocked[0] = True
            ethan "Soal CTRL-Z, ini teknologi rahasia yang nggak boleh bocor."
            ethan "Kalau salah pake, dampaknya fatal banget."
            player_name "Serius seberbahaya itu?"
            ethan "Bahkan bisa bikin kita hilang dari dunia ini."
            player_name "Apa maksudnya hilang?"
            scene diskusi_serius with dissolve
            ethan "Iya, kita bisa terhapus."
            ethan "Makanya aku nggak mau ada yang tahu."
            player_name "Terus kamu kenapa nggak kabur aja?"
            ethan "Aku pengen hentikan penelitian ini, ungkap siapa Dr. Marcuz Holloway."
            ethan "Tapi susah kalau sendirian."
            ethan "Dan aku nggak punya tempat untuk balik."
            ethan "Kalau dibiarkan, sistem bakal kacau parah."
            player_name "Kacau gimana?"
            ethan "Semua yang terkait penelitian ini bakal ketahuan identitas asli mereka."
            player_name "Aku masih belum ngerti maksudmu."
            ethan "Yang jelas, jangan korbankan diri kamu buat ini."
            menu:
                "Nggak! Aku mau terlibat, walaupun risikonya nyawaku sendiri":
                    scene diskusi_serius2 with dissolve
                    ethan "Hah,{w=0.3} kamu emang keras kepala."
                    ethan "Oke, aku bakal kasih tahu kamu sesuatu."
                    ethan "Dalam penelitian ini ada yang namanya Chronos-9."
                    player_name "Apa itu?"
                    ethan "Teknologi buat manipulasi waktu."
                    ethan "Tapi Chronos-9 belum stabil, kalau dipakai terus-terusan bakal rusak parah."
                    player_name "Kita bakal pakai itu?"
                    ethan "Ya, buat bongkar misteri ini, kita harus pakai."
                    ethan "Soalnya nanti kita bakal nemuin hal yang gak masuk akal."
                    ethan "Setidaknya, itu yang aku pikir."
                    player_name "Di mana kita bisa dapatkan?"
                    ethan "Aku punya replika-nya, tapi masih belum stabil."
                    ethan "Kamu harus pakai dengan hati-hati."
                    ethan "Aku kasih kalau kamu udah siap terima konsekuensinya."
                    player_name "Boleh gak aku kerjasama dengan Rachel dan yang lain?"
                    ethan "Aku larang kalian ikut campur."
                    ethan "Tapi ternyata kalian keras kepala."
                    ethan "Ya udah, kamu atur kapan kita diskusi lebih lanjut."
                    scene bg_black with dissolve
                    pause 1.0
                    play audio "audio/door-slam.mp3"
                    $ renpy.notify("Aku dapat kontak Ethan.")
                    $ persistent.characters["ethan"]["contact"] = True
                    pause 2.0

                "Aku pikir aku gak bakal terlibat dalam hal ini (WIP)":
                    player_name "Maaf udah bikin kamu repot."
                    show ethan senyum
                    ethan "Gak apa-apa, aku pamit dulu ya."
                    hide ethan senyum with dissolve
                    scene bg_black with dissolve
                    "Aku memutuskan untuk gak terlibat."
                    $ renpy.notify("Gagal dapat kontak Ethan.")
                    $ persistent.ethan_contact = False
                    scene bg_black with dissolve
                    stop music fadeout 2.0

                    $ persistent.unlocks["bab"]["3"] = True
                    $ renpy.notify("Bab 3 telah terbuka!")
                    $ renpy.pause(1.0, hard=True)

                    show text "{font=font/digital.TTF}{size=120}BAB 2 SELESAI{/size}" at truecenter with dissolve

                    $ renpy.pause(3.0, hard=True)

                    jump bab3A


        "Lanjut ke rumah, aku capek banget (WIP)" if True:
            hide screen countdown
            player_name "Ah, besok aja deh ngejar dia. Aku capek."
            "Setibanya di rumah, Aku bersiap buat makan sore dan kerjakan tugas."

            scene bg_black with dissolve
            jump coming_soon

    scene bg_black with dissolve
    stop music fadeout 2.0

    $ persistent.unlocks["bab"]["3"] = True
    $ renpy.notify("Bab 3 telah terbuka!")

    $ renpy.pause(1.0, hard=True)

    show text "{font=font/digital.TTF}{size=120}BAB 2 SELESAI{/size}" at truecenter with dissolve

    $ renpy.pause(3.0, hard=True)

    jump bab3A
