radio.onReceivedNumber(function (receivedNumber) {
    Friend = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    Me = randint(0, 2)
    radio.sendNumber(Me)
    if (Me == 0) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
    } else if (Me == 1) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
    }
})
let Friend = 0
let Me = 0
radio.setGroup(1)
Me = 3
Friend = 3
basic.forever(function () {
    if (Me != 3 && Friend != 3) {
        if (Me == Friend) {
            basic.showIcon(IconNames.Asleep)
        } else if (Me == 0) {
            if (Friend == 1) {
                basic.showIcon(IconNames.Sad)
                basic.showString("U LOST")
            } else {
                basic.showIcon(IconNames.Happy)
                basic.showString("U WON")
            }
        } else if (Me == 1) {
            if (Friend == 2) {
                basic.showIcon(IconNames.Sad)
                basic.showString("U LOST")
            } else {
                basic.showString("U WON")
            }
        } else {
            if (Friend == 1) {
                basic.showString("U LOST")
            } else {
                basic.showString("U WON")
            }
        }
    }
})
