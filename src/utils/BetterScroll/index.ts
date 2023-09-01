import BScroll from '@better-scroll/core'  // BScroll 核心
import Movable from '@better-scroll/movable'  // BScroll 活动
import MouseWheel from '@better-scroll/mouse-wheel'
BScroll.use(MouseWheel)
BScroll.use(Movable) // 活动



// Y轴滚动
export const BS = (wrapper, setBsContainer = false, action = false,) =>
{

    const { payload } = action
    if (wrapper)
    {
        if (typeof wrapper === 'string')
        {
            let wrapperRef = document.querySelector('#' + wrapper)
            deploy(wrapperRef ? wrapperRef : null, setBsContainer ? setBsContainer : null, payload ? payload.callback : null)
        } else
        {
            deploy(wrapper ? wrapper : null, setBsContainer ? setBsContainer : null, payload ? payload.callback : null)
        }
    }
}
// Y轴配置
const deploy = (wrapper, setBsContainer, callback) =>
{
    let bs = new BScroll(wrapper, {
        bindToTarget: true,
        scrollX: false,
        scrollY: true,
        freeScroll: true,
        movable: true,
        mouseWheel: true,
        startX: 20,
        startY: 20
    })

    if (setBsContainer) setBsContainer(bs)  // 用于保存 bs 对象

    bs.on('scroll', position =>
    {
        if (callback)
        {
            const { scrolled } = callback
            scrolled(position, bs) // 发送两个参数 position 位置  bs 对象
        }
        // 默认情况下 BScroll 是不可以实时监听滚动位置
        // console.log(position); // 实时滚动的位置
    })

    bs.on('scrollEnd', e =>
    {
        // console.log('滚动结束');
    })
}
