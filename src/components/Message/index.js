import React from 'react'
import { createRoot } from 'react-dom/client';
import { BS } from '@/utils/BetterScroll'
import styles from './style.less'
import { Carousel, Image } from 'antd'

const split_array = (arr, length) =>
{  // arr 是需要拆分的数组 length 是要拆分小数组的数量
    let a_length = arr.length
    let result = []  // 结果数组
    for (let i = 0; i < a_length; i += length)  
    {
        result.push(arr.slice(i, i + length))  // 循环遍历原数组的 N 个元素 每次取从上次取的下一个开始取
    }
    return result  // 把结果数组 return 
}

const getType = v => v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
const message = (message, callBack, title, arrImg) =>
{
    let DOM;
    const app = document.createElement('div');
    app.id = 'model'
    document.body.appendChild(app);

    const close = () =>
    {
        const container = document.querySelector('#container');
        if (container)
        {
            container.classList.remove(styles.fadeIn);
            container.classList.add(styles.fadeEnd);
            setTimeout(() =>
            {
                app.remove()
                root.unmount()
                // 取消观察者模式
                observer.disconnect();
            }, 500)
        } else
        {
            app.remove()
            root.unmount()
            // 取消观察者模式
            observer.disconnect();
        }
    }
    // setTimeout(() =>
    // {
    //     const scroll = document.querySelector('#scroll');
    //     console.log(scroll);
    // })

    const observer = new MutationObserver((mutationsList, observer) =>
    {
        for (let mutation of mutationsList)
        {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0)
            {
                const scroll = document.querySelector('#scroll');
                if (scroll)
                {
                    BS(scroll)
                    break;
                }
            }
        }
    });

    const renderObjectMessage = (message, callBack, title, arrImg) =>
    {
        const titleType = getType(title)
        const isUndefined = titleType === 'undefined'
        const titleResult = titleType === 'string' ? title : titleType === 'object' ? title.name : null
        let property = [];
        for (const key in message)
        {
            if (Object.hasOwnProperty.call(message, key))
            {
                property.push(key)
            }
        }

        const carouselDom = () =>
        {
            const imgs = split_array(arrImg, 3)
            return (
                <Carousel autoplay autoplaySpeed={5000} >
                    {imgs.map((ims, i) => (
                        <div key={`${ims}${i}`} >
                            <div className={styles.imgContainer}>
                                {ims.map((img, k) => (
                                    <Image key={`${img}${k}`} src={img} />
                                ))}
                            </div>
                        </div>
                    ))}
                </Carousel>
            )
        }
        return (
            <div className={`${styles.modelContainer} ${styles.object}`}>
                <div id='container' className={`${styles.divStyle} ${styles.fadeIn}`} >
                    <div style={{ paddingTop: isUndefined && 0 }} className={styles.core}>
                        {!isUndefined && (
                            <div className={styles.title}>
                                <span style={{ '--color': title.color }}>{titleResult}</span>
                            </div>)}
                        <section id='scroll'>
                            <div>
                                {property.map((item, i) =>
                                {
                                    return (
                                        <div key={`${item}${i}`} className={styles.container}>
                                            <div className={styles.key}>{item + '：'}</div>
                                            <div className={styles.text}><span>{message[item]} </span></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                        <footer>
                            {carouselDom()}
                            {/* {arrImg.map((img, i) => (
                                <img key={i} src={img} alt="" />
                            ))} */}
                        </footer>
                        <div className={styles.buttonContainer}>
                            <button className={styles.rotateBtn} onClick={() => { callBack && callBack(close) }}>确定</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }

    const map = {
        'object': () =>
        {
            DOM = renderObjectMessage(message, callBack, title, arrImg)
        }
    }
    if (map[getType(message)]) map[getType(message)]()

    const root = createRoot(app)
    root.render(DOM);

    observer.observe(document.querySelector('#model'), { childList: true, subtree: true });
};
export default message

