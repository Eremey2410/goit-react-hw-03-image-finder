import { GalleryItem, Image } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ query }) => {
  return (
    <>
      {query &&
        query.hits.map(({ id, webformatURL, tags }) => (
          <GalleryItem key={id}>
            <Image src={webformatURL} alt={tags} />
          </GalleryItem>
        ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  query: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
