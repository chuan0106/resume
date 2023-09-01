import { defineConfig } from "umi";
import routes from './routes'
export default defineConfig({
    routes,
    npmClient: 'yarn',
    // publicPath: './',  // 配置 publicPath ！！！
    // base: '/',
    // chainWebpack(config) {
    //     // 设置 publicPath
    //     config.output.publicPath('/custom-public-path/');
    // },
    plugins: ['@umijs/plugins/dist/dva', '@umijs/plugins/dist/antd'],
    dva: {}, //开启dva
    antd: {
    },
    hash: true, // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
    history: { // 配置 history 类型和配置项
        type: 'hash' // 可选 browser、hash 和 memory
    },
    base: '/', // 设置路由前缀，通常用于部署到非根目录。
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    favicons: [
        // 完整地址
        // 'https://domain.com/favicon.ico',
        // 此时将指向 `/favicon.png` ，确保你的项目含有 `public/favicon.png`
        '/logo/yushen.png'
    ],
    alias: {
        '@': require('path').resolve(__dirname, 'src'),
    },
});
