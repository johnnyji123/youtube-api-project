import axios from "axios";

const KEY = "AIzaSyCPCErkuA7A0joDKpNU9xfDfkHbtvb2DHQ"


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY

    }
});

