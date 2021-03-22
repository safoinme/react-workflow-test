import api from './config'; 

export default function post_state2(){
    const data = api.post(`/state2`,imgdata).then(response => response).catch(error => error);
    return data; 
}