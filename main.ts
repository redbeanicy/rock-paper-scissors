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
let Me = 0
let Friend = 0
radio.setGroup(1)
