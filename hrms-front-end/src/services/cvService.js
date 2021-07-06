import axios from "axios";

export default class cvService {
    getCv(){    
        return axios.get("http://localhost:8080/api/cv/getall");
    }
    addCv(){
        return axios.post("http://localhost:8080/api/cv/add", {});
    }
}

