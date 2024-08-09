import axios from "axios";

export const fecthFormData = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})


export const fecthData = axios.create({
  baseURL: 'http://localhost:9000',

})