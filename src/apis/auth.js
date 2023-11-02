import axios from "axios"
import store from "@/store";
async function join(user){
        const response = await axios.post("/user/",{
            userId: user.id,
            password: user.password,
            name: user.name,
            email: user.email
        });
        return response.data.result;
}

async function login(user){
    const response = await axios.get(`/user/${user.id}`)
    store.dispatch("saveAuth", {userId:response.data.userId,authToken: response.data.accessToken})
    console.log("test");
    return response.data.accessToken;
}
export default {
    join,
    login,
}
