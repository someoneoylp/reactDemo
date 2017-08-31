// 用于处理请求
import axios from "axios"
import api from './api.js'
/*
如果没有安装webpack，就使用下面这种写法
*/

//axios.defaults.baseURL = "http://music.163.com/"


export const getData = (url, param) => {
    return (
        axios.get(`${url}`)
    )
}

export const postData = (url, param) => {
    return (
        axios.post(`${url}`, param)
    )
}