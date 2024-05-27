import axios from "axios";
console.log(  process.env.PP_YT_API_KEY)
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params:{
        key: "AIzaSyCidOybMNYrctjGL_rZKve_Q7rmDR_55bQ",
    },
})
export default request