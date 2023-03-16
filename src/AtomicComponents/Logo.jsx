import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const MenuAndLogo = ({ showLogo, onMenuClick, onLogoClick }) => {
	return (
		<>
			<button className="hover:border border-radius" onClick={onMenuClick}>
				<AiOutlineMenu size={"1.2rem"} color="white" />
			</button>
			{showLogo ? (
				<div className="flex ml-4 cursor-pointer">
					<AiFillYoutube size={"1.5rem"} color="red" onClick={onLogoClick}  />
					<h6 className="ml-1 hidden md:block font-bold">Youtubee</h6>
				</div>
			) : null}
		</>
	);
};

export default MenuAndLogo;
