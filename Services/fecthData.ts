import axios, { AxiosHeaders, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const fecthFormData = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})


export const fecthData = axios.create({
  baseURL: 'http://localhost:9000',
  withCredentials:true

})

fecthData.interceptors.request.use((req: any) => {
  try {
    if (window) {

      const profile = localStorage.getItem('profile');
      if (profile) {

        const parsedProfile = JSON.parse(profile);
        console.log(parsedProfile);
        req.headers = new AxiosHeaders(req.headers)
        req.headers.set('Authorization', `Bearer ${parsedProfile.token}`)
      }
    }
  } catch (error) {
    console.log("axios erro", error);

    // return Promise.reject(error);
  }
  return req;
})
// fecthData.defaults.withCredentials=true;
// axios.defaults.withCredentials = true;