controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myBall.throwDart()
})
// Don't forget to comment your code as you work!
let myBall: Dart = null
// Set a player and postionated in the screen.
let mexicoPlayer = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f 5 5 5 5 f f . . . 
    . f f 5 5 5 5 5 5 f f . . 
    f f 5 5 5 5 5 5 5 5 f f . 
    f f 5 5 f 5 5 5 5 5 5 f . 
    f f f f f 5 5 5 f 5 5 f . 
    f f f f 5 5 5 f 5 5 f f . 
    f f f f f f f f f f f f . 
    f f f f f f f f f f f f . 
    . f f f f f f f f f f . . 
    . f f f f f f f f f f . . 
    f e f f f f f f f f e f . 
    e 7 f 7 7 1 1 2 2 f 7 e . 
    e e f 7 7 1 1 2 2 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mexicoPlayer.setPosition(80, 108)
// set a ball for mexicoPlayer to kick
// 
myBall = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . 1 1 f f f f 1 1 . . . . 
    . . . f 1 1 1 f f 1 1 1 f . . . 
    . . 1 1 f 1 1 1 1 1 1 f 1 1 . . 
    . . 1 1 1 f 1 1 1 1 f 1 1 1 . . 
    . f f 1 1 1 f 1 1 f 1 1 1 f f . 
    . f f f 1 1 1 f f 1 1 1 f f f . 
    . f f f 1 1 1 f f 1 1 1 f f f . 
    . f f 1 1 1 f 1 1 f 1 1 1 f f . 
    . . 1 1 1 f 1 1 1 1 f 1 1 1 . . 
    . . 1 1 f 1 1 1 1 1 1 f 1 1 . . 
    . . . f 1 1 1 f f 1 1 1 f . . . 
    . . . . 1 1 f f f f 1 1 . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
myBall.setPosition(80, 95)
