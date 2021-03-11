import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const propTypes = {
    className: PropTypes.string,
};

const Header = (props) => {
    const children = React.Children.toArray(props.children);

    return <header className={styles['container']}>
        <nav className={styles['container__inner']}>
            <ul className={styles['container__menu']}>
                {children.map((elem, index) => <li key={index} className={styles['container__element']}>{elem}</li>)}
            </ul>
        </nav>
    </header>;
};

Header.propTypes = propTypes;

export default Header;
