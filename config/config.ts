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
