import request from '@/utils/request'
export function userloginApi(data){
    return request({
        url:'http://localhost:8080/vuelogin/login',
        'method':'post',
        data
    })
        
}