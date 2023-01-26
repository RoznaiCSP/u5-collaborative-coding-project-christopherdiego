// Don't forget to comment your code as you work!
scene.setBackgroundColor(7)
let goalie = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f d e e e f f f f 
    f f f d d d e e f f f f 
    f f f d d d d e e f f f 
    f d e d d d d d d e d f 
    f d d f f d d f f d d f 
    f e d d d d d d d d e f 
    . f e d d b b d d e f . 
    . f e e d d d d e e f . 
    2 8 e 8 8 8 8 1 2 e 8 2 
    2 8 2 8 8 8 8 8 8 2 8 2 
    2 2 2 8 8 8 8 8 8 2 2 2 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
goalie.setPosition(80, 11)
let goal = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11...................................................11
    11.....................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    .......................................................
    `, SpriteKind.Player)
goal.setPosition(80, 29)
controller.moveSprite(goalie, 100, 100)
goalie.setBounceOnWall(true)
