import { Fragment } from 'react';
import styles from './style.less';
import Toolbar from './Components/Toolbar';
import UserSkin from './Components/UserSkin';
import SpecialEffects from './Components/SpecialEffects'

const Index = () =>
{
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
