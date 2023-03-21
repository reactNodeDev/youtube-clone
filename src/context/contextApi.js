import React, { createContext, useState, useEffect } from "react";
import { useLoading } from "./topLoaderContext";
import { get } from "../utils/axios/requests";

export const Context = createContext();

export const AppContext = (props) => {
	const { loading, setLoading, progress, setProgress } = useLoading();
	const [searchResults, setSearchResults] = useState(null);
	const [query, setQuery] = useState("earvin ngapeth");
	const [mobileMenu, setMobileMenu] = useState(false);
	const [openSidebar, setOpenSidebar] = useState(true);
	const [error, setError] = useState(null);

	const fetchResults = async (query) => {
		setProgress(progress + 40);
		setLoading(true);

		await get(`search/?q=${query}`)
			.then(async (res) => {
				setError(null);
				if (res) setSearchResults({ ...res });
			})
			.catch((err) => {
				console.log(err);
				setError(err.message);
			});
		setLoading(false);
		setProgress(100);
	};

	return (
		<Context.Provider
			value={{
				loading,
				setLoading,
				searchResults,
				setSearchResults,
				query,
				setQuery,
				mobileMenu,
				setMobileMenu,
				openSidebar,
				setOpenSidebar,
				fetchResults,
				error,
				setError,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
