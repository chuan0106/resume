import { FC, useState, useEffect, memo } from 'react'
import styles from './style.less'
import { useDispatch } from 'umi';
import { connect } from 'dva';
import { message, Tooltip, Modal, Image } from 'antd'
import { GithubOutlined, FilePdfOutlined } from '@ant-design/icons';
import user from './user'
import Theme from '@/components/Theme'
import PdfDom from './PdfDom'

import web2023 from '@/assets/common/web2023.png'
import logo from '@/assets/zangxiaochaun.jpg'

const contentStyleShow = {
    display: 'block',
}
const contentStyleHide = {
    display: 'none',
}
const data = [
    { name: '简介', id: 1 },
    { name: '项目', id: 2 },
    { name: '技能', id: 3 },
    { name: '公司', id: 4 },
]
// input 显示内容
const inputName = [
    { name: 'React', id: 1, type: true },
    { name: 'Vue', id: 2, type: true },
    { name: 'webpack', id: 3, type: true },
    { name: 'umi', id: 4 },
    { name: 'antd', id: 5 },
    { name: 'Jquery', id: 6 },
    { name: 'CSS3', id: 7 },
]
const listData = [
    { name: '地址', text: '河南周口', id: 1 },
    { name: '手机号', text: '17513790106', id: 2 },
    { name: '邮箱', text: 'xiaochuan199916@sina.com', id: 3 },
    { name: 'csdn', text: 'blog.csdn.net/chuan0106', id: 4 },
    { name: 'github', text: 'github.com/chuan0106', id: 5 },
]

const Index: FC = ({ resumeType }: { resumeType: String }) => {
    const dispatch = useDispatch();
    const
        [placeholder, setPlaceholder] = useState(inputName[0]),  // 首次从1开始
        [randomIndex, setRandomIndex] = useState(1),  // 3秒后从1开始依次播放
        [mouseUser, setMouseUser] = useState(false),  // 用户鼠标移入移出
        [isModalOpen, setIsModalOpen] = useState(false),  // modal 展示开关
        [visible, setVisible] = useState(false);  // 图片展示开关

    useEffect(() => {
        let timer = setTimeout(() => {
            initPlaceholder(randomIndex)
        }, 3000);
        return () => {
            clearTimeout(timer)
        }
    }, [placeholder, randomIndex])

    const initPlaceholder = (subscript: any) => {
        subscript >= inputName.length - 1 ? setRandomIndex(0) : setRandomIndex(randomIndex + 1);
        setPlaceholder(inputName[randomIndex])
    }
    // 接收传递过来的id做判断给指定的样式 从id=7开始 样式就有点小小的不一样
    const btnStyle = (id: Number) => {
        let style = null
        style = id === 7 ? `${styles.pb_8}  ${styles.border_bottom}`
            : id === 8 ? `${styles.pb_8} ${styles.pt_8}  ${styles.border_bottom}`
                : id === 9 ? `${styles.pt_8}  ${styles.profile_logout}` : null
        return style
    }
    // 修改 left 选中线
    const activeFun = (data: any) => {
        const { id, name } = data

        dispatch({
            type: 'resume/setType',
            payload: name
        });
    }
    // 鼠标移入移出
    const handleMouse = (flag: any) => {
        return () => {
            setMouseUser(flag)
        }
    }
    const copyToClipboardHandler = (data: any) => {
        const { name, text } = data
        navigator.clipboard?.writeText && navigator.clipboard.writeText(text);
        message.success(`复制${name}成功`)
    }

    const pdfShowHandler = () => {
        // pdf
        // setIsModalOpen(true);
        // 图片形式的pdf
        setVisible(true);
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.toolbar}>
            <div className={styles.toolbar_inside}>
                <div className={styles.toolbar_container}>
                    <div className={styles.toolbar_container_left}>
                        <div className={`${styles.toolbar_logo} ${styles.toolbar_subMenu_box} ${styles.toolbar_fl}`} >
                            <p>在线简历</p>
                        </div>
                        <ul className={`${styles.toolbar_menus} ${styles.toolbar_fl}`}>
                            {data.map((data, index) => (
                                <li onClick={() => { activeFun(data) }} className={resumeType === data.name ? styles.active : null} key={index}>
                                    <a >{data.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.toolbar_container_middle}>
                        <div className={`${styles.toolbar_search} ${styles.onlySearch}`}>
                            <div className={styles.toolbar_search_container}>
                                <span style={!placeholder.type ? { display: 'none' } : null} className={styles.icon_fire}></span>
                                <input autoComplete='off' readOnly placeholder={placeholder.name} type="text" />
                                <button>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.toolbar_container_right}>
                        <div className={`${styles.toolbar_btnS} ${styles.onlyUser}`}>
                            <div onMouseEnter={handleMouse(true)}
                                onMouseLeave={handleMouse(false)} className={`${styles.toolbar_btn} ${styles.toolbar_btn_user} ${styles.toolbar_fl} ${styles.toolbar_subMenu_box}  ${mouseUser ? styles.toolbar_btn_user_action : null} `}>
                                <a className={styles.hasAvatar} href="">
                                    <img src={logo} alt="" />
                                </a>
                                {/* 用户触碰显示 */}
                                <div className={styles.toolbar_plugin} style={mouseUser ? contentStyleShow : contentStyleHide}>
                                    <div className={styles.profile_top}>
                                        <a className={styles.profile_avatar} href="">
                                            <img src={logo} alt="" />
                                        </a>
                                        <p className={styles.profile_nickName}>臧小川</p>
                                        <a className={styles.profile_no_vip} href=""></a>
                                    </div>
                                    <div className={styles.profile_middle}>
                                        <a href="">
                                            <i>{user.age}</i>
                                            AGE
                                        </a>
                                        <a href="">
                                            <i>{user.height}</i>
                                            CM
                                        </a>
                                        <a href="">
                                            <i>{user.weight}</i>
                                            KG
                                        </a>
                                    </div>
                                    <div className={styles.profile_bottom}>
                                        <ul className={styles.border_bottom}>
                                            {listData.map((data, index) => (
                                                <li onClick={() => { copyToClipboardHandler(data) }} className={btnStyle(data.id)} key={index}>
                                                    <a key={index} >
                                                        <i style={{
                                                            backgroundPositionX: 0,
                                                            // 循环精灵图
                                                            backgroundPositionY: 0 - index * 16 + 'px'
                                                        }}></i>
                                                        {data.text}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <a href='https://github.com/chuan0106/resume' target="_blank" className={`${styles.toolbar_btn}  ${styles.toolbar_fl} `}>
                                <Tooltip placement="bottom" title={<span>Github</span>}><GithubOutlined style={{ color: 'var(--text-1)' }} className={styles.github} /></Tooltip>
                            </a>

                            <div onClick={pdfShowHandler} className={`${styles.toolbar_btn}  ${styles.toolbar_fl} `}>
                                <Tooltip placement="bottom" title={<span>PDF文件</span>}><FilePdfOutlined style={{ color: 'var(--text-1)' }} className={styles.pdf} /></Tooltip>
                            </div>
                            <div className={`${styles.toolbar_btn} ${styles.toolbar_btn_write} ${styles.toolbar_fl} `}>
                                <Theme />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                style={{ display: 'none' }}
                src={web2023}
                preview={{
                    visible,
                    src: web2023,
                    onVisibleChange: (value) => {
                        setVisible(value);
                    },
                }}
            />
            <Modal width={'900px'} closeIcon={false} okText={'确认'} cancelText={'取消'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <PdfDom />
            </Modal>
        </div >
    );
};
const mapDispatchToProps = ({ resume }: { resume: any }) => {
    return { resumeType: resume.type }
}

export default connect(mapDispatchToProps)(memo(Index));
