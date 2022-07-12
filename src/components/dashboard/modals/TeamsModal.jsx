import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Group } from 'grommet-icons';

import Modal from '../../../app/common/Modal';
import { createTeamAction } from '../../../features/team/teamActions';
import { generatePath, useNavigate } from 'react-router-dom';
import routes from '../../../constants/routes';

function TeamsModal({ isOpen, onClose = () => { }, width }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modalTab, setModalTab] = useState('create');
  const [teamName, setTeamName] = useState('');

  const handleCloseModal = () => {
    onClose();
  };

  const handleSetCreateForm = () => {
    setModalTab('create');
  };

  const handleSetJoinForm = () => {
    setModalTab('join');
  };

  const handleTeamNameChange = ({ target }) => {
    setTeamName(target.value);
  };

  const handleCreateTeam = async (event) => {
    event.preventDefault();
    let result = await dispatch(createTeamAction({
      team_name: teamName
    }));
    if (result) {
      navigate(generatePath(routes.dashboardTeam, {
        teamId: result.team_id
      }));
    }
    onClose();
  };

  const renderCreateForm = () => {
    return (
      <form className="mt-20" onSubmit={handleCreateTeam}>
        <p className="Parraf-Text">
          Here you can create your own team and invite your teammates.
        </p>
        <div className="Textfield-With-Icon mt-10">
          <Group />
          <input
            type="text"
            placeholder="Your team name"
            onChange={handleTeamNameChange}
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
    );
  };

  const renderJoinForm = () => {
    return (
      <div className="mt-20">
        <p className="Parraf-Text">
          You can join in a team by introducing the team code.
        </p>
        <div className="Textfield-With-Icon mt-10">
          <Group />
          <input type="text" placeholder="Team code" />
        </div>
        <div className="w-100 flex justify-end mt-20">
          <button className="Button Button__Primary">
            Join
          </button>
          <button
            type="button"
            className="Button ml-10"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <div className="Modal-Tabs">
          <div
            className={`Modal-Tab ${modalTab === 'create' && "Modal-Tab__Active"}`}
            onClick={handleSetCreateForm}
          >
            <h1 className="Title-Text">Create a team</h1>
          </div>
          <div
            className={`Modal-Tab ${modalTab === 'join' && "Modal-Tab__Active"}`}
            onClick={handleSetJoinForm}
          >
            <h1 className="Title-Text">Join in a team</h1>
          </div>
        </div>
        <div>
          {modalTab === 'create' && renderCreateForm()}
          {modalTab === 'join' && renderJoinForm()}
        </div>
      </Modal>
    );
  };

  return render();
}

export default TeamsModal;