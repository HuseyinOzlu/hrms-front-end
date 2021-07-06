import axios from "axios";

export default class employerService  {
    getEmployer(){
        return axios.get("http://localhost:8080/api/employers/getall");
    }
    addEmployer(){
        return axios.post("http://localhost:8080/api/employers/add",{});
    }
}
