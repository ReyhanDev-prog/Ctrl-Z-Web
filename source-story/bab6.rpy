label bab6A:

    scene bg_black
    pause 0.5
    scene bg_ruang_interogasi with dissolve
    "Kepalaku pusing, punggungku serasa mati rasa."
    "Terakhir kali aku ingat seseorang menembakku dari belakang"
    "Tapi untungnya aku selamat."
    show marcuz with dissolve
    unknown_man "Sudah selesai tidur siangmu?"
    player_name "{cps=30}Kamu...{/cps}{w=1.0} Siapa?"
    unknown_man "Lancangnya aku belum memperkenalkan diri."
    marcuz "Aku Marcuz.{w=1.0} Penanggungjawab di tempat ini."
    pause 1.0
    play music "audio/music/adrenaline.mp3" fadein 1.0 volume 1.0
    "Demi apa"
    "Aku langsung ketemu sama orang yang udah aku cari."
    "...."
    player_name "(Sial...{w=2.0} GPS dan alat komunikasi lainnya hilang.)"
    menu:
        "Senang bertemu dengan Anda.":
            show marcuz senyum
            marcuz "Yah, senang sekali aku bisa bertemu denganmu.{w=1.0} [player_name]."
            player_name "Kamu tau namaku?"
            marcuz "Aku sudah lama mencarimu."
            marcuz "Rasanya seperti mencari jarum di tumpukan steples."
            "Apa maksud dia?"
            player_name "Aku gak tau apa maksudmu"
            player_name "Tapi,{w=1.0} untuk apa kamu mencariku?"
            marcuz "Sudah tidak tahan untuk tahu kebenaran ya..."
            show marcuz ketawa
            marcuz "{b}Hahahaha!!{/b} {w=1.0} Aku kagum dengan itu."
            show marcuz senyum
            marcuz "Tapi sebelum kesana, aku ingin kita lebih dekat."
            menu:
                "Aku gak suka basa-basi":
                    player_name "Jelaskan saja apa maumu!"
                "Gak, makasih. Aku dah nyaman sama diri sendiri.":
                    pass
            show marcuz ketawa
            marcuz "{b}HAHAHAHAHA!!{/b} Kamu benar-benar orang yang unik!"
            show marcuz senyum
            marcuz "Baiklah, aku akan memberimu pertanyaan."
            marcuz "Santai saja, tidak ada jawaban yang benar ataupun salah."
            marcuz "Jadi, {w=1.0}sejauh mana kamu tahu tentang Chronos-9?"
            menu:
                "Apa itu?":
                    marcuz "Kamu tidak usah berlagak bodoh seperti itu."
                    marcuz "Yah, aku anggap kamu sudah mengetahuinya."
                    pass
                "(Jelasin yang aku ketahui)":
                    "Aku menceritakan semua yang aku ketahui."
                    #persistent afeksi naik
                    pass
            marcuz "Chronos-9 adalah proyek ambisius dari perusahaan ini."
            marcuz "Sebuah teknologi yang diciptakan untuk {i}memperbaiki masa depan{/i}."
            marcuz "{w=0.8}Padahal kenyataannya..."
            marcuz "Ia memungkinkan kita {b}kembali ke masa lalu{/b}."

            marcuz "Bukan sekadar melihat dan menonton ulang."
            marcuz "{w=0.8}Tapi mengubahnya."

            marcuz "Satu keputusan kecil."
            marcuz "Satu kematian yang dicegah."
            marcuz "Atau satu kebenaran yang sengaja dihapus."

            marcuz "Dan boom! {w=0.5}sejarah pun ditulis ulang."

            marcuz "Lucu, ya?"
            marcuz "Sejak kapan sejarah itu netral?"

            marcuz "Sejarah selalu ditulis oleh mereka yang berkuasa."
            marcuz "Oleh mereka yang selamat."
            marcuz "Oleh mereka yang punya sumber daya untuk mengubur fakta yang tidak menguntungkan."

            marcuz "{w=1.0}Chronos-9 hanyalah alat."
            marcuz "Tapi di tangan yang tepat..."
            marcuz "{i}Ia menjadi senjata paling mematikan yang pernah ada.{/i}"

            player_name "Dan perusahaan ini..."
            player_name "Mereka menggunakannya untuk apa?"

            show marcuz ketawa
            marcuz "{b}HAHAHA—{/b}"
            show marcuz senyum
            marcuz "Kamu benar-benar masih berharap jawabannya indah?"

            marcuz "Perang yang tak pernah tercatat."
            marcuz "Skandal yang tiba-tiba menghilang dari arsip."
            marcuz "Tokoh kejam yang mendadak jadi pahlawan."
            marcuz "Dan korban-korban kecil yang bahkan tak pernah ada namanya."
            marcuz "Bahkan kamu juga merasa jengkel dengan kepalsuan ini kan?"

            marcuz "Chronos-9 memastikan semua itu berjalan rapi."
            marcuz "Tanpa noda."
            marcuz "Tanpa saksi."

            show marcuz

            marcuz "Ada anomali setiap kali waktu diputar."
            marcuz "Seseorang yang seharusnya lupa..."
            marcuz "Namun justru {b}mengingat{/b}."

            marcuz "Timeline bergeser."
            marcuz "Data berubah."
            marcuz "Tapi kamu {w=0.5}selalu tetap sama."

            marcuz "Itulah kenapa aku mencarimu."
            marcuz "Sebagai {b}variabel{/b}."

            menu:
                "Aku cuma orang biasa.":
                    player_name "Kamu salah orang."
                    marcuz "Semua variabel selalu berkata begitu."
                "Apa yang sebenarnya kamu inginkan dariku?":
                    player_name "Katakan sekarang."
                    marcuz "Sabar. Kita baru saja mulai."

            "Dr. Marcuz sedang bermain alat asing."
            marcuz "Chronos-9 sedang mencapai batasnya."
            marcuz "Dan perusahaan ini..."
            marcuz "{w=0.8}Butuh seseorang yang bisa melangkah keluar dari naskah."

            marcuz "Pertanyaannya sederhana, [player_name]."
            marcuz "{w=1.0}Jika kamu bisa mengubah masa lalu-"
            marcuz "{i}siapa yang akan kamu hapus dari sejarah?{/i}"
            #disini asik gak ya kalo karakter dihapus?
            #kalo iya, bakal di lempar ke awal, tapi mengikuti kondisi, if ethan_deleted.
            menu:
                "Marcuz":
                    marcuz "Hahaha..."
                    show marcuz ketawa with hpunch
                    marcuz "{size=50}{b}HAHAHAHAHAAHAHA{/b}{/size}"
                    marcuz "Unik sekali.."
                    stop music fadeout 0.5
                    pause 1.0
                    show marcuz with dissolve
                    marcuz "Tapi.. {w=1.5} aku BENCI itu!"
                    marcuz "Aku akan ubah cara berpikirmu"
                    marcuz "Sekalipun itu menggunakan kekerasan."
                    play audio "audio/sirene.mp3" volume 0.5
                    pause 1.5
                    marcuz "Hmm...?"
                    "Kenapa ini?"
                    scene bg_black
                    play audio "audio/explosion.mp3" volume 1.5
                    pause 0.5
                    scene bg_ruang_interogasi with hpunch
                    pause 1.5
                    play audio "audio/explosion2.mp3" volume 1.5
                    scene bg_black
                    pause 1.0
                    scene bg_ruang_interogasi_rusak with hpunch
                    play sound "audio/door-slam4.mp3" volume 2.0
                    rachel "{size=70}[player_name]!!!!{/size}"
                    play music "audio/music/pursuit2.mp3"
                    rachel "{size=80}CEPETAN KABUR!!!!{/size}"
                    play audio "audio/revolver-shot.mp3" volume 5.0
                    marcuz "Haha..."
                    marcuz "{size=90}HAHAHAHAHAHAHA!!!!{/size}"
                    play audio "audio/revolver-shot.mp3" volume 5.0
                    pause 0.2
                    play audio "audio/revolver-shot.mp3" volume 5.0
                    pause 0.3
                    play audio "audio/revolver-shot.mp3" volume 3.0
                    pause 1.0
                    play audio "audio/Running_footsteps.mp3" volume 3.0
                    player_name "Ada apa ini Rachel?"
                    rachel "Jangan bacot dulu!"
                    rachel "Kita keluar dulu dari sini"
                    ""
                    scene bg_black

                    play audio "audio/sirene.mp3" volume 0.5
                    pause 1.5
                    rachel "Kenapa ini?"
                    play audio "audio/revolver-shot.mp3" volume 5.0
                    pause 0.1
                    play audio "audio/revolver-shot.mp3" volume 5.0
                    pause 0.1
                    play audio "audio/revolver-shot.mp3" volume 3.0
                    pause 0.3
                    play audio "audio/Running_footsteps.mp3" volume 3.0

                    jump escape_from_marcuz

                    #semudah itukah? gak lah, ini malah makin dia panas
                "N̴̢̡̨̦̝̫̞͗͒̐̾͋͜͝õ̷͚̬̩̟͔͚̙̤͐ ̸̲̱̬̠̺͇͎̅̊̿̉d̵̠͂̓͛ạ̸̯̰̑͌̾͑t̶͎̬̼͚̂̀̅̋̇̌̄̍ä̵̧̯͙̗͚̜̤̥͉̲́̅̓̎͋́̔͝ (WIP)":
                    pass




            pass
        "Kenapa aku dibawa kesini? (WIP)":
            marcuz "Pertanyaan bagus!"

            pass

    #Kamu diruang interogasi, ketemu sama dr.marcuz, kaki tangan kamu gak diikat, tapi kamu gak ada kesempatan buat kabur
    #ditanya tentang CTRL-Z, kenapa tertarik? apa motivasi kamu buat ikutin ini?
    #Akan ada choice pengen berhentiin atau lanjutin/ikut proyek (disini player akan masuk dunia simulasi yang parah)
    #Dr.Marcuz masih nyembunyiin semuanya, player bisa memilih tindakan (Tanya Rachel dengan tegas saat Marcuz menyinggunya)
    #Player gak bisa komunikasi dengan orang luar, bahkan GPS Liampun diketahui Marcuz
    #kalo ada pada kondisi tertentu, Marcuz akan menceritakan ambisi dia mengembangkan Ctrl-Z
    #Krputusan besar ada disini, bisa jadi ending baik/buruk kedepannya
    #Kalo ada karakter dihapus, ada kode yang bikin kondisi persistent false, buat uji coba aja

label escape_from_marcuz:
    scene bg_hiking_trail with fade
    play music "audio/music/tension-light.mp3" fadein 1.5 volume 0.85
    
    player_name "Kita kemana sih? Jauh banget jalannya."
    "Kakiku mulai pegal. Lari dari Marcuz ternyata lebih melelahkan dari yang kubayangkan."
    
    rachel "Aku tahu tempat yang aman buat kita sembunyi. Percaya sama aku."
    player_name "Percaya? Kamu baru aja muncul tiba-tiba kayak hantu di tengah kekacauan itu."
    
    pause 0.8
    scene bg_rainforest with fade
    play ambient "audio/ambient/rainforest.ogg" volume 0.6
    
    "Suasana hutan tropis yang lebat langsung menyambut kami. Cahaya matahari cuma tembus sedikit lewat celah daun-daun raksasa. Udara lembab dan bau tanah basah."
    
    player_name "Ini... dimana sih kita?"
    player_name "Kamu ngajak aku ke sini buat piknik? Romantis banget, padahal tadi kita hampir ditembak."
    
    rachel "Plis deh, tenang amat sih kamu. Mau ketawa atau nangis juga boleh, tapi jangan bercanda gitu."
    rachel "Sementara kita aman dulu di sini, aku jelasin semuanya. Tapi kamu harus dengerin baik-baik."
    
    player_name "Oke... aku dengerin. Tapi jelasin dulu kenapa kamu tahu aku ada di gedung itu? Kamu ngikutin aku dari mana? Dan—"
    
    stop music fadeout 1.0
    pause 0.4
    
    player_name "Eh, tunggu.{w=1.0} Kamu mau ke kondangan ya?{w=1.0} Bajunya kok—{nw}"
    
    show rachel2 marah
    play music "audio/music/chill-bro.mp3" fadein 0.8 volume 1.0
    play audio "audio/shock.ogg"
    
    rachel "{b}{size=42}BISA GAK KITA SERIUS DULU?! HAH?!{/size}{/b}" with hpunch
    "Rachel langsung ngamuk. Matanya melotot, tangannya mengepal."
    
    player_name "Hehehehe bercanda kok! Bercanda! Jangan marah dong, aku cuma mau ngeganti suasana tegangnya."
    player_name "Maaf maaf, kamu kelihatan imut kalau lagi ngamuk gitu."
    
    show rachel2 kesal at center
    rachel "Imut pala lo. Lain kali bercanda pas kita udah bener-bener aman aja."
    rachel "Intinya ceritanya panjang banget, ribet, dan gila."
    rachel "Tapi yang paling penting buat kamu tahu sekarang adalah..."
    
    pause 0.6
    show rachel2 serius at center with dissolve
    
    rachel "Ini semua rencana Ethan."
    rachel "Dan tempat ini... aku juga diarahin sama dia."
    player_name "Gak salah denger?"
    player_name "Ethan? Lah kok bisa?"
    rachel "Sabar ih, aku mau jelasin semuanya. Tapi kamu harus janji buat tetap tenang dulu."
    rachel "Awas aja kalo sampe motong"
    player_name "Iya iya... Aku dengerin"
    show rachel2 natap with dissolve
    rachel "Marcuz udah lama ngawasin kamu. Tapi yang lebih bahaya, dia bukan satu-satunya yang menginginkan kamu."
    
    player_name "Maksudnya?"
    
    rachel "Ada organisasi yang lebih besar di belakangnya. Dan aku... {w=1.2}aku dapet informasi Ethan di antara mereka selama hampir dua tahun."

    stop music fadeout 1.0

    #Apakah ada flashback saat Rachel mau ketemuan sama Liam dan aku?
    
    player_name "...Apa?!"
    
    rachel "Aku nggak punya pilihan. Itu satu-satunya cara supaya aku bisa menjemputmu sendiri. Kalau bukan aku yang datang, orang lain yang akan datang—dan mereka nggak akan selembut aku."
    
    "Hening sejenak. Hanya suara serangga dan daun bergesekan yang terdengar."
    
    player_name "Jadi... aku ini apa sebenarnya? Kenapa semua orang tiba-tiba ngincer aku?"
    
    rachel "Itu..."
    rachel "Nanti aja, sekarang yang penting kita tetap hidup dulu."
    
    rachel "Mau lanjut jalan? Atau mau istirahat dulu sambil aku ceritain sedikit-sedikit?"

    player_name "Nanti deh, kita nunggu Liam aja buat diskusi perubahan Ethan"

    player_name "Mana Liam?"

    player_name "Kamu nggak ngajak dia ke sini?"

    pause 1.0

    show rachel 

    rachel "Ada kok..."

    rachel "Ikut aku..."

    player_name "Yaudah..."

    scene bg_black with dissolve

    pause 1.0

    stop music fadeout 2.0

    "..."

    player_name "..."

    player_name "Gak mungkin...."

    pause 1.0

    play music "audio/music/Last Light on Paper.mp3" fadein 3.0

    scene tempatliam with dissolve

    pause 1.2

    show rachel2 nangis1 with dissolve

    rachel "......Ugh..."

    pause 1.5

    play sound "audio/sfx/heartbeat.mp3"

    pause 0.7

    show rachel2 nangis2 with dissolve

    rachel "Hiks... hiks..."

    scene bg_black 

    centered "Liam..." 

    pause 0.8

    centered "Mati." with dissolve

    window hide

    with hpunch

    play sound "audio/sfx/ear_ringing.mp3" volume 0.5

    scene black with Dissolve(0.2)

    pause 0.5

    scene flashback1 at flashback_bw

    pause 0.5

    scene flashback2 at flashback_bw

    pause 0.5

    scene flashback3 at flashback_bw

    pause 0.5

    scene black

    pause 1.0

    window show

    "Jantungku..."

    pause 0.8

    "...seakan berhenti berdetak."

    pause 1.0

    "Tanganku mulai gemetar."

    pause 1.2

    scene tempatliam with fade

    player_name "..."

    pause 2.0

    player_name "..."

    pause 1.5

    player_name "...Gak mungkin."

    pause 1.0

    player_name "Gak....{w=1.2} Gak mungkin..."

    rachel "..."

    rachel "Dia mati saat perjalanan ke rumah sakit"

    window hide

    pause 1.2

    scene liamdijalan at flashback_bw with dissolve

    play sound "audio/sfx/car-crash.mp3"
    $ renpy.pause(0.8, hard=True)

    scene bg_black

    $ renpy.pause(1.0, hard=True)

    window show

    pause 1.0

    player_name "..."

    rachel "Nggggh...!"

    rachel "Aaagghhh...!"

    scene rachel_nangis with Dissolve(2.5)

    rachel "*Sniff...*"

    pause 0.5

    rachel "Hiks..."

    pause 0.8

    rachel "Aku..."

    pause 0.6

    rachel "Aku nggak bisa..."

    pause 1.0

    rachel "Hiks... Liam..."

    pause 1.0

    scene bg_black with dissolve
    window hide
    centered "Liam mati."

    centered "..."

    centered "Liam mati."

    centered "..."

    centered "Liam..."

    pause 1.0

    $ persistent.unlocks["bab"]["7"] = True
    $ renpy.notify("Bab 7 telah terbuka!")

    pause 1.0

    show text "{font=font/digital.TTF}{size=120}BAB 6 SELESAI{/size}" at truecenter with dissolve

    $ renpy.pause(1.0, hard=True)

    hide text with dissolve

    $ renpy.pause(2.0, hard=True)

    centered "Aku gak terima ini." with dissolve

    $ renpy.pause(3.0, hard=True)
    stop music fadeout 1.0
    jump bab7A
    





    #Aku dan Rachel ada di hutan gitu
    #sepertinya itu bukan kantor utamanya. Dimana ini sebenarnya? Rachel kenapa tau aku ada disini? Akan diceritakan di Bab 7