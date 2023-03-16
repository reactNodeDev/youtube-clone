import React, { Suspense, lazy, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getVideoDetails } from "../utils/axios/requests";
import { useLoading } from "../context/topLoaderContext";
import VideoPlayerSkeleton from "../AtomicComponents/skeletons/videoPlayerSkeleton";

const VideoPlayer = lazy(() => import("./../AtomicComponents/VideoPlayer"));

const VideoDetails = () => {
	const [video, setVideo] = useState({});
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
			className={`bg-[#0F0F0F] min-w-full absolute top-[3.5rem] min-h-[calc(100vh-3.5rem)] grid grid-cols-12`}
		>
			<div
				className={`col-span-12 lg:col-span-9 py-[5px] md:py-[2rem] px-[8px] md:px-[2.5rem] text-left flex flex-col gap-y-3`}
			>
				<Suspense fallback={<VideoPlayerSkeleton />}>
					<VideoPlayer id={video?.videoId} />
				</Suspense>
				<p className=" font-bold text-lg">{video?.title}</p>
				{video ? (
					<div className="flex space-x-2">
						<img
							src={`${video?.author?.avatar[0]?.url}`}
							className="h-10 w-10 rounded-full"
						/>
						<div className="flex flex-col">
							<p className=" text-sm font-bold">{video?.author?.title}</p>
							<p className="text-[#9A9A9A] text-sm">
								{video?.author?.stats?.subscribersText}
							</p>
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
