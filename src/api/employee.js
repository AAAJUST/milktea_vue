import request from "@/utils/request";

export function getEmployeePage(params){
    return request({
        url:'http://localhost:8080/employee/employeeGet',
        method:'get',
        params
    })
}

export function addEmployee(data){
    return request({
        url:'http://localhost:8080/employee/employeePost',
        method:'post',
        data
    })
}

export function editEmployee(data){
    return request({
        url:'http://localhost:8080/employee',
        method:'put',
        data
    })
}
export function queryEmployeeById(id){
    return request({
        url:'http://localhost:8080/employee/${id}',
        method:'get',
    })
}
