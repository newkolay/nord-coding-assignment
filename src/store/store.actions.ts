export enum ActionType {
	SaveToken = "saveToken",
	RemoveToken = "removeToken",
}

interface ISaveToken {
	type: ActionType.SaveToken;
	token: string;
}

interface IRemoveToken {
	type: ActionType.RemoveToken;
}

export type Actions = ISaveToken | IRemoveToken;

export const SaveToken = (token: string): ISaveToken => ({
	type: ActionType.SaveToken,
	token,
});

export const RemoveToken = (): IRemoveToken => ({
	type: ActionType.RemoveToken,
});
