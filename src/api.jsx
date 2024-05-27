import axios from "axios";
console.log(  process.env.PP_YT_API_KEY)
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params:{
        key: "AIzaSyAUtAHRc1lDArHR4vewrqeIjDDLnNH8Nbc",
    },
})
export default request