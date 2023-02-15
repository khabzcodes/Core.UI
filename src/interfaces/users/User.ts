import IUserPermission from '../userPermission/UserPermission';

interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  permissions: IUserPermission[];
  createdAtUtc: string;
}

export default IUser;
