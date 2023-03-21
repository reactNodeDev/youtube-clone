import React from "react";
import Skeleton from "react-loading-skeleton";

const VideoCardSkeleton = ({ type }) => {
	const COUNTER = 12;
	const VideoCardSkeletonDiv = () => (
		<div
			className=" h-[20rem] w-['100%'] col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col items-center bg-neutral-800 animate-pulse rounded-md"
		>
			<div className="rounded-md min-h-[60%] w-full flex-1 mb-2 relative bg-neutral-600 ">
			</div>

			<div className="flex items-start gap-2 flex-1 mt-2 h-[40%] overflow-hidden w-full p-2">
                <div circle className="rounded-full h-[10px] w-[15px] bg-neutral-600"> </div>
                
				<div className="text-left text-xsm w-full h-full flex flex-col justify-around">
					<div className="font-semibold text-sm bg-neutral-600">
						<h6> <Skeleton /> </h6>
					</div>
					<div className="flex sm:gap-2 items-center h-2 w-full bg-neutral-600">
						<p className="text-[#9A9A9A] hover:text-white font-bold line-clamp-1 w-full h-full">
						</p>
					</div>
					<div className="flex text-[#9A9A9A] font-semibold h-[1rem] bg-neutral-600 w-full mt-1">
						<span className="bg-neutral-600 w-full"> </span>
						<span className="ml-1 bg-neutral-600 w-full"> <div className="w-full h-full" > </div> </span>
					</div>
				</div>
			</div>
		</div>
	);
	if (type === "feed") return Array(COUNTER).fill(<VideoCardSkeletonDiv />);
};

export default VideoCardSkeleton;
