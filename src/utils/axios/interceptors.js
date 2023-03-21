import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	params: { hl: "en", gl: "US" },
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		if(response.data.error.message) {
			return Promise.reject(response.data.error)
		}
		return response;
	},
	(error) => {
		if (error.response) {
			const statusCode = error.response.status;
			if (statusCode > 400 && statusCode < 500)
				throw new Error("A server error occured");
			Promise.reject(error);
			return error.response;
		}
		if(error.message) {
			return Promise.reject(error.message)
		}
		if (!error.response) throw new Error("Some error occured. Please try later");
		Promise.reject(error.message);
	}
);

export default axiosInstance;
