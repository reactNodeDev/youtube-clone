import React, { lazy, useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import { useLoading } from "../context/topLoaderContext";
import Error from "../AtomicComponents/error";
import VideoCardSkeleton from "../AtomicComponents/skeletons/videoCardSekelton";

const VideoCard = lazy(() => import("../AtomicComponents/VideoCard"));

const VideoFeed = ({ open, setOpen }) => {
	const { searchResults, fetchResults, query, error } = useContext(Context);
	const { loading, progress } = useLoading();

	useEffect(() => {
		const showResults = setTimeout(async () => {
			await fetchResults(query);
		}, 100);

		return () => {
			clearTimeout(showResults);
		};
	}, []);

	const parentWrapperClassname = `min-h-[calc(100%-3.5rem)] items-center justify-center z-40 ${
		open
			? `col-span-9 lg:col-span-10 left-[8rem] md:left-[12rem] w-[calc(100%-8rem)] md:w-[calc(100%-12rem)]`
			: `col-span-10 lg:col-span-11 left-[5rem] md:left-[8rem] w-[calc(100%-5rem)] md:w-[calc(100%-8rem)]`
	} bg-[#0F0F0F] p-4 absolute overflow-hidden`;

	if (error)
		return (
			<div className={parentWrapperClassname}>
				<Error error={error} />
			</div>
		);
	return (
		<div className={parentWrapperClassname}>
			{loading === true || (progress < 100 && progress > 0) ? (
				<div className="grid grid-cols-12 gap-y-4 sm:gap-3 md:gap-5 place-content-center">
					<VideoCardSkeleton type={"feed"} />
				</div>
			) : (
				<div className="grid grid-cols-12 gap-y-4 sm:gap-3 md:gap-5 place-content-center">
					{searchResults?.contents?.map((video) => {
						if (video.type !== "video") return null;
						const videoObj = video?.video;
						if (videoObj) {
							const {
								videoId,
								publishedTimeText,
								author,
								title,
								thumbnails,
								stats,
								badges,
								lengthSeconds,
							} = videoObj;
							return (
								<VideoCard
									key={videoId}
									timeUploaded={publishedTimeText}
									avatarImage={author?.avatar[0]?.url}
									videoTitle={title}
									thumbnailImage={thumbnails[0]?.url}
									channelName={author?.title}
									viewsCount={stats?.views}
									badges={badges}
									verified={author?.badges[0]?.type}
									videoLength={lengthSeconds}
									videoId={videoId}
								/>
							);
						} else return null;
					})}
				</div>
			)}
		</div>
	);
};

export default VideoFeed;
