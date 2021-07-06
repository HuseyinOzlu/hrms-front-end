import axios from "axios";

export default class candidateService  {
    getCandidate(){
        return axios.get("http://localhost:8080/api/unemployers/getall");
    }
    addCandidate(){
        return axios.post("http://localhost:8080/api/unemployers/add",{});
    }
}
