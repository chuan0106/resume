import styles from './style.less'
import Caption from '@/components/Caption'
import ProfileAsideCommonBox from '@/components/ProfileAsideCommonBox'
import { boxContentArr } from '@/pages/data/skill/data'
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
                                              3.熟练使用jQuery，bootstrap搭建页面
                                              4.熟练使用VUE全家桶以及React、umi、dva、antd等相关技术
                                              5.了解npm、yarn、git、svn、webpack等开发工具的使用
                                              6.可以使用nodejs+mongoDB进行后台搭建
                                              7.熟悉模块化开发、组件化开发、提高代码灵活性和复用性，提高代码可维护性`}
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
                                {/* <div className={styles.list_text}>
                                    <blockquote>
                                        <h4>总结</h4>
                                        <p>
                                            <code>说明一下</code>
                                            我以强烈的自主学习能力、问题解决能力以及多样化学习方法为基础，不断推动自己跟随技术发展。我的持续学习和适应能力使我能够快速掌握新技术，并将其应用于实际项目中，为团队的成功做出贡献。
                                        </p>
                                    </blockquote>
                                </div> */}

                            </article>
                        </div>
                        <div >

                        </div>
                    </div>
                </div>
                <div className={styles.user_profile_body_right}>
                    <div className={styles.user_profile_aside}>
                        {boxContentArr.map(item => <ProfileAsideCommonBox key={`${item.title}${item.id}`} {...item} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index