import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../redux/store';
import AppLayout from '../../layouts/appLayout/Index';

function Users() {
  const dispatch = useDispatch<Dispatch>();
  const { usersResponse } = useSelector((state: RootState) => state.users);
  useEffect(() => {
    dispatch.users.getUsersAsync(1);
  }, [dispatch.users]);
  return (
    <AppLayout>
      <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h2 className="fw-bold">Users</h2>
        </div>
        <div className="px-3 py-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersResponse.data.map((user) => (
                <tr key={user.userId}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td className="fw-lighter">
                    <NavLink to={`/users/${user.userId}`}>View</NavLink> |{' '}
                    <a href="/">Update</a> | <a href="/">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </AppLayout>
  );
}

export default Users;
