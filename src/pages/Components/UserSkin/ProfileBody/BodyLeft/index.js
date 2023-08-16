import styles from './style.less'
import ProjectCategory from './ProjectCategory'
const Index = () =>
{

    return (
        <div className={styles.user_profile_aside}>
            <div className={`${styles.user_achievement} ${styles.user_profile_aside_common_box}`}>
                <div className={styles.aside_common_box_head}>个人优势</div>
                <div className={styles.aside_common_box_content}>
                    <div className={styles.navContainer}>
                        {`1. 通过官方文档和相关视频自学前端开发
                        2. 在博客中分享遇到的问题以及解决方法
                        3. 有BS/CS端开发经验
                        `}
                    </div>
                </div>
            </div>
            <div className={`${styles.user_profile_aside_common_box}`}>
                <div className={styles.aside_common_box_head}>专业技能</div>
                <div className={styles.aside_common_box_content}>
                    <div className={styles.navContainer}>
                        {`1.DIV+CSS+JavaScript（ES5，ES6）基本WEB开发技术
                          2.熟悉W3C标准，能够有效解决和改善主流浏览器的兼容性问题
                          3.熟练使用jQuery，bootstrap搭建页面
                          4.熟练使用VUE全家桶以及React、umi、dva、antd等相关技术
                          5.了解npm、yarn、git、svn、webpack等开发工具的使用
                          6.可以使用nodejs+mongoDB进行后台搭建
                        `}
                    </div>
                </div>
            </div>
            <ProjectCategory />
        </div>
    );
};
export default Index