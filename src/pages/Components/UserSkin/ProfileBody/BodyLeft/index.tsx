import styles from './style.less'
import ProjectCategory from './ProjectCategory'
import ProfileAsideCommonBox from '@/components/ProfileAsideCommonBox'
import { Personal_advantages, professional_skills } from '@/pages/data/introduction/data'
const Index = () => {
    return (
        <div className={styles.user_profile_aside}>
            <ProfileAsideCommonBox {...Personal_advantages} />
            <ProfileAsideCommonBox {...professional_skills} />
            <ProjectCategory />
        </div>
    );
};
export default Index