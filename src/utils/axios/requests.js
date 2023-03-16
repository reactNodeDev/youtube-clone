import axiosInstance from "./interceptors";

export const get = async (url) => {
	const res = await axiosInstance
		.get(`${url}`)
		.then((res) => res)
		.catch((err) => err);
    if(!res.data) return Promise.reject(res)
	return res.data
};

export const getVideoDetails = async (id) => {
	// axiosInstance.params = {...axiosInstance.params, id:id}
    const res = await axiosInstance.get(`video/details/?id=${id}`).then(res => res).catch(err => err)
    if(!res.data) return Promise.reject(res)
	return res.data
}
