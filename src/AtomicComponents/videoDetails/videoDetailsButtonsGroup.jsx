import React from "react";

const VideoDetailsButtonsGroup = ({children, className}) => {
	return (
		<div className={`flex items-center bg-primaryItemBg rounded-2xl w-[8rem] h-[2.5rem] ${className}`}>
            {children}
        </div>
	);
};

export default VideoDetailsButtonsGroup;
