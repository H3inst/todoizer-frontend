import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '../../../../app/common/Modal';
import routes from '../../../../constants/routes';
import { deleteProjectAction } from '../../../../features/project/projectActions';

function DeleteProjectModal({ isOpen, onClose, width, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    onClose();
  };

  const handleDeleteProject = async () => {
    let isSuccessful = await dispatch(deleteProjectAction(data));
    if (isSuccessful) {
      navigate(routes.dashboard);
      onClose();
    }
  };

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <h1 className="Title-Text">Delete project</h1>
        <p className="Parraf-Text mt-10">
          Are you sure you want to delete this project? All of your todos will be deleted.
        </p>
        <div className="w-100 flex justify-end mt-20">
          <button
            className="Button Button__Primary"
            onClick={handleDeleteProject}
          >
            Delete
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

export default DeleteProjectModal;