export enum ActionType {
	SaveToken = "saveToken",
}

interface ISaveToken {
	type: ActionType.SaveToken;
	token: string;
}

export type Actions = ISaveToken;

export const SaveToken = (token: string): ISaveToken => ({
	type: ActionType.SaveToken,
	token,
});
