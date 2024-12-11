import axios from 'axios'

const api = axios.create({
/*     baseURL: 'https://donations-api-mysql.onrender.com' */
    baseURL: 'http://localhost:3000' //local
    
})

export default api

