import { useState, memo } from 'react';
import PropTypes from "prop-types";

import styles from './search-form.module.scss';

const SearchForm = ({ onSubmit }) => {

    const [q, setQ] = useState("");

    const handleChange = ({ target }) => {
        const { value } = target;
        setQ(value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ q });
        reset();
    };

    const reset = () => {
        setQ("")
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <button type="submit" className={styles.button}>
                <span className={styles.label}>Search</span>
            </button>

            <input
                value={q}
                name='q'
                onChange={handleChange}
                className={styles.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                required
            />
        </form>
    );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default memo(SearchForm);