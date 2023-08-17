import { defineConfig } from 'umi';
export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            exact: true,
            path: '/',
            component: '@/layouts/Common',
            routes: [
                { path: '/', name: '111', component: '@/pages' },
            ],
        },
    ],

    fastRefresh: {},
    publicPath: './',  // 配置 publicPath ！！！
    // title: '首页',  // 修改title  
    title: false,  // 如果需要自行通过 react-helmet 等方式渲染 title，配 title: false 可禁用内置的 title 渲染机制

    chainWebpack(config, { webpack }) {
        console.log('😀 😁 😂 🤣 😃  😄 😅 😆 😉 😊  😫 😴 😌 😛 😜 😒 😓 😔');
    },
});
