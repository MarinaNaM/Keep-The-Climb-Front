export interface iRoute {
  _id?: string;
  name: string;
  length: number;
  grade: string;
  voteGrade: Array<{
    user: string;
    vote: number;
  }>;
}

export class RouteModel implements iRoute {
  constructor(
    public name: string,
    public length: number,
    public grade: string,
    public voteGrade: Array<{
      user: string;
      vote: number;
    }>
  ) {}
}

export interface iRoutesState {
  routes: ReadonlyArray<iRoute>;
}
