import { memo } from 'react'
import { connect } from 'dva';
import Introduction from './Components/Introduction'  // 简介
import Project from './Components/Project'  // 项目
import Company from './Components/Company'  // 公司
import Schools from './Components/Schools'  // 学校
import Skill from './Components/Skill'  // 技能
const Index = ({ resumeType }) =>
{
    const map = {
        '简介': () => <Introduction />,
        '项目': () => <Project />,
        '学校': () => <Schools />,
        '技能': () => <Skill />,
        '公司': () => <Company />,
    }
    if (map[resumeType])
    {
        return map[resumeType]()
    }
};

const mapDispatchToProps = ({ resume }) =>
{
    return { resumeType: resume.type }
}

export default connect(mapDispatchToProps)(memo(Index));
