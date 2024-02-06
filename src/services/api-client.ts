import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'5149b8ab57d04786a36e7969de489103'
    }
})