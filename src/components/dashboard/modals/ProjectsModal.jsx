import { useState } from 'react';
import { Projects } from 'grommet-icons';
import { useDispatch } from 'react-redux';
import { generatePath, useNavigate } from 'react-router-dom';

import Modal from '../../../app/common/Modal';
import { createProjectAction } from '../../../features/project/projectActions';
import routes from '../../../constants/routes';

function ProjectsModal({ isOpen, onClose, width }) {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    onClose();
  };

  const handleOnChange = ({ target }) => {
    setProjectName(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await dispatch(createProjectAction({
      project_name: projectName
    }));
    if (data) {
      navigate(generatePath(routes.dashboardProject, {
        projectId: data.project_id
      }));
    }
    onClose();
  };

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <form onSubmit={handleSubmit}>
          <h1 className="Title-Text">Create project</h1>
          <p className="Parraf-Text mt-10">
            Create a project and start organize all your activities.
          </p>
          <div className="Textfield-With-Icon mt-20">
            <Projects />
            <input
              type="text"
              placeholder="Project title"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="w-100 flex justify-end mt-20">
            <button
              type="submit"
              className="Button Button__Primary"
            >
              Create
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

export default ProjectsModal;