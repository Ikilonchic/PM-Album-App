import { useEffect } from 'react';
import { useParams } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import styles from './PhotoPage.module.scss';

import {
    loadCurrentPhoto,
    removeCurrentPhoto,
} from '../../ducks/photos';
import selector from './PhotoPage.selector';
import { Link } from 'react-router-dom';

import BackButton from '../BackButton/BackButton';

const PhotoPage = (props) => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const currentPhoto = useSelector(selector);

    useEffect(() => {
        dispatch(loadCurrentPhoto(id));

        return () => {
            dispatch(removeCurrentPhoto());
        }
    }, []);

    return currentPhoto ? <div className={styles['container']}>
        <BackButton />
        <div className={styles['container__info']}>
            <h1 className={styles['container__title']}>{currentPhoto.title}</h1>
            <p className={styles['container__details']}>
                <Link to={`/albums/${currentPhoto.albumId}`}>Album</Link>
            </p>
        </div>
        <div className={styles['container__img']}>
            <img src={currentPhoto.url} alt={currentPhoto.title}/>
        </div>
    </div> : null;
};

export default PhotoPage;
