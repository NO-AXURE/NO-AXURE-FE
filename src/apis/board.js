import axios from "axios"

async function getContentBoardMain(){
    
    const { data } = await axios.get("/api/contentboard/contentboardmain", {});
    return { data: data.data }
    }
export default {
  getContentBoardMain,
}