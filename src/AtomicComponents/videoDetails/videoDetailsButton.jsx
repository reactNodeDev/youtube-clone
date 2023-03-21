import React from "react";

const VideoDetailsButton = ({ children, onClick, className }) => {
	return (
			<button className={`flex items-center space-x-1 min-h-full justify-center hover:bg-hoverBg  ${className}`} onClick={onClick}>
				{children}
			</button>
	);
};

export default VideoDetailsButton;
