import * as echarts from 'echarts';
export const lineCharts = (dom, data, color, chartHandler, chart) =>
{
    var chartDom = dom
    var myChart = echarts.init(chartDom, null, { passive: true });
    var option;
    chartHandler(myChart)

    function run (_rawData)
    {
        const countries = [
            'React',
            'Vue',
            'Jquery'
        ];

        const datasetWithFilters = [];
        const seriesList = [];
        echarts.util.each(countries, function (project)
        {
            var datasetId = 'dataset_' + project;
            datasetWithFilters.push({
                id: datasetId,
                fromDatasetId: 'dataset_raw',

                transform: {
                    type: 'filter',
                    config: {
                        and: [
                            { dimension: 'ProjectName', '=': project }
                        ]
                    }
                }
            });

            seriesList.push({
                type: 'line',
                datasetId: datasetId,
                showSymbol: false,
                name: project,
                labelLayout: {
                    moveOverlap: 'shiftY'
                },
                emphasis: {
                    focus: 'series'
                },
                encode: {
                    x: 'Year',
                    y: 'quantity',
                    label: ['ProjectName', 'quantity'],
                    itemName: 'Year',
                    tooltip: ['quantity']
                },
                lineStyle: {
                    type: 'solid' // 将折线设置为虚线
                }
            });

        });

        option = {
            animationDuration: 3000,
            color: ['#149eca', '#42b883', '#78cff5'],
            legend: {
                show: true, // 显示图例
                top: 'top', // 控制图例的位置
                orient: 'horizontal', // 设置图例的排列方式，可以是水平（'horizontal'）或垂直（'vertical'）
                // 根据项目名称数组生成自定义的图例项
                data: countries.map(function (project)
                {
                    return {
                        name: project,
                        icon: 'pin', // 使用自定义的图例标记，这里使用了圆形
                        textStyle: {
                            color: 'var(--text-1)' // 设置图例文本的颜色
                        }
                    };
                })
            },
            // 其他配置项...
            dataset: [
                {
                    id: 'dataset_raw',
                    source: _rawData
                },
                ...datasetWithFilters
            ],
            // title: {
            //     text: 'Income of Germany and France since 1950'
            // },
            tooltip: {
                order: 'valueDesc',
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                nameLocation: 'middle',
                axisTick: {
                    show: false,  //是否显示网状线 默认为true
                    alignWithLabel: true
                },
                axisLabel: {
                    show: true,  //这里的show用于设置是否显示x轴下的字体 默认为true
                    interval: 0,  //可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推。
                    textStyle: {   //textStyle里面写x轴下的字体的样式
                        color,
                        fontSize: 13
                    }
                },
                // axisLine: {
                //     lineStyle: {
                //         color: '#ccc', // 修改x轴线条的颜色
                //         width: 1, // 修改x轴线条的宽度
                //         type: 'solid' // 修改x轴线条的类型
                //     }
                // },
                // splitLine: {
                //     show: true, // 显示X轴网格线
                //     lineStyle: {
                //         color: '#ccc', // 修改x轴线条的颜色
                //         width: 1, // 修改x轴线条的宽度
                //         type: 'solid' // 修改x轴线条的类型
                //     }
                // }
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
                top: 33,
                left: 25,
                bottom: 20,
                right: 0,

            },
            series: seriesList
        };
        myChart.setOption(option);

    }
    run(data)
}

