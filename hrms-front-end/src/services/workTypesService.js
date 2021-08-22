import axios from 'axios';

export default class workTypesService{
    getWorkType(){
        return axios.get("http://localhost:8080/api/worktype/getall");
    }
}