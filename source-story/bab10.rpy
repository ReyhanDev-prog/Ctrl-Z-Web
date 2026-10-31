label bab10A:


    scene bg_ethan_livingroom with dissolve
    "Test Ethan Sprite"
    show ethan
    "1"
    show ethan senyum
    "2"
    show ethan senyum2
    "3"
    show ethan malu
    "4"
    show ethan sedih
    "5"
    show ethan kaget
    "6"
    show ethan ketawa
    "7"
    show ethan serius
    "8"
    show ethan marah
    "9"
    show ethan sombong
    "10"
    show ethan bingung
    "11"

    show valeria
    "1"

    show valeria nyapa
    "2"

    show valeria marah
    "3"

    show valeria ketawa
    "4"

    show valeria cemberut
    "5"

    show valeria serius
    "6"

    show valeria khawatir
    "7"

    show valeria sombong
    "8"

    show valeria serius2
    "9"

    show valeria nangis
    "10"

    show valeria sedih
    "11"

    show valeria malu
    "12"    
  
    #================================================#
    # Tambahkan ini dulu buat jaga-jaga
    if "bab10A" not in persistent.replay_counter:
        $ persistent.replay_counter["bab10A"] = 0

    $ persistent.replay_counter["bab10A"] += 0
    #================================================#
    # Tandai bahwa Bab 10 sudah selesai
    $ persistent.completed_bab10 = True
    #beres bagian ini, musik utama berubah
    return

label bab10B:
    "Coming soon..."
    $ persistent.replay_counter["bab10A"] += 1

    $ renpy.pause(3.0, hard=True)
    return

label bab10C:
    "Coming soon..."
    $ persistent.replay_counter["bab10A"] += 1

    $ renpy.pause(3.0, hard=True)
    return

label bab10D:
    "Coming soon..."
    $ persistent.replay_counter["bab10A"] += 1

    $ renpy.pause(3.0, hard=True)
    return

label bab10E:
    "Coming soon..."
    $ persistent.replay_counter["bab10A"] += 1

    $ renpy.pause(3.0, hard=True)
    return
