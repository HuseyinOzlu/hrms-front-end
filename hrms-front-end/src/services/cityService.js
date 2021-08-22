import axios from "axios";

export default class cityService {
    getCity(){
        return axios.get('http://localhost:8080/api/city/getAll');
    }
}