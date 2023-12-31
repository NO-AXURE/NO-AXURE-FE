import axios from "axios"
axios.defaults.baseURL = "http://localhost:9040";
function addAuthHeader(accessToken){
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  //요쳥 HTTP에 Authorization 헤더 제거
  function removeAuthHeader(){
    delete axios.defaults.headers.common["Authorization"];
  }

export default {
    addAuthHeader,
    removeAuthHeader
  }