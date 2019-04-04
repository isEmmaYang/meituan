//封装请求
import 'whatwg-fetch'
function get(url, param){
    return new Promise((resolve, reject)=>{
        let paramStr = '?';
        Object.entries(param).forEach(([key, value], /*index*/)=>{
            paramStr += `${key}=${value}&`;
            // paramStr += `${key}=${value}`;
            // if(index < Object.keys(param).length-1){
            //     paramStr += '&';
            // }
        })
        fetch(url+paramStr, {
            method: 'GET'
        })
        .then(response=>{
            if(response.status === 200){
                return response.json();
            }else{
                reject(response);
            }
        })
        .then(data=>{
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        })
    })
}

function post(url, param){
    return new Promise((resolve, reject)=>{
        fetch(url, {
            method: 'POST',
            body: param
        })
        .then(response=>{
            if(response.status === 200){
                return response.json();
            }else{
                reject(response);
            }
        })
        .then(data=>{
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        })
    })
}

export default {
    get,
    post
}