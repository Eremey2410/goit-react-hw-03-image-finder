import { Component } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';
import { Audio } from 'react-loader-spinner';
const audio = (
  <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    // wrapperStyle
    // wrapperClass
  />
);

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29482486-4af73e7428fa82566a6b382e2';

class ImageGalleryItem extends Component {
  state = {
    searchQuery: null,
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevNameImg = prevProps.imageName;
    const nextNameImg = this.props.imageName;

    if (prevNameImg !== nextNameImg) {
      console.log('изменилось название картинки');
      this.setState({ loading: true });

      fetch(
        `${BASE_URL}?key=${API_KEY}&q=${nextNameImg}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
      )
        .then(res => res.json())
        .then(searchQuery => this.setState({ searchQuery }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {
    // console.log(this.state.searchQuery);
    const { searchQuery, loading } = this.state;
    return (
      <>
        {searchQuery &&
          searchQuery.hits.map(({ id, webformatURL, tags }) => (
            <GalleryItem key={id}>
              <Image src={webformatURL} alt={tags} />
            </GalleryItem>
          ))}
        {loading && <div>{audio}</div>}
      </>
    );
  }
}
export default ImageGalleryItem;

// this.state.searchQuery.hits.map(({ id, webformatURL }) => (
//   <li key={id} className="gallery-item">
//     {this.props.imageName}
//     <img src={webformatURL} alt="" />
//   </li>
// ));
