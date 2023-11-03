import axios from "axios"
import store from "@/store";
async function join(user){
        const response = await axios.post("/api/user/",{
            userId: user.id,
            password: user.password,
            name: user.name,
            email: user.email
        });
    console.log(response)
        return response.data.result;
}

async function login(user){
    const response = await axios.post("/api/login",{
            userId: user.id,
            password: user.password,
        });
    store.dispatch("saveAuth", {userId:response.data.userId,authToken: response.data.accessToken})
    console.log("test");
    return response.data.accessToken;
}

async function edit(user){
    const response = await axios.put("/api/",{
            userId: user.id,
            password: user.password,
        });
    store.dispatch("saveAuth", {userId:response.data.userId,authToken: response.data.accessToken})
    console.log("test");
    return response.data.accessToken;
}
export default {
    join,
    login,
}
