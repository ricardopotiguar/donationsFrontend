import axios from 'axios'
const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
/*      baseURL: 'https://donations-api-mysql.onrender.com'
     baseURL: 'http://localhost:3000' */
     baseURL: baseURL,
})

export default api

