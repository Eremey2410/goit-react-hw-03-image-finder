import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../components/Searchbar/Searchbar';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import { AppContainer } from './App.styled';
export class App extends Component {
  state = {
    imageName: '',
  };
  handleFormSubmit = imageName => {
    // console.log('imageName', imageName);
    this.setState({ imageName });
  };

  render() {
    return (
      <AppContainer>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
}

// export class App extends Component {
//   state = {
//     page: 1,
//     query: '',
//     items: [],
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.setState({
//       page: 1,
//       query: e.target.elements.query.value,
//       items: [],
//     });
//     e.target.reset();
//   };
//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   componentDidUpdate(_, prevState) {
//     console.log('prevState.page', prevState.page);
//     console.log('this.state.page', this.state.page);
//     console.log('prevState.query', prevState.query);
//     console.log('this.state.query', this.state.query);
//   }
//   render() {
//     return (
//       <header className="searchbar">
//         <form className="form" onSubmit={this.handleSubmit}>
//           <button type="submit" className="button">
//             <span className="button-label">Search</span>
//           </button>

//           <input
//             className="input"
//             type="text"
//             name="query"
//             // value={this.state.imageName}
//             // onChange={this.handleImageNameChange}
//             // autocomplete="off"
//             // autofocus
//             placeholder="Search images and photos"
//           />
//         </form>
//         <button onClick={this.loadMore} type="button">
//           Load more
//         </button>
//       </header>
//     );
//   }
// }
