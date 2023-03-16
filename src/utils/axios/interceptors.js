import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	params: { hl: "en", gl: "US" },
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
		"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
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
		return response;
	},
	(error) => {
		if (error.response) {
			const statusCode = error.response.status;
			if (statusCode > 400 && statusCode < 500)
				throw new Error("A server error occured");
				 Promise.reject(error);
			return error.response
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
