import { FC, memo } from 'react'
import { connect } from 'dva';
import Introduction from './Components/Introduction'  // 简介
import Project from './Components/Project'  // 项目
import Skill from './Components/Skill'  // 技能
import Company from './Components/Company'  // 公司
// import Schools from './Components/Schools'  // 学校

interface Props {
    resumeType: string; // 假设 resumeType 是一个字符串类型
}
const Index: FC<Props> = ({ resumeType }: { resumeType: any }) => {
    const map = {
        '简介': () => <Introduction />,
        '项目': () => <Project />,
        '技能': () => <Skill />,
        '公司': () => <Company />,
        // '学校': () => <Schools />,
    }
    if (map[resumeType]) {
        return map[resumeType]()
    }
};

const mapDispatchToProps = ({ resume }: { resume: any }) => {
    return { resumeType: resume.type }
}

export default connect(mapDispatchToProps)(memo(Index));
