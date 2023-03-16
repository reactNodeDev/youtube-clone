import { AiFillHome } from "react-icons/ai";
import { GiUnderwearShorts } from "react-icons/gi";
import { MdSubscriptions } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { GiSportMedal } from "react-icons/gi";
import { BsFileEarmarkMusic } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineFlag } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";

export const menuItems = [
	{ id:99,title: "Home", icon: () => <AiFillHome size={"1rem"} />, path: "home" },
	{
		id:1,
		title: "Shorts",
		icon: () => <GiUnderwearShorts size={"1rem"} />,
		path: "shorts",
	},
	{
		id:2,
		title: "Subscriptions of the wildest lions",
		icon: () => <MdSubscriptions size={"1rem"} />,
		path: "subscriptions",
	},
	{
		id:3,
		title: "Originals",
		icon: () => <AiOutlineYoutube size={"1rem"} />,
		path: "subscriptions",
	},
	{
		id:4,
		title: "Youtube Music",
		icon: () => <BsMusicNoteBeamed size={"1rem"} />,
		path: "subscriptions",
		endOfSection: true,
	},
];

export const library = [
    {
		id:5,
		title: "Library",
		icon: () => <AiOutlinePlaySquare size={"1rem"} />,
		path: "subscriptions",
        startOfSection:true
	},
	{
		id:6,
		title: "History",
		icon: () => <BiTimeFive size={"1rem"} />,
		path: "subscriptions",
	},
	{
		id:7,
		title: "Your Videos",
		icon: () => <MdOutlineOndemandVideo size={"1rem"} />,
		path: "subscriptions",
	},
	{
		id:8,
		title: "Watch Later",
		icon: () => <AiOutlineFieldTime size={"1rem"} />,
		path: "subscriptions",
	},
	{
		id:9,
		title: "Downloads",
		icon: () => <BsDownload size={"1rem"} />,
		path: "subscriptions",
	},
	{
		id:10,
		title: "Show More",
		icon: () => <BsChevronDown size={"1rem"} />,
		path: "subscriptions",
        endOfSection:true
	},
]

export const explore = [
    {
		id:11,
		title: "Trending",
		icon: () => <AiFillFire size={"1rem"} />,
		path: "subscriptions",
        startOfSection:true
	},
    {
		id:12,
		title: "News",
		icon: () => <BiNews size={"1rem"} />,
		path: "subscriptions",
	},
    {
		id:13,
		title: "Sports",
		icon: () => <GiSportMedal size={"1rem"} />,
		path: "subscriptions",
	},
    {
		id:14,
		title: "Music",
		icon: () => <BsFileEarmarkMusic size={"1rem"} />,
		path: "subscriptions",
	},
    {
		id:15,
		title: "Movies",
		icon: () => <BiMoviePlay size={"1rem"} />,
		path: "subscriptions",
        endOfSection:true
	},
]

export const menu = [
    {
		id:16,
		title: "Settings",
		icon: () => <AiOutlineSetting size={"1rem"} />,
		path: "subscriptions",
        startOfSection:true
	},
    {
		id:17,
		title: "Report History",
		icon: () => <AiOutlineFlag size={"1rem"} />,
		path: "subscriptions",
	},
    {
		id:18,
		title: "Help",
		icon: () => <AiOutlineQuestionCircle size={"1rem"} />,
		path: "subscriptions",
	},
    {
		id:19,
		title: "Send Feedback",
		icon: () => <AiOutlineExclamationCircle size={"1rem"} />,
		path: "subscriptions",
        endOfSection:true
	},
]