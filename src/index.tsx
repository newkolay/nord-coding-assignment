import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import App from "./App";
import { AppProvider } from "./store/store";

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
