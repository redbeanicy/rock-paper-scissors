radio.onReceivedNumber(function (receivedNumber) {
    if (R == receivedNumber) {
        basic.showString("DRAW")
    } else if (R == 0) {
        if (receivedNumber == 1) {
            basic.showString("U LOST")
        } else {
            basic.showString("U WON")
        }
    } else if (R == 1) {
        if (receivedNumber == 2) {
            basic.showString("U LOST")
        } else {
            basic.showString("U WON")
        }
    } else {
        if (receivedNumber == 1) {
            basic.showString("U LOST")
        } else {
            basic.showString("U WON")
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    R = randint(0, 2)
    radio.sendNumber(R)
    if (R == 0) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
    } else if (R == 1) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
    }
})
let R = 0
radio.setGroup(1)
