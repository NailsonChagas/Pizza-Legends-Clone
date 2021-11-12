class SubmissionMenu {
    constructor({caster, enemy, onComplete}) {
        this.caster = caster;
        this.enemy = enemy;
        this.onComplete = onComplete;
    }

    decide() { //IA do inimigo
        this.onComplete({
            action: Actions[this.caster.action[0]],
            target: this.enemy
        })
    }

    init(container) {
        this.decide();
    }
}