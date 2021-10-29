class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc; //desenhado no pé do personagem
        
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc; //desenhado acima do personagem
    }

    drawLowerImage(ctx){
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx){
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

window.OverworldMaps = { //global
    DemoRoom: {
        lowerSrc: "IMG/maps/DemoLower.png",
        upperSrc: "IMG/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
                src: "IMG/characters/people/hero.png"
            }),
            /*npc1: new Person({
                x: utils.withGrid(4),
                y: utils.withGrid(5),
                src: "IMG/characters/people/npc1.png"
            })*/
        }
    },
    Kitchen: {
        lowerSrc: "IMG/maps/KitchenLower.png",
        upperSrc: "IMG/maps/KitchenUpper.png",
        gameObjects: {
            hero: new Person({
                x: 3,
                y: 7,
                src: "IMG/characters/people/hero.png"
            }),
            npc1: new GameObject({
                x: 9,
                y: 6,
                src: "IMG/characters/people/npc1.png"
            }),
            npc2: new GameObject({
                x: 3,
                y: 8,
                src: "IMG/characters/people/npc2.png"
            })
        }
    },
}