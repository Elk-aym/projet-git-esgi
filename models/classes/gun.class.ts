import {GunProps, Weapon} from "../interfaces";

export class Gun implements GunProps, Weapon {
    bullets: number;
    height: number;
    name: string;
    price: number;
    weight: number;
    width: number;

    constructor(props: GunProps) {
        this.bullets = props.bullets;
        this.height = props.height;
        this.name = props.name;
        this.price = props.price;
        this.weight = props.weight;
        this.width = props.width;
    }

    bonus(): number {
        if(this.bullets === 0) {
            return 0;
        }
        const res = this.weight % this.bullets;
        if(res === 0) {
            return 0;
        }
        return this.bullets * this.weight / res;
    }

    damage(): number {
        const res = this.width * this.height;
        if(res === 0) {
            return 0;
        }
        return this.weight / res + this.bonus();
    }

    duration(): number {
        if(this.weight === 0) {
            return 0;
        }
        return this.price / this.weight * this.damage();
    }

    toString(): string {
        const fields: string[] = [];
        fields.push(`height: ${this.height}`);
        fields.push(`bullets: ${this.bullets}`);
        fields.push(`name: ${this.name}`);
        fields.push(`price: ${this.price}`);
        fields.push(`weight: ${this.weight}`);
        fields.push(`width: ${this.width}`);
        return "{" + fields.join(", ") + "}";
    }
}
