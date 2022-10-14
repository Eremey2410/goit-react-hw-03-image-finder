import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import BtnLoadMore from '../components/Button/Button';
import { AppContainer } from './App.styled';
import Loader from '../components/Loader/Loader';
import { toast } from 'react-toastify';
import ModalBox from '../components/Modal/Modal';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29482486-4af73e7428fa82566a6b382e2';
class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    modalImage: '',
    totalImages: 0,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?key=${API_KEY}&q=${this.state.query}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(image => {
          if (!image.total) {
            return toast.error('По вашему запросу ничего не найдено');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...image.hits],
            totalImages: image.total,
          }));
        })
        .catch(error => error)
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }
  handleSubmit = query => {
    if (this.state.query === query) {
      return toast.error(`Вы уже просматриваете ${query}`);
    }
    this.setState({ query: query.toLowerCase(), images: [], page: 1 });
  };
  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  onImageClick = url => {
    this.setState({
      modalImage: url,
      showModal: true,
    });
  };
  onModalClose = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { images, loading, showModal, modalImage, totalImages } = this.state;
    return (
      <AppContainer>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery images={images} onImageClick={this.onImageClick} />
        )}
        {images.length !== totalImages && !loading && (
          <BtnLoadMore onClick={this.onLoadMoreClick} />
        )}
        {showModal && (
          <ModalBox image={modalImage} onModalClose={this.onModalClose} />
        )}
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}
export { App };
