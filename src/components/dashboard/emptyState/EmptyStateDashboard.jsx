import { useState } from 'react';
import EmptySvg from '../../../assets/dashboard/empty.svg';
import ProjectsModal from '../modals/ProjectsModal';
import TeamsModal from '../modals/TeamsModal';

function EmptyState() {
  const [projectsModal, setProjectsModal] = useState(false);
  const [teamsModal, setTeamsModal] = useState(false);

  // const handleOpenTeamsModal = () => {
  //   setTeamsModal(true);
  // };

  const handleCloseTeamsModal = () => {
    setTeamsModal(false);
  };

  const handleOpenProjectsModal = () => {
    setProjectsModal(true);
  };

  const handleCloseProjectsModal = () => {
    setProjectsModal(false);
  };

  const render = () => {
    return (
      <div className="flex-1 flex flex-column justify-center align-center">
        <img src={EmptySvg} alt="Empty" className="Image" width={400} />
        <h1 className="mt-20">
          Start with Todoizer now
        </h1>
        <div className="flex mt-20">
          <button
            className="Button Button__Primary"
            onClick={handleOpenProjectsModal}
          >
            Create a project
          </button>
          {/* <button
            className="Button"
            onClick={handleOpenTeamsModal}
          >
            Create a team
          </button> */}
        </div>
        <ProjectsModal
          isOpen={projectsModal}
          width={400}
          onClose={handleCloseProjectsModal}
        />
        <TeamsModal
          isOpen={teamsModal}
          width={450}
          onClose={handleCloseTeamsModal}
        />
      </div>
    );
  };

  return render();
}

export default EmptyState;
