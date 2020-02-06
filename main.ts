function _49ers () {
    _49ers2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
5 5 5 5 5 5 5 5 5 . . . . . . . 
5 2 2 2 2 2 2 2 5 5 5 5 5 5 5 . 
5 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
5 5 2 2 2 2 2 2 2 2 2 2 2 2 5 5 
5 5 2 2 2 2 2 2 2 2 2 2 2 2 5 . 
. 5 2 2 2 2 2 2 2 2 2 2 2 2 5 . 
. 5 5 5 5 5 5 5 5 2 2 2 2 2 5 . 
. . . . . . . . 5 2 2 2 2 5 5 . 
. . . . . . . . 5 5 5 5 5 5 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    _49ers2.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
    extra_velocity = 0
    if (Math.percentChance(20)) {
        extra_velocity = Math.randomRange(0, 50)
    } else {
        extra_velocity = Math.randomRange(-16, -16)
    }
    _49ers2.vx = -50 - 5 * (info.score() - extra_velocity)
    if (info.score() <= 20) {
        controller.moveSprite(spaceship, 100 - -2 * info.score(), 100 - 2 * info.score())
    }
}
function change_score () {
    info.changeScoreBy(1)
}
function gameOver () {
    game.over(false)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    gameOver()
})
let extra_velocity = 0
let _49ers2: Sprite = null
let spaceship: Sprite = null
spaceship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 . . . 
. . . . . . . . 8 8 8 8 8 8 . . 
. . . . . 8 8 8 8 8 9 8 8 8 . . 
. . 8 8 8 8 8 8 9 8 8 8 8 8 . . 
. 8 8 f 8 8 9 8 8 8 9 8 8 8 . . 
. 9 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. 8 8 f 8 9 8 8 9 8 9 8 8 8 . . 
. . . 8 8 8 8 8 8 8 8 9 8 8 . . 
. . . . . . 8 8 8 8 8 9 8 8 8 . 
. . . . . . . . 8 8 8 8 8 8 8 . 
. . . . . . . . . . . 8 8 8 8 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(spaceship)
spaceship.x = 8
spaceship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
change_score()
// 49ers
game.onUpdateInterval(2000, function () {
	
})
// score
game.onUpdateInterval(2000, function () {
    change_score()
    _49ers()
})
