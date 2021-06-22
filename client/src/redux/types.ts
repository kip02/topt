export interface IAuthorisation {
    authorised: boolean;
}

export interface IStoreState extends IAuthorisation {
    attempts: number;
}

export interface IValidateAction {
    type: string;
    payload: string;
}