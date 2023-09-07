import { useEffect, useRef } from 'react'
import styles from './style.less'
import Map from './ThemeManage/Map'
import ThemeManage from './ThemeManage'
const Index = () => {
    const reset = useRef()
    const screenSize = {
        width: 1920,
        height: 1080,
    };
    function screenRatio() {
        return document.body.clientWidth / screenSize.width;
    }
    function resize() {
        reset.current.style.transform = `scale(${screenRatio()}) rotate(0deg)`;
    }
    useEffect(() => {
        // window.addEventListener('resize', resize);
        // return () => {
        //     window.removeEventListener('resize', resize);
        // };
    }, [])

    return (
        <div className={styles.container}>
            {/* 地图随着大屏分辨率缩放会造成性能影响，所以加载地图有两种方案：方案一：不在缩放内，方案二：缩放内，具体情况根据使用需求来定*/}
            <div className={styles.map}> <Map ></Map></div>
            <div
                className={styles.content}
                // ref={reset}
                style={{
                    width: "100%",
                    height: "100%",
                    // transform: `scale(${screenRatio()}) rotate(0deg)`,
                }}
            >
                {/* 加载专题 */}
                <ThemeManage></ThemeManage>
            </div>
        </div>
    );
};
export default Index