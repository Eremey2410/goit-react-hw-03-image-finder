import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ imageName }) => {
  return (
    <ImageGalleryList>
      <ImageGalleryItem imageName={imageName} />
    </ImageGalleryList>
  );
};
export default ImageGallery;
