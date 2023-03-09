let Reamur = 0
let F = 0
let Farenheit = 0
input.onButtonPressed(Button.A, function () {
    Reamur = input.temperature() * 0.8
    basic.showNumber(Reamur)
    basic.showString("Reamur")
})
input.onButtonPressed(Button.AB, function () {
    F = input.temperature() * 1.8
    Farenheit = F * 32
    basic.showNumber(Farenheit)
    basic.showString("Farenheit")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
    basic.showString("Celcius")
})
basic.forever(function () {
    basic.showIcon(IconNames.Skull)
})
