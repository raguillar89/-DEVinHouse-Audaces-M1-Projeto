export interface IUser{
  id?: number,
  userName: string,
  userCompany: string,
  userCNPJ: string,
  userEmail: string,
  userPassword: string
}

export class User implements IUser {
  id?: number | undefined;
  userName!: string;
  userCompany!: string;
  userCNPJ!: string;
  userEmail!: string;
  userPassword!: string;
}
