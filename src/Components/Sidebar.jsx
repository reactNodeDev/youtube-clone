import React, { lazy } from "react";
import { explore, library, menu, menuItems } from "../data";

const SidebarMenuItem = lazy(() => import('../AtomicComponents/SidebarMenuItem'))

const Sidebar = ({ open, setOpen }) => {
	return (
		<div
			className={`overscroll-none h-[calc(100vh-3.5rem)] pt-4 pb-52 
		${
			open
				? "col-span-3 lg:col-span-2 px-1 w-[8rem] md:w-[12rem]"
				: "col-span-2 lg:col-span-1 w-sbcsm md:w-sbcmd"
		}
		overflow-y-auto
             bg-[#0F0F0F] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#717171] scrollbar-track-h-5 scrollbar-thumb-rounded-full hover:scroll-auto fixed top-[3.5rem] overflow-x-hidden px-4`}
		>
			<div className={`flex flex-col divide-y-[0.3px] gap-4`}>
				<div className="">
					{menuItems.map(
						({ title, icon, path, endOfSection, startOfSection, id }) => {
							return (
								<SidebarMenuItem
								key={id}
									name={title}
									icon={icon()}
									open={open}
									endOfSection={endOfSection}
									startOfSection={startOfSection}
								/>
							);
						}
					)}
				</div>
				<div className="pt-1">
					{library.map(
						({ title, icon, path, endOfSection, startOfSection, id }) => {
							return (
								<SidebarMenuItem
								key={id}
									name={title}
									icon={icon()}
									open={open}
									endOfSection={endOfSection}
									startOfSection={startOfSection}
								/>
							);
						}
					)}
				</div>
				<div className="pt-1">
					<p className={`${open ? `text-left p-2` : ``} text-xsm md:text-sm`}>
						Explore
					</p>
					{explore.map(
						({ title, icon, path, endOfSection, startOfSection, id }) => {
							return (
								<SidebarMenuItem
								key={id}
									name={title}
									icon={icon()}
									open={open}
									endOfSection={endOfSection}
									startOfSection={startOfSection}
								/>
							);
						}
					)}
				</div>

				<div className="pt-1">
					{menu.map(
						({ title, icon, path, endOfSection, startOfSection, id }) => {
							return (
								<SidebarMenuItem
									key={id}
									name={title}
									icon={icon()}
									open={open}
									endOfSection={endOfSection}
									startOfSection={startOfSection}
								/>
							);
						}
					)}
				</div>
			</div>
			{open ? (
				<div className="text-left text-gray-300 text-xs pl-2">
					<p className=" whitespace-pre-wrap">Youtubee Clone</p>
					<p>
						By <span className="font-bold">Tushar Ghildiyal</span>
					</p>
				</div>
			) : null}
		</div>
	);
};

export default Sidebar;
