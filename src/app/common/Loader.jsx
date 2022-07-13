import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

function Loader() {
  const loaderId = document.getElementById('loader');
  const isLoading = useSelector(state => state.interface.isLoading);

  const render = () => {
    return (
      <Fragment>
        {isLoading && (
          <div className="Loader-Wrapper">
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }

  return createPortal(render(), loaderId);
}

export default Loader;