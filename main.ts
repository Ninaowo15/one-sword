sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(mySprite)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    controller.combos.setTriggerType(TriggerType.Disabled)
})
let mySprite: Sprite = null
let oro = sprites.create(img`
    . . . . . . f f f . . . . . . . 
    . . . . . f e e e f . . . . . . 
    . . . . f e f f f e f f . . . . 
    . . . f e f d d d f e f . . . . 
    . . . f e f f d f f e f . . . . 
    . . . . f d d d d f e f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f 1 1 f . . . . . . 
    . . . . . f 1 5 5 1 f . . . . . 
    . . . . f 1 f 1 1 f 1 f . . . . 
    . . . . f 1 f 1 1 f 1 f . . . . 
    . . . . f 1 f f f f 1 f . . . . 
    . . . . . f 5 f f 5 f . . . . . 
    . . . . . f 5 f f 5 f . . . . . 
    . . . . . f 5 f f 5 f . . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
let soro = sprites.create(img`
    . . . . . f . . . . . f . . . . 
    . . . . f b f . . . f b f . . . 
    . . . . f c b f f f b c f . . . 
    . . . . f b b b b b b b f . . . 
    . . . . f f f b 3 b f f f . . . 
    . . . . f 3 b b b b b 3 f . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . f c b c f . . . . . 
    . f f . . f b b b b b f . . . . 
    . f c f . f f f b f f f . . . . 
    . . f b f f b f c f b f . . . . 
    . . . f b f f f b f f f . . . . 
    . . . . f f f f f f f f f . . . 
    . . . f b c f . . . f c b f . . 
    . . . f f f f . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(oro)
controller.player2.moveSprite(soro)
scene.cameraFollowSprite(soro)
scene.cameraFollowSprite(oro)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f 4 f . . . . . . . 
    . . . . . . f 1 f . . . . . . . 
    . . . . . . f 1 f . . . . . . . 
    . . . . . f 1 a a f . . . . . . 
    . . . . . f a 3 a f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.setCurrentTilemap(tilemap`level2`)
music.play(music.createSong(hex`0078000408020107001c00020a006400f4016400000400000000000000000000000000000000033c0000000400012a04000800012508000c00012010001400011d18001c00012220002400012728002c00012a3000340001273400380001203c004000011b`), music.PlaybackMode.LoopingInBackground)
