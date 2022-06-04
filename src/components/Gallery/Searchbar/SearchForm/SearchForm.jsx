import { Component } from "react";
import PropTypes from "prop-types";

import styles from './search-form.module.scss';

class SearchForm extends Component {

    state = {
        q: ""
    };

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { q } = this.state;
        this.props.onSubmit({ q });
        this.reset();
    };

    reset() {
        this.setState({
            q: ""
        })
    };

    render() {
        const { handleChange, handleSubmit } = this;
        const { q } = this.state;

        return (
            <form className={styles.form} onSubmit={handleSubmit}>
                <button type="submit" className={styles.button}>
                <span className={styles.label}>Search</span>
                </button>

                <input
                value={q}
                name="q"
                onChange={handleChange}
                className={styles.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                required
                />
            </form>
        )
    }
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default SearchForm;