import {Excalibur, Gun, Sword, Character, Battle} from "./models";

const s1 = new Sword({
    height: 100,
    width: 30,
    name: "La grosse épée",
    price: 3500,
    year: 1950,
    weight: 100,
    isLegendary: false
});

const desertEagle = new Gun({
    name: "Desert Eagle",
    weight: 1800,
    price: 3700,
    width: 5,
    height: 18,
    bullets: 9
});

console.log("s1:" + s1);
console.log("d1:" + desertEagle);
console.log("e1" + Excalibur.getInstance());
console.log("e1" + Excalibur.getInstance());

const paul = new Character({
    hp: 30000,
    name: "Paul",
    weapon: desertEagle
});
const nicola = new Character({
    hp: 30000,
    name: "Nicola",
    weapon: desertEagle
});
const antoine = new Character( {
    hp: 30000,
    name: "Antoine",
    weapon: desertEagle
});
const players = [paul, nicola, antoine];

const b = new Battle(players);
console.log("Winner: " + b.fight());
