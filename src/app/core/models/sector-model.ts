import { iRoute } from './route-model';

export interface iSector {
  _id?: string;
  name: string;
  img: string;
  hoursSun: 'mañana' | 'tarde' | 'todo' | 'sombra';
  localization: {
    lat: number;
    lng: number;
  };
  routes: Array<iRoute>;
}

export class SectorModel implements iSector {
  constructor(
    public name: string,
    public img: string,
    public hoursSun: 'mañana' | 'tarde' | 'todo' | 'sombra',
    public localization: { lat: number; lng: number },
    public routes: Array<iRoute>
  ) {}
}

export interface iSectorState {
  sectors: ReadonlyArray<iSector>;
}
