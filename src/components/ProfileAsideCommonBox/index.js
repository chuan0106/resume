import styles from './style.less'
const Index = ({ title, text }) =>
{
    return (
        <div className={`${styles.user_achievement} ${styles.user_profile_aside_common_box}`}>
            <div className={styles.aside_common_box_head}>{title}</div>
            <div className={styles.aside_common_box_content}>
                <div className={styles.navContainer}>
                    <span>{text}</span>
                </div>
            </div>
        </div>
    );
};
export default Index