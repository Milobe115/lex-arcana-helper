export interface Office {
    name: string;
    health: number;
    pietas: number;
}

export const DEFAULT_OFFICE: Office = {name: "DEF", health: 0, pietas: 0};

export const OFFICES: Office[] = [
    {name : "Fighter", health: 3, pietas: -1},
    {name : "Explorer", health: 2, pietas: 0},
    {name : "Diplomat", health: 1, pietas: 1},
    {name : "Scholar", health: 0, pietas: 2},
    {name : "Augur", health: -1, pietas: 3}
];
