import axiosInstance from "./interceptors";

export const get = async (url) => {
	axiosInstance.defaults.params = {
		part: 'snippet,id',
		regionCode: 'US',
		maxResults: '50',
		order: 'date'
	  }

	const res = await axiosInstance
		.get(`${url}`)
		.then((res) =>{ 
			return res
		})
		.catch((err) => {
			// console.log(err)
			return Promise.reject(err)
		});
	return res.data
};

export const getVideoDetails = async (id) => {
	axiosInstance.defaults.params.part = 'contentDetails,snippet,statistics'
    const res = await axiosInstance.get(`videos/?id=${id}`).then(res => res).catch(err => err)
    if(!res.data) return Promise.reject(res)
	return res.data
}
