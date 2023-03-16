import { createContext, useContext, useState } from "react";

export const TopLoadingContext = createContext();

const TopLoadingProvider = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const value = { loading, setLoading, progress, setProgress };

	return (
		<TopLoadingContext.Provider value={value}>
			{children}
		</TopLoadingContext.Provider>
	);
};

export const useLoading = () => {
    const context = useContext(TopLoadingContext)
    if(!context) throw new Error("useLoading must be used inside TopLoadingProvider")
    return context
}

export default TopLoadingProvider