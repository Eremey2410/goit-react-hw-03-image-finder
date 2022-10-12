import { Component } from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import BtnLoadMore from '../Button/Button';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29482486-4af73e7428fa82566a6b382e2';
class ImageGallery extends Component {
  state = {
    searchQuery: null,
    loading: false,
    page: 1,
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
    const { searchQuery, loading } = this.state;
    return (
      <>
        <ImageGalleryList>
          <ImageGalleryItem query={searchQuery} />
        </ImageGalleryList>

        <BtnLoadMore onPage={this.loadMore} query={searchQuery} />
        {loading && <Loader />}
      </>
    );
  }
}
ImageGalleryItem.propTypes = {
  imageName: PropTypes.string,
};
export default ImageGallery;
