import { useDispatch } from 'react-redux';

import Modal from '../../../app/common/Modal';
import { logoutUserAction } from '../../../features/user/userActions';

function LogoutModal({ isOpen, onClose, width }) {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    onClose();
  };

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <h1 className="Title-Text">Logout</h1>
        <p className="Parraf-Text mt-10">
          Are you sure you want to leave the app?
        </p>
        <div className="w-100 flex justify-end mt-20">
          <button
            className="Button Button__Primary"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            type="button"
            className="Button ml-10"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    );
  };

  return render();
}

export default LogoutModal;