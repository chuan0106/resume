
// 相数云
const logo_water = 'logo/logo_water@2x.png';
const logo_water_map = 'logo/logo.png';
const logo = 'logo/newlogo.png';
const logo_login = 'logo/logo_login@2x.png';
const logox = 'logo/iconlogo@2x.png';
const favicon = 'logo/favicon.png';
// const touming = 'logo/touming.png';

//boyayun
// var logo_water = 'boyayun/logo2.png';
// var logo_water_map = 'boyayun/maplogo.png';
// var logo = 'boyayun/headerlogo.png';
// var logo_login = 'boyayun/logo1.png';
// var logox = 'boyayun/logox.png';
// var favicon = 'boyayun/favicon.png';

//DOCity
// const logo_water = 'logo/docity/water.png';
// const logo_water_map = 'logo/docity/map.png';
// const logo = 'logo/docity/logo.png';
// const logo_login = 'logo/docity/logo.png';
// const logox = 'logo/docity/logo.png';
// const favicon = 'logo/docity/logo0.png';

//项目信息配置
window.projectinfo = {
    projectName: '相数云',
    dcpName: '5405178237068709014',
    sceneId: '5561760340815348175',
    dcdId: 'WanDa',
    dcdName: 'WanDa',
    // WebSocketName: 'shenzhen_wanda_test', // 发送的sccket 地址 // 这个是之前 深圳的
    WebSocketName: 'hongjie', // 发送的sccket 地址 // 这个是之前 深圳的
};
//logo配置
window.projectlogo = {
    logo_water,
    logo_water_map,
    logo,
    logo_login,
    logox,
    favicon,
    // touming,
};
/**
 * ip 配置
 */
//腾讯云
window.ipconfig = {
    // 服务部署api地址  这个是 docity 的
    // API: 'https://www.dataojocity.com:8800/',  // 这个是之前外网的地址
    API: 'http://10.134.80.110/', // 这个是内网的ip地址 邓哥让改的
    // 地图api1  私有化部署 地图api1 地图api2同一个地址
    MAP_API: 'https://www.dataojocloud.com/styles/transparency/style.json',
    // 地图api2
    PUB_MAP_API: 'https://www.dataojocloud.com/styles/china_V3_gray/style.json',
    // socket 全局socket已经被注释，这个保留配置即可
    //   SOCKET_URL: 'https://www.dataojo.com',//外网
    SOCKET_URL: 'http://10.134.80.110',//内网
    SOCKET_API: 'wss://www.dataojo.com/message_transfer/websocket/shenzhen_wanda_test',  // 如果做桌面端的话 则也需要接接的
    // 相数云线上访问地址 *************  DOCLOUD_HOST REPORT_HOST 私有化部署同一个地址
    DOCLOUD_HOST: 'https://www.dataojo.com/docloud',
    // 相数云预览线上预览地址
    REPORT_HOST: 'https://www.dataojo.com/docloud',
    THREE_D: 'http://120.53.224.45:8000',
    //店铺
    SHOP: 'http://120.53.224.45:8000',

};
//测试版
// window.ipconfig = {
//   // 服务部署api地址
//   API: '