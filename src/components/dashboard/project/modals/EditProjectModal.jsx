import { useEffect, useState } from 'react';
import { Projects } from 'grommet-icons';
import { useDispatch } from 'react-redux';

import Modal from '../../../../app/common/Modal';
import { editProjectAction } from '../../../../features/project/projectActions';

function EditProjectModal({ isOpen, onClose, data, width }) {
  const [projectName, setProjectName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setProjectName(data.projectName);
      setSelectedColor(data.projectColor);
    }
  }, [data]);

  const handleCloseModal = () => {
    onClose();
  };

  const handleProjectNameChange = ({ target }) => {
    setProjectName(target.value);
  };

  const handleProjectColorName = ({ target }) => {
    setSelectedColor(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editProjectAction(data.projectId, {
      project_name: projectName,
      project_color: selectedColor || "#AAAAAA"
    }));
    onClose();
  };

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <form onSubmit={handleSubmit}>
          <h1 className="Title-Text">Edit project</h1>
          <p className="Parraf-Text mt-10">
            Change the name or color of your project.
          </p>
          <div className="flex align-center w-100 mt-20">
            <div className="Textfield-With-Icon w-100 mr-10">
              <Projects />
              <input
                type="text"
                placeholder="Project title"
                onChange={handleProjectNameChange}
                value={projectName}
                required
              />
            </div>
            <label htmlFor="color" className="Input-Color__Wrapper w-100">
              <p className="Parraf-Text">{selectedColor || "Select a color"}</p>
              <input
                type="color"
                id="color"
                onChange={handleProjectColorName}
                value={selectedColor}
              />
            </label>
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