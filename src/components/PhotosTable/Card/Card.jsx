import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const propTypes = {
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
};

const Card = (props) => <div className={styles['container']}>
    <Link to={`/photos/${props.id}`}>
        <img src={props.thumbnailUrl} alt={props.title}/>
    </Link>
</div>;

Card.propTypes = propTypes;

export default Card;
