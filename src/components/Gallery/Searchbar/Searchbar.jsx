import styles from './searchbar.module.scss';

const Searchbar = ({children}) => {

    return (
        <header className={styles.searchbar}>
            {children}
        </header>
    )
}

export default Searchbar;