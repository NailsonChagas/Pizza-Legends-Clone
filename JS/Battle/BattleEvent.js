class BattleEvent {
    constructor(event, battle) {
        this.event = event;
        this.battle = battle;
    }

    textMessage(resolve) {
        const text = this.event.text
        .replace("{CASTER}", this.event.caster?.name)
        .replace("{TARGET}", this.event.target?.name)
        .replace("{ACTION}", this.event.action?.name)

        const message = new TextMessage({
            text,
            onComplete: () => {
                resolve();
            }
        });
        message.init(this.battle.element)
    }

    async stateChange(resolve) {
        const {caster, target, damage} = this.event;
        if(damage) {
            //modificar o hp do alvo
            target.update({
                hp: target.hp - damage
            })

            //piscar
            target.pizzaElement.classList.add("battle-damage-blink");
        }

        //esperar 
        await utils.wait(600);

        //parar de piscar
        target.pizzaElement.classList.remove("battle-damage-blink");

        resolve();
    }

    submissionMenu(resolve) {
        const menu = new SubmissionMenu({
            caster: this.event.caster,
            enemy: this.event.enemy,
            onComplete: submission => {
                //submission = q habilidade usar e em quem usar
                resolve(submission);
            }
        });
        menu.init(this.battle.element);
    }

    animation(resolve){
        const fn = BattleAnimations[this.event.animation];
        fn(this.event, resolve);
    }

    init(resolve) {
        this[this.event.type](resolve);
    }
}