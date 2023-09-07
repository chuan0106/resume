import { IRoute, matchRoutes, } from 'umi';
import '@/utils/js/rem'
import '@/utils/css/normalize.css'
import Loading from './components/Loading';
// 用于设置标题
export function onRouteChange({ clientRoutes, location }: { clientRoutes: IRoute[]; location: Location }) {
    const route = matchRoutes(clientRoutes, location.pathname)?.pop()?.route;

    if (route) {
        document.title = route.title || '';
    }
}

// 修改被 react-router 渲染前的树状路由表，接收内容同 useRoutes。 比如在最前面添加一个 /foo 路由
export function patchClientRoutes({ routes }: { routers: IRoute[] }) {

    routes.unshift({
        path: '/loading',
        element: <Loading />,
    });
}

// 比如用于渲染之前做权限校验
// export function render(oldRender) {
//     fetch('/api/auth').then(auth => {
//         if (auth.isLogin) { oldRender() }
//         else {
//             location.href = '/login';
//             oldRender()
//         }
//     });
// }