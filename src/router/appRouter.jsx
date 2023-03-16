import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SpinnerLoader from "../AtomicComponents/Loader/spinnerLoader";

const Home = lazy(() => import("../Pages/Home"));
const VideoDetails = lazy(() => import("../Pages/VideoDetails"));

const AppRouter = () => {
	const pagesRouter = (
		<Suspense fallback={<SpinnerLoader />}>
			<Routes>
				<Route path="/" element={<Home />} key={"home"} />
				<Route
					path="/video/:id"
					element={<VideoDetails />}
					key={"videoDetails"}
				/>
			</Routes>
		</Suspense>
	);

	return <>{pagesRouter}</>;
};

export default AppRouter;
