import axios from "axios"

async function getContentBoardMain(){
    let response = null;
    response = await axios.get("/api/contentboard/contentboardmain", {});
    console.log(response)
        return { result: "success", data: response.data};
    }
export default {
  getContentBoardMain,
}