import { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ServersList from "./components/ServersList";
import { store } from "./store/store";

function App() {
	const {
		state: { token },
	} = useContext(store);

	return (
		<div className="App">
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
		</div>
	);
}

export default App;
