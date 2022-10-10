import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import { Audio } from 'react-loader-spinner';
const audio = (
  <Audio
    height="80"
    width="80"
    radius="9"
    color="green"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  />
);

export class App extends Component {
  state = {
    imageName: '',
  };
  handleFormSubmit = imageName => {
    // console.log('imageName', imageName);
    this.setState({ imageName });
  };

  // async componentDidMount() {
  //   const images = await axios.get(
  //     `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
  //   );
  //   this.incrementPage();
  //   console.log('ww', images.data.hits[0]);
  //   return images;
  // }
  // incrementPage() {
  //   this.page += 1;
  // }
  // resetPage() {
  //   this.page = 1;
  // }

  render() {
    return (
      <div>
        {<SearchBar onSubmit={this.handleFormSubmit} />}
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
