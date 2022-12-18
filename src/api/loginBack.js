import request from "@/utils/request";
export function adminLoginApi(data){
     return request({
        url:'http://localhost:8080/employee',
        'method':'post',
        data
     })
}