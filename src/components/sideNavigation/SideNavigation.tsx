/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './sideNavigation.scss';
import { Dispatch, RootState } from '../../redux/store';

function SideNavigation() {
  const { profile } = useSelector((state: RootState) => state.profile);

  const dispatch = useDispatch<Dispatch>();

  const getUserProfile = async () => {
    await dispatch.profile.getUserProfileAsync();
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div
      className="col-auto d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: '280px', height: '100vh' }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Core.UI</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <NavLink to="/" className="nav-link text-white">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-link text-white">
            Users
          </NavLink>
        </li>
        <li>
          <a href="/" className="nav-link text-white">
            Clients
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          {profile && <strong>{profile.email}</strong>}
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="/">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="/">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNavigation;
