import PropTypes from "prop-types";

import styles from './button.module.scss';

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>{text}</button>
    )
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Button;