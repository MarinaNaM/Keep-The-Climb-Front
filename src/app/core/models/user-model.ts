import { iRoute } from './route-model';

export interface iUser {
  _id?: string;
  name: string;
  psw: string;
  img?: string;
  email: string;
  address: {
    community?: string;
    province?: string;
  };
  role?: 'admin' | 'user';
  routes: Array<{ route: iRoute; isProject: boolean; isEnchain: boolean }>;
}

export class UserModel implements iUser {
  constructor(
    public name: string,
    public psw: string,
    public img: string,
    public email: string,
    public address: { community: string; province: string },
    public role: 'admin' | 'user',
    public routes: Array<{
      route: iRoute;
      isProject: boolean;
      isEnchain: boolean;
    }>
  ) {}
}

export interface iUserState {
  user: iUser;
  token: string;
}
