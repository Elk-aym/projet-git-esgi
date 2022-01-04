import {Sword} from "./sword.class";

export class Excalibur extends Sword {

    private static instance: Excalibur;

    public static getInstance(): Excalibur {
        if(Excalibur.instance === undefined) {
            Excalibur.instance = new Excalibur();
        }
        return Excalibur.instance;
    }

    private constructor() {
        super({
            height: 300,
            width: 40,
            price: 1000000,
            weight: 350,
            name: "Excalibur",
            isLegendary: true,
            year: 1600
        });
    }

}
