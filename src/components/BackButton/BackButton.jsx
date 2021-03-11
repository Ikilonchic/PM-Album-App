import { useHistory } from "react-router";
import styles from './BackButton.module.scss';

const BackButton = () => {
    const history = useHistory();
    return <button
        className={styles['btn']}
        onClick={history.goBack}>Back</button>;
};

export default BackButton;
