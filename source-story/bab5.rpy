label bab5A:

    "Aku dan Liam sedang duduk di ruang tamu rumahku."
    "Apa yang kita temukan kemarin masih muter-muter di kepalaku."
    "Aku mulai ragu... Ethan bukan orang sembarangan."

    play music "audio/decided.mp3" fadein 1.0 volume 0.5
    scene bg_livingroom_night with dissolve
    show liam with dissolve
    liam "Terus... langkah kita selanjutnya apa?"
    player_name "Hah? Bukannya kamu yang nentuin?"
    liam "Aku cuma nguji kamu. Soalnya kamu tuh pelupa parah."
    player_name "Wah, jahat banget kamu ngomongnya."

    "...."

    menu:
        "Sebenernya lupa":
            player_name "Hehehe...{w=1.0} aku lupa beneran sih."
            player_name "Kalo gak salah kita ke taman dulu kan?"
            stop music fadeout 0.5

        "Ngasal jawab":
            player_name "Kita...{w=1.0} refreshing ke taman dulu?"
            stop music fadeout 0.5


    show liam marah

    liam "..." 
    liam "Ishhh... {w=1.0} kita lagi mau masuk ke markas orang, bukan piknik."
    player_name "I-iya, iya. {w=0.3}Maaf..."

    show liam

    play music "audio/decided.mp3" fadein 1.0 volume 0.5

    liam "Jadi gini. Langkah kita selanjutnya itu ngambil akses masuk."
    player_name "Hmm... tapi kayaknya bukan itu deh tahap berikutnya."
    show liam marah
    liam "Dengerin dulu, aku jelasin runtutnya."

    show liam
    liam "Pertama, kita udah observasi tadi malam, kan?"
    player_name "Yup, yang itu aku inget."

    liam "Kedua, identifikasi perangkat dan jalur koneksi."
    player_name "Eh? Itu udah kita lakuin belum sih?"

    liam "Udah. Aku kerjain sendiri."
    player_name "Gila... Terus kenapa ngajak aku?"

    liam "Aku penasaran dan adrenaline aku terpacu, jadinya kebablasan"

    show liam mikir2 with dissolve
    liam "Aku juga gak nyangka kejadian semalam bakal kayak gitu."

    liam "Oke, lanjut. Ketiga, kita cari celah di jaringan Ethan. Itu juga udah aku catat."
    liam "Nah, sekarang tinggal yang keempat: menyusup, masukin pin, dan ambil data dari komputernya Ethan."

    player_name "Ngg... aku gak enak nih rasanya."

    liam "Kenapa? Perasaan buruk?"

    player_name "...Gak tahu. Cuma... kayaknya ada yang nggak beres."

    show liam senyum

    liam "Tenang aja. Kita siapin semuanya dulu."

    scene bg_black with dissolve
    hide liam with dissolve

    show text "{font=font/digital.TTF}{size=120}20.20 PM{/size}\n{size=90}Depan Rumah Ethan{/size}" at truecenter with dissolve

    stop music fadeout 1.0
    pause 2.0 

    scene bg_city_night with dissolve
    show liam with dissolve

    player_name "Udah siap belum?"

    liam "Siap. Kamu yang turun ke lokasi, aku pantau dari sini. Instruksi nyusul."

    player_name "Siap deh, Yang Mulia."
    player_name "Tapi kenapa sih harus aku yang turun langsung?"

    liam "Jangan banyak protes. Kamu yang kepilih karena aku yakin kamu bisa."

    player_name "Huffft... yaudah deh."

    hide liam with dissolve

    "Ku buka pintu mobil dan turun pelan. Rumah Ethan ada di depan mata. Sepi. Gelap. Tapi anehnya terasa... nggak asing."

    player_name "Keliatannya aman. Nggak ada gerakan mencurigakan... Harus cepat."

    play sound "audio/walkie talkie.mp3"

    liam "Inget. Fokus. Jangan gegabah. Sekali salah langkah, tamat riwayatmu."

    player_name "Iya iya... ngerti kok."

    scene bg_ethan_house with dissolve
    "Aku sampai di depan pintu. Terkunci. Ada panel PIN. Tentu aja."

    player_name "Liam, kode PIN-nya apa?"

    liam "409282. Masukin itu."

    player_name "Oke, semoga bener..."

    $ ethan_pin_house = "409282"
    $ ethan_pin = ""

    label ethan_house:

        $ ethan_pin = renpy.input(">> Masukan PIN:", length=6)
        $ ethan_pin = ethan_pin.strip()

           
        if ethan_pin == "409282":
            play sound "audio/access-granted.mp3"
            pause 0.5
            "..."
            
            player_name "Terlalu mudah..."
            liam "Nggak usah mikir lama. Fokus, kamu udah dapet aksesnya."
            player_name "Oke, aku masuk sekarang."
            "Tanpa ragu, aku membuka pintu perlahan dan melangkah masuk, menyusuri lorong menuju kamar Ethan dengan napas tertahan."

        else:
            play sound "audio/incorrect.mp3"
            "{color=#FF0000}KODE SALAH{/color}."

            liam "Salah. Coba lagi. 409282. Jangan ngaco."

            jump ethan_house

    scene bg_ethan_livingroom with dissolve
    pause 3.0
    scene bg_kamar_ethan with dissolve

    player_name "Tempatnya... Harusnya di sini."
    player_name "Ada PC, dan..."
    player_name "Tentu saja dikunci password."
    player_name "Liam, next step-nya apa?"

    "..."

    player_name "Liam?"

    player_name "Woy, Liam! Denger gak sih?!"

    unknown_man "Dia nggak akan jawab."

    unknown_man "Karena aku udah matiin semua sinyal dari luar."

    player_name "Suara ini..."

    show ethan with dissolve
    play music "audio/music/adrenaline.mp3" fadein 1.0 volume 1
    pause 2.0

    player_name "Ethan..."

    ethan "Yo, bro. Lama gak jumpa ya?"

    player_name "Kamu..."

    ethan "Masih aja ngeyel, ya. Dari dulu gak pernah berubah."

    ethan "Dan jujur, aku respect itu. Jadi gini..."

    ethan "Aku kasih kamu akses penuh ke sistem ini."

    ethan "Tapi ada satu syarat kecil."

    ethan "Kamu putus kontak sama Liam. Sekarang juga."

    player_name "Kalau aku tolak?"
    hide ethan
    ethan "Kamu tau akibatnya..."

    stop music fadeout 0.5

    play audio "audio/revolver-charge.mp3"

    pause 1.0

    show ethan_nodong with dissolve

    pause 1.5

    play music "audio/pursuit.mp3"

    ethan "Oke mari kita dengarkan keputusanmu~"

    menu:
        "Jauhi Liam dan ikuti Ethan":
            #$ trust_ethan = True
            "Aku perlahan menunduk, meletakkan Transceiver di lantai."
            player_name "Oke... Aku ikut aturan kamu."
            ethan "Keputusan bagus. Kamu bakal lihat dunia dari sisi yang sebenarnya."
            jump follow_ethan_path

        "Melarikan diri (WIP)":
            $ player_escape = True
            "Tanpa pikir panjang, aku tendang meja di depanku dan kabur lewat pintu samping!"
            play sound "sfx_alarm.wav"
            ethan "SIALAN!"
            hide ethan
            play sound "audio/revolver-shot.mp3" volume 3.0
            pause 2.0
            jump coming_soon
            jump escape_scene

        "Melawan Ethan (WIP)":
            $ player_fight = True
            player_name "Aku gak akan nurut sama lo!"
            "Aku lompat ke arah Ethan, berusaha rebut senjatanya."
            play sound "sfx_struggle.wav"
            jump coming_soon
            jump fight_scene

label follow_ethan_path:
    
    scene bg_office_basement with fade
    play music "audio/investigation.mp3" fadein 2.0

    "Aku mengikuti Ethan melewati lorong rumah yang gelap... setiap langkah terasa berat."
    "Lampu-lampu berkedip. Entah kenapa, suasana rumah ini bikin merinding."

    ethan "Kamu udah buat keputusan yang tepat. Percayalah, Liam itu nggak seperti yang kamu kira."
    player_name "Apa maksud kamu?"
    ethan "Dia pakai kamu. Dia... pakai semua orang yang dekat dengannya."
    show ethan marah at left with dissolve
    ethan "Aku menelusuri siapa Liam sebenarnya."

    player_name "Tapi... dia bantu Aku. Dari awal. Dia baik kok."
    ethan "Dia bantu karena kamu pion. Sekarang, kamu perlu buka mata." 

    show ethan with dissolve
    ethan "Dengerin, Aku kasih kamu akses yang bahkan Liam gak tau."
    ethan "Tapi kamu harus janji..."

    player_name "Janji apa?"

    ethan "Hapus semua koneksi kamu ke dia. Termasuk file, pesan, jejak digital."
    ethan "Kalau perlu... kita format ulang sistem dia dari sini."

    menu:
        "Setuju dan lanjut bantu Ethan (WIP)":
            "Aku mengangguk pelan."
            ethan "Anak pintar~"
            "Ethan memberikanku tablet kecil dengan koneksi langsung ke jaringan Liam."
            "Ada 3 target utama yang harus kuhapus..."
            "Namun entah kenapa aku bergerak tidak sesuai dengan pikiranku"
            menu:
                "Rachel":
                    pass
                "Liam":
                    pass
                "Valeria": #bakal ada kalo memang udah ketemu dia, atau pemain udah balik dari bab 6
                    pass
                "Claire":
                    pass
                ""
            jump coming_soon


        "Ragu dan coba kabur":

            player_name "Maaf... {w=0.8} ini nggak bener."
            hide ethan with dissolve
            ethan "Serius, lu lebih milih dia?"
            player_name "Ya, karena in-{nw}"
            stop music
            play audio "audio/pistol-shot.mp3" volume 3.0
            play sound "audio/blood-splatter.mp3" volume 3.0
            pause 1.0
            play music "audio/pursuit.mp3"

            "{size=70}{b}AKHHHHHH!!!{/b}{/size}"
            player_name "Aku harus kabur secepatnya"
            #harus debugging disini

            show screen player_choice(15, "coming_soon")

            pause 10

            jump escape_scene

    return

label escape_scene:

    scene bg_corridor_dark with fade
    play audio "audio/Running_footsteps.mp3" volume 3.0

    pause 1.0
 
    play sound "audio/door-slam4.mp3" volume 2.0
    with hpunch
    
    pause 0.5

    play audio "audio/revolver-shot.mp3" volume 2.0

    ethan "HEY!, LO MAU KEMANA?!"

    player_name "GILA LU ETHAN!"

    show cg_door_locked with dissolve
    "Aku tiba di pintu depan...{w=1.0} TERKUNCI.{w=0.3} {size=50}BANGKE!!{/size}"

    show screen countdown(3.0, "coming_soon")
    menu:
        "Cari jalan alternatif ke atap":
            hide screen countdown
            play audio "audio/Running_footsteps.mp3" volume 3.0
            pause 1.0
            scene bg_rooftop_city_night with fade
            player_name "Njir, Ini lantai 3 loh..."
            player_name "Ahh gak ada pilihan lain!"
            jump escape_outside

        "Sembunyi dulu di lemari bawah tangga (WIP)":
            hide screen countdown
            jump coming_soon
            scene bg_staircase_dark with fade
            "Aku membuka lemari kecil dan bersembunyi, menahan napas dalam gelap."
            "Langkah kaki Ethan makin dekat... makin dekat..."
            play sound "audio/steps.mp3" volume 1.5 fadein 0.5
            ethan "Lu pikir bisa sembunyi, hah?"

            menu:
                "Tetap diam":
                    "Aku berusaha menahan napas, tubuhku gemetar."
                    "Ethan diam... lalu langkah kakinya menjauh."
                    jump escape_outside

                "Keluar dan kejar waktu":
                    "Aku mendobrak pintu lemari dan berlari!"
                    play sound "sfx_chair_fall.ogg"
                    "Ethan kaget — aku berhasil menyusul ke pintu belakang!"
                    jump escape_outside

        "Balik menyerang Ethan dengan benda terdekat (WIP)":
            hide screen countdown
            jump coming_soon
            "Aku meraih botol kaca di dekat meja dan menunggu Ethan muncul..."
            "Begitu dia masuk—"
            play sound "audio/glass-break2.mp3"
            "KUHANTAMKAN botol itu ke kepalanya!"
            "Ethan terhuyung, berdarah, tapi belum tumbang."
            "Aku langsung lari keluar..."
            jump escape_outside

label escape_outside:

    scene bg_black with dissolve

    pause 3.0
    
    play music "audio/cold_outdoor.ogg" fadein 2.0
    #audio hujan
    scene bg_street_summer_rain with fade
    "Aku berhasil keluar. Hujan turun deras, mengguyur seluruh tubuhku sampai basah kuyup."
    "Nafasku berat, dada terasa sesak, setiap tetes hujan seolah memadamkan bara adrenalin yang masih tersisa."
    "Aku gemetar... entah karena dingin, atau karena rasa takut yang belum hilang."

    "Aku menoleh ke arah rumah Ethan."
    "Lampu di jendela masih menyala, bayangan samar bergerak di balik tirai. Mungkinkah Ethan masih sadar? Atau... ada orang lain di dalam sana?"
    "Aku nggak bisa tahu pasti, dan aku nggak bisa kembali lagi."

    play sound "audio/thunder.ogg"
    "Kilatan petir membelah langit malam, disusul suara guntur menggelegar."
    "Sesaat aku merasa kecil... seolah seluruh dunia ikut memperingatkan: ini baru permulaan."

    player_name "Ethan..."
    player_name "Apa sebenarnya yang lo sembunyikan?"

    "Aku berjalan terpincang-pincang menyusuri jalanan gelap. Asap napasku bercampur dengan kabut tipis yang terbentuk dari hujan malam."
    "Pikiranku bingung. Bayangan wajah Ethan, tawa sinisnya, dan kata-katanya yang penuh misteri terus terngiang di telingaku."

    "Aku masih hidup, untuk sekarang. Tapi aku tahu... setelah ini, aku jadi target."
    "Hidupku sudah tidak aman."
    "X-Tech nggak akan tinggal diam. Dan aku nggak bisa mengandalkan Liam terus."
    "Bisa-bisa Liam juga dalam bahaya."
    "Tapi..."

    "Satu hal pasti..."
    "Ethan menyembunyikan sesuatu yang jauh lebih besar daripada sekadar proyek rahasia."
    "Dan untuk pertama kalinya..."
    "Aku merasa benar-benar sendirian."

    scene bg_black with dissolve
    pause 3.0
    unknown_man "{alpha=0.2}..!!{/alpha}"
    unknown_man "{alpha=0.5}[player_name]!!{/alpha}"
    unknown_man "{size=80}{b}[player_name]!!!!{/b}{/size}" with vpunch

    scene liam_nangis with dissolve

    player_name "..."
    player_name "Maaf Liam,{w=1.0} aku-{nw}" #coba revisi
    play music "audio/music/Unsent Letter 2.mp3" volume 0.5
    liam "{b}BODOH!{/b}"
    liam "Maafin Aku"
    scene liam_nangis2 with dissolve
    liam "Aku udah nyeret kamu"
    liam "Aku udah buat keputusan salah"
    liam "{cps=20}Maafin aku..{/cps}"
    player_name "Gak apa-apa Liam,{w=1.0} aku juga minta maaf karen-{nw}"
    liam "{size=60}{b}NGGAK!{/b}{/size}" with vpunch
    liam "Kamu gak salah,{w=1.5} aku yang salah!"
    scene liam_nangis3 with dissolve
    liam "Kamu sekarang aman kok,{w=1.5} aku ada disini"
    pause 2.0
    "Aku terharu karena Liam peduli denganku,{w=1.0} tapi..."
    "Gawat.."
    stop music fadeout 1.0
    scene bg_black with dissolve
    "{alpha=0.5}Pandanganku{w=1.5} menghilang..{/alpha}"
    pause 1.5
    scene bg_livingroom_dark with dissolve
    player_name "Kaya gak asing"
    player_name "Ini ruang tamu aku kan?"

    #audio saklar
    play audio "audio/light-switch-on.mp3" volume 2.0
    scene bg_livingroom_night
    pause 2.0
    show liam nangis with dissolve
    liam "Akhirnya kamu udah sadar juga..."
    player_name "..."
    player_name "{size=90}{b}L-LIAM???{/b}{/size}" with vpunch
    play music "audio/music/chill-bro.mp3" volume 0.5 fadein 1.0 
    show liam marah
    liam "Kamu bisa gak sih sehari gak teriak?"
    player_name "Ehh, m-maaf aku reflek"
    player_name "Ini apartemenku kan?"
    player_name "Kenapa kita udah sampe sini?"
    show liam malu
    liam "Ya karena aku yang bawa kamu kesini."
    player_name "Loh kok bisa?"
    show liam sombong
    liam "Ya bisa dong."
    liam "Badan kecil pun aku masih bisa angkat kamu loh~"
    "Nah kan, bener kataku"
    "Jangan sampai buat Liam marah"
    show liam marah
    liam "Kamu jangan kemana-mana dulu"
    liam "Pendarahan kamu cukup parah"
    liam "Kamu diam dulu disini beberapa hari"
    stop music fadeout 0.5
    show liam
    liam "Aku jelasin detailnya."
    play music "audio/thinking.mp3" volume 0.5
    liam "Pertama. Ini bukan apartemen kamu"
    pause 0.5
    liam "Aku sewa apartemen yang jauh dari apartemen kamu"
    liam "Ethan,{w=1.5} dia masih berkeliaran."
    liam "Kedua. Kondisi kamu cukup parah"
    liam "Jadi.."
    liam "Etto..."
    show liam malu
    liam "{size=20}Aku yang jaga kamu sampai kamu sembuh{/size}"
    player_name "Hah??"
    liam "Nggak, bukan apa-apa"
    show liam
    liam "Ketiga. Keberadaan kita terancam, Ethan dan yang lainnya mungkin masih mencari kita."
    player_name "Bagaimana dengan Rachel?"
    liam "Aku gak tau kondisi dia."
    liam "Yang jelas, kamu fokus sama diri sendiri dulu."
    liam "Perlu diingat, kamu jangan kontak dulu sama Rachel."
    liam "Mungkin dia masih ada kaitannya dengan X-Tech."
    liam "Kemungkinan terburuknya..."
    player_name "Nggak, nggak mungkin..."
    liam "Kita berdoa saja semoga tidak terjadi apa-apa."
    liam "Jadi sekarang kamu istirahat saja."
    stop music fadeout 1.0
    scene bg_black with dissolve
    "Untuk sesaat aku mikir"
    "Kenapa ini bisa terjadi?"
    "Apakah aku sudah terlalu dalam?"
    "Ada apa dengan dunia?"
    pause 2.0
    jump pertemuan_tidak_terduga

label pertemuan_tidak_terduga:
    #Bikin event baru atau loncat ke beberapa hari kemudian
    scene bg_livingroom_day with dissolve
    "Badanku udah hampir pulih"
    "Aku sudah bisa bergerak dengan nyaman"
    scene liam_tidur with dissolve
    "Liam sepertinya lelah, dia beristirahat di sofa"
    "Pemandangan yang indah"
    "Tapi, apakah aku harus teruskan ini?"
    menu:
        "Lanjutkan!":

            player_name "(Aku sudah berhasil menyelamatkan Liam...)"
            player_name "(Kalau aku terus bergantung sama dia...)"
            player_name "(Bukankah nanti semuanya malah akan berubah semakin kacau?)"

            player_name "(Aku tahu apa yang akan terjadi setelah ini.)"
            player_name "(Aku bisa menanganinya sendiri.)"

            scene bg_black with dissolve

            "Aku memutuskan pergi diam-diam."

            scene bg_livingroom_day with dissolve

            "Kulirik Liam yang masih tertidur pulas."

            player_name "(Maaf...)"
            player_name "(Aku cuma gak mau kamu ikut terseret lagi.)"

            pause 1.0

            "Perlahan aku membuka pintu."

            play sound "audio/door-close.mp3"

            scene bg_school_gate with dissolve

            stop music fadeout 1.0

            player_name "Oke..."
            player_name "Sekarang tinggal ambil alat itu dari apartemen."

            player_name "(Aku masih ingat semua rutenya.)"

            pause 1.0

            scene bg_black

            "Sementara itu..."

            scene bg_livingroom_day with dissolve

            show liam

            pause 1.0

            liam "..."

            liam "Lho?"

            liam "[player_name]?"

            liam "..."

            show liam marah

            liam "Astaga..."

            liam "Dia pergi sendiri?"

            liam "Padahal aku belum selesai jelasin..."

            liam "Bodoh..."

            liam "Kalau terjadi apa-apa gimana..."

            $ persistent.story["bab5"]["trust_liam"] = False
            $ persistent.characters["liam"]["affection"] -= 2

            scene bg_school_gate with dissolve

            player_name "Semoga Liam gak marah."

            player_name "(Aku cuma gak mau merepotkan dia.)"

            play music "audio/music/Sunset Confession.mp3" volume 0.5 fadein 1.0

            scene bg_river_shore with dissolve

            player_name "Hmm?"

            player_name "Bukannya..."

            player_name "Disini nanti aku bakal ketemu..."

            play audio "audio/punch2.mp3"

            stop music

            scene bg_black

            unknown_man "Aduh!"

            scene bg_river_shore

            show valeria khawatir with dissolve

            play music "audio/music/Sunset Confession 2.mp3"

            unknown_man "Maaf!"

            unknown_man "Aku tadi gak lihat jalan."

            player_name "(Dia lagi...)"

            player_name "(Persis seperti timeline sebelumnya.)"

            player_name "(Berarti masa depan memang belum berubah...)"

            jump valeria_route
    
        "Tunggu strategi Liam":
            "Ya kali aku bangunin malaikat yang lagi tidur gini."
            "Aku nikmati aja bentar kali ya."
            #liam kebangun
            
            pause 1.5
            scene liam_bangun with dissolve
            pause 1.5
            scene liam_bangun2 with dissolve
            pause 1.5
            scene bg_black
            #audio dilempar barang
            scene bg_livingroom_day with dissolve
            show liam malu
            play music "audio/music/chill-bro.mp3" volume 1 fadein 1.0 
            liam "N-n-n-n-n-n-{w=0.6}ngapain kamu?"
            player_name "Aku nunggu kamu bangun"
            player_name "Aku gak tega bangunin kamu"
            show liam marah
            liam "Kamu gak aneh-aneh kan?"
            player_name "N-n-nggak! Serius..."
            show liam merajuk
            liam "Hmmpphh... Awas aja kalo gitu lagi."
            scene bg_black with dissolve
            "Setelah suasana mereda, aku dan Liam memperbarui strategi kita"
            scene bg_livingroom_day with dissolve
            show liam mikir
            play music "audio/music/decided.mp3" volume 0.5 fadein 1.0
            liam "Oke pergerakan kita terbatas"
            liam "Kita harus lebih waspada"
            liam "Untuk itu, kamu akan ditracking selama kamu keluar"
            liam "Aku akan memasang GPS di bagian pakaian kamu yang sulit diketahui"
            player_name "Overprotektif banget ya kamu"
            show liam marah with dissolve
            liam "Bisa gak kita serius bentar?"
            player_name "I-iya maaf"
            show liam
            liam "Oke tujuan ngelakuin ini supaya kamu cepat ditolong."
            liam "Kalo aku gak ada, aku akan sulit bantu kamu."
            liam "Makanya aku harus pantau pergerakan kamu"
            liam "Paham kan?"
            player_name "Iya, aku paham."
            show liam senyum
            liam "Oke selanjutnya kamu pulang ke apartemen kamu, aku kasih ongkos pulang nih"

            if persistent.story["bab1"]["liam_route"]:
                player_name "Umm... Liam..."
                liam "Hmm..?"
                menu:
                    "Terus terang dengan Liam":
                        player_name "Liam, aku mau jujur..."
                        stop music fadeout 1.0
                        liam "Ke-kenapa? Kok tiba-tiba banget"
                        player_name "Mungkin kamu gak percaya..."
                        player_name "Tapi... aku harus bilang..."
                        player_name "Bahwa aku..."
                        scene bg_black
                        pause 1.0
                        centered "Berasal dari masa depan"
                        pause 1.0
                        scene bg_livingroom_day
                        liam "...Apa?"
                        player_name "Ini memang gak masuk akal, tapi percaya deh..."
                        player_name "Di timeline yang berbeda-"
                        player_name "Kamu mati tertabrak mobil"
                        liam "..."
                        liam "Sumpah?"
                        liam "Kok...?"
                        player_name "Setelah itu aku berantem sama Ethan dan dia memberiku sebuah replika Chronos-9"
                        player_name "Tujuanku adalah menangkap Marcuz dan menghentikan pengembangan teknologi terlarang itu-"
                        player_name "dan memastikan kalian selamat..."
                        player_name "Tidak ada yang mati..."
                        liam "Ughh.. Aku masih nggak percaya"
                        player_name "Yang jelas, kamu harus jaga diri"
                        liam "Sekarang apa yang akan kita lakukan?"
                        liam "Kalo salah satu dari kita mati-"
                        liam "Kamu juga nggak bisa terus mengulang waktu kan?"
                        player_name "Hmm.. Iya..."
                        player_name "Waktu itu Ethan bilang bahwa ini masih belum stabil"
                        player_name "Pikiranku juga agak sedikit kacau setelah terlempar ke waktu sekarang"
                        player_name "Dan..."
                        player_name "Aku harus berhati-hati dalam bertindak"
                        liam "Kalo emang bener, setelah ini kamu ngapain?"
                        player_name "Sebelum kamu tertabrak, aku pulang dari sini buat bawa alat yang kamu suruh..."
                        player_name "Terus kamu kasih aku ongkos dan-"
                        player_name "percuma aja, gak ada halte bis"
                        liam "Kan bisa aja kamu jajan pake uang itu, minimal olahraga kek"
                        player_name "Orang mana yang nyuruh temennya olahraga jauh pas dia baru pulih?"
                        player_name "Terus aku ketemu cewek yang..."
                        player_name "Atletis gitu..."
                        player_name "Dia minta tolong bantu angkat barang"
                        player_name "Udah itu aku ditembak seseorang dari belakang dan aku gak sadar diri"
                        player_name "Tau-tau udah ketemu Marcuz aja"
                        play music "audio/music/adrenaline.mp3" volume 1.0 fadein 1.0
                        show liam kaget
                        liam "Wah!?{w=1.0} sumpah kamu ketemu Marcuz?"
                        player_name "Asli! Badan dia gede banget"
                        player_name "Yah.. tipikal om-om gitu"
                        player_name "Terus aku paling benci sama ketawanya"
                        player_name "Bikin telinga aku mau pecah"
                        show liam mikir with dissolve
                        liam "Hmm..."
                        liam "Jujur, ini rumit..."
                        liam "Kalo kamu berniat mengulang kejadian kaya sebelumnya-"
                        liam "Kamu bakal ketemu Marcuz"
                        liam "Bener sih itu tujuan kita..."
                        liam "Tapi dia otak dibalik semua ini!"
                        liam "Kamu berlagat aneh dikit aja pasti ketauan!"
                        player_name "Bener juga..."
                        player_name "Waktu kita gak banyak, aku harus membuat Ethan percaya sama aku"
                        liam "Oke, kita perlu strategi sekarang"
                        liam "Menurutku-"
                        player_name "Sebaiknya aku saja yang memutuskan"
                        player_name "(Aku gak mau terulang lagi)"
                        
                        menu: #Masih dummy
                            "Temui Ethan langsung di markasnya (WIP)":
                                $ persistent.strategy_ethan = "direct"
                                player_name "Kita datangi dia langsung. Paksa dia dengar penjelasanku."
                                show liam kaget
                                liam "Punya otak pake dong! Itu sama aja bunuh diri! Marcuz pasti punya anak buah di sana."
                                player_name "Tapi itu cara tercepat. Kalau kita ragu, kamu yang mati."
                                show liam marah
                                liam "Kamu pikir aku peduli kalau aku mati?! Yang penting kamu selamat!"
                                player_name "Liam... aku gak akan biarin itu terjadi. Aku udah lihat kamu mati sekali, dan aku gak akan ngeliatnya lagi."
                                show liam terkejut
                                liam "..."
                                show liam mikir
                                liam "Hmph... Oke. Kalau kamu mau main api, aku bakal siapin pemadamnya."
                                liam "Kita gak masuk lewat pintu depan. Aku tahu ada jalur tikas lewat ventilasi belakang gedung itu."
                                show liam serius
                                liam "Tapi dengerin aku. Kamu diem di belakangku. Apapun yang terjadi, jangan pisah."
                                player_name "Siap, bos."
                                $ persistent.direct_route_prep = True
                                
                            "Cari Rachel dulu, dia bisa mempengaruhi Ethan (WIP)":
                                $ persistent.strategy_ethan = "rachel"
                                player_name "Rachel... Ethan pasti dengar kata-katanya. Kita cari Rachel dulu."
                                show liam senyum
                                liam "Ide bagus. Rachel adalah satu-satunya orang yang bisa menurunkan ego Ethan."
                                show liam mikir
                                liam "Tapi... ini gak akan semudah itu."
                                player_name "Kenapa? Rachel kan deket banget sama Ethan."
                                liam "Justru karena itu. Ethan sekarang lagi paranoid berat."
                                liam "Dia mungkin mikir Rachel udah di-suspect sama Marcuz, atau malah dia yang ngawasin Rachel 24/7."
                                player_name "Jadi kita harus gimana?"
                                show liam serius
                                liam "Kita harus intercept Rachel di luar jangkauan pantauan Ethan. Tapi kalau kita salah langkah..."
                                liam "Ethan bakal mikir Rachel berkhianat, dan Marcuz bakal tau kita nyasar ke Rachel."
                                player_name "Berarti kita cuma punya satu kesempatan buat ngomong sama dia tanpa ketahuan."
                                show liam
                                liam "Betul. Kita main aman, tapi gerak cepat. Aku bakal cari tau jadwal rutin Rachel hari ini."
                                $ persistent.rachel_route_prep = True
                                # Catatan: Di sini Rachel akan menghadapi kesulitan membujuk Ethan karena paranoia Ethan (bisa dipengaruhi pilihan bab sebelumnya).
                                
                            "Rencana Bayangan (Sangat Hati-hati & Kompleks)(WIP)":
                                $ persistent.strategy_ethan = "shadow"
                                player_name "Kita tidak menemuinya. Kita buat Ethan yang 'tidak sengaja' menemukan bukti kecurangan Marcuz."
                                show liam kaget
                                liam "Manipulasi situasi? Itu... sangat rumit. Kamu mau ngapain?"
                                player_name "Kita pakai GPS yang mau kamu pasang di bajuku ini."
                                player_name "Aku akan jadi umpan. Aku akan berjalan melewati titik drop barang ilegal milik Marcuz."
                                player_name "Kamu track aku dari jauh, terus kirim koordinat itu ke Ethan secara anonim."
                                show liam marah
                                liam "Kamu gila?! Kamu mau jadi umpan buat gerombolan Marcuz?!"
                                player_name "Ethan cuma perlu lihat anak buah Marcuz bawa barang terlarang itu. Itu bakal bikin dia ragu sama Marcuz."
                                show liam serius
                                liam "Dengar... rencana ini butuh ketepatan detik."
                                liam "Satu variabel saja meleset. Kalau sinyal GPS ilang, atau Ethan datang terlambat 5 menit..."
                                liam "...kamu bakal dikeroyok dan mati di tempat sebelum Ethan nyadar kalau dia dijebak."
                                player_name "Aku tahu risikonya. Tapi ini satu-satunya cara agar tidak ada yang mencurigai kita."
                                player_name "Aku percaya sama kamu, Liam. Kamu gak bakal biarin aku mati, kan?"
                                show liam menunduk
                                liam "...Kamu terlalu memaksakan diri."
                                show liam mikir
                                liam "Baiklah. Kita jalankan Rencana Bayangan. Tapi aku yang atur rute dan timing-nya. Kamu harus ikuti instruksiku lewat earpiece tanpa nanya."
                                player_name "Deal."
                                $ persistent.shadow_route_prep = True

                        #Disini karakter buat rencana agar Ethan bisa kerjasama lebih awal sebelum Liam mati, ada 2 pilihan ketemu langsung Ethan atau tunda dulu dan kasih tau Rachel dulu?
                        #ada pilihan lagi agar semuanya aman dan gak ada hal yang mencurigakan, jadi lebih kompleks dan penuh kehati-hatian, satu variabel aja bisa bikin salah satu karakter mati

                    "Tahan dan ubah strategi":
                        # --- ALUR BARU: TAHAN RAHASIA & UBAH RENCANA ---
                        player_name "(Kalau aku bilang aku dari masa depan, dia pasti mengira aku gila atau malah panik.)"
                        player_name "(Lebih baik aku ubah rencananya tanpa bilang soal time-loop.)"
                        player_name "Umm... Liam, tunggu dulu."
                        liam "Ada apa? Kok muka kamu pucat gitu?"
                        player_name "Aku... punya firasat buruk. Jangan suruh aku pulang sendirian."
                        show liam mikir
                        liam "Firasat? Kamu lagi sakit ya? Atau kamu takut jalan sendirian?"
                        player_name "Bukan! Intinya... kita ambil alatnya bareng-bareng aja. Aku gak mau ninggalin kamu sendirian di sini kalau terjadi apa-apa."
                        show liam senyum
                        liam "Hah? A-apaan sih kamu bikin salting aja"
                        player_name "I-iya! Jangan banyak tanya!"
                        show liam
                        liam "Yaudah, kalau kamu maksa. Kita pergi bareng. Tapi tetap waspada."
                        
                        $ persistent.story["bab5"]["changed_plan"] = True
                        $ renpy.notify("Rencana diubah: Pergi bersama Liam")
                        
                        stop music fadeout 1.0
                        scene bg_school_gate with dissolve
                        pause 2.0
                        player_name "Akhirnya kita jalan bareng juga."
                        player_name "Liam, kamu bawa GPS-nya kan?"
                        scene bg_river_shore with dissolve
                        play music "audio/music/Sunset Confession.mp3" volume 0.5
                        liam "Tentu. Aku pasang di saku belakang celanamu."
                        play audio "audio/punch2.mp3"
                        stop music
                        scene bg_black
                        pause 1.0
                        unknown_man "Ehh kalian gak apa-apa?"
                        play music "audio/music/Sunset Confession 2.mp3" volume 0.5
                        scene nabrak with dissolve
                        unknown_man "Maaf ya, tadi aku sempet ngelamun."
                        player_name "(Rasanya sesuatu yang kenyal nabrak muka aku... eh, Liam yang ketabrak?)"
                        scene bg_river_shore with dissolve
                        pause 0.5 
                        show liam marah with dissolve
                        liam "Hei, hati-hati dong jalan!"
                        hide liam marah
                        show valeria 
                        unknown_man "BTW kalian bisa bantu aku? Aku disuruh bawa barang disana."
                        unknown_man "Akan lebih baik kalo kalian bantuin aku, berat banget loh."
                        hide valeria with dissolve
                        pause 0.5
                        
                        # Liam membisikkan sesuatu
                        show liam mikir with dissolve
                        liam "{size=15}Pssst... Cewek itu. Otot lengannya terlalu keras buat cewek yang bilang barangnya 'berat'.{/size}"
                        liam "{size=15}Dia bohong. Jangan bantu.{/size}"
                        hide liam mikir with dissolve
                        
                        menu:
                            "Tetap bantu Valeria (Peduli apa gweh)":
                                $ persistent.valeria_encounter = "helped"
                                show valeria ketawa
                                unknown_man "Yeeeyy, Makasih yaa~ Kalian berdua baik banget."
                                "Kita bertiga jalan ke suatu tempat"
                                scene bg_construction_site with dissolve
                                player_name "Kayanya ada pembangunan disini."
                                show valeria nyapa
                                valeria "Ohh iya, kenalin namaku Valeria."
                                player_name "Namaku [player_name], ini temanku Liam."
                                valeria "Nama yang bagus~ Liam juga imut loh~"
                                hide valeria nyapa
                                show liam marah
                                liam "Fokus. Barangnya mana?"
                                hide liam marah
                                valeria "Eumm... Kamu coba ambil box itu, terus simpan disini..."
                                pause 2.0
                                stop music fadeout 2.0
                                play sound "audio/pistol-shot.mp3" volume 2.0
                                pause 0.7
                                "BRUK!"
                                "Liam mendorongku ke samping!"
                                play sound "audio/blood-splatter.mp3" volume 2.0
                                liam "ARGHHH!!"
                                scene bg_black with dissolve
                                $ persistent.unlocks["bab"]["6"] = True
                                $ renpy.notify("Bab 6 telah terbuka! (Route: Liam Terluka)")
                                
                            "Tolak halus dan ajak Liam pergi":
                                $ persistent.valeria_encounter = "avoided"
                                player_name "Wah, maaf banget. Temanku lagi buru-buru nih."
                                show valeria sedih
                                unknown_man "Ayolah, aku perempuan loh~, gak cocok buat angkat-angkat"
                                show liam marah
                                liam "Kami bilang tidak. Minggir."
                                show valeria kaget
                                "Liam menarik tanganku dan kami segera meninggalkan tempat itu."
                                unknown_man "Hmph... Dasar tidak sopan."
                                scene bg_black with dissolve
                                "Kami berjalan menjauh dengan cepat."
                                liam "Tadi itu... dia bukan perempuan biasa. Ada bau mesiu tipis dari tasnya."
                                player_name "Wah? Serius?"
                                liam "Serius! Kita baru saja menghindari jebakan."
                                $ persistent.unlocks["bab"]["6"] = True
                                $ renpy.notify("Bab 6 telah terbuka! (Route: Aman)")

                        pause 1.0
                        show text "{font=font/digital.TTF}{size=120}BAB 5 SELESAI{/size}" at truecenter with dissolve
                        pause 3.0
                        menu:
                            "Lanjut bab 6":
                                hide text with dissolve
                                if persistent.valeria_encounter == "helped":
                                    jump bab6A_liam_injured
                                else:
                                    jump bab6B_safe_route
                            "Nggak":
                                return

            $ renpy.notify("Asik dapet ongkos dari Liam")
            liam "Inget, jangan aneh-aneh dijalan"
            player_name "Kenapa kamu nyuruh aku pulang?"
            show liam malu
            liam "I-itu"
            show liam marah
            liam "Kamu bawa alat yang udah aku kasih sebelumnya di apartemen kamu"
            liam "Kemarin kamu lupa membawanya kan!?"
            player_name "I-iya maafkan hamba yang pelupa ini"
            liam "Udah sana pulang!"

            stop music fadeout 1.0

            scene bg_school_gate with dissolve
            pause 2.0
            player_name "Percuma Liam ngasih ongkos."
            player_name "Disini gak ada halte bus."
            player_name "Yah, sesekali jalan gak apa-apa lah"
            play music "audio/music/Sunset Confession.mp3" volume 0.5
            scene bg_river_shore with dissolve
            player_name "Indah banget-{nw}"
            play audio "audio/punch2.mp3"
            stop music
            scene bg_black
            pause 1.0
            unknown_man "Ehh kamu gak apa-apa?"
            scene nabrak with dissolve
            play music "audio/music/Sunset Confession 2.mp3" volume 0.5
            unknown_man "Maaf ya, tadi aku sempet ngelamun."
            player_name "(Rasanya sesuatu yang kenyal nabrak muka aku)"
            player_name "Iya, aku juga minta maaf."
            scene bg_river_shore with dissolve
            pause 1.0
            show valeria with dissolve
            unknown_man "BTW kamu bisa bantu aku?"
            unknown_man "Aku disuruh bawa barang disana"
            unknown_man "Akan lebih baik kalo kamu bantuin aku"
            menu:
                "Lah ayo sama mah":
                    show valeria ketawa
                    unknown_man "Yeeeyy, Makasih yaa~"
                "Tak pikir dulu":
                    show valeria sedih
                    unknown_man "Ayolah, aku perempuan loh~, gak cocok buat angkat-angkat"
                    player_name "(Badan atletis gini bilangnya gak cocok buat angkat-angkat barang?)"
                    show valeria malu
                    unknown_man "Nanti aku kasih sesuatu deh~"
                    player_name "Nah yang ini baru menarik"
                    player_name "Boleh, boleh"
                    show valeria ketawa
                    unknown_man "Yeeeyy, Makasih yaa~"
                    hide valeria ketawa with dissolve
            "Kita berdua jalan ke suatu tempat"
            scene bg_construction_site with dissolve
            player_name "Kayanya ada pembangunan disini."
            show valeria nyapa
            valeria "Ohh iya, kenalin namaku Valeria."
            player_name "Namaku [player_name]!"
            valeria "Nama yang bagus~"
            player_name "Makasih..."
            player_name "BTW barang mana yang mau dipindahin?"
            valeria "Eumm... Kamu coba ambil box itu, terus simpan disini, biar jaraknya gak terlalu jauh."
            player_name "Okeee"
            hide valeria nyapa with dissolve
            pause 2.0
            stop music fadeout 2.0
            play sound "audio/pistol-shot.mp3" volume 2.0
            pause 0.7
            play sound "audio/blood-splatter.mp3" volume 2.0
            pause 1.0
            "AKHHHH!!!!!"
            scene bg_black with dissolve
            $ persistent.unlocks["bab"]["6"] = True
            $ renpy.notify("Bab 6 telah terbuka!")

            $ renpy.pause(1.0, hard=True)

            show text "{font=font/digital.TTF}{size=120}BAB 5 SELESAI{/size}" at truecenter with dissolve

            $ renpy.pause(3.0, hard=True)

            hide text with dissolve

            jump bab6A


            

            
        #Disini kamu disuruh liam buat pulang membawa alat, berbekal gps (akan berguna suatu saat (pake persistent)), ketemu valeria
        "Sudahi kasus ini (WIP)":
            "Aku tidak mau terlibat lagi dengan kasus ini."
            #unlocked cg
            return
            #Ending mengasingkan diri



    #Disini cabangnya dikerucutkan, sebelum bab 6,player harus diculik oleh orang misterius
    #Bisa jadi kamu ketemu orang baru (Valeria) yang berpapasan setelah pulang dari rumah liam, kamu diminta bantu dia tapi kamu malah diculik, ini jadi pengantar untuk bab 6

    stop music fadeout 2.0

    
    $ persistent.unlocked_bab6 = True
    $ persistent.unlocked_chapters = max(persistent.unlocked_chapters, 6)
    $ renpy.notify("Bab 6 telah terbuka!")

    pause 1.0

    show text "{font=font/digital.TTF}{size=120}BAB 5 SELESAI{/size}" at truecenter with dissolve

    pause 3.0

    return

######################################################################################
################################# BAGIAN MINIGAME ####################################
######################################################################################
    #kunci dapat berubah?
label hack_minigame:

    scene bg_terminal_hack with fade
    play music "audio/Tension.ogg" volume 0.2

    "Aku mengakses sistem X-Tech... Terminal terbuka."

    show liam at left
    with dissolve

    liam "Spectre nggak bisa remote terminal ini."
    liam "Tapi tenang, aku udah kirim kode aksesnya ke... PC kamu."

    "..."

    # ⬇️ Create the file with the password
    #$ hack_password = "Y0u_C4nN0t_ReW1ndT1m3_JustBcz_0fUrM1stak3"


    python:
        import os
        import platform
        import zipfile
        import random
        import string

        def generate_random_password_leetspeak():
            substitutions = {
                'a': ['4', '@'],
                'b': ['8'],
                'c': ['('],
                'd': ['d'],
                'e': ['3'],
                'f': ['f'],
                'g': ['9'],
                'h': ['#'],
                'i': ['1', '!'],
                'j': ['j'],
                'k': ['k'],
                'l': ['1'],
                'm': ['m'],
                'n': ['n'],
                'o': ['0'],
                'p': ['p'],
                'q': ['q'],
                'r': ['r'],
                's': ['5', '$'],
                't': ['7', '+'],
                'u': ['u'],
                'v': ['v'],
                'w': ['w'],
                'x': ['x'],
                'y': ['y'],
                'z': ['2']
            }

            phrases = [
                "you cannot rewind time just because of your mistake",
                "this is your only chance",
                "no second chance this time",
                "are you sure you want this",
                "not everything can be undone",
                "some doors must stay closed"
            ]

            import random
            phrase = random.choice(phrases)

            result = ""
            for c in phrase:
                if c.lower() in substitutions:
                    result += random.choice(substitutions[c.lower()])
                else:
                    result += c  # keep spaces and punctuation

            return result


        def get_save_location():
            system = platform.system()

            if system == "Windows" or system == "Linux":
                return config.gamedir  # Folder game
            elif renpy.android:
                return renpy.exports.android_public_path()  # Android: public folder
            else:
                return config.gamedir  # Default fallback

        def create_authorization_file(filename="tmp_code.txt", foldername="tmp"):
            try:
                # Lokasi target
                base_path = get_save_location()
                folder_path = os.path.join(base_path, foldername)
                file_path = os.path.join(folder_path, filename)
                zip_path = os.path.join(base_path, "auth_package.zip")

                # Bikin folder kalau belum ada
                if not os.path.exists(folder_path):
                    os.makedirs(folder_path)

                # Hapus file lama (biar bersih)
                if os.path.exists(file_path):
                    os.remove(file_path)
                if os.path.exists(zip_path):
                    os.remove(zip_path)

                # Generate password rahasia
                hack_password = generate_random_password_leetspeak()
                #persistent.generated_password = hack_password  # Simpan buat dipake lagi

                # Tulis file TXT
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(">>> Authorization Code <<<\n\n")
                    f.write(hack_password + "\n")
                    f.write("\nWARNING: 1 attempt only.\nDon't mess this up.\n")

                # Bikin file zip
                with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                    zipf.write(file_path, arcname=filename)

                # Simpan lokasi buat ditampilkan ke player
                persistent.zip_location = zip_path
                
                return f"[ FILE CREATED ]\nPath: {zip_path}\nPassword: {hack_password}"

            except Exception as e:
                return f"[ ERROR ] Gagal bikin file: {e}"


    $ result = create_authorization_file()
    liam "Coba cek file {color=#00ffff}'auth_package.zip'{/color} di folder tempat game ini dijalanin."
    liam "Jangan salah input. Kalau gagal... lo bakal nyalain alarm-nya."

    hide liam with fade

    liam "Aku udah kirim kode itu ke {fast}{color=#39f}file sistemmu{/color}. Cari dan baca baik-baik."

    # Pakai password dari hasil create_authorization_file()
    $ hack_password = result.split("Password: ")[1] if "Password:" in result else ""

    $ hack_attempt = ""

    label input_loop:

        $ hack_attempt = renpy.input(">> Masukkan kode otorisasi untuk lanjut:", length=64)
        $ hack_attempt = hack_attempt.strip()

        if hack_attempt == hack_password:
            play sound "audio/access-granted.mp3"
            pause 0.5
            play sound "audio/access-granted-royal-high.mp3"          
            "Sistem merespons: {color=#00FF00}Akses Diterima.{/color}"
            "Terminal berhasil dibobol..."

            play sound "audio/walkie talkie.mp3"
            liam "..."
            liam "[player_name]... kamu berhasil."
            liam "Nice job. Tapi kita belum aman."
            play sound "audio/walkie talkie.mp3"
            liam "Sekarang dengarkan aku baik-baik."
            liam "Tempat selanjutnya—bukan tempat biasa. Ini sarangnya mereka."

            liam "Aku kirim koordinatnya sekarang..."
            play sound "sfx_message.ogg"
            pause 4.0
            "Lokasi diterima."

            liam "Lihat denah yang aku kirim. Jangan cuma dilihat—hafalkan jalurnya."
            liam "Gedung itu... penuh dengan percabangan, jebakan, dan blindspot kamera."
            liam "Satu langkah salah—dan kamu bisa terjebak di dalam selamanya."

            liam "Aku nggak akan bisa bantu dari sini kalau koneksi putus."
            liam "Jadi pastikan kamu siap sebelum masuk."

            "Nafasku mulai berat. Suasana makin menegang. Ini bukan sekadar misi biasa."
            "Aku menatap layar terminal yang kini menunjukkan akses penuh..."

            return

        else:
            play sound "audio/incorrect.mp3"

            "Sistem menolak input. {color=#FF0000}KODE SALAH{/color}."

            play sound "audio/base_alarm.mp3"
            pause 1.0

            stop music fadeout 1.0
            scene bg_glitch_timeline with fade
            "Segalanya bergetar..."
            "Aku melakukan kesalahan... dan dunia merespons."
            
            jump timeline_shift_badend

