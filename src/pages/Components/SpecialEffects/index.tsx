import { useEffect, useRef, Fragment } from 'react';
import styles from './style.less'
import { connect } from 'dva';
import { particle, rain } from '@/components/RainEffect'


const Index = ({ theme }: { theme: String }) => {
    const rainRef = useRef(null)
    const particleRef = useRef(null)
    let animationFrameId = useRef(null);
    useEffect(() => {
        if (theme && theme === 'light') {
            const canvas = document.querySelector('#particle');
            const ctx = canvas.getContext("2d");
            animationFrameId.current = particle(ctx, canvas);
        }
        if (theme && theme === 'dark') {
            const canvas = document.querySelector('#rain');
            const ctx = canvas.getContext("2d");
            animationFrameId.current = rain(ctx, canvas);
        }
        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
    }, [theme])

    return (
        <Fragment>
            {theme === 'light' ? <canvas ref={particleRef} className={`${styles.canvas} `} id="particle"></canvas> : null}
            {theme === 'dark' ? <canvas ref={rainRef} className={`${styles.canvas} `} id="rain"></canvas> : null}
        </Fragment>
    );
};
function mapDispatchToProps({ resume }) {
    return {
        theme: resume.theme
    }
}
export default connect(mapDispatchToProps)(Index);
