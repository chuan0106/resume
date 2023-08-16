import { useState, useEffect, useRef, memo } from 'react';
import styles from './style.less'
import { useDispatch } from 'umi';
import { connect } from 'dva';
import pu from '@/assets/nav/pu.png'
import itemImg from '@/assets/nav/item.png'
import itemActiveImg from '@/assets/nav/itemActive.png'

import gl from '@/assets/nav/gl.png'
import jy from '@/assets/nav/jy.png'
import kj from '@/assets/nav/kj.png'
import ms from '@/assets/nav/ms.png'
import ty from '@/assets/nav/ty.png'
import wgbj from '@/assets/nav/wgbj.png'
import wgll from '@/assets/nav/wgll.png'
import wl from '@/assets/nav/wl.png'
import ws from '@/assets/nav/ws.png'

// 二级导航图片
import gy from '@/assets/nav/gy.png'


const navData = [
    {
        name: '项目', id: 1, rotate: 0, img: wgbj
    },
    {
        name: '公司', id: 2, ysss: gy, rotate: 40, img: wgll
    },
    {
        name: '学校', id: 5, rotate: 160, img: gl
    },
    {
        name: '简介', id: 6, rotate: 200, img: ty
    },
    {
        name: '意向', id: 7, rotate: 240, img: kj
    },
    {
        name: '技能', id: 8, rotate: 280, img: jy
    },
    {
        name: '其他', id: 9, rotate: 320, img: ws
    },
]
const Index = ({ resumeType }) =>
{
    const dispatch = useDispatch();
    const LOCAL_KEY = '__ballRecord__';
    const [theme, setTheme] = useState(useRef(sessionStorage.getItem(LOCAL_KEY) || false).current)
    const [isShow, setIsShow] = useState(false)
    const [rotate, setRotate] = useState(0)
    const [menuData, setMenuData] = useState(navData[0].child)
    const [navDataActive, setNavDataActive] = useState(1)
    const [menuDataActive, setMenuDataActive] = useState(null)

    useEffect(() =>
    {

    }, [])
    const handleMouse = (flag) =>
    {
        return () =>
        {
            setIsShow(flag)
        }
    }
    const click = () =>
    {
        if (!theme)
        {
            sessionStorage.setItem(LOCAL_KEY, true);
            setTheme(true)
        }
        setIsShow(!isShow)

    }
    // 选中高亮以及更换2级菜单数据以及清空高亮状态
    const navClick = (data, rotate) =>
    {
        setRotate(rotate)
        setNavDataActive(data.id)
        setMenuData(data.child)
        setMenuDataActive(null)
        dispatch({
            type: 'resume/setType',
            payload: data.name
        });
    }
    // 选中高亮
    const menuClick = (data) =>
    {
        setMenuDataActive(data.id)
    }

    const handleMouseOver = (event) =>
    {
        event.stopPropagation();

    };
    return (
        <div
            // style={{ transform: `rotate(-${rotate}deg)`, transition: 'all 1s' }}
            className={isShow ? styles.container : styles.containerActive}>
            {/* <Popover content={!theme ? '点击一下试试~' : ''} placement="rightTop" trigger="hover"> */}
            <a className={styles.menu_toggler} onClick={click}>
                <img onMouseOver={handleMouseOver} style={isShow ? { transform: 'scale(1)', transition: 'all 1s' } : { transform: 'scale(.8)', transition: 'all 1s' }} src={pu} alt="" />
            </a>

            <div style={isShow ? { transform: 'scale(1)', transition: 'all 1s' } : { transform: 'scale(.3)', transition: 'all 1s' }} className={isShow ? styles.menuWarp : styles.menuWarpActive}>
                <nav className={styles.menu}>
                    <ul>
                        {navData.map((data, index) => (
                            <li style={isShow ? { transform: `rotate(${360 / navData.length * index}deg) translateX(-115px)` } : null} key={index} className={`${styles.menu_item} ${isShow && styles.menu_item_active} `}  >
                                <a
                                    onClick={() => { navClick(data, 360 / navData.length * index) }}
                                    // className={styles.nav_item}
                                    style={navDataActive === data.id ? { backgroundImage: `url(${itemActiveImg} )`, backgroundSize: '100% 100%', transform: `rotate(-${360 / navData.length * index}deg)`, transition: 'all 1s' } :
                                        { backgroundImage: `url(${itemImg} )`, backgroundSize: '100% 100%', transform: `rotate(-${360 / navData.length * index}deg)`, transition: 'all 1s' }}
                                    className={`${styles.nav_item} ${resumeType === data.name ? styles.nav_item_active : null}`}
                                >
                                    <img style={{ width: '20px', height: '20px' }} src={data.img} alt={data.name} />
                                    <span> {data.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* </Popover> */}
        </div >
    );
};
const mapDispatchToProps = ({ resume }) =>
{
    return { resumeType: resume.type }
}

export default connect(mapDispatchToProps)(memo(Index));
