export interface iSector {
  _id?: string;
  name: string;
  img: string;
  hoursSun: 'mañana' | 'tarde' | 'todo' | 'sombra';
  localization: {
    lat: number;
    lng: number;
  };
  routes: Array<{}>;
}

export class SectorModel implements iSector {
  constructor(
    public name: string,
    public img: string,
    public hoursSun: 'mañana' | 'tarde' | 'todo' | 'sombra',
    public localization: { lat: number; lng: number },
    public routes: Array<{}>
  ) {}
}

export interface iSectorState {
  sectors: ReadonlyArray<iSector>;
}
