import styles from './style.less'
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight'

const Index = () => {
    return (
        <div className={styles.user_profile_body}>
            <div className={styles.user_profile_body_inner}>
                <div className={styles.user_profile_body_left}>
                    <BodyLeft />
                </div>
                <div className={styles.user_profile_body_right}>
                    <BodyRight />
                </div>
            </div>
        </div>
    );
};

export default Index


