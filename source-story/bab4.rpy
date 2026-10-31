label bab4A:

    stop music
    #show screen ui_quick_menu
    play music "audio/happy_road.mp3" fadein 1 volume 0.3
    scene bg_black with dissolve
    show text "Keesokan harinya" at truecenter with dissolve
    pause 2.0
    scene bg_livingroom_night
    if persistent.story["bab1"]["liam_route"]:
        stop music fadeout 1.0
        player_name "Aku gak mau ngelakuin hal yang sama"
    else:
        player_name "Hm... Berdasarkan diskusi kita kemarin"
        player_name "Masih banyak yang harus aku lakukan"
        player_name "Yahh... Ini akan menjadi cerita yang panjang..."
        player_name "Baiklah, sekarang apa yang harus aku lakukan dulu?"
    #untuk sementara, kita fokuskan ke satu cerita dulu, jadi task-nya langsung dipilih lewat menu

label tugas: #Tugas untuk bab 4, kalo semuanya udah beres, baru bisa lanjut bab 5
    $ can_visit_rachel = apartement_rachel
    $ can_meet_ethan = (not apartement_rachel and contact_ethan)
    $ can_visit_liam = (not apartement_rachel and contact_ethan and liam_mansion)

    menu:
        "Ke rumah Rachel" if can_visit_rachel:
            jump ketemu_rachel1

        "Temui Ethan":
            if not can_meet_ethan:
                jump ethan_blocked
            jump ketemu_ethan1

        "Ke rumah Liam":
            if not can_visit_liam:
                "Aku belum tau alamat Liam."
                jump liam_blocked
            jump ketemu_liam1


label ethan_blocked:
    if apartement_rachel:
        "Aku harus temui Rachel dulu sebelum bicara dengan Ethan."
    elif not contact_ethan:
        "Aku belum bisa menghubungi Ethan sekarang."
    jump tugas

label liam_blocked:
    if apartement_rachel:
        "Aku harus temui Rachel dulu."
    elif not contact_ethan:
        "Temui Ethan dulu sebelum pergi ke rumah Liam."
    elif not liam_mansion:
        "Aku belum tahu alamat rumah Liam. Mungkin tanya dulu ke Ethan."
    jump tugas


label ketemu_rachel1:

    "Aku menemui Rachel."
    scene bg_apartment_exterior with dissolve
    pause 1.0

    play audio "audio/bell_door.mp3"
    pause 1.0

    player_name "Punten."

    show rachel with dissolve

    rachel "Eh, [player_name]?"

    player_name "Aku datang sesuai janji."

    show rachel nyapa
    rachel "Oke, makasih udah mau dateng."
    rachel "Masuk dulu"

    stop music fadeout 2

    scene bg_livingroom_rachel with dissolve

    if persistent.story["bab1"]["liam_route"]:
        player_name "Rachel, aku mau jelasin sesuatu."
        "WIP"
    else:
        
        pause 2.0
        player_name "Jadi, kita mau ngapain?"

    play music "audio/investigation.mp3" fadein 1 volume 1
    show rachel bingung with dissolve
    rachel "Kayanya, aku skeptis deh sama rencana Liam."
    player_name "Hmm? Aku denger bagus kok rencananya, emang kenapa?"
    player_name "Jangan-jangan kamu cemburu ya?"
    show rachel marah with dissolve
    rachel "{size=50}{b}H-{w=0.7}HAHHH?? NGGAK MUNGKIN!!!!{/b}{/size}"
    player_name "Ya terus apa?"
    show rachel senyum
    rachel "Oke kita santai dulu, aku mau ceritain masa lalu aku waktu sama Ethan."

    rachel "Dulu aku pernah kerja bareng Ethan di divisi Rollback Permission System (RPS)."

    rachel "Tugas utamaku waktu itu ngerancang sistem rollback. Termasuk struktur, alur kerja, dan segala mekanismenya."

    show rachel sedih
    rachel "Tapi jujur aja, itu sistem rumit banget. Bahkan aku sendiri udah nggak begitu ingat rinciannya."

    rachel "Aku butuh lihat dokumennya lagi kalau mau inget semua."
    rachel "Dan kayaknya, Ethan masih punya salinannya. Dia itu orang kepercayaan utama di sana."

    player_name "Kenapa kamu nggak salin dokumen itu diam-diam?"

    show rachel marah
    rachel "Heh! Mana bisa!"
    rachel "Aksesku terbatas, dan semua gerak-gerikku diawasi ketat."

    show rachel sedih
    rachel "Sedikit aja gerakan mencurigakan, nyawaku bisa melayang..."

    player_name "Hah!? Serius sampai segitunya?!"

    show rachel 
    rachel "Iya, makanya aku sampe minta ke Ethan biar aku keluar, bukan cuma dari divisi itu, tapi dari seluruh perusahaan."

    show rachel senyum
    player_name "Jadi kamu bisa keluar itu gara-gara bantuan Ethan?"

    rachel "Bener banget..."
    rachel "Tapi sampai sekarang pun aku nggak yakin aku aman sepenuhnya. Aku takut Ethan juga kena masalah gara-gara bantu aku."

    show rachel marah
    rachel "Kalau sampai rahasia perusahaan bocor, bisa-bisa kita berdua jadi target buruannya orang-orang suruhan si bos besar."

    show rachel 
    player_name "Hmm... berarti kita harus makin waspada."
    player_name "Tapi... boleh nggak sih kita ngajak orang lain? Kayak Liam misalnya?"

    show rachel bingung
    rachel "Sejujurnya... kamu aja sebenernya nggak berhak tahu soal ini."
    rachel "Tapi aku udah kepepet. Tiap malam aku dihantui rasa takut... dan aku percaya, kamu dan Liam bisa bantu."

    player_name "Aku tahu ini terdengar lebay, tapi... perusahaan kalian nggak mungkin pasang alat penyadap kayak di komik detektif, kan?"

    show rachel kaget
    rachel "Eh... bisa aja sih!"
    rachel "Makanya tiap hari aku cek apartemenku pake detektor. Aku pasang sistem keamanan tinggi juga."
    
    show rachel sombong
    player_name "Niatt banget kamu ya..."

    player_name "So, apa langkah kita selanjutnya?"

    show rachel 
    rachel "Aku pengen kamu temuin Ethan. Di taman deket pusat kota. Tempat itu cukup sepi."

    player_name "Tapi... dia bakal dateng nggak ya?"

    show rachel senyum
    rachel "Nggak tau juga sih. Mungkin kamu harus coba hubungi dia dulu."

    hide rachel senyum
    #==============================#
    #$ preferences.afm_enable = False
    #==============================#

    $ apartement_rachel = False #menonaktifkan pilihan
    $ contact_ethan = True
    jump tugas

label ketemu_liam1:

    stop audio fadeout 2.0
    stop music fadeout 2.0
    scene bg_livingroom_night
    $ renpy.notify("Hari ini kamu akan mengunjungi rumah Liam.")

    "Pagi hari. Jam di dinding menunjukkan pukul 07:03."

    player_name "Masih ada waktu sebelum jam 9. Harus pastiin dulu semuanya aman sebelum berangkat."

    menu:
        "Cek sekeliling rumah":
            scene bg_kitchen with dissolve
            player_name "Dapur bersih, nggak ada yang mencurigakan."

            scene bg_bedroom_day with dissolve
            player_name "Kamarku juga aman. Jendela kekunci. Nggak ada yang aneh."

            scene bg_apartment_exterior with dissolve
            player_name "Hmm... luar apartemen juga tenang. Tapi siapa itu yang duduk di halte depan?"

            "Aku melihat seseorang di kejauhan, tapi wajahnya tidak terlalu jelas. Orang itu lalu pergi begitu saja."

            "Capek banget, cek rumah doang makan waktu setengah jam..."

            scene bg_livingroom_night with dissolve
            player_name "Huft... mungkin cuma orang lewat. Tapi entah kenapa, aku merasa ada yang ngawasin."

            player_name "Sekarang masih jam 07:42. Perjalanan ke rumah Liam sekitar satu jam lebih naik bus."

            player_name "Kalau berangkat sekarang, nyampe sekitar jam 9 kurang dikit..."

            menu:
                "Tunggu sampai jam 9:00":
                    player_name "Yah, mungkin lebih aman nunggu. Liam bilang jam 9, bukan lebih awal."

                    "Aku duduk dan menunggu waktu berjalan sambil mantengin jam."

                    play sound "audio/door knock.mp3"

                    $ renpy.pause(2.0, hard=True)

                    play music "audio/suspicious.mp3" fadein 2.0 volume 1

                    player_name "Siapa itu barusan?"
                    player_name "Rasanya... kayak ada yang ngawasin."

                    player_name "Aku mulai paranoid sendiri gara-gara semua ini."
                    player_name "Ethan bilang aku harus hati-hati..."
                    player_name "Liam juga. Bahkan Rachel kelihatan cemas akhir-akhir ini."

                    player_name "Tapi... yaudah, mungkin cuma perasaanku aja. Jangan mikir aneh-aneh."

                    "Jam menunjukkan pukul 08:00. Saatnya Aku berangkat."

                    stop music fadeout 2.0

                    scene bg_apartment_exterior with dissolve
                    play audio "audio/door-slam.mp3"
                    pause 1.0
                    play audio "audio/step.mp3"
                    pause 2.0
                    stop audio fadeout 2.0

                    scene bg_backstreet_summer_day with dissolve
                    play audio "audio/step.mp3"
                    pause 2.0
                    stop audio fadeout 2.0

                    scene bg_busstop_spring_day with dissolve
                    play audio "audio/step.mp3"
                    pause 1.0
                    stop audio fadeout 2.0
                    play audio "audio/bus.mp3"
                    pause 2.0

                    scene bg_train_day with dissolve
                    pause 4.0
                    stop audio fadeout 2.0
                    scene bg_Street_Autumn_Day with dissolve               

                    player_name "Oke, tinggal jalan sedikit lagi dari sini."

                    play audio "audio/step.mp3"
                    pause 2.0

                    scene bg_mansion_liam with dissolve

                    player_name "Wah... rumahnya gede banget."
                    player_name "Bayangin bangun tidur terus ngopi di balkon rumah beginian."

                    player_name "Tapi... beres-beresnya pasti ribet banget sih. Pass dulu deh."
                    player_name "Sangat malas."

                    player_name "Hmm... rumah Liam katanya di sekitar sini."

                    player_name "Apa tanya aja langsung yang punya rumah ya?"
                    player_name "Duh, rasanya kayak mau menghadap juragan sawit."

                    play audio "audio/door bell 2.mp3"
                    pause 2.0

                    player_name "....."
                    player_name "Kok nggak ada jawaban, ya?"

                    player_name "Wajar sih... rumah segede ini, mungkin butuh waktu jalan dari ruang tamu ke depan..."

                    "Aku menunggu. Satu menit... dua menit... masih nggak ada tanda-tanda."

                    player_name "Hmmm... beneran kosong, ya?"
                    player_name "Eh? Tapi kenapa pintunya... terbuka?"

                    show liam at center with dissolve
                    liam "Oh, kamu udah dateng."

                    player_name "{size=70}WAHH!!{/size}" with vpunch
                    
                    show liam malu3

                    play audio "audio/dissapointed.mp3"
                    liam "Ehh—sorry, nggak bermaksud bikin kaget."

                    player_name "Nggak... nggak apa-apa. Cuma... agak kaget aja tiba-tiba nongol dari belakang."

                    show liam

                    liam "Yuk, masuk aja langsung."

                    pause 1.0

                    player_name "Masuk...?"

                    pause 1.5

                    play audio "audio/shock.ogg"
                    play music "audio/music/chill-bro.mp3" fadein 2.0 volume 1
                    
                    player_name "{size=80}{b}HAAAAAAAAAHHHH!!???{/b}{/size}" with vpunch
                    player_name "{size=90}INI... RUMAH KAMU!?{/size}" with vpunch

                    show liam

                    liam "Iya, kenapa emangnya?"

                    player_name "{size=90}KAMU ANAK SULTAN!?{/size}" with vpunch
                    
                    show liam marah
                    liam "Ishhh... Pelan-pelan napa. Berisik ke tetangga tau!"

                    player_name "S-sorry... aku cuma... shock. Aku pikir kamu anak biasa kayak aku..."

                    show liam malu2
                    liam "A-aku memang biasa, kok. Cuma rumahnya aja yang agak luas dikit."

                    player_name "‘Agak luas dikit’ katanya... Ini mah dipake lahan sawit juga bisa."
                    
                    show liam marah
                    liam "Hah?? Ngomong apa barusan?"
                    player_name "Ehh, nggak."

                    show liam

                    liam "Udahlah, ayo masuk, kita gak bisa ngomong di luar terus."

                    "Aku masih syok sambil melangkah masuk ke dalam rumah Liam yang megah, mencoba mencerna fakta baru ini."

                    play audio "audio/step.mp3"
                    scene bg_corridor_liam with fade
                    play audio "audio/step.mp3"
                    stop music fadeout 1.5
                    pause 2.0

                    play music "audio/luxury.mp3" fadein 2.0 volume 1
                    player_name "..."
                    player_name "Gelooo ini mah"
                    play audio "audio/step.mp3"
                    scene bg_livingroom_liam with fade
                    pause 2.0
                    
                    show liam with dissolve

                    liam "Kita ngobrol di sini aja, aman."
                    liam "Oke, langsung aja ke intinya. Kita butuh strategi."

                    liam "Ethan... masih belum buka suara."
                    liam "Artinya, dia belum sepenuhnya percaya."

                    player_name "Hmm... jadi aku belum dapat kepercayaan penuh ya."

                    liam "Nggak apa-apa. Masih ada cara lain buat dapetin informasi."

                    player_name "Cara lain gimana?"

                    liam "Kamu tahu rumahnya Ethan, kan?"

                    player_name "Err... nggak. Aku bahkan belum pernah ke sana."

                    show liam mikir2

                    liam "Berarti kita harus pakai cara yang agak... nekat."

                    liam "Kita bobol rumahnya."

                    pause 0.5

                    play audio "audio/shock.ogg"
                    player_name "{size=80}{b}HAAAAAAAAAHHHH!!???{/b}{/size}" with hpunch
                    player_name "KAMU MAU AKU NYEROBOT MASUK KE RUMAH ORANG!?"
                    player_name "KAMU MAU AKU MASUK TV MALAM INI!?"

                    show liam marah

                    liam "Shhh... aku bilang pelan-pelan."

                    player_name "Maaf, maaf... {w=0.5} aku masih kaget. {w=0.5} Cara kamu ngomong itu blak-blakan banget."

                    liam "Kita nggak bakal nyelonong masuk kaya maling ayam juga, ihh."
                    liam "Kita harus bikin rencana yang rapi dan aman."

                    player_name "Ya udah...{w=0.5} terus rencananya gimana? Dari tadi kamu muter-muter mulu."

                    show liam

                    liam "Oke, fokus."
                    liam "Pertama, kita harus pastikan rumah Ethan nggak sedang diawasi atau dijaga ketat."

                    player_name "Kamu sendiri bilang keamanannya ketat, kan?"

                    liam "Iya. Tapi semua sistem pasti punya celah."

                    player_name "Dan kamu yakin kita bisa nemu celahnya?"

                    liam "Dengan bantuan kamu, aku yakin."

                    player_name "Aku?"

                    liam "Iya. Aku butuh kamu buat meretas sistem keamanan rumah Ethan."

                    player_name "...Kamu {w=0.7}serius?"

                    show liam senyum

                    liam "Banget. Aku udah lama pantau pola aktivitas Ethan. Rumahnya kayak rumah biasa, tapi kemungkinan ada sistem keamanan pintar yang tersambung ke jaringan pribadi."

                    player_name "Wah... berarti aku harus cari jalur akses."

                    liam "Betul. Kita harus temukan titik masuk digitalnya dulu."

                    player_name "Koneksi Wi-Fi, mungkin?"

                    show liam

                    liam "Itu satu opsi. Atau... smart device yang terhubung dengan jaringan rumahnya. Kamera, bel pintar, bahkan lampu otomatis."

                    player_name "Oke, berarti kita butuh pemetaan sistem dan radius sinyal dulu."

                    show liam senyum

                    liam "Tepat. Aku udah dapat koordinat rumahnya. Nanti kita ke sana malam ini, lihat situasinya."

                    player_name "Malam ini?!"

                    show liam

                    liam "Tenang, kita nggak masuk dulu. Observasi aja. Foto dari kejauhan, mapping lokasi, dan pantau pola lampu serta jam aktivitas."

                    player_name "Jadi semacam misi pengintaian."

                    show liam senyum

                    liam "Persis. Besoknya, kamu coba retas lewat jaringan terdekat. Kalau berhasil, kita bisa tahu perangkat apa aja yang aktif."

                    player_name "Dan kalau gagal?"

                    show liam

                    liam "Kita mundur. Ganti strategi. Nggak ada yang maksa kamu ambil risiko gila."

                    player_name "Oke... jadi gini, langkah-langkahnya:"
                    player_name "Satu, observasi lokasi malam ini. Dua, identifikasi perangkat dan koneksi. Tiga, cari celah dari jaringan. Empat, ambil data atau buka akses masuk."

                    liam "Dan lima, keluar sebelum ada yang sadar kita pernah di sana."

                    player_name "Cukup gila... Tapi menarik nih."

                    liam "Kadang buat tahu kebenaran, kita harus nekat."

                    player_name "Siap. Tapi jangan salahin aku kalau nanti laptopku kebakar, ya."

                    show liam senyum

                    liam "Kalau laptopmu kebakar, aku beliin yang baru. Janji."

                    "Enteng banget ngomongnya."

                    "Tapi, ngeliat rumah segede kebun sawit kayanya aku harus percaya"

                    "Bukan cuma pada rencananya, tapi pada dia."

                    play music "bgm_planning.ogg" fadein 2.0

                    player_name "Oke... malam ini kita mulai. Operasi: Ngintai Rumah Ethan."

                    jump pengintaian_ethan


                    # ← Ini bisa memicu event "pengamatan dibalik jendela" jika ingin lanjutkan misteri
                    # Misalnya scene kecil: suara ketukan, lalu hilang
                    # Sesudah itu kamu berangkat dengan persiapan yang sudah ada, saatnya bobol rumah ethan

                "Langsung berangkat aja (Tahap Pengembangan)":
                    player_name "Liam pasti gak masalah kalau aku datang lebih awal."

                    player_name "Kalau ada yang aneh di jalan, lebih baik cepat-cepat sampai daripada telat."

                    "Aku mengambil jaket dan segera keluar."

                    "Sedang dalam tahap pengembangan"

                    jump ketemu_liam1

                    # ← Pilihan ini bisa memicu encounter di jalan / kamu melihat sesuatu yg Liam sembunyikan

                "Bersiap lebih dulu (bawa item penting)(Tahap Pengembangan)":
                    player_name "Kalau ini serius, aku nggak boleh datang dengan tangan kosong."

                    "Aku mengambil catatan, ponsel cadangan, dan kamera kecil dari laci."

                    player_name "Siapa tahu aku butuh bukti atau merekam sesuatu."

                    "Sedang dalam tahap pengembangan"

                    jump ketemu_liam1

                    # ← Pilihan ini ngaruh ke opsi investigasi di rumah Liam nanti (misalnya unlock rekaman/secret)


    "COMING SOON..."
    return


label ketemu_ethan1:

    play sound "audio/ring_phone.mp3"  # Ganti dengan file sfx sesuai folder kamu
    pause 4

    stop music fadeout 1.0
    pause 1.0
    play music "audio/Awkwardly Ever After.mp3" volume 0.5

    ethan "{i}Yo! [player_name], ada angin apa nih nelpon aku?{/i}"

    player_name "Aku pengen ngobrol, penting nih. Kamu ada waktu kosong sekarang?"

    ethan "{i}Gas lah! Mau ketemuan di mana?{/i}"

    player_name "Gimana kalau di taman dekat pusat kota? Tempatnya sepi dan adem."

    ethan "{i}Hah? Bukannya kamu ngajak ke cafe?{/i}"
    player_name "Ehh, gak jadi, aku bokek."

    ethan "{i}Hahahaha! Oke mantap! Jam berapa nih?{/i}"

    player_name "Sekarang."

    ethan "{i}Okee tunggu aku di sana yaa!{/i}"

    pause 2

    stop music

    if persistent.story["bab1"]["liam_route"]:
        play sound "audio/hangup.mp3"

    else:
        show rachel senyum
        rachel "Cringe banget sih kalian."

        player_name "Lah, dia duluan yang ngajak bercanda kok!"

        "..."

        ethan "{i}Ehemm... teleponnya belum ditutup loh~{/i}"

        show rachel kaget
        player_name "..."

        play sound "audio/hangup.mp3"

    pause 1.0
    scene bg_black with dissolve

    "Aku pergi ke Taman untuk menemui Ethan"

    scene taman_kota with dissolve

    "Tampak dari kejauhan, Aku melihat Ethan sedang duduk sendirian."
    show ethan ketawa with dissolve
    play music "audio/Awkwardly Ever After.mp3" volume 0.5
    ethan "Yooo, [player_name]! Ada angin apa nih bawa-bawa kamu ke sini~"

    player_name "Udah deh, jangan pake nada kek gitu. Cringe tau."

    show ethan sedih
    ethan "Ya maaf~ aku kira vibe-nya masih santai."

    show ethan senyum
    ethan "Ngomong-ngomong, kamu habis dari tempat Rachel ya?"
    ethan "Jangan-jangan—"

    player_name "Udah, jangan mikir yang aneh-aneh."
    player_name "Aku ngobrol serius sama dia. Ada hal penting."

    stop music fadeout 1
    show ethan senyum
    ethan "Oooh... aku kayaknya tau arah pembicaraan ini mau kemana."

    play music "audio/investigation.mp3" volume 1
    show ethan marah
    ethan "Tapi denger ya, [player_name], saran aku satu—"
    ethan "Jangan libatin dirimu lebih jauh ke urusan yang berbahaya kayak gini."

    player_name "Aku cuma pengen tau lebih dalam soal CTRL-Z. Rachel bilang kamu punya salinan dokumennya."

    show ethan marah2
    ethan "Ah... dia bilang begitu ya."

    player_name "Jadi, kamu punya dokumennya?"

    show ethan marah
    ethan "Denger baik-baik, ini bukan tentang 'punya atau nggak punya'."
    ethan "Ini soal nyawa, bro."

    player_name "...Nyawa?"

    show ethan marah3
    ethan "Chronos-9 bukan cuma proyek iseng yang bisa dibongkar begitu aja. Ini sistem gila yang diawasi ketat. Banyak yang udah 'menghilang' gara-gara bocorin info sekecil apapun."

    show ethan marah
    ethan "Aku udah terlalu dalam waktu itu, dan susah keluar tanpa ninggalin luka."

    player_name "Tapi Rachel bilang kamu bantu dia keluar dari perusahaan itu."

    show ethan marah4
    ethan "Iya, aku bantu dia. Dan itu salah satu keputusan paling nekat yang pernah aku ambil."

    show ethan marah
    ethan "Dan sekarang kamu dateng, nanya-nanya soal dokumen rahasia... terus terang, aku nggak bisa jawab sekarang."

    player_name "Kenapa?"

    show ethan marah
    ethan "Karena kalau dokumen itu sampai jatuh ke tangan yang salah... bukan cuma kita bertiga yang kena imbas."

    show ethan marah2 #menghela nafas sambil pegang kepala
    ethan "Huuhh....."
    ethan "Aku nggak sanggup lihat ada yang kenapa-kenapa lagi."

    player_name "...Jadi kamu nggak akan kasih aku dokumen itu?"

    show ethan marah
    ethan "Belum tentu nggak. Tapi aku perlu yakin dulu..."
    ethan "...kalau kamu bener-bener siap."

    ethan "Rachel percaya sama kamu, jadi... mungkin aku juga bisa coba percaya."

    show ethan marah4
    ethan "Tapi jangan berharap semua info dikasih sekaligus. Dunia ini nggak seramah itu, [player_name]."

    player_name "Baiklah. Tapi aku nggak akan mundur."

    ethan "Ya udah, kalau udah niat, kita pelan-pelan aja. Satu langkah dalam satu waktu."

    hide ethan with dissolve

    player_name "Sepertinya aku memang harus mencari tahu sendiri..."

    scene bg_black with dissolve

    stop music fadeout 1

    "Setelah Ethan pergi, aku duduk di bangku taman, merenungkan semua yang baru saja terjadi."

    "Aku masih bingung Ethan itu sebenernya mau niat bantu apa nggak sih?"

    scene taman_kota with dissolve

    player_name "Hmm, kayanya gak asing."

    scene liam di taman with dissolve

    player_name "Ah... itu Liam."

    "Aku melihat Liam sedang jalan-jalan sendirian di sekitar taman."

    "Aku melambaikan tangan dan memanggilnya."

    scene taman_kota with dissolve

    "Liam menghentikan langkahnya dan mendekat."

    show liam with dissolve
    play music "audio/romantic.mp3" volume 1

    liam "Ada apa, [player_name]?"

    player_name "Aku butuh bantuanmu. Ini penting."

    liam "Bantuan soal apa?"

    "Tanpa membuang waktu, Aku menceritakan semuanya. Tentang Rachel. Ethan. Chronos-9."

    show liam mikir2

    liam "..."

    liam "Oke, kalau ini beneran kayak yang aku pikir... berarti kita udah deket sama rencana kita."

    liam "Datang ke rumahku besok. Jam 09:00 pagi. Sendirian."

    liam "Dan pastikan nggak ada yang tahu. Termasuk Rachel."

    player_name "Kenapa harus dirahasiain dari Rachel?"

    show liam

    liam "Besok aku jelaskan. Sekarang yang perlu kamu lakuin cuma satu hal, ikutin instruksi aku."

    menu:
        "Ya, terserah apa katamu deh.":
            liam "Ya. Jangan telat."

        "Sesuai dengan perintahmu, Yang Mulia.":
            liam "...Hah?"
            show liam marah
            liam "Udah jangan aneh-aneh, aku gak suka itu."

    $ liam_mansion = True
    $ renpy.notify("Hore dapet alamat rumah Liam")

    "Aku mengangguk dan berjanji akan datang tanpa ketahuan siapa pun."

    scene bg_backstreet_summer_afternoon with dissolve
    pause 1.0

    scene bg_livingroom_night with dissolve

    menu:
        "Makan dulu":
            "Aku mengisi perutku sambil memikirkan semua yang telah terjadi hari ini."

        "Tidur langsung":
            "Aku merasa lelah secara fisik dan mental. Waktunya istirahat."

    "Besok pagi akan jadi awal dari sesuatu yang besar."

    $ met_ethan = True #menonaktifkan pilihan dari tugas

    scene bg_black with dissolve

    pause 2

    show text "{font=font/digital.TTF}{size=120}{cps=15}07:03{/cps}{/size}" at truecenter with dissolve

    pause 2

    play sound "audio/bird.mp3" volume 2.0
    scene bg_livingroom_night with dissolve

    player_name "Udah pagi aja"
    jump ketemu_liam1



    #Bertemu dengan Ava Sinclair
    #Potensi bertemu Dr. Marcuz
    #bab ini bisa membawa kamu ke kantor X-Tech dengan kondisi kamu menerima kesepakatan dengan Ethan dan mengumpulkan barang-barang yang didapat dari Ethan jika ada kejadian yang tak terduga, fungsi dari barang tersebut adalah untuk membuka pilihan
    #contoh pilihan b harus punya hp, jika tidak punya maka kamu tidak bisa memilihnya
    #Ini bagian dimana player bisa eksplor dunia, jalan jalan ke rumah Ethan dan yang lainnya
    #Tambahin Button di setiap frame
    #Muncul Task agar memudahkan pemain
label pengintaian_ethan:

    scene bg_city_night with fade
    play music "audio/music/adrenaline.mp3" fadein 1.5 

    "Malam turun pelan-pelan. Udara dingin menusuk kulit."
    "Aku dan Liam berdiri di balik pagar tua, bersembunyi di antara bayangan pohon."

    show liam with dissolve
    liam "Itu rumahnya. Lihat lampu yang nyala di lantai dua?"

    player_name "Iya. Ada aktivitas... kayaknya dia masih bangun."

    liam "Biasanya jam segini dia buka laptop, terus ngerjain sesuatu."
    liam "Aku curiga dia punya ruang kerja pribadi. Tempat semua dokumen dan file penting disimpan."

    player_name "Dan kamu pengen aku bobol dari luar?"

    liam "Belum sekarang. Kita observasi dulu."

    "Aku ambil kamera kecil dari tasku dan mulai mengambil foto rumah Ethan dari berbagai sudut."

    player_name "Rumahnya kelihatan biasa aja, tapi suasananya... aneh."

    liam "Ethan itu nggak pernah nunjukin siapa dia sebenarnya ke orang lain."
    liam "Yang kita lihat cuma topeng. Rumah ini kemungkinan besar punya sisi gelap yang disembunyikan."

    hide liam with dissolve

    play sound "audio/car-engine-stop.mp3"

    "Sebuah mobil hitam tiba-tiba berhenti di depan rumah Ethan."

    show mobil_ethan with dissolve 

    pause 10.0

    play sound "audio/car-door-close-and-open.mp3"

    player_name "Eh...? Itu siapa?"

    liam "Tunggu... Aku nggak kenal itu plat nomor."

    play sound "audio/step.mp3"

    show unknown_man at left with moveinleft
    "Seorang pria tinggi berjas keluar dari mobil. Wajahnya tertutup bayangan."

    player_name "Kamu tau siapa dia?"

    liam "Nggak... Tapi kalau seseorang datang malam-malam tanpa pemberitahuan, itu pasti penting."

    player_name "Mungkin dia klien? Atau... semacam 'rekan rahasia'?"

    liam "Bisa jadi. Tapi lihat—Ethan keluar nyamperin dia. Wajahnya tegang."

    show ethan at right with dissolve

    player_name "Mereka ngomong, tapi... kita nggak bisa denger dari sini."

    liam "Jangan dekat-dekat. Aku punya alat perekam jarak jauh."

    "Liam mengarahkan alat kecil seperti mic parabola ke arah mereka. Aku ikut menunduk dan mendengarkan lewat headset."

    play sound "audio/static walkie.mp3" volume 0.2
    "Suara terdengar pelan dan terputus-putus."

    unknown_man "Pastikan kamu... malam ini..., dan—"
    play sound "audio/static walkie.mp3" volume 0.2

    ethan "...aku akan pastikan semua aman. Jangan khawatir."
    play sound "audio/static walkie.mp3" volume 0.2

    unknown_man "Jangan--{w=0.3} jangan ##### ada yang tau. Aku nggak {w=0.3}##### ada yang gangguin ren#####--{w=0.3} kita."
    play sound "audio/static walkie.mp3" volume 0.2

    ethan "Aku... akan pastikan dia nggak ganggu lagi."
    stop sound 

    pause 1.5

    player_name "Mereka ngomong apa sih?"

    liam "Mereka kayanya curiga ada yang ngawasin. Tapi aku nggak ngerti maksudnya."

    liam "Kemungkinan mereka berada di satu organisasi."

    player_name "Berarti Ethan menyembunyikan sesuatu yang lebih besar..."

    liam "Ternyata Ethan nggak kerja sendirian."

    stop sound fadeout 2.0
    hide unknown_man with dissolve
    hide ethan with dissolve
    hide black_car with dissolve

    "Beberapa menit kemudian, pria misterius itu pergi. Ethan masuk kembali ke rumah."

    player_name "Oke... data malam ini lumayan banyak. Gimana langkah kita selanjutnya?"

    liam "Besok kita mulai scanning jaringan. Aku akan coba konek ke salah satu perangkat di rumah Ethan."

    player_name "Dan kalau berhasil?"

    liam "Kita buka pintu masuk digital. Dan semoga... kita bisa lihat siapa Ethan yang sebenarnya."

    "Aku mengangguk pelan. Rasanya aku sudah terlalu dalam di permainan ini."

    scene bg_black with fade
    stop music fadeout 2.0

    player_name "Ethan..."
    player_name "Sebenarnya..."
    player_name "Apa yang kamu sembunyikan dari kita...?"

    pause 4.0

    jump ethan_discovers_truth

label ethan_discovers_truth:

    scene bg_kamar_ethan with fade
    play music "bgm_suspense_soft.ogg" fadein 2.0

    play sound "audio/step.mp3"

    pause 1.5

    show ethan marah with dissolve
    ethan "..."

    "Monitor menyala. USB port masih hangat. File telah disalin."

    "Matanya menatap ke lantai. Sebuah benda kecil tergeletak, alat komunikasi."
    
    show comm with dissolve

    play music "audio/Intense.mp3" fadein 2.0 volume 1

    "Ethan memungutnya pelan. Ia memeriksa alat itu dengan tenang."
    play sound "audio/pick.mp3"

    scene bg_kamar_ethan with fade

    show ethan sombong with dissolve
    ethan "Sudah kuduga, kalian memang nekat. Tapi... kalian bukan yang langsung menarik perhatianku."
    ethan "Kamu pintar. Berani. Tapi... agak ceroboh."

    pause 1.5

    ethan "Aku tahu ini akan terjadi. Tapi kupikir kamu akan menunggu lebih lama."

    ethan "Kamu orang yang unik ya."

    ethan "Tapi sayang sekali, besok bakal jadi malam terakhirmu."

    ethan "Aku harap kamu bisa menggunakan otakmu lebih baik."

    ethan "Yah... aku tunggu jawabanmu besok."
    
    play audio "audio/keyboard-typing-sound-effect.mp3" volume 0.5
    scene computer_ethan_bab4 with dissolve
    pause 0.5

    stop audio fadeout 1.0
    #Ganti gambarnya dan tambahkan animasi ketikan 

    pause 2.0

    scene bg_black with dissolve

    stop music fadeout 2.0

    $ persistent.unlocks["bab"]["5"] = True
    $ renpy.notify("[EVENT RECORDED]")

    $ renpy.pause(3.0, hard=True)

    hide text with dissolve

    jump bab5A