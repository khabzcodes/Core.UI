import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppLayout from '../../layouts/appLayout/Index';
import { Dispatch, RootState } from '../../redux/store';

function User() {
  const { userId } = useParams();
  const { selectedUser } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.users.getUserAsync(userId);
  }, [dispatch.users, userId]);
  return (
    <AppLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h2 className="fw-bold">
          {selectedUser?.firstName} {selectedUser?.lastName}
        </h2>
      </div>
    </AppLayout>
  );
}

export default User;
