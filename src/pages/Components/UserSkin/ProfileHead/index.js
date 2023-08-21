import { useState } from 'react';
import styles from './style.less'
import { UpOutlined, DownOutlined, RightOutlined } from '@ant-design/icons';
import zangxiaochaun from '@/assets/zangxiaochaun.jpg'
import purple from '@/assets/purple-img.gif'

import reactIcon from '@/assets/icon/react-icon.png'
import vueIcon from '@/assets/icon/vue-icon.png'
import umiIcon from '@/assets/icon/umi-icon.png'
import nodeIcon from '@/assets/icon/nodejs-icon.png'
import htmlIcon from '@/assets/icon/html-icon.png'
import cssIcon from '@/assets/icon/css-icon.png'
import jsIcon from '@/assets/icon/js-icon.png'
import ajaxIcon from '@/assets/icon/ajax-icon.png'
import jqueryIcon from '@/assets/icon/jquery-icon.png'
import webpackIcon from '@/assets/icon/webpack-icon.png'
import mapBoxIcon from '@/assets/icon/mapBox-icon.png'
import echartsIcon from '@/assets/icon/echarts-icon.png'
import betterScrollIcon from '@/assets/icon/better-scroll-icon.png'
import lessIcon from '@/assets/icon/less-icon.png'

const icon_raw = [
    { img: reactIcon, title: 'react', src: 'https://react.docschina.org/', id: 6 },
    { img: umiIcon, title: 'umi', src: 'https://v3.umijs.org/zh-CN', id: 9 },
    { img: echartsIcon, title: 'echarts', src: 'https://echarts.apache.org/zh', id: 12 },
    { img: mapBoxIcon, title: 'mapBox', src: 'https://docs.mapbox.com/', width: '84px', id: 11 },

    { img: htmlIcon, title: 'HTML5', src: 'https://www.w3school.com.cn/html/index.asp', id: 1 },
    { img: cssIcon, title: 'CSS3', src: 'https://www.w3school.com.cn/css/index.asp', id: 2 },
    { img: jsIcon, title: 'JavaScript', src: 'https://www.w3school.com.cn/js/index.asp', id: 3 },
    { img: jqueryIcon, title: 'Jquery', src: 'https://www.w3cschool.cn/jquery/', id: 4 },
    { img: reactIcon, title: 'react', src: 'https://react.docschina.org/', id: 6 },
    { img: vueIcon, title: 'vue', src: 'https://cn.vuejs.org/', id: 7 },
    { img: webpackIcon, title: 'webpack', src: 'https://www.webpackjs.com/', id: 8 },
    { img: nodeIcon, title: 'nodejs', src: 'https://nodejs.org/en', id: 10 },
    { img: betterScrollIcon, title: 'betterScroll', src: 'https://better-scroll.github.io/docs/en-US/', id: 13 },
]
const icon = [
    { img: htmlIcon, title: 'HTML5', src: 'https://www.w3school.com.cn/html/index.asp', width: 22, id: 1 },
    { img: cssIcon, title: 'CSS3', src: 'https://www.w3school.com.cn/css/index.asp', width: 22, id: 2 },
    { img: jsIcon, title: 'JavaScript', src: 'https://www.w3school.com.cn/js/index.asp', width: 22, id: 3 },
    { img: jqueryIcon, title: 'Jquery', src: 'https://www.w3cschool.cn/jquery/', width: 22, id: 4 },
    { img: ajaxIcon, title: 'AJAX', src: 'http://doc.yaojieyun.com/www.runoob.com/ajax/ajax-intro.html', width: 22, id: 5 },
    { img: reactIcon, title: 'react', src: 'https://react.docschina.org/', width: 22, id: 6 },
    { img: vueIcon, title: 'vue', src: 'https://cn.vuejs.org/', width: 22, id: 7 },
    { img: webpackIcon, title: 'webpack', src: 'https://www.webpackjs.com/', width: 22, id: 8 },
    { img: umiIcon, title: 'umi', src: 'https://v3.umijs.org/zh-CN', width: 22, id: 9 },
    { img: nodeIcon, title: 'nodejs', src: 'https://nodejs.org/en', width: 22, id: 10 },
    { img: mapBoxIcon, title: 'mapBox', src: 'https://docs.mapbox.com/', width: 84, id: 11 },
    { img: echartsIcon, title: 'echarts', src: 'https://echarts.apache.org/zh', width: 22, id: 12 },
    { img: betterScrollIcon, title: 'betterScroll', src: 'https://better-scroll.github.io/docs/en-US/', width: 22, id: 13 },
    { img: lessIcon, title: 'less', src: 'https://better-scroll.github.io/docs/en-US/', width: 22, id: 14 },
]
const user_Profile_views = [
    { name: '总项目量', num: 9, id: 1 },
    { name: 'React', num: 7, id: 2 },
    { name: 'Vue', num: 1, id: 3 },
    { name: 'Jquery', num: 1, id: 4 }
]
const Index = () =>
{
    const [isShow, setIsShow] = useState(false)
    const [extend, setExtend] = useState(false)

    const extendHandler = () =>
    {
        setExtend(!extend)
    }

    return (
        <div className={styles.user_profile_head}>
            <div className={styles.user_profile_head_banner}></div>
            <div className={styles.user_profile_head_info}>
                <div className={styles.user_profile_head_info_t}>
                    <div className={styles.user_profile_head_info_l}>
                        <div className={styles.user_profile_head_info_ll}>
                            <div className={styles.user_profile_avatar}>
                                <img src={zangxiaochaun} alt="" />
                            </div>
                        </div>
                        <div className={styles.user_profile_head_info_rr}>
                            <div className={styles.user_profile_head_info_r_t}>
                                <div className={styles.user_profile_head_name}>
                                    <div>臧小川</div>
                                    <div title='码龄3年' style={{ backgroundColor: '#d1ddf1', color: '#445165' }} className={`${styles.person_code_age}`}>
                                        <img src={purple} alt="" />
                                        <span>码龄3年</span>
                                    </div>
                                    <div style={extend ? { width: `${icon.reduce((total, icon) => total + (icon.width + 4), 0)}px` } : null} className={`${styles.user_profile_icon} ${styles.animation}`} >
                                        {icon.map((icon, i) => (
                                            <a href={icon.src} target='_blank' key={i}>
                                                <img style={{ width: icon.width }} title={icon.title} src={icon.img} alt={icon.title} />
                                            </a>
                                        ))}
                                    </div>
                                    <div className={`${styles.extend} ${extend && styles.turn}`} onClick={extendHandler} >  <RightOutlined /></div>
                                </div>
                            </div>
                            <div className={styles.user_proFil_head_info_r_c}>
                                <ul>
                                    {user_Profile_views.map((item, i) => (
                                        <li key={i}>
                                            <span>
                                                <span className={styles.user_profile_statistics_views}>
                                                    <div className={styles.num}>{item.num}</div>
                                                    <div className={styles.name}>{item.name}</div>
                                                </span>
                                            </span>
                                            <div className={styles.profile_bar}></div>
                                        </li>
                                    ))}
                                    <li>
                                        <div>
                                            <div className={styles.user_profile_statistics_views}>
                                                <div className={styles.num}>成就</div>
                                                <div className={styles.name}></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.user_profile_head_info_b}>
                    <p className={`${styles.introduction_fold} ${styles.default}`}>
                        <span>期望城市：</span>北京或者郑州
                    </p>
                    <div className={styles.user_profile_head_address}>
                        <p>
                            <span>IP地址：</span>北京市朝阳区
                        </p>
                    </div>
                    <div className={styles.user_profile_head_info_b_r}>
                        <div style={{ display: isShow ? 'block' : 'none' }} className={styles.user_general_info}>
                            <ul>
                                <div className={styles.user_general_info_work}>
                                    <div className={styles.user_general_info_left}>
                                        <span>目前就职：</span><span>相数科技</span>
                                        <a href="https://www.dataojo.com/#/home" target='_blank'>
                                            <em className={styles.dataOjo} title='相数科技'></em>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.user_info_induction}>
                                    <div>
                                        <span>入职时间：</span><span>2021年8月</span>
                                    </div>
                                </div>
                            </ul>
                            <div className={styles.user_profile_wrapper}>
                                <div className={styles.user_profile_wrapper_box}>
                                    <span>个人简介：</span>
                                    <span className={styles.user_profile_title}>每天进步亿点点</span>
                                </div>
                                <div className={styles.user_profile_wrapper_box}>
                                    <span>期望薪资：</span>
                                    <span className={styles.user_profile_title}>12-14K</span>
                                </div>
                            </div>
                        </div>
                        <span onClick={() => { setIsShow(!isShow) }} className={styles.show_more_introduction_fold}> 查看详细资料
                            {isShow ? <UpOutlined /> : <DownOutlined />}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index