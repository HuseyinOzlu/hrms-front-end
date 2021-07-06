import axios from "axios";

export default class jobService {
    getJob(){
        return axios.get('http://localhost:8080/api/jobs/getall');
    }

    addJob(){ 
        return axios.post('http://localhost:8080/api/jobs/add', {});
    }
}
