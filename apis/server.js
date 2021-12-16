import axios from 'axios'

const axiosInstances = axios.create({
    baseURL: "https://ifootballku.herokuapp.com/"
})

 export default axiosInstances