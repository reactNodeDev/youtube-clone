import React from "react";
import Skeleton from "react-loading-skeleton";
import ReactPlayer from "react-player/lazy";
import VideoPlayerSkeleton from "./skeletons/videoPlayerSkeleton";

const VideoPlayer = ({ id }) => {
	return (
		<div className="max-w-full">
			{id ? (
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${id}`}
					playing={true}
					height={"28rem"}
					width={"100%"}
					style={{ maxWidth: "100%" }}
					controls
				/>
			) : (
				<VideoPlayerSkeleton />
			)}
		</div>
	);
};

export default VideoPlayer;
