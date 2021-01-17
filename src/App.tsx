import { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoginForm from "./components/LoginForm";
import ServersList from "./components/ServersList";
import { store } from "./store/store";
import theme from "./styles/theme";

function App() {
	const {
		state: { token },
	} = useContext(store);

	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/">
							{token ? <Redirect to="/servers" /> : <LoginForm />}
						</Route>
						<Route path="/servers">
							<ServersList />
						</Route>
					</Switch>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
