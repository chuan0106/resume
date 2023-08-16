import { connect } from 'dva';
import styles from './style.less'
import { companys } from '@/pages/data/data';
const Index = () =>
{
    return (
        <div className={styles.user_profile_body}>
            <div className={styles.user_profile_body_inner}>
                <div className={styles.user_profile_body_middle}>
                    <div className={styles.navList_box}>
                        <div className={styles.mainContent}>
                            {companys.map((item, i) => (
                                <article key={i} className={styles.list_box}>
                                    <a target="_blank" href={item.src} >
                                        <div className={styles.img_box}>
                                            {item?.logo ? <img className={styles.course_img} src={item.logo} /> : null}
                                        </div>
                                        <div className={styles.list_box_con}>
                                            <div>
                                                <div className={styles.list_box_top}>
                                                    <h4>{item.name}</h4>
                                                </div>
                                                <div className={styles.list_content}>{item.jianjie}</div>
                                            </div>
                                            <div className={styles.list_footer}>
                                                <div className={styles.list_footer_left}>
                                                    <div className={styles.box}><span className={`${styles.article_type} ${styles.article_type_green}`}>开始:</span><span className={styles.text}>{item.time_start}</span></div>
                                                    <div className={styles.box}><span className={`${styles.article_type} ${styles.article_type_red}`}>结束:</span><span className={styles.text}>{item.time_end}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            ))}
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
