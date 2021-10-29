class GameObject{
    constructor(config){
        this.x = config.x || 0; //valor default sera 0
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "IMG/characters/people/hero.png",
        });
    }

    update(){

    }

}