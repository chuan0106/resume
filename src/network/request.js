import axios from "axios";

// 优雅永不过时！！！！
export function request (config)
{
    const instance = axios.create({
        baseURL: '/api',
        timeout: 5000
    })

    instance.interceptors.request.use(config =>
    {

        return config
    }, err =>
    {
        console.log(err);
    })
    instance.interceptors.response.use(res =>
    {
        return res.data
    }, err =>
    {
        throw err
    })
    return instance(config)
}
