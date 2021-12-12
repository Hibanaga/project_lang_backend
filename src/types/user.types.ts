export interface IUserSchemaProp {
  email: string;
  password: string;
  nickname: string;
  clientID: string;
  isActive: boolean;
}

export interface IUpdatedUserProp {
  email?: string;
  password?: string;
  nickname?: string;
  clientID?: string;
  isActive?: boolean;
}
