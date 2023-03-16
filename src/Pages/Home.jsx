import React, { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import VideoFeed from "../Components/VideoFeed";
import { Context } from "../context/contextApi";

const Home = () => {
	const {openSidebar, setOpenSidebar} = useContext(Context)
	return (
		<div className="min-h-screen max-w-screen flex flex-col relative content-center">
			{/* feed */}
			<div className="w-[100%] min-h-[calc(100%-3.5rem)] absolute grid grid-cols-12 z-90 top-[3.5rem] bg-[#0F0F0F] content-center">
				<Sidebar open={openSidebar} setOpen={setOpenSidebar} />
				<VideoFeed open={openSidebar} setOpen={setOpenSidebar} />
			</div>
		</div>
	);
};

export default Home;
