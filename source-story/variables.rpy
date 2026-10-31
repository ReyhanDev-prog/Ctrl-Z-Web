default current_chapter = 1
default secret_input = ""
default persistent.blocked_names = []
default persistent.player_name = None
default persistent.player_blocked = False
default persistent.used_codes = {}  # Menyimpan kode yang sudah digunakan

#Kondisi alur cerita
default met_marcuz = False  # Apakah pemain sudah bertemu Marcuz
default met_ethan = False  # Apakah pemain sudah bertemu Ethan
default met_specter = False
default persistent.chronos_used_bab_3 = False  # Apakah Chronos-9 sudah digunakan di bab 3

default persistent.ethan_contact = False  # Apakah pemain memiliki kontak Ethan
default liam_mansion = False
default persistent.ethan_house = False
default apartement_rachel = True

default get_gps = False #Apakah player sudah punya gps?
default get_idcard = False

default rollback_button = True
default rollback_count = 0  # Menghitung jumlah rollback dalam bab ini

default player_level = 1
default player_time = 0

default persistent.cg_unlocked = [False, False, False, False, False, False]
default persistent.rollback_count = False
default persistent.last_played = False
default persistent.player_data = False
default persistent.player = False
default persistent.unlocked_continue = False

default quick_menu = True
#Kondisi alur cerita
#Bab 1
default persistent.mysterious_object = False  # Apakah pemain sudah menemukan objek misterius
default persistent.ethan_defense = False  # Apakah Ethan bersikap defensif saat pertama kali bertemu
default persistent.exit_game = False  # Apakah pemain memilih untuk keluar dari permainan

#Bab 2
#Bab 3
#Bab 4
#Bab 5
#Bab 6
#Bab 7
#Bab 8
#Bab 9
#Bab 10

#===========================================#
#1/22/26
init python:
    if not hasattr(persistent, "story") or persistent.story is None:
        persistent.story = {}

    persistent.story.setdefault("met", {
        "marcuz": False,
        "ethan": False,
        "specter": False
    })

    persistent.story.setdefault("bab1", {
        "mysterious_object": False,
        "liam_route": None
    })

    persistent.story.setdefault("bab5", {
        "trust_rachel": None,
        "trust_ethan": None,
        "chronos_experiment": None,
        "break_cycle": None,
        "player_escape": None,
        "player_fight": None
    })

    persistent.story.setdefault("bab6", {
        "loop_awareness": None,
        "resist": None,
        "confusion": None,
        "defiant": None,
        "question": None,
        "silence": None,
        "paranoia": None,
        "identity_crisis": None,
        "escape_mind": None,
        "acceptance": None,
        "denial": None,
        "break_loop": None
    })



default persistent.affection_unlocked = {
    "rachel": False,
    "ethan": False,
    "liam": False,
    "ava": False,
    "claire": False,
    "aria": False,
    "julian": False,
    "cain": False,
    "niko": False,
    "raksa": False,
    "rei": False,
    "syntia": False
}


default persistent.characters = {
    "rachel": {
        "affection": 0,
        "trust": 0,
        "awareness": 20,
        "gift": False,
        "at_home": False
    },
    "ethan": {
        "affection": 0,
        "trust": 0,
        "awareness": 50,
        "contact": False,
        "house_unlocked": False
    },
    "liam": {
        "affection": 0,
        "trust": 0,
        "awareness": 40,
        "mansion": False
    },
    "ava": {
        "affection": 0,
        "awareness": 90
    },
    "marcuz": {
        "affection": 0,
        "awareness": 0
    }
}
# Cara pake
# $ persistent.characters["rachel"]["affection"] += 5
# $ persistent.characters["ethan"]["trust"] -= 3
# $ persistent.characters["liam"]["awareness"] = 60
# $ persistent.characters["rachel"]["gift"] = True
#======= cek kondisi karakter =============#
# if persistent.characters["rachel"]["affection"] >= 50:
#    r "Aku mulai percaya padamu."



default persistent.story = {
    "met": {
        "marcuz": False,
        "ethan": False,
        "specter": False
    },
# $ persistent.story["met"]["marcuz"] = True
    "bab1": {
        "mysterious_object": False,
        "liam_route": None
    },

    "bab5": {
        "trust_rachel": None,
        "trust_ethan": None,
        "chronos_experiment": None,
        "break_cycle": None,
        "player_escape": None,
        "player_fight": None,
        "changed_plan": None
    },
# if persistent.story["bab5"]["trust_rachel"] is False:
#    r "Kamu masih meragukanku."

    "bab6": {
        "loop_awareness": None,
        "resist": None,
        "confusion": None,
        "defiant": None,
        "question": None,
        "silence": None,
        "paranoia": None,
        "identity_crisis": None,
        "escape_mind": None,
        "acceptance": None,
        "denial": None,
        "break_loop": None
    }
}

default persistent.unlocks = {
    "bab": {
        "prolog": True,
        "1": False,
        "2": False,
        "3": False,
        "4": False,
        "5": False,
        "6": False,
        "7": False,
        "8": False,
        "9": False,
        "10": False
    },
    "characters": {},
    "cg": [False, False, False, False, False, False]
}
# $ persistent.unlocks["bab"]["3"] = True
# $ persistent.unlocks["cg"][1] = True

default chapter_state = {
    "current": 1,
    "day": 1,
    "month": 1,
    "year": 2042,
    "hour": 6,
    "minute": 0
}
# $ chapter_state["hour"] = 22
# $ chapter_state["minute"] = 20
default temp_flags = {
    "gps": False,
    "idcard": False,
    "apartment_rachel": True
}
# temp_flags["gps"] = True
default persistent.system = {
    "loop_count": 0,
    "chronos_used": 0,
    "chronos_bab3": False,
    "rollback_enabled": True,
    "rollback_count": 0,
    "exit_mid_game": False
}
# $ persistent.system["exit_mid_game"] = True

init python:
    #persistent._clear()
    if persistent.unlocks["bab"]["9"]:
        main_menu_background = "images/UI/main_menu_final.png"
        main_menu_music = "audio/final_theme.ogg"

    elif persistent.unlocks["bab"]["5"]:
        main_menu_background = "images/UI/main_menu_mid.jpg"
        main_menu_music = "audio/mid_theme.ogg"
    else:
        main_menu_background = "images/UI/main_menu_start.jpg"
        main_menu_music = "audio/start-theme.mp3"