class Sprite{
    constructor(config){
        //Iniciando imagem
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        //Sombra
        this.shadow = new Image();
        this.useShadow = config.useShadow || true;
        if(this.useShadow){
            this.shadow.src = "IMG/characters/shadow.png";
            this.shadow.onload = () => {
                this.isShadowLoaded = true;
            }
        }
        
        //Configurando animações e Estado Inicial
        this.animations = config.animation || {
            "idle-down" : [ [0,0] ],
            "idle-right": [ [0,1] ],
            "idle-up"   : [ [0,2] ],
            "idle-left" : [ [0,3] ],
            "walk-down" : [ [1,0],[0,0],[3,0],[0,0], ],
            "walk-right": [ [1,1],[0,1],[3,1],[0,1], ],
            "walk-up"   : [ [1,2],[0,2],[3,2],[0,2], ],
            "walk-left" : [ [1,3],[0,3],[3,3],[0,3], ]
        }
        this.currentAnimation = config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0; //qual frame da animação esta
        
        this.animationFrameLimit = config.animationFrameLimit || 16; //basicamente o tempo q cada frame da animação vai levar
        this.animationFrameProgress = this.animationFrameLimit;


        //Objeto representado
        this.gameObject = config.gameObject;
    }

    get frame(){
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key){
        if(this.currentAnimation !== key){
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress(){
        //Downtick frame progress
        if(this.animationFrameProgress > 0){
            this.animationFrameProgress -= 1;
            return;
        }

        //reset the counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if(this.frame === undefined){
            this.currentAnimationFrame = 0;
        }
    }

    draw(ctx){
        const x = this.gameObject.x - 8;
        const y = this.gameObject.y - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(this.image,
            frameX * 32, //onde começa o left cut
            frameY * 32, //onde começa top cut
            32, //largura do corte
            32, //altura do corte
            x, y,
            32, //tamnho x da imagem
            32 //tamanho y da imagem    
        )

        this.updateAnimationProgress();
    }
}