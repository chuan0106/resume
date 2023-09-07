import { createRoot } from 'react-dom/client';
import { useEffect, useRef, Fragment } from 'react';
import styles from './style.less';

const YourComponent = () => {
    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const secondRef = useRef(null);

    useEffect(() => {
        const hourRoot = createRoot(hourRef.current);
        const minuteRoot = createRoot(minuteRef.current);
        const secondRoot = createRoot(secondRef.current);

        const intervalId = setInterval(countDown, 1000);
        return () => {
            clearInterval(intervalId);
        };

        function countDown() {
            const time = new Date();
            const h = time.getHours().toString().padStart(2, '0');
            const m = time.getMinutes().toString().padStart(2, '0');
            const s = time.getSeconds().toString().padStart(2, '0');
            flipCards(hourRoot, hourRef.current, h);
            flipCards(minuteRoot, minuteRef.current, m);
            flipCards(secondRoot, secondRef.current, s);
        }

        function flipCards(root, dom, nextTime) {
            const curValue = dom.dataset.number;
            if (nextTime === curValue) {
                return;
            }

            const cardContent = (
                <Fragment>
                    <div className={`${styles.card1} ${styles.card}`}>{nextTime}</div>
                    <div className={`${styles.card2} ${styles.card}`}>{nextTime}</div>
                    <div className={`${styles.card3} ${styles.card}`}>{curValue || nextTime}</div>
                    <div className={`${styles.card4} ${styles.card}`}>{curValue || nextTime}</div>
                </Fragment>
            );
            root.render(cardContent)

            dom.classList.remove('flip');
            dom.clientHeight;
            dom.classList.toggle('flip');
            dom.dataset.number = nextTime;
        }
    }, []);

    return (
        <div className={styles.time}>
            <div id="card-h" ref={hourRef} className={`${styles.card_container} ${styles.flip}`} />
            <div id="card-m" ref={minuteRef} className={`${styles.card_container} ${styles.flip}`} />
            <div id="card-s" ref={secondRef} className={`${styles.card_container} ${styles.flip}`} />
        </div>
    );
};

export default YourComponent;