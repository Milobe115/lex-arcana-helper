export interface Age{
    desc: string;
    sensibilitas: number;
    ingenium: number;
    ratio: number;
    auctoritas: number;
    vigor: number;
    coordinatio: number;
}

export const DEFAULT_AGE: Age = {desc: 'DEF', sensibilitas: 0, ingenium: 0, ratio: 0, auctoritas: 0, vigor: 0, coordinatio: 0};

export const AGES: Age[] = [
    {desc: 'Juvenis', sensibilitas: 3, ingenium:3, ratio: 3, auctoritas: 3, vigor: 3, coordinatio: 3},
    {desc: 'Adultus', sensibilitas: 3, ingenium: 3, ratio: 4, auctoritas: 4, vigor: 2, coordinatio: 2},
    {desc: 'Senior', sensibilitas: 3, ingenium: 3, ratio: 5, auctoritas: 5, vigor: 1, coordinatio: 1}
];
