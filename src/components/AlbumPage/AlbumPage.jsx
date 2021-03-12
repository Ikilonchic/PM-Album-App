import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AlbumPage.module.scss';

import {
    loadCurrentAlbum,
    removeCurrentAlbum,
} from '../../ducks/albums';
import selector from './AlbumPage.selector';

import BackButton from '../BackButton/BackButton';
import PhotoTable from '../PhotoTable/PhotoTable';

const AlbumPage = (props) => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const currentAlbum = useSelector(selector);

    useEffect(() => {
        dispatch(loadCurrentAlbum(id));

        return () => {
            dispatch(removeCurrentAlbum());
        }
    }, []);

    return currentAlbum ? <div className={styles['container']}>
        <BackButton />
        <div className={styles['container__info']}>
            <h1 className={styles['container__title']}>{currentAlbum.title}</h1>
            {currentAlbum.owner && 
                <p className={styles['container__details']}>{currentAlbum.owner.name} - <a href={`mailto:${currentAlbum.owner.email}`}>Email</a></p>}
        </div>
        <div className={styles['container__photos']}>
            <PhotoTable start={0} limit={6} albumId={id} />
        </div>
    </div> : null;
};

export default AlbumPage;
