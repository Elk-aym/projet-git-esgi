import {SwordProps, Weapon} from "../interfaces";

export class Sword implements SwordProps, Weapon {
    height: number;
    readonly isLegendary: boolean;
    name: string;
    price: number;
    weight: number;
    width: number;
    year: number;

    constructor(props: SwordProps) {
        this.height = props.height;
        this.isLegendary = props.isLegendary;
        this.name = props.name;
        this.price = props.price;
        this.weight = props.weight;
        this.width = props.width;
        this.year = props.year;
    }

    bonus(): number {
        if (this.year === 0 || !this.isLegendary) {
            return 0;
        }
        return this.weight / this.year;
    }

    damage(): number {
        if (this.year === 0) {
            return 0;
        }
        let val = this.weight * this.height * this.width;
        val += this.bonus();
        val /= this.year;
        if (!this.isLegendary || this.year < 10) {
            val *= 0.9;
        }
        return val;
    }

    duration(): number {
        if (this.price === 0) {
            return 0;
        }
        return this.weight * this.year / this.price;
    }

    toString() {
        const fields: string[] = [];
        fields.push(`height: ${this.height}`);
        fields.push(`isLegendary: ${this.isLegendary}`);
        fields.push(`name: ${this.name}`);
        fields.push(`price: ${this.price}`);
        fields.push(`weight: ${this.weight}`);
        fields.push(`width: ${this.width}`);
        fields.push(`year: ${this.year}`);
        return "{" + fields.join(", ") + "}";
    }
}
