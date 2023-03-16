import React, { useEffect } from "react";
import formatViews from "../utils/Methods/formatViews";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useLoading } from "../context/topLoaderContext";
import VideoLength from "./VideoLength";

const config = {
	rootMargin:'0px 0px 0px 0px',
	threshold:1
}

const VideoCard = ({
	timeUploaded,
	avatarImage,
	videoTitle,
	channelName,
	viewsCount,
	badges,
	verified,
	videoLength,
	videoId,
	thumbnailImage,
}) => {
	const { setLoading, setProgress } = useLoading();
	
	useEffect(() => {
		const loadThumbnailImage = (image) => {
			image.src = image.dataset.src
		}
		const images = document.querySelectorAll('[data-src]')
		const observer = new window.IntersectionObserver((entries,self) => {
			entries.forEach((entry) => {
				if(entry.isIntersecting){ 
					loadThumbnailImage(entry.target)
					self.unobserve(entry.target)
				}
			})
		},config)

		images.forEach((img) => observer.observe(img))
		
		return () => {
			images.forEach((img) => observer.unobserve(img))
		}
	},[])

	return (
		<Link
			to={`video/${videoId}`}
			className="h-auto cursor-pointer col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col items-center"
			role="status"
			onClick={() => {
				setLoading(true);
				setProgress(30);
			}}
			relative="path"
		>
			<div className="max-h-[60%] flex-1 mb-2 relative w-full">
				<img
					src={`https://www.htmlcsscolor.com/preview/gallery/737373.png`}
					data-src={`${thumbnailImage}`}
					alt={videoTitle}
					className={`rounded-2xl object-cover w-[100%] max-h-full bg-neutral-500`}
					height={"100%"}
					width={"100%"}
				/>
				{videoLength ? <VideoLength lengthSeconds={videoLength} /> : null}
			</div>

			<div className="flex items-start gap-2 flex-1 mt-2 w-[100%]">
				<img
					src={`https://www.htmlcsscolor.com/preview/gallery/737373.png`}
					data-src={`${avatarImage}`}
					className="rounded-full h-10 w-10"
					alt=""
				/>
				<div className="text-left text-xsm">
					<div className="font-semibold text-sm max-w-[15rem]">
						<h6 className=" line-clamp-0 line-clamp-2 overflow-hidden leading-[1.4rem]">
							{videoTitle}
						</h6>
					</div>
					<div className="flex sm:gap-2 items-center">
						<p className="text-[#9A9A9A] hover:text-white font-bold line-clamp-1">
							{channelName}
						</p>
						{verified?.includes("VERIFIED_CHANNEL") ? (
							<BsFillCheckCircleFill color="#AAAAAA" />
						) : null}
					</div>
					<div className="flex text-[#9A9A9A] font-semibold max-h-[1rem]">
						<span>{formatViews(viewsCount)} views&nbsp;&#183;</span>
						<span className="ml-1">{timeUploaded}</span>
					</div>
					<div className="flex gap-2 mt-1">
						{badges?.map((badge) => {
							return (
								<span className="p-1 text-xsm bg-[#272727] text-[#AAAA9E] rounded-sm ">
									{badge}
								</span>
							);
						})}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default VideoCard;
