import api from './config'; 

export default function get_home(){
    const data = api.post(`/state2`,imgdata).then(response => response).catch(error => error);
    return data; 
}