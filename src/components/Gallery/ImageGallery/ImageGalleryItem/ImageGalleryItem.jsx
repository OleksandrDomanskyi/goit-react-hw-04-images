import PropTypes from "prop-types";

import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({url, onClick}) => {
    return (
        <li className={styles.item} onClick={onClick}>
            <img className={styles.image} src={url} alt="" />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func,
    url: PropTypes.string.isRequired
};

export default ImageGalleryItem;