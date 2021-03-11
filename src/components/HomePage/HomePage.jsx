import PhotosTable from '../PhotosTable/PhotosTable';
import styles from './HomePage.module.scss';

const HomePage = (props) => {
    return <div className={styles['container']}>
        <PhotosTable start={0} limit={6}></PhotosTable>
    </div>;
};

export default HomePage;
