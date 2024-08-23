import axios, { AxiosHeaders, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const fecthFormData = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})


export const fecthData = axios.create({
  baseURL: 'http://localhost:9000',
  withCredentials: true

})

fecthData.interceptors.request.use((req: any) => {
  try {
    if (typeof window != 'undefined') {
      const profile = localStorage.getItem('profile');
      const adminProfile = localStorage.getItem('adminProfile');
      if (profile) {
        const parsedProfile = JSON.parse(profile);
        req.headers = new AxiosHeaders(req.headers)
        req.headers.set('Authorization', `Bearer ${parsedProfile.token}`)
      }
      if (adminProfile) {
        const parsedProfile = JSON.parse(adminProfile);
        req.headers = new AxiosHeaders(req.headers)
        req.headers.set('adminAuthorization', `Bearer ${parsedProfile.token}`)
      }
    }
  } catch (error) {
    console.log("axios erro", error);
  }
  return req;
})

fecthFormData.interceptors.request.use((req: any) => {
  try {
    if (typeof window != 'undefined') {
      const adminProfile = localStorage.getItem('adminProfile');
      if (adminProfile) {
        const parsedProfile = JSON.parse(adminProfile);
        req.headers = new AxiosHeaders(req.headers)
        req.headers.set('adminAuthorization', `Bearer ${parsedProfile.token}`)
      }
    }
  } catch (error) {
    console.log("axios erro", error);
  }
  return req;
})