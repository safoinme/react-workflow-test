import api from './config'; 

export default function get_home(){
    const data = api.get(`/`).then(response => response).catch(error => error);
    return data; 
}