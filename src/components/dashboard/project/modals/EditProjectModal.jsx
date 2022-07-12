import { useEffect, useState } from 'react';
import { Projects } from 'grommet-icons';
import { useDispatch } from 'react-redux';

import Modal from '../../../../app/common/Modal';
import { editProjectAction } from '../../../../features/project/projectActions';

function EditProjectModal({ isOpen, onClose, data, width }) {
  const [projectName, setProjectName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setProjectName(data.projectName);
    }
  }, [data]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleOnChange = ({ target }) => {
    setProjectName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editProjectAction(data.projectId, {
      project_name: projectName
    }));
    onClose();
  };

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <form onSubmit={handleSubmit}>
          <h1 className="Title-Text">Change project name</h1>
          <p className="Parraf-Text mt-10">
            Change the name of your project.
          </p>
          <div className="Textfield-With-Icon mt-20">
            <Projects />
            <input
              type="text"
              placeholder="Project title"
              onChange={handleOnChange}
              value={projectName}
              required
            />
          </div>
          <div className="w-100 flex justify-end mt-20">
            <button
              type="submit"
              className="Button Button__Primary"
            >
              Change
            </button>
            <button
              type="button"
              className="Button ml-10"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    );
  };

  return render();
}

export default EditProjectModal;