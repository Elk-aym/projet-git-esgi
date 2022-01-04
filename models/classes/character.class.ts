import {CharacterProps, Weapon} from "../interfaces";

export class Character implements CharacterProps {

    hp: number;
    name: string;
    weapon: Weapon;
    hitChance: number;

    constructor(props: CharacterProps) {
        this.hp = props.hp < 25000 ? 25000 : props.hp;
        this.name = props.name;
        this.weapon = props.weapon;
        this.hitChance = 50 + Math.random() * 20;
    }

    attack(target: Character): void {
        const roll = Math.random() * 100;
        if(roll < this.hitChance) {
            target.protect(this.weapon.damage() * 1.13);
        }
    }

    protect(dmg: number): void {
        this.hp -= dmg * 0.45;
    }

    isDead(): boolean {
        return this.hp <= 0;
    }

    toString() {
        const fields: string[] = [];
        fields.push(`hp: ${this.hp}`);
        fields.push(`name: ${this.name}`);
        fields.push(`weapon: ${this.weapon}`);
        fields.push(`hitChance: ${this.hitChance}`);
        return "{" + fields.join(", ") + "}";
    }
}
