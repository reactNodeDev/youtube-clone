import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import MenuAndLogo from "../AtomicComponents/Logo";
import { Link } from "react-router-dom";

const Navbar = ({onMenuClick}) => {
	return (
		<div className="w-full h-14 flex bg-[#0F0F0F] items-center p-3 m-0 justify-between fixed top-0 z-50">
			<Link to={'/'} className="flex items-center cursor-pointer">
				<MenuAndLogo showLogo={true} onMenuClick={onMenuClick} onLogoClick={() => {} }/>
			</Link>

			<div className="search-field flex items-center w-2/5 h-full">
                {/* search bar */}
				<div className="pl-2 hidden md:flex items-center w-full rounded-3xl bg-[#121212] h-full overflow-hidden focus-within:border focus-within:border-blue-600 ">
					<AiOutlineSearch color="white" className="mr-2 flex-initial" />
					<input
						className="bg-transparent outline-none flex-1"
						placeholder="Search"
					/>
					<div className="h-full flex justify-center items-center bg-[#222222] flex-initial w-10 cursor-pointer">
						<AiOutlineSearch color="white" size={'1.2rem'} />
					</div>
				</div>

                {/* search button for smaller screens */}
				<div className="ml-4 rounded-full h-full p-2 bg-[#121212] block md:hidden cursor-pointer" >
					<AiOutlineSearch />
				</div>
				<div className="ml-4 rounded-full h-full p-2 bg-[#121212] cursor-pointer" >
					<BsFillMicFill />
				</div>
			</div>

			{/* account actions */}
			<div className="flex justify-between items-center">
				<AiOutlineVideoCamera size={"1.2rem"} className="mr-6 cursor-pointer"  />
				<AiOutlineBell size={"1.2rem"} className="mr-6 cursor-pointer" />
				<RxAvatar size={"1.2rem"} className="cursor-pointer" />
			</div>
		</div>
	);
};

export default Navbar;
