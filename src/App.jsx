import { useState, useEffect } from "react";

import Searchbar from "./components/Gallery/Searchbar";
import SearchForm from "components/Gallery/Searchbar/SearchForm";
import ImageGallery from "./components/Gallery/ImageGallery";
import Button from "./shared/components/Button";
import Modal from "./shared/components/Modal";
import Loader from "./shared/components/Loader";

import { getImages } from "./shared/services/images";

import styles from './app.module.scss';

const App = () => {

  const [images, setImages] = useState({
    items: [],
    loading: false,
    error: null
  });
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState({
    isModalOpen: false,
    modalBody: ''
  });

  useEffect(() => {
    const fetchImages = async () => {
      if (!q) {
        return
      };
      setImages(prevState => ({
        ...prevState,
        loading: true,
        error: null
      }));
        
      try {
        const items = await getImages(q, page);
        setImages(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...items],
            loading: false
          };          
        });
      } catch (error) {
        setImages(prevState => ({
          ...prevState,
          loading: false,
          error: error.message
        }));
      }
    };
    fetchImages();
  }, [q, page]);

  const setSearch = ({ q }) => {
    setQ(q);
    setPage(1);
    setImages({
      ...images, items: []
    });
  };

  const showModal = (modalBody) => {
    setModal({
      isModalOpen: true,
      modalBody,
    });
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const closeModal = () => {
    setModal({
      isModalOpen: false,
    });
  };

  const { items, loading } = images;
  const { isModalOpen, modalBody } = modal;

  return (
    <div className={styles.App}>
      <Searchbar>
        <SearchForm onSubmit={setSearch}/>
      </Searchbar>
      {Boolean(items.length) && <ImageGallery items={items} onClick={showModal}/>}
      {loading && <Loader/>}
      {!loading && Boolean(items.length) && <Button onClick={loadMore} text='Load More' />}
      {isModalOpen && (
        <Modal close={closeModal}>
          <img src={modalBody} alt="" />
        </Modal>
      )}
    </div>
  );
};

export default App;