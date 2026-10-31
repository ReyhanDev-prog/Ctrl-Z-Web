transform flashback_bw:
    matrixcolor (
        SaturationMatrix(0.0)
        * BrightnessMatrix(0.15)
        * ContrastMatrix(0.9)
    )

transform angry_exit:

    easein 0.4 xoffset 100
    linear 0.12 xoffset 2200

transform glitch:

    linear 0.02 xoffset -8
    linear 0.02 xoffset 10
    linear 0.02 xoffset -6
    linear 0.02 xoffset 4
    linear 0.02 xoffset 0

    repeat

transform slide_left(distance=300, duration=0.4):

    linear duration xoffset -distance

transform slide_right(distance=300, duration=0.4):

    linear duration xoffset distance

transform enter_left:

    xoffset -1200
    alpha 1.0

    linear 0.4 xoffset 0

transform enter_right:

    xoffset 1200
    alpha 1.0

    linear 0.4 xoffset 800

#show rachel at slide_left()


