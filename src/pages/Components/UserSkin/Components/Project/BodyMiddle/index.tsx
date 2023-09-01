import { useState, useRef } from 'react';
import { connect } from 'dva';
import styles from './style.less'
import message from '@/components/Message'
import { tabBar, projects } from '@/pages/data/data';
import search from '@/assets/search.png'
import search1 from '@/assets/search-1.png'
const Index = () =>
{
    const [activeBar, setActiveBar] = useState(0)
    const [searchShow, setSearchShow] = useState(false)
    const [menu, setMenu] = useState(tabBar[0].content)
    const [byword, setByword] = useState('')
    const inputRef = useRef()
    // 导航部分切换
    const activeHandler = (item, i) =>
    {
        // 高亮切换
        setActiveBar(i)
        // 更改项目内容
        setMenu(item.content)
    }

    const searchHandler = async (e) =>
    {
        try
        {
            await setSearchShow(!searchShow)
            await inputRef.current.focus();
        } catch (err)
        {
            throw err
        }
    }
    // 搜索
    const searchResults = () =>
    {
        setMenu(projects.filter(item =>
        {
            const regex = new RegExp(byword, "g");
            return regex.test(item.项目介绍)
        }))
    }
    // 取消
    const cancelHandler = () =>
    {
        setSearchShow(false)
    }

    const changeHandler = (e) =>
    {
        const { target } = e
        setByword(target.value)
    }
    const modelHandler = (item) =>
    {
        const { title, arrImg, ...newItem } = item

        message(newItem, (close) =>
        {
            close()
        }, title, arrImg)
    }
    return (
        <div className={styles.navList_box}>
            <div className={styles.navList}>
                <ul style={{ display: !searchShow ? 'block' : 'none' }}>
                    {tabBar.map((item, i) => (
                        <li onClick={() => { activeHandler(item, i) }} key={`${item.name}${i}`} className={activeBar === i ? styles.active : null} >
                            {item.name} <span className={styles.nav_num}>{item.num}</span>
                        </li>
                    ))}
                </ul>
                <div className={styles.m_search_input}>
                    <img className={styles.img} title='搜索' src={search} style={{ display: searchShow ? 'block' : 'none' }} alt="" />
                    <input onChange={changeHandler} ref={inputRef} type="text" style={{ display: searchShow ? 'block' : 'none' }} id="mSearchInput" placeholder="搜TA的内容" />
                    <div onClick={searchHandler} style={{ display: searchShow && 'none' }} className={styles.m_search_btn}>
                        <span>搜TA的内容</span>
                        <img style={{ display: !searchShow ? 'block' : 'none' }} src={search1} alt="" className={styles.m_search_img} />
                        <img style={{ display: searchShow ? 'block' : 'none' }} src={search} alt="" className={styles.m_search_hover_img} />
                    </div>
                    <div style={{ display: !searchShow && 'none' }} className={styles.m_search_btn_box}>
                        <span onClick={searchResults} className={styles.m_search_sure}>搜索</span>
                        <span onClick={cancelHandler} className={styles.m_search_cancel}>取消</span>
                    </div>
                </div>
            </div>

            <div className={styles.mainContent}>
                {menu.map((item, i) => (
                    <article key={i} className={styles.list_box}>
                        <a onClick={() => { modelHandler(item) }}>
                            <div className={styles.img_box}>
                                {item?.arrImg ? <img className={styles.course_img} src={item?.arrImg[0]} /> : null}
                            </div>
                            <div className={styles.list_box_con}>
                                <div>
                                    <div className={styles.list_box_top}>
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className={styles.list_content}>{item.项目介绍}</div>
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
    );
};
function mapDispatchToProps ({ resume })
{
    return {
        resume
    }
}
export default connect(mapDispatchToProps)(Index);
