import axios from 'axios'

const axiosInstances = axios.create({
    baseURL: "http://localhost:3000"
})

 export default axiosInstances