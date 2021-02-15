while True:
    if input.pin_is_pressed(TouchPin.P0):
        basic.show_string("0")
    if not input.pin_is_pressed(TouchPin.P0):
        basic.clear_screen()
    if input.pin_is_pressed(TouchPin.P1):
        basic.show_string("1")
    if not input.pin_is_pressed(TouchPin.P1):
        basic.clear_screen()




        