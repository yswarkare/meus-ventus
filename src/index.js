import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import '@fortawesome/fontawesome-free/js/all';
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css/animate.min.css";
import "./assets/css/cards.css";
import "./assets/css/main.css";
import "./App.css";
import "./index.css";


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
