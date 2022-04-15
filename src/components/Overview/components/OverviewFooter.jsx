import Button from "../../ui-kits/Button/Button";
import {useState} from "react";
import Modal from "../../ui-kits/Modal/Modal";

const OverviewFooter = () => {
  const [showMessage, setShowMessage] = useState(false);
  const closeMessage = () => {
    setShowMessage(false);
  };
  const openMessage = () => {
    setShowMessage(true);
  }
  return <div className='overview-footer'>
    <Modal showModal={showMessage} message='Спасибо' closeModal={closeMessage} />
    <Button onClick={openMessage} text='Купить пай'/>
  </div>;
};

export default OverviewFooter;