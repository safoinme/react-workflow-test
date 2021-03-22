import api from './config'; 

export default function post_state1(){
    const data = api.post(`/state1`,imgdata).then(response => response).catch(error => error);
    return data; 
}