import { iSector } from './sector-model';

export interface iSchool {
  _id?: string;
  name: string;
  img: string;
  period: string;
  localization: {
    lat: number;
    lng: number;
  };
  sectors: Array<iSector>;
}

export class SchoolModel implements iSchool {
  constructor(
    public name: string,
    public img: string,
    public period: string,
    public localization: { lat: number; lng: number },
    public sectors: Array<iSector>
  ) {}
}

export interface iSchoolState {
  schools: ReadonlyArray<iSchool>;
}
