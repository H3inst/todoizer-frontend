import { useSelector } from 'react-redux';
import { MoreVertical, Trash } from 'grommet-icons';

function TeamMembers() {
  const team = useSelector(state => state.team.team);

  const renderMemberList = () => {
    return (
      <div className="Main-Layout__Member-List">
        <div className="Main-Layout__Member-List__Member">
          <div className="Avatar mr-20">
            WR
          </div>
          <div className="flex-1">
            <p className="Parraf-Text fw-bold">Wrightler</p>
            <p className="Parraf-Text text-muted">wrghtlr@test.co</p>
          </div>
          <div className="Dropdown">
            <button className="IconButton ml-10">
              <MoreVertical />
            </button>
            <div className="Dropdown-Menu">
              <div className="Dropdown-Menu__Item">
                <Trash size="15" className="mr-20" />
                Remove member
              </div>
            </div>
          </div>
        </div>

        <div className="Main-Layout__Member-List__Member">
          <div className="Avatar mr-20">
            DO
          </div>
          <div className="flex-1">
            <p className="Parraf-Text fw-bold">Doudou P</p>
            <p className="Parraf-Text text-muted">dou@test.co</p>
          </div>
          <div className="Dropdown">
            <button className="IconButton ml-10">
              <MoreVertical />
            </button>
            <div className="Dropdown-Menu">
              <div className="Dropdown-Menu__Item">
                <Trash size="15" className="mr-20" />
                Remove member
              </div>
            </div>
          </div>
        </div>

        <div className="Main-Layout__Member-List__Member">
          <div className="Avatar mr-20">
            JO
          </div>
          <div className="flex-1">
            <p className="Parraf-Text fw-bold">John Doe</p>
            <p className="Parraf-Text text-muted">doe@test.co</p>
          </div>
          <div className="Dropdown">
            <button className="IconButton ml-10">
              <MoreVertical />
            </button>
            <div className="Dropdown-Menu">
              <div className="Dropdown-Menu__Item">
                <Trash size="15" className="mr-20" />
                Remove member
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const render = () => {
    return (
      <div className="Main-Layout">
        <h1 className="Title-Text">
          {team.team_name}
        </h1>
        <p className="Parraf-Text text-muted">Members</p>

        {renderMemberList()}
      </div>
    );
  };

  return render();
}

export default TeamMembers;