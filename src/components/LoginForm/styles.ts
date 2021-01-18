import styled from "styled-components";

const LoginPage = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.grey};
`;

const FormTitle = styled.div`
	margin-bottom: 20px;
	text-align: center;
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.blueLight};
`;

const FormWrapper = styled.div`
	width: 500px;
	padding: 50px;
	border-radius: 25px;
	background-color: ${(props) => props.theme.colors.white};
	form {
		width: 250px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}
`;

const TextInput = styled.input`
	height: 35px;
	padding: 0 10px;
	margin-bottom: 10px;
	border-radius: 15px;
	border: none;
	background-color: ${(props) => props.theme.colors.grey};
	outline: none;
`;

const LoginButton = styled.button`
	align-self: center;
	width: 120px;
	margin: 10px 0;
	padding: 8px;
	border: none;
	outline: none;
	border-radius: 15px;
	background-color: ${(props) => props.theme.colors.blueLight};
	color: ${(props) => props.theme.colors.white};
	cursor: pointer;
	font-size: 1rem;
	&:hover {
		background-color: ${(props) => props.theme.colors.blueLightest};
	}
`;

const ErrorText = styled.div`
	margin-top: 10px;
	text-align: center;
	color: ${(props) => props.theme.colors.red};
`;

export { LoginPage, FormWrapper, FormTitle, TextInput, LoginButton, ErrorText };
