import axios from 'axios'

const axiosInstances = axios.create({
    baseURL: "http://localhost:3000"
})

// const axiosInstances = axios.create({
//     baseURL: "https://ifootballku.herokuapp.com/"
// })

 export default axiosInstances