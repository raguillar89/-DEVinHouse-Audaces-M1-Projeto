export interface IUser{
  id?: any,
  userName: string,
  userCompany: string,
  userCnpj: string,
  userEmail: string,
  userPassword: string,
  userPasswordConfirmation: string
}

export class User implements IUser {
  id?: any;
  userName!: string;
  userCompany!: string;
  userCnpj!: string;
  userEmail!: string;
  userPassword!: string;
  userPasswordConfirmation!: string;
}
