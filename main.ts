while (true) {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showString("0")
    }
    
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showString("1")
    }
    
    if (!input.pinIsPressed(TouchPin.P0)) {
        basic.clearScreen()
    }
    
    if (!input.pinIsPressed(TouchPin.P0)) {
        basic.clearScreen()
    }
    
}
