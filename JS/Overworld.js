class Overworld {//mundo do jogo
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop() {
        const step = () => {
            //limpando o canvas antes de desenhar o frame
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //selecionando o elemento que a camera ira seguir
            const cameraPerson = this.map.gameObjects.hero;

            //loop atualizando todos objetos
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    map: this.map,
                })
            })

            //desenhar camada de baixo do mapa
            this.map.drawLowerImage(this.ctx, cameraPerson);

            //loop desenhar objetos do mapa
            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
            })

            //desenhar camada de cima do mapa
            this.map.drawUpperImage(this.ctx, cameraPerson);

            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
        this.map.mountObjects();

        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.startGameLoop();
    }
}