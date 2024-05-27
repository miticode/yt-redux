import axios from "axios";
console.log(  process.env.PP_YT_API_KEY)
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params:{
        key: "AIzaSyCLTRb3tMue2VOVOP6Bh0uZ7kPQ9MFnn7Y",
    },
})
export default request