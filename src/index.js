import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/swiper/swiper.min.css";
import "../node_modules/swiper/swiper-bundle.css";
import "../node_modules/magnific-popup/dist/magnific-popup.css";
import "../node_modules/devextreme/dist/css/dx.common.css";
import "../node_modules/devextreme/dist/css/dx.light.css";
import "./assets/css/font-awesome.css";
import "./assets/css/flaticon.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
// import "./index.css";

ReactDOM.render(
	<BrowserRouter basename={"/"}>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
