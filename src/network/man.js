import { request } from './request'
// 首页菜单
export function getMenu ()
{
    return request({
        url: '/menu'
    })
}
// 获取首页表格数据
export function getTable ()
{
    return request({
        url: '/table'
    })
}

// 注册
export function register (data)
{
    return request({
        url: '/register',
        method: "post",
        data
    })
}