const SidebarMenuItem = ({
	name,
	icon,
	open,
	endOfSection,
	startOfSection,
}) => {
	const itemName =
		name.length > 10
			? `${name.slice(0, name.indexOf(" "))}\n${name.slice(
					name.indexOf(" "),
					name.length
			  )}`
			: name;
	return (
		<>
			<button
				className={`w-full flex ${
					open
						? "flex-row lg:gap-5 items-center"
						: "flex-col justify-center items-center truncate"
				}  mb-4 hover:bg-white/[0.15] rounded-2xl p-1 md:p-2`}
			>
				<div className={`${open?'mr-1 lg:mr-0':'mr-0'}`}>{icon}</div>
				<p
					className={`truncate ${
						open
							? "text-[9px] md:text-[13px] text-justify"
							: "text-[7.5px] lg:text-[9.5px]"
					} whitespace-pre`}
				>
					{open ? name : itemName}
				</p>
			</button>
		</>
	);
};

export default SidebarMenuItem;
