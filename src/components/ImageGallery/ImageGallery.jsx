import { Component } from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import BtnLoadMore from '../Button/Button';
import PropTypes from 'prop-types';
import ModalBox from '../Modal/Modal';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29482486-4af73e7428fa82566a6b382e2';
class ImageGallery extends Component {
  state = {
    searchQuery: null,
    loading: false,
    page: 1,
    isModalOpen: false,
  };
  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  async componentDidUpdate(prevProps, prevState) {
    const prevNameImg = prevProps.imageName;
    const nextNameImg = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevNameImg !== nextNameImg || prevPage !== nextPage) {
      console.log('изменилось название картинки');
      this.setState({ loading: true });
      const response = await axios
        .get(
          `${BASE_URL}?key=${API_KEY}&q=${nextNameImg}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.page}`
        )
        .finally(() => this.setState({ loading: false }));

      this.setState({
        searchQuery: response.data,
        loading: false,
      });
    }
  }
  render() {
    console.log('searchQuery ', this.state.searchQuery);
    const { searchQuery, loading, isModalOpen } = this.state;
    return (
      <>
        <ImageGalleryList>
          <ImageGalleryItem query={searchQuery} onOpenModal={this.openModal} />
        </ImageGalleryList>

        <BtnLoadMore onPage={this.loadMore} query={searchQuery} />
        {loading && <Loader />}
        {isModalOpen && <ModalBox query={searchQuery} />}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  imageName: PropTypes.string,
};
export default ImageGallery;
