import React, { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getVideoDetails } from "../utils/axios/requests";
import { useLoading } from "../context/topLoaderContext";
import VideoPlayerSkeleton from "../AtomicComponents/skeletons/videoPlayerSkeleton";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import VideoDetailsButtonsGroup from "../AtomicComponents/videoDetails/videoDetailsButtonsGroup";

const VideoPlayer = lazy(() => import("./../AtomicComponents/VideoPlayer"));
const VideoDetailsButton = lazy(() =>
	import("./../AtomicComponents/videoDetails/videoDetailsButton")
);

const VideoDetails = () => {
	const [video, setVideo] = useState(null);
	const { id } = useParams();
	const { progress, setProgress } = useLoading();

	useEffect(() => {
		setProgress(50);

		const getVideo = setTimeout(async () => {
			setProgress(70);
			await getVideoDetails(id)
				.then((res) => {
					console.log(res);
					setVideo({ ...res });
				})
				.catch((err) => err);
		}, 100);

		setProgress(100);
		return () => {
			clearTimeout(getVideo);
		};
	}, []);

	return (
		<div
			className={`bg-[#0F0F0F] min-w-full absolute top-[3.5rem] min-h-[calc(100vh-3.5rem)] grid grid-cols-12 overflow-y-auto`}
		>
			<div
				className={`col-span-12 lg:col-span-9 py-[5px] md:py-[2rem] px-[8px] md:px-[2.5rem] text-left flex flex-col gap-y-3 min-h-screen`}
			>
				<Suspense fallback={<VideoPlayerSkeleton />}>
					<VideoPlayer id={video?.videoId} />
				</Suspense>
				<p className=" font-bold text-lg">{video?.title}</p>
				{video ? (
					<div className="flex space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row">
						<div className="flex space-x-10 md:space-x-2">
							<div className="flex items-center space-x-2">
								<img
									src={`${video?.author?.avatar[0]?.url}`}
									alt={`${video?.author?.title}`}
									className="h-10 w-10 rounded-full"
								/>
								<div className="flex flex-col">
									<p className=" text-sm font-bold">{video?.author?.title}</p>
									<p className="text-[#9A9A9A] text-sm">
										{video?.author?.stats?.subscribersText}
									</p>
								</div>
							</div>
							<VideoDetailsButton className="bg-white flex justify-center items-center px-2 rounded-2xl">
								<p className=" text-black font-bold text-sm">Subscribe</p>
							</VideoDetailsButton>
						</div>

						<div className="flex space-x-2">
							{/* Like dislike Container */}
							<VideoDetailsButtonsGroup>
								<VideoDetailsButton
									className={" rounded-tl-2xl rounded-bl-2xl flex-1 min-h-full"}
								>
									<FaRegThumbsUp height={10} width={10} color={"#fff"} />
									<p className=" text-sm self-center">2.5k</p>
								</VideoDetailsButton>
								<VideoDetailsButton className={"rounded-tr-2xl flex-1 rounded-br-2xl"}>
									<FaRegThumbsDown height={10} width={10} color={"#fff"} />
								</VideoDetailsButton>
							</VideoDetailsButtonsGroup>

							{/* Share button container */}
							<div className="">
								<VideoDetailsButton
									className={"rounded-2xl bg-primaryItemBg w-[6rem]"}
								>
									<RiShareForwardLine />
									<p className="text-sm self-center">Share</p>
								</VideoDetailsButton>
							</div>

							{/* menu button container */}
							<div className="">
								<VideoDetailsButton className={"rounded-2xl bg-primaryItemBg w-[6rem]"} > 
									<BiDotsHorizontalRounded height={10} width={10} color="#fff" />
								</VideoDetailsButton>
							</div>
						</div>
					</div>
				) : null}
			</div>
			<div className={`col-span-12 md:col-span-3`}>
				<p>related videos</p>
			</div>
		</div>
	);
};

export default VideoDetails;
