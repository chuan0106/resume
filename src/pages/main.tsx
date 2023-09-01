import { Fragment } from 'react';
import styles from './style.less';
import SpecialEffects from './Components/SpecialEffects'
import Toolbar from './Components/Toolbar';
import UserSkin from './Components/UserSkin';
const Index = () => {
    return (
        <Fragment>
            <SpecialEffects />
            <div className={styles.main}>
                <Toolbar />
                <UserSkin />
            </div>
        </Fragment>
    );
};

export default Index;