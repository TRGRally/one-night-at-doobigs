const game = document.getElementById("game")
// make the canvas black
ctx = game.getContext("2d")
ctx.fillStyle = "black"
ctx.fillRect(0, 0, game.width, game.height)
const background = new Image()
background.src = "https://media.discordapp.net/attachments/1039307364756631592/1122337588636811345/20230625_022610.jpg?width=503&height=671"
console.log(game.width, game.height)


class Doobig {
    constructor(x, y, url) {
        this.x = x
        this.y = y
        this.xvel = 0
        this.yvel = 0
        this.url = url
        this.img = new Image()
        this.img.src = url
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, 100, 100)
    }

    update() {
        this.x += this.xvel
        this.y += this.yvel
        this.draw()
    }
}
let doobig = new Doobig(50, 50, "https://cdn.discordapp.com/attachments/1024014589286952962/1122321455691083887/Untitled-1.png")
doobig.xvel = 0.1
function mainLoop() {
    ctx.drawImage(background, 0, 0, game.width, game.height)
    doobig.update()

    //make a random colour for the text
    ctx.fillStyle = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," +  Math.floor(Math.random() * 255) + ")"

    ctx.font = "12px Arial"
    ctx.fillText("poobig game v0.0.0", 5, 10)

    if (doobig.x > game.width) {
        doobig.x = 0
    }
    
    



    requestAnimationFrame(mainLoop)
}
requestAnimationFrame(mainLoop)
