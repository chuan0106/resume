import { useState, useEffect, useRef } from 'react';
import styles from './style.less'
import { connect } from 'dva';
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition, LegendComponent, TooltipComponent]);
const Index = ({ theme }) =>
{
    const [chart, setChart] = useState(null)
    const lineRef = useRef()
    const countries = [
        {
            type: 'line',
            name: 'React',
            data: [0, 2, 3, 2],
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
        },
        {
            type: 'line',
            name: 'Vue',
            data: [0, 1, 0, 0],
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
        },
        {
            type: 'line',
            name: 'Jquery',
            data: [1, 0, 0, 0],
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
        }
    ]
    useEffect(() =>
    {
        // 在组件加载时创建Echarts实例
        const echartsInstance = echarts.init(document.getElementById('lineChart'));
        setChart(echartsInstance);
        return () =>
        {
            // 组件卸载时销毁Echarts实例
            echartsInstance.dispose();
        };
    }, []);
    useEffect(() =>
    {
        // 当主题状态改变时更新图表主题
        if (chart)
        {
            updateChartTheme(theme);
        }
    }, [theme]);

    useEffect(() =>
    {
        // 更新图表配置
        if (chart)
        {
            const options = getEchartsOptions();
            chart.setOption(options);
        }
    }, [chart, theme]);

    const updateChartTheme = (newTheme) =>
    {
        const chartTheme = newTheme === 'dark' ? 'dark' : '';
        chart.setOption({ theme: chartTheme });
    };

    const getEchartsOptions = () =>
    {
        const options = {
            animationDuration: 3000,
            // Your Echarts options configuration here
            color: ['#149eca', '#42b883', '#78cff5'],
            xAxis: {
                type: 'category',
                data: ['2020', '2021', '2022', '2023'],
                nameLocation: 'middle',
                axisTick: {
                    show: false,  //是否显示网状线 默认为true
                    alignWithLabel: true
                },
                axisLabel: {
                    color: 'red', // 设置文本颜色
                    fontSize: 13, // 设置字体大小
                }
            },
            yAxis: {
                type: 'value'
            },
            tooltip: { // 鼠标悬浮提示框显示 X和Y 轴数据
                trigger: 'axis',
                backgroundColor: 'rgba(32, 33, 36,.7)',
                borderColor: 'rgba(32, 33, 36,0.20)',
                borderWidth: 1,
                textStyle: { // 文字提示样式
                    color: '#fff',
                    fontSize: '12'
                },
            },
            series: countries,
            legend: {
                show: true, // 显示图例
                top: 'top', // 控制图例的位置
                orient: 'horizontal', // 设置图例的排列方式，可以是水平（'horizontal'）或垂直（'vertical'）
                data: countries.map(function (project)
                {
                    return {
                        name: project.name,
                        icon: 'pin', // 使用自定义的图例标记，这里使用了圆形
                        textStyle: {
                            color: 'var(--text-1)' // 设置图例文本的颜色
                        }
                    };
                })
            },
            yAxis: {
                name: '个',
                minInterval: 1,
                axisLine: { // 坐标轴刻度相关设置。
                    // show: true,
                    alignWithLabel: true,// 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐。
                    interval: 'auto', // 坐标轴刻度的显示间隔，在类目轴中有效。默认同 axisLabel.interval 一样。
                    inside: false, // 坐标轴刻度是否朝内，默认朝外。
                    length: 5, // 坐标轴刻度的长度。
                    lineStyle: { // 刻度线的样式设置。
                        color: "#eee", // 刻度线的颜色，默认取 axisTick.lineStyle.color。
                        width: 1,
                        type: 'dotted', // (实线：'solid'，虚线：'dashed'，星罗棋布的：'dotted')
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: 1,
                    },

                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc', // 修改x轴线条的颜色
                        width: 1, // 修改x轴线条的宽度
                        type: 'dotted' // 修改x轴线条的类型
                    }
                },
                splitLine: {
                    show: true, // 显示X轴网格线
                    lineStyle: {
                        color: '#ccc', // 修改x轴线条的颜色
                        width: 1, // 修改x轴线条的宽度
                        type: 'dotted' // 修改x轴线条的类型
                    }
                }

            },
            grid: {
                top: 35,
                left: 25,
                bottom: 20,
                right: 0,

            },

        };

        if (theme === 'dark')
        {
            // 根据主题设置样式
            options.xAxis.axisLabel.color = 'rgba(255, 255, 255, 0.89)'
            options.yAxis.axisLine.lineStyle.color = 'rgba(255, 255, 255, 0.89)'
            // 其他样式设置...
        }
        if (theme === 'light')
        {
            // 根据主题设置样式
            options.xAxis.axisLabel.color = '#2a4257'
            options.yAxis.axisLine.lineStyle.color = '#2a4257'
            options.series.forEach(item =>
            {
                item.areaStyle = null
            })
        }

        return options;
    };
    return (
        <div className={`${styles.user_profile_aside_common_box}`}>
            <div className={styles.aside_common_box_head}>项目分类</div>
            <div className={styles.aside_common_box_content}>
                <div>
                    <div ref={lineRef} style={{ width: '100%', height: '220px' }} id='lineChart'></div>
                </div>
            </div>
        </div>
    );
};
function mapDispatchToProps ({ resume })
{
    return {
        theme: resume.theme
    }
}
export default connect(mapDispatchToProps)(Index);
