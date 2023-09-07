import { useEffect, useRef, Fragment, memo } from 'react';
import styles from './style.less';

const Index = () => {
    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const secondRef = useRef(null);
    useEffect(() => {
        const hourRoot = hourRef.current
        const minuteRoot = minuteRef.current
        const secondRoot = secondRef.current
        const intervalId = setInterval(countDown, 1000);
        return () => {
            clearInterval(intervalId);
        };
        function countDown() {
            const time = new Date();
            const h = time.getHours().toString().padStart(2, '0');
            const m = time.getMinutes().toString().padStart(2, '0');
            const s = time.getSeconds().toString().padStart(2, '0');
            flipCards(hourRoot, h);
            flipCards(minuteRoot, m);
            flipCards(secondRoot, s);
        }
        function flipCards(dom, nextTime) {
            const curValue = dom.dataset.number;
            if (nextTime === curValue) {
                return;
            }
            const timeHTML = `
            <div class="${styles.card1} ${styles.card}">${nextTime}</div>
            <div class="${styles.card2} ${styles.card}">${nextTime}</div>
            <div class="${styles.card3} ${styles.card}">${curValue || nextTime}</div>
            <div class="${styles.card4} ${styles.card}">${curValue || nextTime}</div>
       `
            dom.innerHTML = timeHTML

            const classNames = dom.className;
            const classNamesArray = classNames.split(' ');
            dom.classList.remove(classNamesArray[1]);
            dom.clientHeight;
            dom.classList.toggle(classNamesArray[1]);
            dom.dataset.number = nextTime;
        }
    }, []);

    return (
        <Fragment>
            <div className={styles.time}>
                <div id="card-h" ref={hourRef} className={`${styles.card_container} ${styles.flip}`} />
                <div id="card-m" ref={minuteRef} className={`${styles.card_container} ${styles.flip}`} />
                <div id="card-s" ref={secondRef} className={`${styles.card_container} ${styles.flip}`} />
            </div>
        </Fragment>

    );
};

export default memo(Index)