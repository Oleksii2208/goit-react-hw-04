import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      className={s.content}
      overlayClassName={s.overlay}
    >
      {image && (
        <div>
          <img
            className={s.image}
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <div className={s.info}>
            <p>
              <span>Author:</span> {image.user.name}
            </p>
            <p>
              <span>Likes:</span> {image.likes}
            </p>
            <p>
              <span>Description:</span> {image.description}
            </p>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
