label bab3A:

    $ rollback_button = False
    $ save_button = False
    $ load_button = False
    
    scene bg_black with dissolve
    "Aku mulai ngobrol serius bareng Rachel dan Liam."
    "Liam merasa ada yang aneh dari kejadian kemarin, jadi dia ngajak kumpul di tempat lain."
    scene bg_livingroom_night
    player_name "Oke, sekarang ceritain-"
    player_name "Kenapa kita harus ngumpul di apartemenku?"
    liam "Menurutku sini tempat paling aman buat sekarang, makanya aku pilih sini."
    rachel "Aku juga sebenernya gak nyaman di sini, tapi mau gimana lagi ya..."
    player_name "Ya udah terserah kalian deh, yang penting kumpul."
    liam "Makasih ya udah ngerti."
    show liam mikir with dissolve
    liam "Langsung aja ya."
    play music "audio/thinking.mp3"
    if persistent.story["bab1"]["liam_route"]:
        liam "Kita harus ketemu Ethan"
        liam "Paksa dia jelasin apa yang dia ketahui"

    else:
        liam "Jadi kemarin [player_name] narik paksa Ethan masuk kamarnya."
        player_name "Kedengerannya kayak aku niat jahat gitu ya..."
        hide liam mikir
        show rachel kaget
        pause 2
        hide rachel kaget
        show liam malu
        liam "Maaf, aku gak bermaksud bilang begitu."
        liam "Jadi, kalian bahas apa kemarin?"
        hide liam malu
        "Aku jelasin semua detail pembicaraanku sama Ethan kemarin."
        scene bg_livingroom_night with dissolve
        show liam mikir
        liam "Aku ngerti sekarang."
        liam "Kamu sudah punya kontak Ethan, jadi kita bisa ngumpul bareng."
        rachel "Coba deh telepon Ethan buat datang ke sini."
        hide liam mikir with dissolve

    if persistent.characters["ethan"]["contact"] is True:
        jump nelepon_ethan  # Langsung bisa menelepon Ethan
    else:
        jump pencarian_ethan  # Masuk ke bab terkunci

label nelepon_ethan:

    play sound "audio/phone.mp3"
    pause 2.0
    stop sound
    
    ethan "Halo? Ada apa nih?"
    
    menu:
        "Kamu bisa ke apartemenku? (WIP)":
            ethan "Tumben banget ngajak ke apartemenmu."
            player_name "Eh serius, kamu datang aja."
            ethan "Oke, aku langsung ke sana."
            hide ethan with dissolve
            scene bg_black with dissolve
            jump pengakuan_ethan

        "Kamu bisa ke cafe?":
            ethan "Tumben kamu ngajak ngopi"
            ethan "Bolehlah, kamu chat aja lagi kapan-kapannya ya?"
            player_name "Oke"
            hide ethan with dissolve
            scene bg_livingroom_night with dissolve
            play sound "audio/hangup.mp3"

            player_name "Guys, kita nongkrongnya di cafe ya?"
            player_name "Kita sambil ngopi"
            rachel "Kamu mau ngopi atau mau ketemu owner cafe itu?"
            player_name "Ya ngopi lah, lagian ngapain kita kumpul di apartemen yang sesak ini?"
            show rachel marah 
            rachel "{size=50}Ya sorry aja kalo kita cuman bikin sesak disini.{/size}" with vpunch
            rachel "{size=50}Lagian aku juga dari awal gak mau disini-{/size}{nw}"
            hide rachel marah
            play audio "audio/shock.ogg"
            show liam marah
            liam "{size=70}{b}KALIAN BISA DIEM GAK???{/b}{/size}" with vpunch

            stop music fadeout 1.0

            rachel "..."
            player_name "..."
            show liam malu2 with dissolve
            liam "..."
            liam "Ehh, maksudnya..."
            liam "Etoo..."
            show liam malu with dissolve
            liam "Ki-{w=0.4}kita harus fokus sama tu-{w=0.4}tujuan kita."
            liam "Debat kaya gini malah bikin hambatan buat kita."
            "Untuk sesaat aku ambil pelajaran."
            "Jangan sampai buat Liam marah lagi."
            "Disisi lain, {w=1.0}Liam kalo lagi malu tuh imut ya."
            show liam marah
            liam "..."
            liam "APA LIAT-LIAT???" with vpunch
            player_name "N-nggak, bener kata kamu, yaudah kita fokus sama misi kita dulu."
            play music "audio/thinking.mp3"
            show liam senyum
            liam "Syukur deh kalo kamu udah ngerti."
            liam "Sekarang langkah kita paksa Ethan buat jelasin Chronos-9."
            hide liam senyum
            show rachel
            rachel "Tapi, kita jangan terlalu gegabah, Ethan itu hati-hati banget."
            rachel "Satu langkah yang salah bisa kacau rencana kita."
            hide rachel
            show liam
            liam "Oke, garis besarnya aku sudah paham."
            liam "Hanya [player_name] saja yang bisa membahas Chronos-9 secara langsung dengan Ethan."
            liam "Jika dia merahasiakannya dari kami, hanya kamu aja yang bisa nentuin ini."
            player_name "Agak ngeri ya."
            show liam senyum
            liam "Tenang, selama kamu ada di rencana kami, kamu bakal baik-baik aja."
            liam "Kita susun strategi dulu, target kamu adalah dapat akses ke X-Tech."
            liam "Kemudian kamu tukar informasi ke kami."
            player_name "Oke kita lakukan dengan hati-hati."
            liam "Tapi aku pengen kamu datang ke rumah aku."
            player_name "Kenapa gak disini? Kamu tuh ribet banget."
            show liam
            liam "Yah, kita gak tau apa yang ada disini."
            liam "Mungkin kita sedang disadap?"
            player_name "Dipikir-pikir, malah kepikiran"
            player_name "Ethan kemarin tau kita lagi kumpul."
            liam "Nah kan?"
            liam "Sangat berisiko jika kita kumpul gini terus."
            player_name "Oke deh, kamu arahin aku aja di text."
            show liam senyum
            liam "Oke, kalo gitu aku pulang dulu."
            player_name "Iya, hati-hati."
            hide liam senyum with dissolve
            pause 2.0
            stop music fadeout 1.0
            show rachel with dissolve
            rachel "[player_name], Aku mau kamu datang ke apartemenku."
            player_name "Hah? Mau ngapain?"
            show rachel serius
            rachel "Udah kamu nurut aja."
            player_name "I-iya."
            hide rachel serius with dissolve
            scene bg_black with dissolve
            "Kenapa Rachel tiba-tiba gini?"

            stop music fadeout 2.0

            $ persistent.unlocks["bab"]["4"] = True
            $ renpy.notify("Bab 4 telah terbuka!")

            $ renpy.pause(1.0, hard=True)

            show text "{font=font/digital.TTF}{size=120}BAB 3 SELESAI{/size}" at truecenter with dissolve

            $ renpy.pause(3.0, hard=True)

            jump bab4A
        
label pengakuan_ethan:
    "Narrative Rewrite (WIP)"
    #Ethan masih bungkam
    jump coming_soon

    "Kita berempat akhirnya kumpul di kamarku."
    scene bg_livingroom_night with dissolve
    show ethan kaget
    ethan "Eh, ada Rachel juga ya di sini."
    show ethan ketawa
    ethan "Hai Rachel, Liam!"
    hide ethan ketawa
    show liam merajuk at left
    show rachel merajuk at right
    liam "..."
    rachel "..."
    hide rachel merajuk
    hide liam merajuk
    player_name "..."

    show ethan sedih
    ethan "Sunyi banget, ada apa nih?"
    liam "Langsung aja ya, kami tahu kamu ada kaitannya sama teknologi itu."
    liam "Kenapa kamu sembunyiin dari kami?"
    show ethan senyum2 with dissolve 
    ethan "Kau memang keras kepala, [player_name]."
    ethan "Baiklah, karena memang keinginanmu, aku gak akan sembunyi lagi."
    ethan "Memang aku punya Chronos-9 versi sendiri."
    ethan "Mungkin gak sebagus versi perusahaan, tapi aku simpan buat berjaga-jaga."
    ethan "Kalau-kalau sesuatu terjadi padaku."
    ethan "Tujuanku sama kayak kalian."
    ethan "Yaitu—"
    show ethan marah
    ethan "{size=30}Menghentikan pengembangan CTRL-Z!{/size}"
    hide ethan marah
    show rachel kaget
    pause 1.0
    rachel "K-kok bisa kamu mau hentikan? Emang ini bahaya ya?"
    hide rachel kaget
    show ethan marah
    ethan "Bahaya banget, kalau Chronos-9 sempurna, itu jadi CTRL+Z."
    ethan "Bisa dipakai buat ubah sejarah."
    ethan "Atau bahkan bikin butterfly effect."
    ethan "Yang bikin dunia makin dekat ke kiamat."
    player_name "Wah, serem banget..."
    hide ethan marah
    show rachel marah
    rachel "Kalau memang begitu, harus dihentikan."
    rachel "Tapi kita juga harus siap pake kalo terdesak, iya kan?"
    hide rachel marah
    show ethan marah
    ethan "Aku gak berharap kita sampai pake alat ini."
    player_name "Mungkin ini pertanyaan yang gak enak didenger."
    player_name "Gimana sih cara pakainya Chronos-9?"
    show ethan sombong
    ethan "[player_name]... kamu memang unik."
    show ethan senyum
    ethan "Mudah kok, tinggal pencet tombol ini."
    ethan "Kamu bakal dilempar ke masa lalu."
    ethan "Mirip rewind video di CD."
    player_name "Terus aku bakal ada di posisi mana?"
    ethan "Tergantung setting tanggal dan waktu yang kamu pilih."
    ethan "Tapi ini cuma buat masa lalu."
    ethan "Aku gak saranin ke masa depan."
    ethan "Resikonya, kamu bisa terjebak di sana dan gak bisa balik."
    ethan "Ikutin aku aja kalau memang terdesak, pasti aman."
    player_name "Cuma aku yang bakal dilempar ke masa lalu?"
    ethan "Pertanyaan bagus."
    ethan "Alat ini bisa bawa objek di sekitarnya dalam radius tertentu."
    ethan "Tapi aku gak yakin perabotan rumah juga ikut terlempar atau enggak."
    hide ethan senyum
    menu:
        "Gimana kalau kita coba aja?":
            semua "JANGAN!"
            player_name "Kita gak akan tau kalau gak dicoba!"
            show rachel marah at left
            rachel "{size=60}JANGAN BODOH, KAMU!{/size}" with hpunch
            rachel "Kamu gak ngerti konsekuensinya!"
            show liam merajuk at right
            liam "Mikir dong pake logika."
            hide liam merajuk
            hide rachel marah
            show ethan ketawa
            ethan "Itulah dirimu! Hahaha"
            hide ethan ketawa
            scene bg_black 
            with dissolve
            "Tapi aku penasaran, apa yang akan sebenarnya terjadi"
            "Mungkinkah benar waktu bisa diputar kembali?"
            "Kalau memang bisa, apa konsekuensinya?"

        "Ngotot pengen nyoba":
            player_name "Aku penasaran, pengen nyoba."
            player_name "Kalau gak dicoba, kita gak akan tau."
            "Aku menghiraukan peringatan Rachel dan Liam."
            "Begitu aku menekan tombol Chronos-9-"
            $ persistent.chronos_used_bab_3 = True  # Hitung Chronos-9 digunakan
            pause 1.0
            $ renpy.quit(relaunch=True)
            
    
    scene bg_black with dissolve
    stop music fadeout 2.0

    #$ persistent.unlocked_bab3 = True  # Bab 5 terbuka
    $ persistent.unlocked_chapters = max(persistent.unlocked_chapters, 4)
    $ renpy.notify("Bab 4 telah terbuka!")

    $ renpy.pause(1.0, hard=True)

    show text "{font=font/digital.TTF}{size=120}BAB 3 SELESAI{/size}" at truecenter with dissolve

    $ renpy.pause(3.0, hard=True)

    return

label pencarian_ethan:

    player_name "Hmm? Aku belum dapet kontak dia"

    show liam mikir at slide_left()

    show rachel cemberut at enter_right()
    rachel "Ihh gak guna banget sih kamu, nyari Ethan tuh dah kaya nyari prestasi pejabat sini!"

    show liam mikir
    liam "berarti kita harus lebih effort lagi supaya dapat kontaknya secara langsung."

    player_name "Emangnya kalian gak bisa bantu kah?"

    show liam mikir at slide_right(distance=0, duration=0.4)
    show rachel cemberut at slide_right(distance=1800, duration=0.2)

    liam "Hmmm, bukan gitu sih..."
    liam "Kalo Rachel minta secara langsung, dia pasti curiga."
    liam "Kalo aku... Aku punya firasat buruk tentang dia."
    liam "Jadi aku mikir, lebih baik kamu aja yang minta."
    hide rachel cemberut

    player_name "Jadi memang keputusan ada di tangan aku ya?"

    hide liam mikir
    show rachel marah at slide_right(distance=300, duration=0)

    rachel "Makanya, sadar diri dong!"
    
    rachel "Kamu itu orang paling penting disini."
    rachel "Jadi pastikan kamu berguna dikit lah."
    rachel "Jangan kek pejabat sini!"

    player_name "Kamu daritadi ngomongnya di ujung jurang mulu ya!?"

    hide rachel marah
    show liam

    liam "Bener kata Rachel, kita berharap ke kamu, jangan lewatin kesempatan yang ada"

    liam "Kamu bisa pake cara apa aja."

    liam "Jangan sampai Ethan curiga dengan kita."

    liam "Kita akan kumpul lagi setelah kamu dapat kontaknya."

    show liam senyum

    liam "Yaudah aku pamit pulang dulu ya!"

    hide liam senyum with dissolve
    show rachel marah with dissolve

    rachel "INGET! Pastiin kamu berguna!"

    show rachel marah at angry_exit

    play audio "audio/door-slam.mp3" volume 0.8
    pause 2.0
    hide rachel marah

    player_name "PELAN-PELAN WOY!"

    "Yah, mungkin aku harus mikirin dari sekarang rencana terbaiknya"

    stop music fadeout 1.0

    jump strategi_nemuin_ethan

label strategi_nemuin_ethan:
    player_name "Hmm... kayanya aku harus ke cafe deh..."
    player_name "Apa ke halte ya?"
    menu:
        "Ke Halte (WIP)":
            "WIP"
            jump strategi_nemuin_ethan

        "Ke Cafe":
            player_name "Yaudah lah aku mau ke cafe, sekalian ngopi disana"
            scene bg_cozy_cafe_street_day with dissolve
            pause 1.0
            play music "audio/Chill.mp3" volume 0.3 fadein 1.0
            scene bg_cafeteria_day with dissolve
            player_name "Teh... Cappuccino satu."
            show cafe with dissolve
            cafe_owner "Okeee, ditunggu ya~"
            hide cafe with dissolve
            "Beberapa menit kemudian si teteh nganter kopinya"
            cafe_owner "Silahkan dinikmati ya~"
            player_name "Makasih teh..."
            player_name "Ehh teh, mau nanya boleh gak?"
            show cafe with dissolve
            cafe_owner "Boleh atuh, mau nanya apa?"
            player_name "Teteh kenal gak sama orang ini?"
            "Aku ngasih liat foto Ethan"
            show cafe kaget 
            cafe_owner "Ohh ini mah tau... Dia suka ngopi disini tiap hari kamis jam 9-"
            cafe_owner "kadang malem juga sih"
            cafe_owner "Temen kamu itu?"
            player_name "Iya teh, dia suka ngilang terus, dicari-cari susah"
            cafe_owner "Ohh gitu.. Coba kamu datang aja besok, kemungkinan dia juga datang."
            player_name "Hmm, belum pasti juga sih.."
            cafe_owner "Hey, gini-gini juga teteh tuh mantan detektif loh."
            show cafe ketawa
            cafe_owner "Ahahahaha....."
            cafe_owner "Percaya deh, kamu datang aja besok."
            player_name "Oke, makasih ya teh.."
            hide cafe ketawa with dissolve
            "Aku selesai meminum kopi dan langsung merencanakan sesuatu."
            player_name "Sebaiknya aku kesini lagi sama siapa ya?"
            menu:
                "Sendiri aja":
                    player_name "Yaudah lah, sendiri aja dulu, kata mereka aku jangan terlalu mencolok."
                    scene bg_black with dissolve
                    "Keesokan harinya aku datang lagi ke cafe"
                    "Jam menunjukkan pukul 08.59"
                    scene bg_cafeteria_day with dissolve
                    player_name "Teteh, aku mau susu satu."
                    cafe_owner "Okeee~"
                    "Aku nunggu pesanan dan tiba-tiba.."
                    show ethan ketawa with moveinleft
                    play music "audio/Awkwardly Ever After.mp3" fadein 0.5 volume 0.5
                    ethan "Eyyy, ketemu lagi kita."
                    "Ternyata bener dugaan si teteh."
                    player_name "Kebetulan banget kita ketemuan disini."
                    show ethan senyum
                    ethan "Yah, mungkin ini bukan kebetulan"
                    ethan "BTW kamu udah lama?"
                    menu:
                        "Udah kok":
                            ethan "Terus kamu gak mesen apa-apa?"
                            player_name "Aku ikut Wi-Fi doang disini."
                            "..."
                            player_name "Enggak deng, aku baru mesen susu, cuman si tetehnya belum datang lagi."
                            ethan "Hahaha, oke deh."
                            hide ethan senyum with dissolve
                            "Tak lama kemudian pemilik cafe datang."
                            show cafe with moveinleft
                            cafe_owner "Ini susunya, silahkan dinikmati~"
                            cafe_owner "Aa ganteng mau pesen apa?"
                            ethan "Kaya biasa aja..."
                            cafe_owner "Oke, ditunggu ya~"
                            hide cafe with moveoutright
                            player_name "Kamu sering kesini ya?"
                            ethan "Cuman seminggu sekali doang."
                            "Aneh banget, kata Rachel eksistensinya kaya ninja, tapi dia yang sering kesini masa Rachel dan Liam gak tau?"
                            "Dan hanya teteh cafe aja yang tau."
                            "Mencurigakan."
                            player_name "Eh Ethan, mumpung kita disini-"
                            stop music
                            show ethan
                            ethan "Aku juga mau ngobrol sama kamu."
                            player_name "Oh, boleh kok."
                            "Ethan kayanya tau aku bakal kesini deh."
                            "Siapa yang bilang? Teteh cafe? Kayanya gak mungkin."
                            ethan "Langsung aja ya..."
                            ethan "Kamu kemarin ngerencanain apa sama Rachel dan Liam?"
                            player_name "(Kenapa dia tau?)"
                            menu:
                                "Terus terang aja (WIP)":
                                    scene bg_black with dissolve
                                    "Aku jelasin semuanya"
                                    scene bg_cafeteria_day with dissolve
                                    pause 1.0
                                    show ethan with dissolve
                                    ethan "Kenapa kamu bergerak sejauh ini?"
                                    player_name "Kami mau memastikan apakah teknologi yang dikembangkan itu berbahaya atu tidak"
                                    player_name "Maka dari itu kami ingin informasi darimu"
                                    player_name "Kuharap kamu bisa bekerjasama"
                                    ethan "Menarik..."
                                    ethan "Perlu kamu tahu"
                                    ethan "Aku tidak akan ikut sepenuhnya"
                                    ethan "Tapi yah... Jika untuk hal yang sepele, aku masih bisa jawab"
                                    ethan "Selain itu, kamu cari jawaban sendiri"
                                    ethan "Biar kamu tahu sendiri resiko dari perbuatan yang kau lakukan"
                                    play audio "audio/sfx/notice.mp3"
                                    $ renpy.notify("Notifikasi pertemanan diterima!")
                                    $ persistent.ethan_contact = True
                                    ethan "Oke lah, gua cabut dulu"
                                    ethan "Bye!"

                                    show ethan ketawa at angry_exit
                                    pause 1.0
                                    hide ethan ketawa
                                    player_name "Baiklah, setidaknya aku dapet kontak dia"
                                    player_name "Saatnya pulang..."
                                    
                                    scene bg_black with dissolve

                                    pause 1.0 

                                    scene bg_cafeteria_day
                                    show cafe owner
                                    cafe_owner "Euleuh... Pada kemana ini teh?"

                                    scene bg_black with dissolve
                                    pause 1.0
                                    stop music fadeout 1.0

                                    jump pertemuan_liam_rachel

                                "Ngelak":
                                    play audio "audio/music/chill-bro.mp3" fadein 1.0
                                    player_name "Kita bahas pelajaran aja sih."
                                    player_name "Soalnya aku dongo, jadi minta diajarin mereka."
                                    player_name "Bentar lagi kita mau ujian, jadi... ya gitu deh."
                                    ethan "Kalo gitu, kenapa gak minta tolong ke aku?"
                                    ethan "Kan kita dah kenal tuh, masa iya kamu masih canggung?"
                                    player_name "(Ahaa, kesempatan bagus)"
                                    player_name "Yah, aku belum punya kontak kamu sih... Jadi susah ngehubungin kamu."
                                    show ethan heran
                                    ethan "Oalahh ternyata gitu, yaudah aku kasih kontakku ya."
                                    ethan "Inget, jangan hubungin aku seenaknya."
                                    ethan "Aku ini orang penting loh..."
                                    player_name "Iya deh iya, mana kontaknya sini."
                                    $ renpy.notify("Hore dapat kontak Ethan.")
                                    $ persistent.ethan_contact = True
                                    player_name "Makasih ya."
                                    show ethan senyum
                                    ethan "Yah, mungkin itu aja dari aku, kayanya aku harus pergi, ada urusan lain, bye"
                                    hide ethan with dissolve
                                    pause 1.0
                                    "Ethan terlihat buru-buru dan langsung keluar"
                                    player_name "Mencurigakan..."
                                    player_name "Bodo amat sih, aku udah dapet kontaknya, kali ini aku berguna"
                                    player_name "Rachel gak akan bisa bilang aku 'gak guna' lagi hehehehe."
                                    play music "audio/Awkwardly Perfect Day.mp3" volume 0.5
                                    show cafe with moveinleft
                                    cafe_owner "Espresso udah siap, silahkan dinikma-"
                                    show cafe kaget
                                    cafe_owner "Ehhh~, si aa ganteng tadi mana?"
                                    player_name "Lah iya juga, dia mesen tapi lupa minumnya."
                                    show cafe sombong
                                    cafe_owner "Hah.... kamu bayar punya dia ya."
                                    player_name "Loh, belum dibayar?"
                                    cafe_owner "Iya, sekalian yang kamu juga ya, selamat dinikmati~"
                                    hide cafe with dissolve
                                    pause 1.0
                                    play audio "audio/shock.ogg"
                                    player_name "{size=100}Ethan Kampret!{/size}" with vpunch
                                    scene bg_black with dissolve
                                    pause 1.0
                                    stop music fadeout 1.0

                                    jump pertemuan_liam_rachel

                            pass
                        "Baru sampe(WIP)":
                            player_name "Aku baru aja nyampe terus mesen susu."
                            ethan "Sekalian pesenin dong"
                            
                    #Dapet kontak ethan
                    pass
                "Bareng Liam (WIP)":
                    #Afeksi bertambah, dapet kontak ethan tapi curiga
                    #ajak masuk atau ditunggu diluar
                    #
                    pass
                "Bareng Rachel (WIP)":
                    #Afeksi bertambah, dapet kontak ethan tapi curiga
                    #ajak masuk atau ditunggu diluar
                    pass
                "Bareng Liam & Rachel (WIP)":
                    #Ada konflik?, dapet kontak ethan tapi curiga
                    #ajak masuk
                    pass

label pertemuan_liam_rachel:
    scene bg_black with dissolve
    "Keesokan harinya aku, Liam dan Rachel kumpul di apartemenku"
    scene bg_livingroom_night with dissolve
    play music "audio/music/adrenaline.mp3"
    player_name "Guys, aku dah dapet kontak dia, terus kita mau apa?"
    show liam senyum
    liam "Nice, sekarang langkah kita paksa Ethan buat jelasin Chronos-9."
    hide liam senyum
    show rachel
    rachel "Tapi, kita jangan terlalu gegabah, Ethan itu hati-hati banget."
    rachel "Salah satu langkah aja bisa kacau rencana kita."
    hide rachel
    show liam
    liam "Oke, garis besarnya aku sudah paham."
    liam "Hanya [player_name] saja yang bisa membahas Chronos-9 secara langsung dengan Ethan."
    liam "Jika dia merahasiakannya dari kami, hanya kamu aja yang bisa nentuin ini."
    player_name "Agak ngeri ya."
    show liam senyum
    liam "Tenang, selama kamu ada di rencana kami, kamu bakal baik-baik aja."
    liam "Kita susun strategi dulu, target kamu adalah dapat akses ke X-Tech."
    liam "Kemudian kamu tukar informasi ke kita."
    player_name "Oke kita lakukan dengan hati-hati."
    liam "Tapi aku pengen kamu datang ke rumah aku."
    player_name "Kenapa gak disini? Kamu tuh ribet banget."
    show liam
    liam "Yah, kita gak tau apa yang ada disini."
    liam "Mungkin kita sedang disadap?"
    player_name "Dipikir-pikir, bener juga ya."
    player_name "Ethan kemarin tau kita lagi kumpul."
    liam "Nah kan?"
    liam "Sangat berisiko jika kita kumpul gini terus."
    player_name "Oke deh, kamu arahin aku aja di text."
    show liam senyum
    liam "Oke, kalo gitu aku pulang dulu."
    player_name "Iya, hati-hati."
    hide liam senyum with dissolve
    pause 2.0
    show rachel with dissolve
    rachel "[player_name], Aku mau kamu datang ke apartemenku."
    player_name "Hah? Mau ngapain?"
    show rachel serius
    rachel "Udah kamu nurut aja."
    player_name "I-iya."
    hide rachel serius with dissolve
    scene bg_black with dissolve
    "Kenapa Rachel tiba-tiba gini?"

    stop music fadeout 2.0

    $ renpy.notify("Bab ░░ telah terbuka!")

    $ renpy.pause(1.0, hard=True)

    show text "{font=font/digital.TTF}{size=120}BAB ░░ SELESAI{/size}" at truecenter with dissolve

    $ renpy.pause(3.0, hard=True)

    hide text with dissolve

    jump bab4A

            
