import axios from "axios"

async function getTestUrl(){
    let response = null;
    response = await axios.get("/api/test", {});
    console.log(response)
        return { result: "success", data: response.data};
    }
export default {
    getTestUrl,
}