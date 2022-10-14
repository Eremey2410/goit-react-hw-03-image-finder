import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    searchQuery: '',
  };
  handleImageNameChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Введите что-нибудь');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };
  render() {
    console.log('searchQuery', this.state.searchQuery);
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormButtonLabel className="button-label">
              Search
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleImageNameChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;

// import { Component } from 'react';
// import { toast } from 'react-toastify';
// import {
//   SearchBarHeader,
//   SearchForm,
//   SearchFormButton,
//   SearchFormButtonLabel,
//   SearchFormInput,
// } from './Searchbar.styled';
// import PropTypes from 'prop-types';

// class SearchBar extends Component {
//   state = {
//     imageName: '',
//   };
//   handleImageNameChange = event => {
//     this.setState({ imageName: event.currentTarget.value.toLowerCase() });
//   };
//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState + 1,
//     }));
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.imageName.trim() === '') {
//       toast.error('Введите что-нибудь');
//       return;
//     }
//     this.props.onSubmit(this.state.imageName);
//     this.setState({ imageName: '' });
//   };
//   render() {
//     return (
//       <SearchBarHeader>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormButton type="submit" className="button">
//             <SearchFormButtonLabel className="button-label">
//               Search
//             </SearchFormButtonLabel>
//           </SearchFormButton>

//           <SearchFormInput
//             className="input"
//             type="text"
//             name="imageName"
//             value={this.state.imageName}
//             onChange={this.handleImageNameChange}
//             // autocomplete="off"
//             // autofocus
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </SearchBarHeader>
//     );
//   }
// }
// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
// export default SearchBar;
