import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TopLoadingProvider from "./context/topLoaderContext";
import { AppContext } from "./context/contextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TopLoadingProvider>
			<AppContext>
				<App />
			</AppContext>
		</TopLoadingProvider>
	</React.StrictMode>
);
