import { history, } from 'umi'
import pathToRegexp from 'path-to-regexp';
import { projectType } from '@/constants/projectConfig';

// 路径错误返回地址
export function routerError ({ route: { routes }, location })
{
    const { pathname } = location;
    let isYes = true;
    if (routes)
    {
        for (const elem of routes)
        {
            if (elem?.path && pathToRegexp(elem?.path).test(pathname))
            {
                isYes = false;
            } else
            {
                if (!elem.path)
                {
                    if (isYes)
                    {
                        if (!document.referrer)
                        {
                            history.push({ pathname: '/' });
                        } else
                        {
                            history.goBack(-1);
                        }
                    }
                }
            }
        }
    }
}
// 得到 projectName = 小川 => name or title 的title
export function getPageTitle ({ route: { routes }, location })
{
    const { pathname } = location;
    let title = projectType.projectName;
    for (let element in routes)
    {
        if (routes.hasOwnProperty(element))
        {
            if (routes[element].path && pathToRegexp(routes[element].path).test(pathname))
            {
                title = projectType.projectName + `-${routes[element].name}`;
            }
        }
    }
    return title;
}
