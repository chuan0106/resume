import { useState, useEffect, useRef } from 'react'

const useTheme = () =>
{
    console.log('执行了');
    const LOCAL_KEY = '__theme__';
    const [theme, setTheme] = useState(useRef(localStorage.getItem(LOCAL_KEY) || 'light').current)

    // dark处于黑暗主题
    const match = matchMedia('(prefers-color-scheme: dark)')
    match.addEventListener('change', followOS)
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
    }

    useEffect(() =>
    {
        localStorage.setItem(LOCAL_KEY, theme);
        // 判断是否需要系统跟随
        if (theme === 'OS')
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
    return theme
}

export default useTheme
