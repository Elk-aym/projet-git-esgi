import {WeaponProps} from "./weapon.interface";

export interface SwordProps extends WeaponProps {
    readonly isLegendary: boolean;
    year: number;
}
