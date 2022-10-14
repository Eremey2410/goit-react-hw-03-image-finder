import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <>
      <ImageGalleryList>
        <ImageGalleryItem images={images} onImageClick={onImageClick} />
      </ImageGalleryList>
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
export default ImageGallery;
