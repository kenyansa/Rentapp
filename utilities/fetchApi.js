import axios from "axios";

export const baseUrl = "https://realtymole-rental-estimate-v1.p.rapidapi.com"; //exported because it will be used by other files.


export const fetchApi = async (url)=>{
    const {data} = await axios.get(url, {
      headers: {
        "X-RapidAPI-Host": "realtymole-rental-estimate-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "34b4bff699mshb59a8acfe51d6dap1eac04jsn3074c3659394",
      },
    });
}