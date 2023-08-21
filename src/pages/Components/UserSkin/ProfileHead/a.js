const icon = [
    { title: 'HTML5', src: 'https://www.w3school.com.cn/html/index.asp', width: 22, id: 1 },
    { title: 'CSS3', src: 'https://www.w3school.com.cn/css/index.asp', width: 22, id: 2 },
    { title: 'JavaScript', src: 'https://www.w3school.com.cn/js/index.asp', width: 22, id: 3 },
    { title: 'Jquery', src: 'https://www.w3cschool.cn/jquery/', width: 22, id: 4 },
    { title: 'AJAX', src: 'http://doc.yaojieyun.com/www.runoob.com/ajax/ajax-intro.html', width: 22, id: 5 },
    { title: 'react', src: 'https://react.docschina.org/', width: 22, id: 6 },
    { title: 'vue', src: 'https://cn.vuejs.org/', width: 22, id: 7 },
    { title: 'webpack', src: 'https://www.webpackjs.com/', width: 22, id: 8 },
    { title: 'umi', src: 'https://v3.umijs.org/zh-CN', width: 22, id: 9 },
    { title: 'nodejs', src: 'https://nodejs.org/en', width: 22, id: 10 },
    { title: 'mapBox', src: 'https://docs.mapbox.com/', width: 84, id: 11 },
    { title: 'echarts', src: 'https://echarts.apache.org/zh', width: 22, id: 12 },
    { title: 'betterScroll', src: 'https://better-scroll.github.io/docs/en-US/', width: 22, id: 13 },
    { title: 'less', src: 'https://better-scroll.github.io/docs/en-US/', width: 22, id: 14 },
]

const totalSum = icon.reduce((total, product) => total + product.width, 0);
console.log(totalSum);
