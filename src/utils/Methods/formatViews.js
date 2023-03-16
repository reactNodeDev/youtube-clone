const formatViews = (viewsCount) => {
	const views = viewsCount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	const number = views?.slice(0, views.indexOf(","));
	if (viewsCount >= 0 && viewsCount < 1000) return viewsCount;
	if (viewsCount >= 1000 && viewsCount < 1000000)
		return `${number}K`;
	if (viewsCount >= 1000000 && viewsCount < 1000000000) return `${number}M`;
	if (viewsCount >= 1000000000) return `${number}B`;
};

export default formatViews;
