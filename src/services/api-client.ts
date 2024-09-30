import axios from "axios";

export default axios.create(
    {
        baseURL:'https://api.rawg.io/api/',
        params:{
            key:'99211dbb6d224d5b9fdd629bb97e9e9c'
        }
    }
);