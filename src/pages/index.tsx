import { Fragment, lazy, Suspense } from 'react';
const Main = lazy(() => import('./main'));
import Loading from '@/components/Loading'
const Index = () => {
    return (
        <Fragment>
            <Suspense fallback={<Loading />}>
                <Main />
            </Suspense>
        </Fragment>
    );
};

export default Index;