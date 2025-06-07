import axios from "axios";
const getUser= async () =>{
const respones=await axios.get('https://localhost:7218/Users/GetUsers',
    {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    return respones
}
export default getUser;
