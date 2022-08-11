import axios from "axios"



class GetAPI{
    static async getAllPosts(){
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response
    }
}

export default GetAPI


