input.onGesture(Gesture.Shake, function () {
    Me = randint(1, 3)
    if (Me == 1) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(500)
    } else if (Me == 2) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(500)
    } else if (Me == 3) {
        basic.showIcon(IconNames.Square)
        basic.pause(500)
    }
    basic.clearScreen()
})
let Me = 0
radio.setGroup(1)
