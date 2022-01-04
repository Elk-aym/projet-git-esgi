export interface WeaponProps {
    name: string;
    width: number;
    height: number;
    weight: number;
    price: number;
}

export interface Weapon extends WeaponProps {
    damage(): number;
    bonus(): number;
    duration(): number;
}
