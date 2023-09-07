
import { useState, useEffect, useRef } from 'react';
import styles from './style.less';
import Timer from './Timer'
import sun from '@/assets/houchen/sun.png'
import duoyun from '@/assets/houchen/duoyun.png'
import clock from '@/assets/houchen/clock.png'
function time() {
    let date = new Date(); //获得当前时间
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1; // 月份从0开始，所以需要加1
    const currentDay = date.getDate();
    let mm = date.getMonth() + 1; //获得月份
    mm = mm < 10 ? '0' + mm : mm; //月份小于10时，前面加个0(例如9 ->09)天，小时，分钟，秒同理
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(); //小时
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); //分钟
    let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(); //秒
    // return hours + ':' + minutes + ':' + seconds;
    return currentYear + "-" + currentMonth + "-" + currentDay
}
function date() {
    let date = new Date();
    let mm = date.getMonth() + 1;
    mm = mm < 10 ? '0' + mm : mm;
    let day = date.getDate().toString().padStart(2, '0');
    return mm + '/' + day
}

const weatherData = {
    weather: '晴', temperature: '02/16', aqi: 84
}
const Title = () => {
    const [timeD, setTimeD] = useState(time());
    const [data, setData] = useState(weatherData)

    useEffect(() => {
        let Add = setInterval(() => {
            setTimeD(time());
        }, 1000);
        return () => {
            clearInterval(Add);
        };
    }, []);
    useEffect(() => {
        let date = new Date(); //获得当前时间
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(); //小时
        Number(hours) >= 14 && setData({ ...data, weather: '阴' })
    }, []);

    const { weather } = data
    let weatherImg = weather === '晴' ? sun : duoyun

    return (
        <div className={styles.title}>
            <div className={styles.toolbar}>
                <div className={styles.toolbar_left}>
                    <div className={styles.weather_container}>
                        <div className={`${styles.weather} ${styles.left}`} >
                            <img src={weatherImg} className={`${data?.weather === '晴' && styles.sun} ${styles.weather_img}`} alt="" />
                            <span className={styles.temperature}>{date()}</span>
                        </div>
                        <div className={`${styles.text} ${styles.left}`}>园区空气质量：<span style={{ color: '#32D75F' }}>良好</span></div>
                        <div className={`${styles.pm} ${styles.left}`}>PM2.5:31μg/m³</div>
                    </div>
                </div>
                <div className={styles.toolbar_center}>
                    <h1>后陈大屏可视化</h1>
                </div>
                <div className={styles.toolbar_right}>
                    <div className={styles.time_container}>
                        <img src={clock} className={styles.left} alt="" />
                        <div className={`${styles.left} ${styles.time_left}`}>{timeD}</div>
                        <Timer />
                    </div>
                </div>
            </div>
        </div >
    );
};
export default Title;
