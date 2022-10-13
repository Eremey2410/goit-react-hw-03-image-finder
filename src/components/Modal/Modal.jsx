import { Overlay, Modal } from './Modal.styled';
import { nanoid } from 'nanoid';
const ModalBox = ({ query }) => {
  return (
    <Overlay>
      {query.hits.map(({ largeImageURL }) => (
        <Modal key={nanoid()}>
          <img src={largeImageURL} alt="" />
        </Modal>
      ))}
    </Overlay>
  );
};

export default ModalBox;
