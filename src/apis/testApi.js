import axios from "axios"

async function getTestUrl(){
    let response = null;
        response = await axios.get("/test",{});
        return { result: "success", data: response.data};
    }
export default {
    getTestUrl,
}