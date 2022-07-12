import { Outlet } from "react-router-dom";

function Access() {

  const render = () => {
    return (
      <div className="Access-Layout">
        <div className="Access-Layout__Card">
          <Outlet />
        </div>
      </div>
    );
  }

  return render();
}

export default Access;