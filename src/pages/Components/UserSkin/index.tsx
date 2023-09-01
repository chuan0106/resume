import styles from './style.less'
import ProfileHead from './ProfileHead'
import Main from './Main'
const Index = () => {
    return (
        <div className={styles.userSkinContainer}>
            <ProfileHead />
            <Main />
        </div>
    );
};
export default Index