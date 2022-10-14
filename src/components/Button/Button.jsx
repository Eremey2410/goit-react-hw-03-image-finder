import { LoadMore } from './Button.styled';
import PropTypes from 'prop-types';

const BtnLoadMore = ({ onClick }) => {
  return (
    <>
      <LoadMore type="button" onClick={onClick}>
        Load more
      </LoadMore>
    </>
  );
};
BtnLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default BtnLoadMore;
