import React, { useContext, useState } from "react";
import API from "../../services/tesonet.api";
import { store } from "../../store/store";
import { SaveToken } from "../../store/store.actions";

function LoginForm() {
	const { dispatch } = useContext(store);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(event.target.value);
	};

	const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await API.login(username, password);
			const { token } = response.data;
			localStorage.setItem("token", token);
			dispatch(SaveToken(token));
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<form onSubmit={onLogin}>
			<input type="text" value={username} onChange={onChangeUsername} />
			<input type="text" value={password} onChange={onChangePassword} />
			<button type="submit">login</button>
		</form>
	);
}

export default LoginForm;
