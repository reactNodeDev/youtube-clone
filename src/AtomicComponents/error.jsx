import React from "react";

const Error = ({ error }) => {
	return (
		<div className="min-h-[calc(100%-3.5rem)] grid grid-cols-12">
			<span className={`col-span-12 min-h-full`}>{error}</span>
		</div>
	);
};

export default Error;
