import { useEffect } from 'react'
import { connect } from 'dva';
import styles from './style.less'
import { companys } from '@/pages/data/data';
import ProfileAsideCommonBox from '@/components/ProfileAsideCommonBox'
import { boxContentArr } from '@/pages/data/companys/data'

import * as echarts from 'echarts';
const Index = () =>
{
    useEffect(() =>
    {
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            animationDuration: 3000,
            tooltip: {
                trigger: 'item',
                borderWidth: 1,
                textStyle: {
                    color: '#939393',
                    fontSize: '14'
                },
                formatter: function (params)
                {
                    return params.name + ": " + params.value + "天"; // 添加单位
                }
            },

            legend: {
                top: '5%',
                left: 'center',
                show: true,
                top: 'top',
                orient: 'horizontal',
                data: companys.map(function (project)
                {
                    return {
                        name: project.name,
                        icon: 'pin',
                        textStyle: {
                            color: 'var(--text-1)'
                        }
                    };
                })
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#f9f9f9',
                            formatter: '{b}: {c}'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: companys.map(function (project)
                    {
                        return {
                            name: project.name,
                            value: project.value,
                            itemStyle: {
                                color: project.color
                            }
                        };
                    })
                }
            ],
        };
        option && myChart.setOption(option);

    }, [])
    return (
        <div className={styles.user_profile_body}>
            <div className={styles.user_profile_body_inner}>
                <div className={styles.user_profile_body_left}>
                    <div className={styles.navList_box}>
                        <div className={styles.mainContent}>
                            {companys.map((item, i) => (
                                <article key={i} className={styles.list_box}>
                                    <a target="_blank" href={item.src} >
                                        <div className={styles.img_box}>
                                            {item?.logo ? <img className={styles.course_img} src={item.logo} /> : null}
                                        </div>
                                        <div className={styles.list_box_con}>
                                            <div>
                                                <div className={styles.list_box_top}>
                                                    <h4>{item.name}</h4>
                                                </div>
                                                <div className={styles.list_content}>{item.jianjie}</div>
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
                </div>
                <div className={styles.user_profile_body_right}>
                    <div className={styles.user_profile_aside}>
                        {boxContentArr.map(item => <ProfileAsideCommonBox key={`${item.title}${item.id}`} {...item} />)}
                        <div className={`${styles.user_achievement} ${styles.user_profile_aside_common_box}`}>
                            <div className={styles.aside_common_box_head}>在职时间</div>
                            <div className={styles.chart_common_box_content}>
                                <div className={styles.main} id='main' ></div>
                            </div>
                        </div>
                    </div>
                </div>
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
