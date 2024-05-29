import axios from "axios";
console.log(  process.env.PP_YT_API_KEY)
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params:{
        key: "AIzaSyDOQ6jxdoqJDFUHQB0B9E-JYduZZCYH7Es",
    },
})
export default request