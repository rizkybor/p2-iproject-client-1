import axios from 'axios'

const axiosInstances = axios.create({
    baseURL: "https://challenge-movies-ku.herokuapp.com/"
})

 export default axiosInstances