import { Component } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    imageName: '',
  };
  handleImageNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.error('Upsssssssssssssss');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="imageName"
            value={this.state.imageName}
            onChange={this.handleImageNameChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchBar;
