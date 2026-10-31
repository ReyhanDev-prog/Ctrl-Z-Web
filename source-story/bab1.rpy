label bab1A:

    scene bg_black with dissolve
    
    $ persistent.unlocks["bab"]["1"] = True

    centered "Keesokan harinya, Aku bertemu dengan Liam dan Rachel di kafe langganan kami."

    scene bg_cafeteria_day with fade
    stop music
    play music "audio/music/chill.mp3" volume 1

    show liam with dissolve
    liam "Aku berhasil mengumpulkan informasi yang kalian cari."

    $ persistent.story["bab1"].setdefault("liam_route", False)

    menu:
        "Informasi yang kita butuhkan?" if not persistent.story["bab1"]["liam_route"]:
            player_name "Eh? Informasi apa maksudmu?"
            hide liam
            show rachel marah
            rachel "{size=60}{b}Astaga, kamu ini!{/b}{/size}" with hpunch
            rachel "Kita lagi nyari data terakhir soal temanku yang kerja di X-Tech!"
            rachel "Kamu pelupa banget sih!"
            hide rachel marah

        "Makasih, Liam":
            pause 0.5
            show liam malu with dissolve
            $ renpy.notify("Afeksi Liam bertambah")
            $ persistent.characters["liam"]["affection"] += 1
            pause 1.0
            liam "S-{w=1.0}{cps=20}sama-sama...{/cps}"
            hide liam senyum

        "Kamu ketemu Ethan, ya?" if persistent.story["bab1"]["liam_route"]:
            pause 1.0
            show liam kaget
            liam "Keren deh kamu bisa nebak bener"
            "Aku sudah tau arah dari alur ini"
            player_name "Hehe, iya dong..."
            player_name "Gak sia-sia aku nonton film detektif"
            show liam pegal
            liam "Hah? Hubungannya apa coba?"
            liam "Bisa jadi kebetulan doang"
            hide liam pegal

    show rachel
    rachel "Ehem..."
    rachel "Menurut data, Ethan terakhir kali terlihat di halte bus, sore hari."
    rachel "..."

    show rachel kaget
    rachel "Astaga! {w=0.8}Aku nggak nyangka dia muncul di tempat terbuka kayak gitu!"
    rachel "Biasanya dia selalu ngilang entah ke mana, {w=1.0}kayak ninja..."
    player_name "Eksistensinya bener-bener kayak bayangan, ya."

    show rachel senyum
    rachel "Iya,{w=1.0} persis banget!"

    show rachel
    rachel "Tapi ada yang aneh...{w=1.0} ini nggak cocok sama kebiasaan dia."
    player_name "Maksudmu...{w=1.5} dia sengaja muncul?{nw}"
    pause 0.4

    play sound "audio/sfx/glass-break.mp3" volume 2.0
    with hpunch
    stop music
    pause 1.0
    show bg_cafeteria_broken with flash
    pause 1.0
    "Tiba-tiba, kaca jendela kafe pecah! Sesuatu melesat dari luar dan menghantamnya dengan keras!"

    show rachel kaget
    play music "audio/music/pursuit.mp3"
    rachel "{b}Apa itu barusan?!{/b}"

    menu:
        "(Lihat ke luar jendela)":
            "Aku cepat-cepat mengintip ke luar. Di kejauhan, seseorang berjaket hoodie hitam lari ke gang sempit."
            player_name "Aku lihat seseorang! {w=1.0}Dia lari ke arah gang!"
            show rachel marah
            rachel "Jangan cuma berdiri! {w=0.5}Ayo kejar dia sekarang!"
            jump bertemu_ethan

        "(Langsung keluar dari kafe)":
            #ganti, masih ide AI ini mah

            scene bg_big_city with fade
            hide rachel kaget
            "Tanpa pikir panjang, Aku, Rachel, dan Liam menerobos keluar. Suasana jalan mendadak mencekam."
            "Kita melihat seorang pria misterius berdiri di dekat jalan."
            "Tiba-tiba, sebuah mobil hitam tanpa plat nomor berhenti mendadak di depan kita."
            scene car_in_city with fade
            #Bagian scene mobil yang berhenti mendadak
            "Fokus kita teralihkan oleh aura dari orang ini, sangat misterius."
            rachel "Woy! {w=1.0}ayo cepet, ntar keburu jauh."
            player_name "Diem, Rachel! {w=1.0}Kita harus hati-hati."
            player_name "Kita nggak tahu siapa yang ada di dalam mobil itu."
            player_name "Dan...{w=0.5} apa yang sebenarnya terjadi barusan."
            liam "Nggak salah lagi,{w=0.5} dia pasti orangnya."
            player_name "Kamu jangan fitnah dulu dong, siapa tau cuman orang lewat aja"
            
            scene car_in_city2 with flash
            "Mobil itu sudah pergi, dan kita hanya bisa berdiri terpaku."
            player_name "Aku harus menyelidikinya lebih dalam."
            stop music fadeout 1.0
            scene bg_black with dissolve
            pause 2.0
            jump cafe_investigation

        "(Diem aja)"if persistent.story["bab1"]["liam_route"]:
            #Route gak ketemu Ethan, tapi player udah tau
            rachel "Ayo kita kejar!"
            player_name "Sangat malas..."
            player_name "Kenapa kamu harus peduli? Kita fokus aja sama tujuan kita"
            liam "Bener juga..."
            rachel "Akhh kalian ini!"
            "Rachel langsung keluar mengejar pelaku itu"
            player_name "Rachel!!"
            liam "Kita ikut kejar juga?"
            menu:
                "KEJAR!":
                    player_name "CEPET LAH WOY!"
                    rachel "NAPA HARUS TELMI SIH, DIH!"
                    jump bertemu_ethan
                "GAK":
                    player_name "Udah, cukup kita aja yang lanjutin hal penting ini"
                    player_name "Kita bisa sharing dengan Rachel setelahnya"
                    liam "Yaudah..."
                    pass
                    


label bertemu_ethan:
    scene bg_busstop_summer_cloudy with fade
    play sound "audio/Running_footsteps.mp3"
    "Aku, Liam, dan Rachel akhirnya sampai di halte bus yang disebutkan Liam tadi."

    show rachel marah
    rachel "Harusnya dia ada di sini... tapi, ke mana dia pergi?"
    hide rachel marah with dissolve

    "Tiba-tiba, terdengar suara langkah kaki mendekat dari arah belakang."
    play sound "audio/sfx/step.mp3"
    pause 1

    show ethan with dissolve
    pause 2
    $ persistent.affection_unlocked["ethan"] = True
    $ persistent.characters["ethan"] = {"affection": 0}
    $ renpy.notify("Karakter Baru telah terbuka!")
    hide ethan

    show rachel kaget
    rachel "{size=70}ETHAN!{/size}"
    hide rachel kaget

    play music "audio/music/Awkwardly Perfect Day.mp3" volume 0.5

    show ethan ketawa
    ethan "Yo! Long time no see!"
    hide ethan ketawa

    player_name "..."

    if persistent.story["bab1"]["liam_route"]:
        player_name "(Yah.. seperti inilah Ethan yang kukenal sebelumnya)"

    "Informasi dari Liam tentang Ethan sama sekali nggak cocok dengan kenyataan sekarang."

    show ethan ketawa
    ethan "Haha, kebetulan banget bisa ketemu kalian di sini."
    hide ethan ketawa

    show rachel
    rachel "Yah, ini sih bener-bener kebetulan... tapi..."

    show rachel marah
    rachel "{size=45}KENAPA KAMU GAK PERNAH BALES CHAT DARI AKU, HAH!??{/size}" with hpunch
    hide rachel marah

    show ethan kaget
    ethan "Whoa! Sabar dong, aku bisa jelasin semuanya."
    show ethan sedih
    ethan "HP-ku udah rusak dari lama, terus aku gak sempet benerin..."
    hide ethan sedih

    show rachel marah
    rachel "{size=50}CUMA ITU!?{/size}" with hpunch
    rachel "{size=50}KAMU KAN BISA DATENG KE RUMAH!{/size}"
    rachel "{size=50}MINIMAL KASIH KABAR KEK!{/size}"
    hide rachel marah

    show ethan sedih
    ethan "Y-ya maaf... aku kira kamu udah punya pacar, jadi aku mikir mending gak ganggu."
    hide ethan sedih

    show rachel marah
    rachel "{size=100}HAH!??{/size}" with hpunch
    rachel "{size=50}SEJAK KAPAN AKU PUNYA PACAR!?{/size}"
    hide rachel marah

    show ethan kaget
    ethan "Aku liat kamu kemarin di kafe bareng cowok itu..."
    "Ethan menunjuk ke arahku."
    hide ethan kaget

    show rachel marah
    rachel "{size=40}HAAAAHH!?{/size}" with hpunch
    rachel "{size=30}KITA GAK PACARAN KOK!{/size}"
    rachel "{size=30}LAGIAN NGAPAIN JUGA AKU PACARAN SAMA DIA!!{/size}" with hpunch
    hide rachel marah
    stop music

    if persistent.story["bab1"]["liam_route"]:

        player_name "..."
        player_name "(Aku udah tau jawabannya, tapi tetep aja nyesek)"
        player_name "Btw, kamu liat orang mencurigakan lewat sini?"
        
    else:

        "Kata-katanya barusan... entah kenapa menusukku cukup dalam."
        player_name "Tertawa tapi terluka."

        play music "audio/music/Awkwardly Perfect Day.mp3" volume 1
        show ethan ketawa
        ethan "Pfft... hahaha!"
        hide ethan ketawa

        show ethan senyum
        ethan "Eh Rachel, kamu nggak sadar ya... kata-katamu nyakitin orang lain juga."
        ethan "Anyway, kenalin, aku Ethan. Temannya Rachel dari dulu banget."
        ethan "Dan, ya... dia emang suka ngegas kayak gitu, jadi dimaklumi aja ya."
        hide ethan senyum

        player_name "Gapapa kok, aku udah biasa sama Rachel."
        player_name "Namaku [player_name], teman sekelasnya Rachel."
        player_name "Dan itu... teman kita, itu Liam-"

        stop music
        show liam
        liam "Cukup perkenalannya."
        liam "Ngomong-ngomong, kamu liat gak orang yang lari ke arah sini tadi?"
        hide liam

    show ethan
    ethan "Hmm...{w=1.0} nggak tuh, aku juga baru sampe."

    ethan "Kebetulan banget sih, soalnya aku emang ada urusan ke sini."
    hide ethan

    show rachel
    "Rachel tiba-tiba tampak cemas."
    rachel "Kamu... {w=1.0}terus kamu ngapain disini?"
    hide rachel

    show ethan senyum
    ethan "Yah.. {w=0.5}Itu.. {w=1.1}Bukan urusan kamu."

    hide ethan senyum

    show rachel serius
    rachel "Ethan, kami harus bicara denganmu sekarang..."
    "Rachel menjelaskan secara singkat tentang misi mereka pada Ethan."
    hide rachel serius with fade

    ethan "Oh gitu..."
    show ethan senyum
    ethan "Tapi mungkin kita obrolin ini besok aja ya."
    show ethan ketawa
    ethan "Gue harus pergi sekarang. See ya!"
    hide ethan ketawa

    if persistent.story["bab1"]["liam_route"]:
        player_name "Tunggu!"
        rachel "..."
        liam "..."
        ethan "Eyy, ada apa gerangan?"
        player_name "Aku mau ngobrol sama kamu..."
        player_name " Hanya kita berdua."
        "Ethan melepas paksa tanganku dari bajunya"
        ethan "..."
        ethan "Aduhhh maaf ya, aku sibuk banget sekarang hehehe..."
        show ethan ketawa
        ethan "Aku pergi dulu!"
        show ethan ketawa at angry_exit
        pause 1.0
        hide ethan ketawa
        pause 0.7

    "Ethan menaiki bus yang baru saja berhenti, dan pergi begitu saja."

    show liam
    liam "Ada sesuatu yang dia sembunyikan."

    if persistent.story["bab1"]["liam_route"]:
        hide liam
        show rachel
        rachel "Kamu mau bahas apa sama Ethan?"
        menu:
            "(Kasih tau)":
                player_name "Aku mau bahas apa yang akan kita bahas"
                rachel "Terus kenapa kamu pengen berdua?"
                rachel "Kenapa kami gak diajak?"
                rachel "Kamu meragukan kami?"
                player_name "N-nggak! Bukan itu!"
                rachel "Coba jelasin!"
                player_name "Untuk sekarang aku belum bisa jelasin"
                player_name "Aku belum ada bukti kuat"
                rachel "Tapi kalo kita bareng, info bisa kita terima tanpa harus ada perantara!"
                rachel "Huhh...."
                rachel "Yaudah, kalo emang kamu mau berduaan, pergi aja"
                rachel "Dengan syarat, kamu harus kasih info apapun tanpa ada yang disembunyiin"
                player_name "Iya.. iya aku janji"
                rachel "Oke deh, Aku pulang dulu"
                rachel "Bye!"
                hide rachel with dissolve
                pause 1.0
                liam "..."
                liam "Yakin aku gak boleh ikut?"
                player_name "Boleh..."
                liam "Loh? Kenapa kamu pilih kasih?"
                player_name "Nanti dah aku jelasin"
                scene bg_black with dissolve
                stop music fadeout 2.0

                $ renpy.notify("Bab ░ telah terbuka!")

                pause 1.0

                show text "{font=font/digital.TTF}{size=120}{cps=15}BAB ░ SELESAI{/cps}{/size}" at truecenter with dissolve
                play sound "audio/keyboard_fast.mp3" volume 0.5
                pause 2.0

                jump bab2A

            "(Gak ngasih tau)(WIP)":
                player_name "Ini rahasia"



    player_name "Seriusan mau kita lepas gitu aja?"
    player_name "Padahal nemuin dia itu susah banget, dan dia bisa jadi kunci informasi."
    hide liam
    play music "audio/thinking.mp3" fadein 1.0 volume 0.4
    show rachel bingung
    rachel "Aku udah curiga dari awal."
    show rachel
    rachel "Gak apa-apa, kita akan cari jalan sendiri."
    rachel "Dan aku yakin... dia terlibat dalam apa yang bakal kita temukan nanti."
    hide rachel

    show liam
    liam "Kalau gitu, kita lanjutkan lain waktu. Kayaknya mau turun hujan."
    rachel "Oke, sampai jumpa, Liam!"
    hide liam with dissolve
    pause 0.5

    menu:
        "Rachel, kamu mau pulang bareng aku?":
            show rachel marah
            rachel "NGGAK! KAMU DULUAN AJA!"
            show rachel marah at angry_exit
            #sfx
            pause 0.5
            hide rachel marah
            "Rachel langsung lari nyebrang jalan ke arah apartemennya."
            player_name "Lah... yang nyuruh aku pulang duluan, dia malah yang pergi duluan."

        "Rachel, aku pulang duluan ya":
            show rachel kaget
            rachel "Loh? Kamu gak ngajak aku pulang bareng?"
            player_name "Eh, kalo kamu mau ikut, ya hayuk aja."
            show rachel ketawa
            rachel "BERCANDAAA~"
            rachel "Ahahaha!"
            rachel "Bye! Aku pulang duluan~"
            show rachel ketawa at angry_exit
            #sfx
            pause 0.5
            hide rachel marah
            "Rachel berlari ke seberang jalan dengan senyum cerah."
            player_name "{size=60}Imut bangetttt...{/size}"
            pause 1.0

            scene diliatin with dissolve

            pause 1.0

            "..."

    scene bg_black with dissolve
    stop music fadeout 2.0

    $ persistent.unlocks["bab"]["2"] = True
    $ renpy.notify("Bab 2 telah terbuka!")

    pause 1.0

    show text "{font=font/digital.TTF}{size=120}{cps=15}BAB 1 SELESAI{/cps}{/size}" at truecenter with dissolve
    play sound "audio/keyboard_fast.mp3" volume 0.5
    pause 2.0

    jump bab2A

    

label cafe_investigation:

    scene bg_cafeteria with dissolve
    play music "audio/thinking.mp3" fadein 2.0  volume 1
    "Aku kembali ke kafe, mencoba menenangkan diri dan menganalisis kejadian tadi."
    "Dan, ya...{w=1.0} selalu saja ada yang marah."
    show rachel marah:
        zoom 1.5
        yoffset -100

    rachel "Apaan sih! Aku nggak ngerti kenapa orang itu tiba-tiba muncul di sini."
    rachel "Ada aja sesuatu yang absurd!"
    hide rachel marah with dissolve

    pause 0.5

    show liam mikir at Position(xpos=0.35, ypos=1.0, anchor=(0.5, 1.0)) with dissolve
    pause 1.0
    player_name "Kamu... Mikir apa Liam?"
    liam "Rasanya aku familiar dengan mobil itu."
    rachel "Kamu tau siapa pelakunya?"
    liam "Gak yakin, tapi aku yakin pernah melihatnya di suatu tempat"

    hide liam mikir
    hide rachel marah
    with dissolve
    pause 0.5
    show cafe with dissolve
    cafe_owner "Hei,{w=0.3} kalian nggak apa-apa?{w=0.5} Dari tadi wajah kalian pucat."
    cafe_owner "Mau aku buatin minuman hangat?"
    show cafe senyum
    cafe_owner "Tapi udah itu bayar ya"
    player_name "..."
    show cafe ketawa
    cafe_owner "Hahahaha!"
    player_name "Kirain gratis,{w=0.2} ya udahlah"
    player_name "Aku... {w=0.5}mau nanya sesuatu. Kamu kenal orang tadi? Yang mecahin kaca ini?"
    show cafe kaget at Position(xpos=0.5, ypos=1.0, anchor=(0.5, 1.0))
    cafe_owner "Orang tadi? {w=0.5} Nggak, sama sekali nggak kenal. {w=0.5} Aku sudah lama kelola kafe ini, tapi nggak pernah lihat dia."
    player_name "Mungkin dia punya masalah sama pengunjung sini?"
    cafe_owner "Nggak ada. {w=0.4} Semuanya pelanggan tetap kok, anak kuliahan, pekerja kantoran, turis... {w=0.2}nggak ada yang aneh."
    player_name "Jadi kamu bener-bener nggak tahu siapa dia?"
    cafe_owner "Ya. {w=0.3}Dan kalau pun ada masalah, aku pasti ingat.{w=1.0} {cps=10}Wajah itu... {/cps}{w=0.5}benar-benar asing buatku."
    hide cafe kaget with dissolve
    pause 1.0
    "Aku berdiri, mencoba menenangkan diri. Saat melangkah keluar kafe, kakiku menyenggol sesuatu di tanah."
    player_name "Hmmm?"
    play sound "audio/item_pickup.ogg"
    player_name "Pecahan keramik?"
    liam "Kayanya dia pake itu deh"
    player_name "Bisa jadi, tapi aku bawa aja deh."
    rachel "Kamu mau ngapain sama benda itu? Jadiin oleh-oleh?"
    player_name "Ya terserahku lah, kamu mana ngerti-"
    liam "Suuttt..!! Kalian ini mau dimanapun selalu berisik!"

    scene bg_black
    with dissolve

    "Semakin banyak misteri yang menumpuk, rasanya... aku sudah masuk ke dalam permainan yang jauh lebih besar dari dugaanku."
    "Dan aku tidak bisa mundur sekarang."
    $ persistent.story["bab1"]["mysterious_object"] = True


    stop music fadeout 2.0

    $ persistent.unlocks["bab"]["2"] = True
    $ renpy.notify("Bab 2 telah terbuka!")

    pause 2.0

    show text "{font=font/digital.TTF}{size=120}BAB 1 SELESAI{/size}" at truecenter with dissolve
    
    pause 2.0

    "Lanjut bab 2?"
    menu:
        "Lanjut":
            hide text with dissolve
            jump bab2A
        "Nggak":
            return

label pendekatan_liam:

#pake all untuk semua dan any untuk salah satu
    if all(
        persistent.characters[name]["affection"] <= 1
        for name in ["liam", "rachel"]
    ):
        jump coming_soon
        scene bg_room_night with fade
        play music "audio/melancholy.ogg"
        
        "Aku duduk sendiri di kamar, lampu redup. Hening, hanya suara detak jam yang menemani."
        "Rachel dan Liam... mereka menjauh dariku. Mungkin ini salahku, mungkin aku terlalu gegabah."
        "Tapi kalau aku berhenti sekarang, semuanya akan sia-sia."

        "Aku harus mencari cara untuk memperbaiki semuanya. Atau... mungkin aku harus terus melangkah sendiri."

        menu:
            "Coba dekati Rachel dulu":
                jump tanya_rachel
            "Coba dekati Liam dulu":
                jump redemption_liam


    if persistent.characters["liam"]["affection"] <= 1:
        scene bg_classroom_day with fade
        "Aku harus membuat Liam tertarik padaku."
        player_name "Bagaimana cara agar aku menarik perhatian Liam?"
        menu:
            "Tanya Rachel":
                player_name "Rachel, gimana cara aku dapetin perhatian si Liam?"
                show rachel kaget
                pause 1.5
                show rachel sombong
                rachel "Ciee kamu naksir yaa, hahaha."
                player_name "Sembarangan, kamu sendiri yang mau ngajak Liam buat kerjasama."
                show rachel senyum
                rachel "Hmm.. coba kamu ajak dia ngobrol tentang pelajaran atau sebuah kontroversi seputar keamanan siber."
                player_name "Ide bagus."
                hide rachel senyum
                "Aku menghampiri Liam."
                player_name "Hai Liam! Maaf aku ngatain kamu."
                liam "..."
                menu:
                    "Aku mau nanya pendapat kamu tentang maraknya kasus akhir-akhir ini":
                        player_name "Liam, kamu nggak ngerasa akhir-akhir ini makin banyak kasus data orang diretas?"
                        liam "Hmm? Maksudmu kasus bocornya data kampus sama perusahaan itu?"
                        player_name "Iya. Gila aja, seolah-olah sistem keamanan kita tuh rapuh banget."
                        liam "Sebenarnya bukan sekadar rapuh... ada tiga kemungkinan."
                        player_name "Tiga?"
                        #scene baru
                        liam "Satu, sistemnya memang outdated. Dua, ada orang dalam yang sengaja ngejual data. Dan tiga... lawannya terlalu pintar."
                        "Nada suaranya rendah, matanya tajam. Untuk sesaat, suasana jadi serius."
                        player_name "Kedengarannya serem juga ya..."
                        liam "Heh, tapi justru itu bikin menarik. Setiap lubang keamanan itu kayak puzzle buat dipecahkan."
                        "Aku dan Liam terus mengobrol panjang soal kasus itu. Anehnya, dia terlihat jauh lebih terbuka dari biasanya."
                        $ persistent.characters["liam"]["affection"] += 1
                        scene bg_black with dissolve
                        pause 1.0
                        jump bab1A

                    "Aku mau nanya tentang materi IDS dan IPS":
                        player_name "Eh, aku masih agak bingung deh soal IDS sama IPS. Bisa jelasin nggak?"
                        liam "Oh, itu? Hahaha... akhirnya kamu nanya juga."
                        player_name "Kok ketawa sih?"
                        liam "Soalnya aku pikir kamu nggak bakal peduli. Oke, gini..."
                        #scene baru
                        liam "IDS itu Intrusion Detection System, fungsinya buat deteksi kalau ada aktivitas mencurigakan."
                        liam "Sedangkan IPS itu Intrusion Prevention System, bukan cuma deteksi tapi langsung blokir serangan."
                        player_name "Ohhh... jadi IDS cuma kasih alarm, sedangkan IPS itu kayak satpam yang langsung hajar malingnya?"
                        liam "...Analogi kamu... agak kasar, tapi iya juga sih."
                        "Liam terlihat agak malu tapi jelas dia semangat ngejelasinnya."
                        player_name "Wah, ternyata gampang dimengerti kalo kamu yang jelasin. Lain kali aku belajar dari kamu aja deh."
                        liam "Te-... terima kasih."
                        $ persistent.characters["liam"]["affection"] += 2
                        scene bg_black with dissolve
                        pause 1.0
                        jump bab1A

    elif persistent.characters["rachel"]["affection"] <= 1:
        "Aku harus cari cara supaya Rachel nggak terus dingin ke aku."
        player_name "Hmm... gimana ya caranya deketin Rachel..."
        menu:
            "Tanya Liam":
                player_name "Liam, boleh tanya sesuatu nggak?"
                show liam
                liam "Kalau tentang pelajaran, silakan. Kalau tentang cinta-cintaan... nggak deh"
                player_name "Ehehe... ya semacam itu."
                liam "Kukira kamu lagi puber."
                player_name "Bukan gitu... aku cuma butuh saran."
                liam "Kalau menurutku, Rachel tipe orang yang lebih menghargai sesuatu yang ada makna personal. Nggak harus mahal, tapi harus ngena di hati."
                player_name "Barang kaya apa?"
                liam "Itu kamu yang harus tau. Kamu lebih sering sama dia dibanding aku."
                hide liam with dissolve
                player_name "Iya juga sih. Makasih, Liam."
                "Aku mulai mikirin serius hadiah apa yang bisa bikin Rachel luluh."
                menu:
                    "Beli barang kesukaan Rachel":
                        player_name "Ehh, aku gak tau Rachel suka apaan."
                        player_name "Takutnya aku kasih barang yang dibenci Rachel lagi."
                        "Aku harus cari tahu apa yang Rachel suka."
                        jump tanya_rachel
                    "Tanya Rachel secara langsung":
                        player_name "Rachel, aku mau nanya deh... kalau disuruh milih, kamu lebih suka cokelat atau boneka?"
                        rachel "Hah?! Ngapain kamu tiba-tiba nanya gitu?"
                        player_name "A-anu... cuma penasaran aja, buat... referensi."
                        rachel "Referensi apaan? Buat siapa emangnya?"
                        menu:
                            "Buat orang yang aku suka":
                                rachel "Tsk... kenapa tanya aku kalau buat orang lain? Aneh banget."
                                player_name "Ya... aku pikir selera cewek mirip-mirip lah."
                                rachel "Hmm... kalau aku sih lebih suka buku. Tapi jangan salah pilih, ya."
                                player_name "Oh, kamu suka baca?"
                                rachel "Ya jelas lah, kamu aja yang nggak pernah merhatiin."
                                player_name "Hehe, noted. Makasih sarannya."
                                "Aku meninggalkan Rachel sambil terus mikirin kata-katanya."
                            "Buat kamu":
                                rachel "E-Eh?! K-kamu itu apaan sih tiba-tiba ngomong gitu!"
                                player_name "Hahaha, bercanda kok. Maksudnya buat orang yang aku suka."
                                rachel "Tsk... dasar usil, ih."
                                player_name "Tapi kalau menurut kamu, cewek lebih suka apa?"
                                rachel "Aku sih sukanya buku. Tapi itu kan aku, bukan berarti orang lain sama."
                                player_name "Hmm... noted. Jadi kamu suka baca, ya?"
                                rachel "Udah dari dulu kali. Kamu aja yang baru sadar."
                                player_name "Hehe, baiklah. Makasih, Rachel."
                                "Aku pergi sambil nyengir, tapi dalam hati catet: Rachel suka buku."
                jump beli_buku

label tanya_rachel:
    scene bg_classroom_day with fade
    player_name "Rachel, aku mau tanya deh... kalau disuruh milih, kamu lebih suka cokelat atau boneka?"
    show rachel at center
    rachel "Hah?! Ngapain kamu tiba-tiba nanya gitu?"
    player_name "A-anu... cuma penasaran aja, buat... referensi."
    rachel "Referensi apaan? Buat siapa emangnya?"

    menu:
        "Buat orang yang aku suka":
            rachel "Tsk... kenapa tanya aku kalau buat orang lain? Aneh banget."
            player_name "Ya... aku pikir selera cewek mirip-mirip lah."
            rachel "Hmm... kalau aku sih lebih suka buku. Tapi jangan salah pilih, ya."
            player_name "Oh, kamu suka baca?"
            rachel "Ya jelas lah, kamu aja yang nggak pernah merhatiin."
            player_name "Hehe, noted. Makasih sarannya."
            "Aku meninggalkan Rachel sambil terus mikirin kata-katanya."

        "Buat kamu":
            rachel "E-Eh?! K-kamu itu apaan sih tiba-tiba ngomong gitu!"
            player_name "Hahaha, bercanda kok. Maksudnya buat orang yang aku suka."
            rachel "Tsk... dasar usil."
            player_name "Tapi kalau menurut kamu, cewek lebih suka apa?"
            rachel "Aku sih sukanya buku. Tapi itu kan aku, bukan berarti orang lain sama."
            player_name "Hmm... noted. Jadi kamu suka baca, ya?"
            rachel "Udah dari dulu kali. Kamu aja yang baru sadar."
            player_name "Hehe, baiklah. Makasih, Rachel."
            "Aku pergi sambil nyengir, tapi dalam hati catet: Rachel suka buku."

    jump beli_buku

label beli_buku:

    scene Backstreet_Summer_Night_Rain with fade
    play music "audio/romantic.mp3" fadein 2.0 volume 0.2

    "Aku berjalan menyusuri jalan kota yang ramai, lampu neon toko-toko mulai menyala satu per satu."
    "Tujuanku jelas: toko buku. Kalau aku beneran mau bikin Rachel luluh, aku harus kasih sesuatu yang dia suka."
    player_name "(Buku... Rachel suka buku. Tapi buku apa yang tepat?)"

    play music "audio/mid_theme.ogg" fadein 2.0 volume 0.1
    scene bg_busstop_summer_night_rain with fade
    "Di persimpangan jalan, hujan gerimis turun pelan. Orang-orang berlarian sambil mengangkat payung."
    "Saat aku hampir sampai di toko buku, mataku menangkap sosok aneh di seberang jalan."

    play sound "audio/step.mp3"
    "Orang itu memakai jas panjang hitam, wajahnya setengah tertutup masker. Cara jalannya tenang, terlalu tenang untuk keramaian malam seperti ini."
    "Aku berhenti sejenak, jantungku berdetak lebih cepat."
    player_name "(Siapa dia...? Rasanya familiar... tapi aku nggak bisa ingat.)"

    "Sosok itu lewat begitu saja tanpa menoleh. Aku sempat ingin mengejarnya, tapi—"
    player_name "(Nggak... jangan bodoh. Aku kesini buat Rachel, bukan buat cari masalah baru.)"

    scene bg_bookstore with dissolve
    "Aku masuk ke toko buku yang hangat dan nyaman. Lampu-lampu lembut menerangi rak-rak kayu yang penuh buku."
    "Bau khas kertas dan tinta menyambutku."
    "Rak-rak tinggi dipenuhi ratusan buku, dari novel klasik, komik, sampai jurnal akademis."

    player_name "Hmm... Rachel bilang dia suka baca, tapi buku apa yang cocok ya?"
    "Aku berjalan menyusuri lorong, jemariku menyapu punggung buku yang tertata rapi."
    "Akhirnya aku mengambil sebuah buku yang menurutku pas: tidak terlalu berat, tapi cukup berkesan."
    player_name "Kayaknya dia bakal suka ini..."

    "Aku membawa buku itu ke kasir dan membayarnya. Satu langkah kecil, tapi penting."
    "Saat keluar dari toko, pikiranku masih memikirkan sosok misterius tadi."
    player_name "(Aku harus tetap fokus. Tapi... perasaan ini nggak enak. Seakan aku sedang diawasi.)"
    "Aku langsung menaiki bus menuju apartemenku, berharap bisa memberikannya buku ini sebagai permintaan maaf."

    jump kasih_buku

label kasih_buku:
    scene bg_train_night_rain with fade
    "Ini udah malem, apa aku kasih ke Rachel sekarang ya?"
    "Ah nggak deh, kasian dia kalau aku ganggu jam istirahatnya."
    "Aku putuskan untuk pulang dulu, besok pagi baru aku kasih ke Rachel."
    scene bg_black with fade
    pause 2.0
    scene bg_apartment_exterior with fade
    "Keesokan harinya, aku berdiri di depan apartemen Rachel dengan buku di tangan."
    play audio "audio/bell_door.mp3"
    show rachel with dissolve
    rachel "Siapa ya? Oh, [player_name]?"
    "Rachel membuka pintu dengan ekspresi kaget."
    rachel "Ada apa kamu kesini?"
    player_name "Aku... aku mau minta maaf atas kemarin. Ini, aku bawa sesuatu buat kamu."
    show rachel kaget
    rachel "Hah? Apa ini?"
    rachel "..."
    rachel "Buku? Hmm... ini buku yang aku suka."
    show rachel
    rachel "Tapi... kenapa kamu repot-repot kasih ini?"
    player_name "Aku cuma mau bilang, aku minta maaf. Aku nggak mau hubungan kita jadi buruk karena kesalahanku."
    show rachel ketawa
    rachel "Hmm... aku nggak tahu harus bilang apa. Tapi terima kasih, [player_name]."

    $ renpy.notify("Afeksi Rachel bertambah")
    $ persistent.characters["rachel"]["affection"] += 2
    jump bab1A


# --------------------------------------------------
# Redemption Arc - Liam
# Pemain mencoba mendekati Liam kembali.
# Bisa dengan cara menunjukkan kompetensi di bidang teknologi
# atau membuktikan bahwa player bukan beban.
# Jika berhasil, affection Liam naik.
# --------------------------------------------------
label redemption_liam:

    scene bg_computer_lab with fade
    play music "audio/tech_somber.ogg" fadein 2.0

    play audio "audio/step.mp3"

    "Aku berjalan masuk ke ruang kerja Liam. Dia sedang duduk di depan laptopnya, mengetik cepat tanpa menoleh."
    "Suasana hening, hanya suara keyboard yang terdengar."
    
    player_name "Liam... kita bisa bicara sebentar?"
    
    "Tidak ada respon. Jari-jarinya masih sibuk di atas keyboard."
    
    player_name "Aku tahu akhir-akhir ini aku bikin kacau. Aku banyak salah langkah, dan aku ngerti kenapa kamu marah."
    player_name "Tapi aku nggak mau terus jadi beban buatmu."
    
    show liam with dissolve
    liam "Baru sadar sekarang? Kamu pikir ucapan itu cukup?"
    liam "Sekali salah, semua misi bisa gagal. Kita bisa mati, paham?"
    
    "Nada suaranya tajam. Aku menunduk, menerima kemarahannya."
    
    player_name "Makanya... kali ini aku mau buktiin. Aku belajar dari kesalahan."
    
    "Aku duduk di kursi sebelah, membuka laptopku sendiri. Aku mulai mengutak-atik skrip kecil yang kemarin sempat kupelajari."
    "Liam melirik sekilas, ekspresinya skeptis."
    
    liam "...Apa yang kamu lakuin?"
    
    player_name "Bypass sederhana. Kalau kita hadapi firewall kayak kemarin, cara ini bisa jadi jalan pintas. Lihat."
    
    play sound "audio/keyboard_fast.ogg"
    "Tanganku gemetar sedikit, tapi aku fokus. Setelah beberapa detik, baris kode terakhir dieksekusi."
    
    play sound "audio/access-granted.mp3"
    show text "{size=80}{color=#0f0}>>> ACCESS GRANTED <<<{/color}{/size}" at truecenter with glitch_fade
    pause 2.0
    hide text with dissolve
    
    "Layar menunjukkan hasil positif. Aku menahan napas, menunggu reaksinya."
    
    show liam with dissolve
    liam ".... Nggak buruk. Minimal kamu belajar sesuatu."
    liam "Aku nggak bakal langsung percaya seratus persen, tapi... ini awal yang lumayan."
    
    player_name "Jadi... kamu bakal kasih aku kesempatan lagi?"
    
    liam "..."
    liam "Ya. Jangan bikin aku nyesel."
    
    "Untuk pertama kalinya setelah sekian lama, wajah Liam terlihat lebih tenang. Ada secercah kepercayaan kembali muncul."
    
    $ persistent.characters["liam"]["affection"] += 2
    jump bab1A



# --------------------------------------------------
# Lonely Route
# Jalur khusus kalau pemain tetap sendirian.
# Cerita jadi lebih gelap, penuh rasa kesepian, 
# dan player harus menghadapi konflik besar tanpa bantuan Rachel & Liam.
# Bisa berujung ke hidden ending atau bad ending.
# --------------------------------------------------
label lonely_route:
    # Disini player memilih untuk tidak lagi bergantung pada Rachel dan Liam.
    # Player melangkah sendirian, membuat cerita lebih suram dan penuh misteri.
    jump coming_soon
    return



    # Alur cerita buruk: semua temanmu lupa tentangmu karena terlalu banyak cerita yang diulang atau afeksi yang buruk.
    # Kamu hidup dalam keterpurukan, memulai hidup dari awal (mengulang game).
    # Kamu dilanda kesulitan dan tidak ada kenalan yang bisa diminta bantuan.