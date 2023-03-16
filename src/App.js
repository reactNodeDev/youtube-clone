import React, { useContext } from "react";
import "./App.css";
import TopLoader from "./AtomicComponents/Loader/topLoader";
import Navbar from "./Components/Navbar";
import { Context } from "./context/contextApi";
import AppRouter from "./router/appRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
	const { openSidebar, setOpenSidebar } = useContext(Context);
	return (
		<div className="App">
			<TopLoader />
			<BrowserRouter>
				<AppRouter />
				<Navbar onMenuClick={() => setOpenSidebar(!openSidebar)} />
			</BrowserRouter>
		</div>
	);
}

export default App;
