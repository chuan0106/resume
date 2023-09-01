import styles from './style.less'
const index = ({ children }) =>
{
    return (
        <h3 className={styles.heading_h3}>
            {children}
        </h3>

    );
};
export default index
