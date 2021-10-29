class Overworld{ //mundo do jogo
    constructor(config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }

    startGameLoop(){
        const step = () => {

            //limpando o canvas antes de desenhar o frame
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //desenhar camada de baixo do mapa
            this.map.drawLowerImage(this.ctx);

            //desenhar objetos do mapa
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                });
                object.sprite.draw(this.ctx);
            });

            //desenhar camada de cima do mapa
            this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() => {
                step();
            });
        }
        step();
    }

    init(){
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

        this.directionInput = new DirectionInput();
        this.directionInput.init();

        this.startGameLoop();
    }
}