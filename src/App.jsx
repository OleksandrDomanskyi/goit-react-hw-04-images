import { Component } from "react";

import Searchbar from "./components/Gallery/Searchbar";
import SearchForm from "components/Gallery/Searchbar/SearchForm";
import ImageGallery from "./components/Gallery/ImageGallery";
import Button from "./shared/components/Button";
import Modal from "./shared/components/Modal";
import Loader from "./shared/components/Loader";

import { getImages } from "./shared/services/images";

import styles from './app.module.scss';

class App extends Component {

  state = {
    items: [],
    loading: false,
    error: null,
    q: "",
    page: 1,
    isModalOpen: false,
    modalBody: {}
  };

  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;

    if (q !== prevState.q || page > prevState.page) {
      this.setState({
        loading: true,
        error: null
      });

      try {
        const items = await getImages(q, page);

        this.setState(prevState => {
          return {
            items: [...prevState.items, ...items],
            loading: false
          }
        })
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message
        })
      }
    }
  }

  setSearch = ({ q }) => {
    this.setState({
      q,
      page: 1,
      items: []
    })
  };

  loadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      }
    })
  };

  showModal = (modalBody) => {
    this.setState({
      isModalOpen: true,
      modalBody
    })
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false
    })
  };

  render() {
    const { loading, items, isModalOpen, modalBody } = this.state;
    const { setSearch, loadMore, showModal, closeModal } = this;

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
  }
};

export default App;