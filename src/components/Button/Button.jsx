import { LoadMore } from './Button.styled';

const BtnLoadMore = ({ onPage, query }) => {
  return (
    <>
      {query !== null && (
        <LoadMore type="button" onClick={onPage}>
          Load more
        </LoadMore>
      )}
    </>
  );
};
export default BtnLoadMore;
