import api from './config'; 

export default function post_state3(){
    const data = api.post(`/state3`,imgdata).then(response => response).catch(error => error);
    return data; 
}