export interface Province{
  id: number;
  name: string;
  bello: number;
  corpore: number;
  magia: number;
  natura: number;
  scientia: number;
  societate: number;
}

export const DEFAULT_PROVINCE: Province = {id: 0, name: 'DEF', bello: 0, corpore: 0, magia: 0, natura: 0, scientia: 0, societate: 0};

export const PROVINCES: Province[] = [
  {id: 1, name: 'Roma Urbe', bello: 1, corpore: 2, magia: 3, natura: 0, scientia: 6, societate: 6},
  {id: 2, name: 'Achaia', bello: 1, corpore: 3, magia: 3, natura: 1, scientia: 5, societate: 5},
  {id: 3, name: 'Aegyptus', bello: 2, corpore: 2, magia: 5, natura: 1, scientia: 5, societate: 3},
  {id: 4, name: 'Arabia', bello: 2, corpore: 2, magia: 4, natura: 2, scientia: 3, societate: 5},
  {id: 5, name: 'Armenia', bello: 3, corpore: 4, magia: 1, natura: 5, scientia: 3, societate: 2},
  {id: 6, name: 'Asia', bello: 1, corpore: 3, magia: 3, natura: 2, scientia: 5, societate: 4},
  {id: 7, name: 'Brittania', bello: 3, corpore: 3, magia: 5, natura: 4, scientia: 2, societate: 1},
  {id: 8, name: 'Dacia', bello: 5, corpore: 4, magia: 3, natura: 3, scientia: 2, societate: 1},
  {id: 9, name: 'Gallia', bello: 3, corpore: 3, magia: 2, natura: 3, scientia: 4, societate: 3},
  {id: 10, name: 'Germania', bello: 6, corpore: 3, magia: 3, natura: 4, scientia: 1, societate: 1},
  {id: 11, name: 'Iberia', bello: 3, corpore: 3, magia: 2, natura: 3, scientia: 3, societate: 4},
  {id: 12, name: 'Illyricum', bello: 5, corpore: 4, magia: 1, natura: 3, scientia: 2, societate: 3},
  {id: 13, name: 'Italia', bello: 1, corpore: 3, magia: 3, natura: 3, scientia: 4, societate: 4},
  {id: 14, name: 'Macedonia', bello: 2, corpore: 3, magia: 4, natura: 3, scientia: 3, societate: 3},
  {id: 15, name: 'Mauretania', bello: 3, corpore: 3, magia: 3, natura: 6, scientia: 1, societate: 2},
  {id: 16, name: 'Mesopotamia', bello: 3, corpore: 3, magia: 5, natura: 2, scientia: 3, societate: 2},
  {id: 17, name: 'Numidia', bello: 4, corpore: 3, magia: 1, natura: 5, scientia: 2, societate: 3},
  {id: 18, name: 'Raetia', bello: 5, corpore: 3, magia: 3, natura: 5, scientia: 1, societate: 1},
  {id: 19, name: 'Syria', bello: 3, corpore: 2, magia: 3, natura: 1, scientia: 4, societate: 5},
  {id: 20, name: 'Thracia', bello: 4, corpore: 4, magia: 3, natura: 4, scientia: 1, societate: 2},
];
