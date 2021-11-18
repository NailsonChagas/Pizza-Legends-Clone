window.PizzaTypes = {
  normal: "normal",
  spicy: "spicy",
  veggie: "veggie",
  fungi: "fungi",
  chill: "chill",
}

window.Pizzas = {
  "s001": {
    name: "Slice Samurai",
    type: PizzaTypes.spicy,
    src: "/IMG/characters/pizzas/s001.png",
    icon: "/IMG/icons/spicy.png",
    actions: [ "clumsyStatus", "damage1" ],
  },
  "v001": {
    name: "Call Me Kale",
    type: PizzaTypes.veggie,
    src: "/IMG/characters/pizzas/v001.png",
    icon: "/IMG/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "f001": {
    name: "Portobello Express",
    type: PizzaTypes.fungi,
    src: "/IMG/characters/pizzas/f001.png",
    icon: "/IMG/icons/fungi.png",
    actions: [ "damage1" ],
  }
}