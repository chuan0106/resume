import { connect } from 'dva';
import styles from './style.less'
const Index = () =>
{
    return (
        <div className={styles.user_profile_body}>
            <div className={styles.user_profile_body_inner}>
                <div className={styles.user_profile_body_middle}>
                    <div className={styles.navList_box}>
                        <div className={styles.mainContent}>
                            <article className={styles.list_box}>
                                <a >
                                    <div className={styles.list_box_con}>
                                        <div>
                                            <div className={styles.list_box_top}>
                                                <h4>{!true ? '安阳师范学院' : '无学历'}</h4>
                                            </div>
                                            <div className={styles.list_content}>鄙人不才，无学习经历。。。。</div>
                                        </div>
                                        <div className={styles.list_footer}>
                                            <div className={styles.list_footer_left}>
                                                <div className={styles.box}><span className={`${styles.article_type} ${styles.article_type_green}`}>开始:</span><span className={styles.text}>0000</span></div>
                                                <div className={styles.box}><span className={`${styles.article_type} ${styles.article_type_red}`}>结束:</span><span className={styles.text}>0000</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
function mapDispatchToProps ({ resume })
{
    return {
        resume
    }
}
export default connect(mapDispatchToProps)(Index);
