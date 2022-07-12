import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { SettingsOption, Search } from "grommet-icons";
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import LogoutModal from '../modals/LogoutModal';

function Topbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  const userName = useSelector(state => state.user.user.user_name);
  const wrapperRef = useRef(null);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenModal = () => {
    setLogoutModalOpen(true);
    setOpenMenu(false);
  };

  const handleCloseModal = () => {
    setLogoutModalOpen(false);
  };

  useOutsideClick(wrapperRef, openMenu, handleCloseMenu);



  const render = () => {
    return (
      <div className="Dashboard-Topbar">
        <h1 className="fw-bolder">todoizer</h1>
        <div className="Textfield-With-Icon__No-Bg">
          <Search color="white" />
          <input
            className="Textfield-White"
            type="text"
            name="user_email"
            placeholder="Quick search..."
          />
        </div>
        <div
          className="Dropdown text-black"
          ref={wrapperRef}
        >
          <button
            className="IconButton IconButton-White"
            onClick={handleOpenMenu}
          >
            <SettingsOption color="white" />
          </button>
          <div className={`Dropdown-Menu ${openMenu && 'Show-Menu'}`}>
            <h1 className="Title-Text ml-10">
              Hi {userName}!
            </h1>
            <div className="Dropdown-Menu__Item" onClick={handleOpenModal}>
              Logout
            </div>
          </div>
        </div>
        <LogoutModal
          isOpen={logoutModalOpen}
          onClose={handleCloseModal}
          width={350}
        />
      </div>
    );
  };

  return render();
}

export default Topbar;