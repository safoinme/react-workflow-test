import api from './config'; 

export default function post_image(imgdata){
    const data = api.post(`/imginsert`,imgdata).then(response => response).catch(error => error);
    return data; 
}