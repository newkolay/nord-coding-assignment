import React, { createContext, ReactElement, useReducer } from "react";
import { Actions, ActionType } from "./store.actions";

interface IStoreState {
	token: string | null;
}

interface IAppContext {
	state: IStoreState;
	dispatch: React.Dispatch<Actions>;
}

const initialState: IStoreState = {
	token: localStorage.getItem("token"),
};

const store = createContext<IAppContext>({
	state: initialState,
	dispatch: () => null,
});

const reducer = (state: IStoreState, action: Actions) => {
	switch (action.type) {
		case ActionType.SaveToken:
			return {
				...state,
				token: action.token,
			};

		default:
			return state;
	}
};

const { Provider } = store;

const AppProvider = ({ children }: { children: React.ReactNode }): ReactElement => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, AppProvider };
