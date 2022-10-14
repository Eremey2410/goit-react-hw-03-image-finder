import { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay, Modal } from './Modal.styled';
class ModalBox extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };
  handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };
  render() {
    return (
      <Overlay onClick={this.handleBackDropClick}>
        <Modal>
          <img
            src={this.props.image.target.currentSrc}
            alt={this.props.image.target.alt}
          />
        </Modal>
      </Overlay>
    );
  }
}
ModalBox.propTypes = {
  image: PropTypes.object.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
export default ModalBox;
