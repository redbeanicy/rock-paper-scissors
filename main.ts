radio.onReceivedNumber(function (receivedNumber) {
    Friend = receivedNumber
})
input.onGesture(Gesture.Shake, function () {
    Me = randint(1, 3)
    radio.sendNumber(Me)
})
let Friend = 0
let Me = 0
radio.setGroup(1)
Me = 0
Friend = 0
basic.forever(function () {
    if (Me == 1) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(1000)
    } else if (Me == 2) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(1000)
    } else if (Me == 3) {
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
    }
    if (Me != 0 && Friend != 0) {
        if (Me == Friend) {
            basic.showIcon(IconNames.Asleep)
        } else if (Me == 1) {
            if (Friend == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else if (Me == 2) {
            if (Friend == 3) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else {
            if (Friend == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Happy)
            }
        }
        Me = 0
        Friend = 0
    }
})
