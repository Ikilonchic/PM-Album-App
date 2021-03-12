import styles from './HomePage.module.scss';

import PhotoTable from '../PhotoTable/PhotoTable';

const HomePage = (props) => {
    return <div className={styles['container']}>
        <PhotoTable start={0} limit={6}></PhotoTable>
    </div>;
};

export default HomePage;
