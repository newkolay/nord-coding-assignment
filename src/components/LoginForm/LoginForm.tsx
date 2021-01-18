import React, { useContext, useState } from "react";
import API from "../../services/tesonet.api";
import { store } from "../../store/store";
import { SaveToken } from "../../store/store.actions";
import { LoginPage, FormWrapper, FormTitle, TextInput, LoginButton, ErrorText } from "./styles";

function LoginForm() {
	const { dispatch } = useContext(store);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isError, setIsError] = useState(false);

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
			setIsError(true);
		}
	};

	return (
		<LoginPage>
			<FormWrapper>
				<FormTitle>Sign in</FormTitle>
				<form onSubmit={onLogin}>
					<TextInput
						type="text"
						placeholder="Username"
						value={username}
						onChange={onChangeUsername}
					/>
					<TextInput
						type="password"
						placeholder="Password"
						value={password}
						onChange={onChangePassword}
					/>
					<LoginButton type="submit">Login</LoginButton>

					{isError && (
						<ErrorText role="alert">
							An error occured, please try different username/password
						</ErrorText>
					)}
				</form>
			</FormWrapper>
		</LoginPage>
	);
}

export default LoginForm;
