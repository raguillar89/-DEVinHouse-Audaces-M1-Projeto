export interface IGetHelp{
  id?: any,
  getHelpTitle: string,
  getHelpText: string,
}

export class GetHelp implements IGetHelp {
  id?: any;
  getHelpTitle!: string;
  getHelpText!: string;
}
