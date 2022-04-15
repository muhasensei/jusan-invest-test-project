import './styles.css';

const Modal = ({message, showModal, closeModal}) => {
  return <div className={`modal ${showModal && 'show-modal'}`}>
    <div className="modal-content">
        <h3>{message}</h3>
        <button className="close-button" onClick={closeModal}>&times;</button>
    </div>
  </div>;
};

export default Modal;