import { useState } from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import { Down, Add, Previous, Next } from 'grommet-icons';

import routes from '../../../constants/routes';
import TeamsModal from '../modals/TeamsModal';
import ProjectsModal from '../modals/ProjectsModal';

function Sidepanel({ projects = [], teams = [] }) {
  const [projectsModal, setProjectsModal] = useState(false);
  const [teamsModal, setTeamsModal] = useState(false);
  const [isSidepanelOpen, setIsSidepanelOpen] = useState(true);

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

  const handleToggleSidepanel = () => {
    setIsSidepanelOpen(prevState => !prevState);
  }

  const renderProjects = () => {
    return projects.map((project) => (
      <NavLink
        key={project.project_id}
        className={({ isActive }) =>
          isActive ? "Dashboard-Sidepanel__List-Item Item-Active" : "Dashboard-Sidepanel__List-Item"}
        to={generatePath(routes.dashboardProject, {
          projectId: project.project_id
        })}
      >
        <p className="Parraf-Text project-name">{project.project_name}</p>
        <p className="Parraf-Text ml-10 text-muted">{project.total_count_todos}</p>
      </NavLink>
    ));
  };

  // const renderTeams = () => {
  //   return teams.map((team) => (
  //     <NavLink
  //       key={team.team_id}
  //       className={({ isActive }) =>
  //         isActive ? "Dashboard-Sidepanel__List-Item Item-Active" : "Dashboard-Sidepanel__List-Item"}
  //       to={generatePath(routes.dashboardTeam, {
  //         teamId: team.team_id
  //       })}
  //     >
  //       <p className="Parraf-Text project-name">{team.team_name}</p>
  //       {/* <p className="Parraf-Text ml-10 text-muted">{team.total_count_todos}</p> */}
  //     </NavLink>
  //   ));
  // };

  const render = () => {
    return (
      <div style={{ position: 'relative' }}>
        <div
          className="Dashboard-Sidepanel__Close-Button"
          onClick={handleToggleSidepanel}>
          {isSidepanelOpen ? <Previous /> : <Next />}
        </div>
        <aside className={`Dashboard-Sidepanel ${!isSidepanelOpen ? 'Dashboard-Sidepanel__Closed' : ''}`}>
          <div className="Dashboard-Sidepanel__List-Title">
            <div className="flex align-center flex-1">
              <Down size="small" className="mr-10" />
              <p>Projects</p>
            </div>
            <button className="IconButton" onClick={handleOpenProjectsModal}>
              <Add size="15px" />
            </button>
          </div>
          {renderProjects()}
          {/* <div className="Dashboard-Sidepanel__List-Title">
            <div className="flex align-center flex-1">
              <Down size="small" className="mr-10" />
              <p>Teams</p>
            </div>
            <button className="IconButton" onClick={handleOpenTeamsModal}>
              <Add size="15px" />
            </button>
          </div>
          {renderTeams()} */}
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
        </aside>
      </div>
    );
  };

  return render();
}

export default Sidepanel;