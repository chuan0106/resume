import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'umi';
// import { dispatch } from 'umi';
const useTheme = (active_theme) =>
{
    const dispatch = useDispatch();
    // console.log(useDispatch, 222);
    const LOCAL_KEY = '__theme__';
    // 如果浏览器存有 LOCAL_KEY 的值则选 其次选取父级 根据场景选择使用
    const [theme, setTheme] = useState(useRef(localStorage.getItem(LOCAL_KEY) || active_theme).current)

    // dark处于黑暗主题
    const match = matchMedia('(prefers-color-scheme: dark)')

    function followOS ()
    {
        if (match.matches)
        {
            document.documentElement.dataset.theme = 'dark';
            setTheme('dark')
        } else
        {
            document.documentElement.dataset.theme = 'light';
            setTheme('light')
        }
        dispatch({
            type: 'resume/save', // 触发myModel命名空间下的fetchData方法
            payload: theme
        });
    }

    useEffect(() =>
    {
        localStorage.setItem(LOCAL_KEY, theme);
        // 判断是否需要系统跟随
        if (1)
        {
            followOS()
            match.addEventListener('change', followOS)
        } else
        {
            document.documentElement.dataset.theme = theme;
            match.removeEventListener('change', followOS)
        }
        return () =>
        {
            match.removeEventListener('change', followOS)
        }
    }, [theme])

    // // // 监测父级按钮传递过来的值
    // useEffect(() =>
    // {
    //     if (active_theme === 'OS')
    //     {
    //         followOS()
    //         match.addEventListener('change', followOS)
    //     } else
    //     {
    //         setTheme(active_theme)
    //         localStorage.setItem(LOCAL_KEY, active_theme);
    //     }
    //     return () =>
    //     {
    //         match.removeEventListener('change', followOS)
    //     }
    // }, [active_theme])
    return theme
}

export default useTheme


