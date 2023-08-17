import { connect } from 'dva';
import styles from './style.less'
import Caption from '@/components/Caption'
const Index = () =>
{
    return (
        <div className={styles.user_profile_body}>
            <div className={styles.user_profile_body_inner}>
                <div className={styles.user_profile_body_left}>
                    <div className={styles.navList_box}>
                        <div className={styles.mainContent}>
                            <article className={styles.list_box}>
                                <div className={styles.list_text}>
                                    <blockquote>
                                        <p>
                                            {`1.DIV+CSS+JavaScript（ES5，ES6）基本WEB开发技术
                                          2.熟悉W3C标准，能够有效解决和改善主流浏览器的兼容性问题
                                          3.熟悉使用nodejs+mongoDB进行后台搭建
                                          4.熟悉使用jQuery，bootstrap以及Vue主流前端框架
                                          5.熟悉使用Vue、Vuex、Vue-Router技术、组件化开发，有vue项目开发经验
                                          6.熟悉使用React、umi、dva、antd等技术，且有React开发经验
                                          7.了解npm、yarn、git、svn、webpack等开发工具的使用`}
                                        </p>
                                    </blockquote>
                                </div>
                            </article>
                            <article className={styles.list_box}>
                                <div className={styles.list_text}>
                                    <Caption>自主学习</Caption>
                                    <span>
                                        持续通过在线教程、官方文档和书籍自学前端开发，独立掌握HTML、CSS和JavaScript等核心技术。
                                        制定并执行学习计划，不断学习新技术、框架和工具，以不断提升技术水平。
                                    </span>
                                </div>

                                <div className={styles.list_text}>
                                    <Caption>解决问题能力</Caption>
                                    <span>
                                        在学习过程中积极寻找并解决技术难题，如跨浏览器兼容性和性能优化等，以确保项目的顺利进行。
                                        通过仔细的独立调查和尝试不同方法，克服了多个复杂的技术挑战。
                                    </span>
                                </div>

                                <div className={styles.list_text}>
                                    <Caption>持续学习与跟进</Caption>
                                    <span>
                                        积极关注前端领域的最新趋势和发展，通过订阅博客、参加在线课程和研讨会等方式持续学习和更新技术知识。
                                        在过去一年内，学习并掌握了Vue.js和React等流行前端框架，将其应用于个人项目中。
                                    </span>
                                </div>
                                <div className={styles.list_text}>
                                    <blockquote>
                                        <h4>总结</h4>
                                        <p>
                                            <code>说明一下</code>
                                            我以强烈的自主学习能力、问题解决能力以及多样化学习方法为基础，不断推动自己跟随技术发展。我的持续学习和适应能力使我能够快速掌握新技术，并将其应用于实际项目中，为团队的成功做出贡献。
                                        </p>
                                    </blockquote>
                                </div>

                            </article>
                        </div>
                        <div >

                        </div>
                    </div>
                </div>
                <div className={styles.user_profile_body_right}>
                    <div className={styles.user_profile_aside}>
                        <div className={`${styles.user_achievement} ${styles.user_profile_aside_common_box}`}>
                            <div className={styles.aside_common_box_head}>个人优势</div>
                            <div className={styles.aside_common_box_content}>
                                <div className={styles.navContainer}>
                                    {`1. 床前明月光
                                      2. 疑是地上霜
                                      3. 举头望明月
                                      4. 低头思故乡`}
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.user_profile_aside_common_box}`}>
                            <div className={styles.aside_common_box_head}>专业技能</div>
                            <div className={styles.aside_common_box_content}>
                                <div className={styles.navContainer}>
                                    {`1.天长地久有时尽，此恨绵绵无绝期。
                                      2.落花有意随流水，流水无心恋落花。
                                      3.多情只有春庭月，犹为离人照落花。
                                      4.楼头残梦五更钟，花底离愁三月雨。
                                      5.半醉半醒半浮生。欲将心事付瑶琴。
                                      6.用我三生烟火,换你一世迷离。
                        `}
                                </div>
                            </div>
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
