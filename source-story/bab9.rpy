label bab9A:
    #================================================#
    # Tambahkan ini dulu buat jaga-jaga
    if "bab9A" not in persistent.replay_counter:
        $ persistent.replay_counter["bab9A"] = 0

    $ persistent.replay_counter["bab9A"] += 0
    #================================================#
    # Tandai bahwa Bab 9 sudah selesai
    $ persistent.completed_bab9 = True
    #beres bagian ini, musik utama berubah
    show screen countdown(10.0, "coming_soon")
    menu:
        "Rachel":
            jump _return
        "Ethan":
            jump _return
        "Liam":
            jump _return
        "[player_name]":
            jump _return
        "Buka prompt":
            hide screen countdown
            "Buka Terminal"
            $ result = renpy.call_screen("terminal_injection")

            if result == "win":
                "Layar berkedip. Sistem menyerah."
            else:
                "Tidak seharusnya sampai sini."

            return