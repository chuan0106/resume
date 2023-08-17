import styles from './style.less'
import BodyMiddle from './BodyMiddle'
const Index = () =>
{
    return (
        <div className={styles.user_profile_body}>
            <div className={styles.user_profile_body_inner}>
                <div className={styles.user_profile_body_middle}>
                    <BodyMiddle />
                </div>
            </div>
        </div>
    );
};
export default Index


