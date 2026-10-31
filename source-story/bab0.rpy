label normal_story:

    call checkpoint

    $ quick_menu = True

    $ persistent.unlocked_continue = True

    play music "audio/music/chill.mp3" volume 1

    show bg_classroom_day with dissolve

    "Aku sedang mengikuti perkuliahan. Kebetulan, sekarang tidak ada mata kuliah. Aku harus menunggu jam berikutnya."
    "Alih-alih pulang, aku memutuskan untuk tetap di kelas."
    "Aku belum punya teman..."
    "Menyedihkan."

    show rachel nyapa with dissolve

    unknown_man "Hai [player_name]! Kamu lagi apa nih? Ngobrol sama yang lain kek"

    player_name "Hai juga, eumm... kamu siapa?"

    show rachel cemberut
    unknown_man "Loh, kok nggak tahu sih?"

    show rachel marah

    $ persistent.affection_unlocked["rachel"] = True
    $ persistent.characters["rachel"] = {"affection": 0}

    $ renpy.notify("Karakter Baru telah terbuka!")

    rachel "Aku Rachel! Temen sekelas kamu!"
    rachel "Masa kamu nggak tahu sih?"

    menu:
        "Oh! Rachel! Aku baru inget, kamu yang duduk di depan ya?":
            show rachel marah
            rachel "Dasar lemot!"

            pause 1
            show rachel kaget

            rachel "Ehh... maaf, kelepasan."

        "Maaf, aku lupa":
            show rachel marah
            rachel "Ih kamu nggak ingat aku? Padahal aku sering duduk di depan kamu!"

    show rachel senyum
    rachel "BTW, kamu tahu nggak?"
    rachel "Ada kabar terbaru soal teknologi yang lagi dikembangin, lho."
    
    show rachel bingung
    rachel "Katanya sih, ini bakal jadi penemuan paling gila sepanjang sejarah!"

    show rachel senyum
    rachel "Menurut kamu gimana?"

    menu:
        "Ah, aku nggak ngikutin berita itu":
            $ persistent.characters["rachel"]["affection"] -= 1
            show rachel cemberut
            rachel "Oh gitu ya..." 
            "Rachel terlihat kecewa karena kamu nggak tertarik dengan topik yang dia suka."
            rachel "Yah, mungkin aku bakal cari temen ngobrol lain yang lebih ngerti."
            rachel "Tapi makasih udah dengerin aku, ya."
            hide rachel sedih with dissolve
            "Rachel terlihat kecewa karena merasa kamu nggak menarik."
            scene bg_black with dissolve
            jump rachel_dingin

        "Tentang penemuan itu ya!? Menurutku sih itu bisa ngubah hidup manusia banget":
            $ persistent.characters["rachel"]["affection"] += 1
            show rachel senyum
            "Rachel terlihat antusias karena nemuin seseorang yang punya minat yang sama."
            rachel "Iya kan!? Aku juga penasaran banget. Gimana kalau kita coba selidikin bareng?"

            menu:
                "Ide bagus! Aku juga penasaran banget!":
                    show rachel ketawa
                    rachel "Nice! Aku suka semangatmu!"

                "Hmm... Aku nggak tahu, bisa aja itu malah berbahaya":
                    show rachel ketawa
                    rachel "Ahahaa, kamu lebay banget deh. Kita kan belum tahu, bisa aja itu bermanfaat buat kita."
                    player_name "Iya juga sih... Oke deh, aku ikut kamu aja."

    jump bab0

label bab0:

    call checkpoint

    scene bg_school_hallway_day with fade
    "Setelah kelas selesai, aku dan Rachel berjalan pulang bersama."
    scene bg_apartment_exterior with fade
    "Beberapa jam kemudian, Aku dan Rachel pulang ke rumah masing-masing."
    "Ternyata... Aku dan Rachel itu tetanggaan. Padahal selama ini cuma lihat dia di sekolah."

    show rachel kaget
    rachel "Serius!? Kamu tinggal di sini juga?"

    player_name "Iya, aku juga nggak nyangka. Mungkin ini takdir? Haha."
    player_name "Haha..."
    show rachel senyum with dissolve
    stop music fadeout 1.0
    player_name "..."
    show rachel marah
    play music "audio/music/chill.mp3" volume 1 fadein 2.0
    rachel "A-apa sih kamu, ngomongnya aneh banget!" 

    show rachel with dissolve
    rachel "Ehem... ja-jadi, besok kamu bisa datang ke Kafe Hoshizora?"

    player_name "Kenapa nggak di rumahmu aja? Atau rumahku?"


    show rachel marah
    rachel "D-dasar kamu! Kita baru kenalan, kamu udah ngajak ke rumah aja!?"

    rachel "Pokoknya kita ketemuan di sana! Aku nggak sembarangan ngundang orang ke kamarku, oke?"

    player_name "I-iya, maaf... Aku janji bakal datang kok."

    show rachel ketawa
    rachel "Sip. Sampai jumpa besok~"

    hide rachel senyum with dissolve
    play audio "audio/sfx/door-slam.mp3"
    "Rachel masuk ke ruangannya."
    player_name "Imut banget si Rachel..."

    show bg_black with dissolve
    hide bg_apartment_exterior

    centered "Keesokan harinya, aku bergegas ke Kafe Hoshizora."

    show bg_city_morning with dissolve
    "Aku telat karena semalam tidur terlalu larut..."

    hide bg_city_morning with dissolve
    show bg_cafeteria_day with dissolve
    "Sesampainya di kafe, aku lihat Rachel sudah datang duluan."

    show rachel marah with dissolve
    rachel "Lama banget sih!?"

    rachel "Kita janjian satu jam yang lalu, dan kamu baru nongol sekarang!?"
    rachel "Apa yang bikin kamu telat segitunya, hah?"

    menu:
        "Maaf, aku kemarin terlalu mikirin kamu":
            pause 1.0
            show rachel senyum
            rachel "A-apa sih kamu, suka tiba-tiba ngomong gitu..."

        "Maaf, kemarin aku terlalu mikirin penemuan yang kita bahas itu":
            show rachel kaget
            rachel "Hah!? Sampe nggak bisa tidur gitu? Parah sih!"

    stop music fadeout 1.0
    pause 0.5
    play music "audio/music/fog.mp3" volume 1

    show rachel
    rachel "Jadi, kamu dapet info apa dari penelusuranmu kemarin?"

    player_name "Aku baru dapet petunjuk. Teknologi itu dikembangin sama perusahaan bernama X-Tech, dan pemimpinnya adalah..."

    rachel "Dr. Marcuz Holloway."

    player_name "Lah? Kamu tahu juga?"

    rachel "Aku punya kenalan yang kerja di sana. Tapi Dr. Marcuz itu... katanya sih orangnya super misterius."

    hide rachel with dissolve
    scene bg_lobby_x with dissolve

    rachel "Dan belum jelas apa sebenarnya motivasi dia ngembangin teknologi ini."

    player_name "Tapi kamu tahu soal CTRL+Z, kan?"

    rachel "Sayangnya belum banyak info yang aku dapet. Kontaknya juga susah banget dihubungi akhir-akhir ini."

    rachel "Aku udah coba nyari dia, tapi kayaknya dia lagi ngilang."

    player_name "Tapi kamu tahu lokasi perusahaannya?"

    rachel "Iya, aku tahu... tapi jujur aja, itu tempat yang berisiko banget."

    rachel "Aku nggak mau nekat dateng ke sana tanpa persiapan."

    player_name "Berarti sekarang kita harus gali informasi lebih dalam soal perusahaan ini."

    rachel "Hmm... tapi aku ragu kamu bisa dapet info yang lebih banyak."

    player_name "Mungkin... tapi aku nggak akan nyerah. Aku akan coba, sekecil apa pun peluangnya."

    scene bg_cafeteria_day with dissolve
    show rachel kaget

    $ persistent.characters["rachel"]["affection"] += 1

    player_name "Mulai sekarang, kita kerja sama buat ungkap rahasia di balik teknologi ini."
    player_name "Tapi aku butuh bantuanmu."

    show rachel
    rachel "..."

    rachel "Oke, kita tutup pertemuan hari ini. Selanjutnya, kita cari orang yang mungkin punya koneksi ke perusahaan itu."

    player_name "Siap!"

    hide rachel senyum with dissolve
    show bg_black with dissolve
    stop music

    window hide

    jump diskusi


label diskusi:

    call checkpoint

    # paka efek ketik terwujud!
    $ renpy.pause(0.5)
    show text "{font=font/digital.TTF}{size=120}{cps=15}Pagi hari di Kurokawa Institute of Technology{/cps}{/size}" at truecenter with dissolve
    play sound "audio/sfx/keyboard_fast.mp3" volume 0.5
    pause 3.0
    hide text with dissolve
    stop sound fadeout 1.0

    play music "audio/music/chill.mp3" volume 1
    show bg_classroom_day
    "Aku menghampiri Rachel di kelas."

    show rachel with dissolve
    player_name "Aku harus ngobrol sama kamu abis ini."

    show rachel kaget
    rachel "Eh!? Kamu dapet info yang kita cari kemarin?"

    player_name "Belum pasti sih... tapi aku nemu sesuatu yang menarik."

    show rachel marah
    rachel "Kamu kalo ngasih info harus jelas dulu dong."

    player_name "..."

    show rachel marah:
        zoom 1.5
        yoffset 400

    rachel "WOY, DENGER GAK SIH!?" with hpunch

    hide rachel marah with dissolve

    scene liam_baca with dissolve
    pause 2.0

    rachel "Eh, kamu naksir ke dia?"

    player_name "Eh, nggak, cuman..."

    player_name "Dia cantik juga ya?"

    rachel "Mulaii... kita kan mau diskusi, bukan cari bini!"

    rachel "Tapi iya juga sih, si Liam itu jenius banget. Dia selalu dapat nilai tertinggi di kelas."

    player_name "Iri ya?"

    rachel "Ishh.. mulai..."

    player_name "Dilihat-lihat dia jarang ngobrol sama orang lain."

    rachel "Ya, biasa lah kutu buku gak mau diganggu."

    rachel "Gimana kalau kita coba ajak dia gabung? Siapa tau bisa bantu banyak."

    player_name "Wah... kamu pinter juga ya kalau urusan 'manfaatin' orang. Tapi aku setuju."

    player_name "Ayo, abis kelas ini langsung kita samperin."

    hide rachel with dissolve

    scene bg_black with dissolve
    centered "Setelah kelas selesai, Aku dan Rachel mendekati Liam yang masih duduk di mejanya."

    menu:
        "A-anu...":
            scene bg_classroom_day
            "Aku nyoba manggil Liam... tapi dia nggak noleh sama sekali."
            "Serius banget baca bukunya."
            show rachel marah
            "Rachel mulai kelihatan kesal."
            hide rachel marah with dissolve

        "Hai, Liam!":
            scene bg_classroom_day
            show liam with dissolve
            liam "Hmm?"

    $ persistent.affection_unlocked["liam"] = True
    #$ persistent.unlocked_characters["liam"] = True
    $ persistent.characters["liam"] = {"affection": 0}
    $ renpy.notify("Karakter Baru telah terbuka!")

    show liam
    liam "Ada apa?"

    player_name "Setelah ini kamu kosong? Kita pengen ngobrol bentar."

    liam "..."

    "Asik bener ni orang baca bukunya."

    "Rachel yang dari tadi nahan diri akhirnya nggak tahan lagi."

    hide liam
    show rachel marah
    play audio "audio/glass-break.mp3" volume 0.3 # Efek suara kejutan
    rachel "{size=45}{b}WOY! Lu diajak ngobrol, dengerin kek!{/b}{/size}" with hpunch
    

    menu:
        "Sabar Rachel!":
            hide rachel marah
            player_name "Liam, jadi gini, kita punya sesuatu yang penting buat dibahas. Kamu tertarik nggak?"

            show liam

            liam "... Tentang apa?"

            "Aku pun menjelaskan semuanya ke Liam dari teknologi misterius, sampai perusahaan X-Tech."

            "Ekspresinya tenang... tapi matanya gak bisa bohong."

            $ persistent.characters["liam"]["affection"] += 1

            player_name "Jadi, kamu mau ikut bareng kami nyelidikin ini lebih jauh?"

            show liam senyum

            liam "Heehhh... kedengerannya menarik. Baiklah, aku ikut."

            hide liam senyum
            scene bg_black
            with dissolve

        "Iya bener, sok jual mahal banget sih kamu":
            $ persistent.characters["liam"]["affection"] -= 1

            "Liam langsung diam. Tatapannya datar. Sepertinya dia malas menanggapi."
            "Kami pun menyerah."


    if persistent.characters["liam"]["affection"] >= 1:
        jump bab1A
    else:
        jump pendekatan_liam

label rachel_dingin:
    call checkpoint

    scene bg_classroom_day with dissolve
    player_name "Sepertinya Rachel kecewa sama aku..."
    player_name "Aku merasa dia jadi lebih dingin sama aku."
    player_name "Mungkin aku harus usaha lebih keras supaya dia percaya sama aku."
    player_name "Hmm..."
    player_name "Aku deketin Rachel lagi deh."
    "Aku deketin Rachel lagi."
    player_name "Rachel, maaf ya tadi aku nggak terlalu tertarik sama topik yang kamu suka."
    player_name "Aku janji bakal lebih perhatian sama kamu."
    "(Rasanya aku kaya gombalin si Rachel ya?)"
    show rachel with dissolve
    pause 1.0
    show rachel marah
    rachel "Ih, kamu gombal banget sih!"
    show rachel senyum
    rachel "Tapi yaudahlah, aku maafin deh."
    $ persistent.characters["rachel"]["affection"] += 1
    hide rachel senyum with dissolve
    scene bg_black with dissolve
    "Setelah itu, hubungan aku dan Rachel jadi lebih baik."
    "Kelas akan dimulai."

    jump bab0

label liam_normal_story:

    unknown_man "..."

    unknown_man "[player_name]..!"

    unknown_man "{b}{size=40}[player_name]..!!{/size}{/b}"

    rachel "WOY, DENGER GAK SIH!?" with hpunch

    hide rachel marah with dissolve

    scene liam_baca with dissolve
    pause 2.0

    play music "audio/chill.mp3" volume 1

    rachel "Eh, kamu naksir ke dia?"

    player_name "..."

    player_name "..."

    rachel "Daritadi kamu diem mulu ih"

    rachel "Awas kerasukan..."

    player_name "Ughh.... hiks..."

    rachel "Lah ini mah beneran kerasukan"

    player_name "Liam..."

    rachel "Kamu kenapa sih!?"

    player_name "Ohh.. n-nggak ada apa-apa..."

    player_name "Ngomong apa tadi?"

    rachel "Aneh banget kamu ih"

    player_name "Maaf tadi aku inget sesuatu"

    rachel "Hah? Apaan?"

    player_name "Waifu aku kemarin mati"

    rachel "..."

    rachel "Cengeng amat ih... Ya gak apa-apa kali"

    player_name "Habis ceritanya seru, jadi kebawa emosi"

    rachel "Iya.. iya.. sekarang kita ke tempat Liam dulu"

    scene bg_black with dissolve

    menu:
        "...":
            scene bg_classroom_day
            "Hatiku campur aduk antara takut dan senang"
            "Tapi kali ini aku gak akan buat kesalahan lagi"
            show rachel marah
            "Rachel mulai kelihatan kesal."
            hide rachel marah with dissolve

        "Liam...":
            scene bg_classroom_day
            show liam with dissolve
            liam "Hmm?"

    $ persistent.affection_unlocked["liam"] = True
    #$ persistent.unlocked_characters["liam"] = True
    $ persistent.characters["liam"] = {"affection": 0}
    $ renpy.notify("Karakter Baru telah terbuka!")

    show liam
    liam "Ada apa?"

    player_name "..."

    liam "..."

    rachel "Maaf Liam, orang ini emang aneh"

    liam "Kalian ada perlu apa?"

    rachel "Kita punya sesuatu yang penting buat dibahas. Kamu tertarik nggak?"

    show liam

    liam "... Tentang apa?"

    "Rachel pun menjelaskan semuanya ke Liam dari teknologi misterius, sampai perusahaan X-Tech."

    "Aku masih gak bisa ngomong karena syok berat"

    $ persistent.characters["liam"]["affection"] += 1

    rachel "Jadi, kamu mau ikut bareng kami gak?"

    show liam senyum

    liam "Heehhh... kedengerannya menarik. Baiklah, aku ikut."

    hide liam senyum

    scene bg_black

    with dissolve

    $ persistent.story["bab1"]["liam_route"] = True #Setiap bab bakal ada percabangan

    jump liam_route

label liam_route:

    pause 0.6

    scene bg_black

    "Aku harus mengulang lagi?"

    "Apa aku harus fokus selamatin Liam?"

    "Apa aku harus jujur ke Liam?"

    jump bab1A

    #To be continue