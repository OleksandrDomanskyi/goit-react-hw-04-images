import PropTypes from "prop-types";

import ImageGalleryItem from './ImageGalleryItem';

import styles from './image-gallery.module.scss';

const ImageGallery = ({ items, onClick }) => {
    const elements = items.map(({id, webformatURL, largeImageURL}) => (
        <ImageGalleryItem
            key={id}
            url={webformatURL}
            onClick={() => onClick(largeImageURL)}
        />
    ))

    return (
        <ul className={styles.gallery}>
            {elements}
        </ul>
    )
};

ImageGallery.defaultProps = {
    items: []
};

ImageGallery.propTypes = {
    onClick: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    }))
};

export default ImageGallery;