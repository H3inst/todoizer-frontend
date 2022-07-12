import { useRef, useState } from 'react';
import { generatePath, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Edit, Group, MoreVertical, Trash } from 'grommet-icons';

import { getTeamByIAction } from '../../../features/team/teamActions';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

import EmptyState from '../emptyState/EmptyStateProject';
import { useEffect } from 'react';
import routes from '../../../constants/routes';

function Team() {
  const wrapperRef = useRef();
  const { teamId } = useParams();
  const dispatch = useDispatch();
  const team = useSelector(state => state.team.team);

  const [openMenu, setOpenMenu] = useState(false);
  const [editTeamModal, setEditTeamModal] = useState(false);
  const [deleteTeamModal, setDeleteTeamModal] = useState(false);

  useEffect(() => {
    dispatch(getTeamByIAction(teamId));
  }, [dispatch, teamId]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  useOutsideClick(wrapperRef, openMenu, handleCloseMenu);

  const renderTeamOptions = () => {
    return (
      <div className="Dropdown" ref={wrapperRef}>
        <button
          className="IconButton ml-10"
          onClick={handleOpenMenu}
        >
          <MoreVertical />
        </button>
        <div className={`Dropdown-Menu ${openMenu && 'Show-Menu'}`}>
          <div className="Dropdown-Menu__Item">
            <Edit size="15" className="mr-20" />
            Change team name
          </div>
          <NavLink
            to={generatePath(routes.dashboardTeamMembers, {
              teamId: teamId
            })}
            className="Dropdown-Menu__Item"
          >
            <Group size="15" className="mr-20" />
            Manage members
          </NavLink>
          <div className="Dropdown-Menu__Item">
            <Trash size="15" className="mr-20" />
            Delete team
          </div>
        </div>
      </div>
    );
  };

  const render = () => {
    return (
      <div className="Main-Layout">
        <div className="flex align-center">
          <h1 className="Title-Text flex-1">
            {team.team_name}
          </h1>
          {renderTeamOptions()}
        </div>
        <EmptyState />
      </div>
    );
  };

  return render();
}

export default Team;