import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PhotosTable.module.scss';


import {
    loadAllPhotos,
    clearAllPhotos,
} from '../../ducks/photos';
import selector from './PhotosTable.selector';
import Card from './Card/Card';

const propTypes = {
    start: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    albumId: PropTypes.number,
};

const PhotosTable = ({start, limit, albumId}) => {
    const dispatch = useDispatch();

    const photos = useSelector(selector);

    const loadMorePhoto = () => {
        dispatch(loadAllPhotos({
            start: photos.length + start,
            limit,
            albumId
        }));
    };

    useEffect(() => {
        dispatch(loadAllPhotos({
            start,
            limit,
            albumId
        }));

        return () => dispatch(clearAllPhotos());
    }, []);

    return photos.length ? <div className={styles['container']}>
        <div className={styles['container__table']}>
            {photos.map(data => <Card 
                key={data.id}
                id={data.id}
                title={data.title}
                thumbnailUrl={data.thumbnailUrl} />)}
        </div>
        <div className={styles['container__controller']}>
            <button className={styles['container__btn']} onClick={loadMorePhoto}>Load more...</button>
        </div>
    </div> : null;
};

PhotosTable.propTypes = propTypes;

export default PhotosTable;
