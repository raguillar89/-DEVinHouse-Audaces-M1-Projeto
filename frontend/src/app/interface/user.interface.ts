export interface IUser{
  userId?: number,
  userName: string,
  userCompany: string,
  userCnpj: string,
  userEmail: string,
  userPassword: string
}

export class User implements IUser {
  userId?: number | undefined;
  userName!: string;
  userCompany!: string;
  userCnpj!: string;
  userEmail!: string;
  userPassword!: string;
}
