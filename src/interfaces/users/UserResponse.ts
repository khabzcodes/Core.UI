import IUser from './User';

interface IUserResponse {
  data: IUser[];
  currentPage: number;
  totalPages: number;
  totalRecords: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default IUserResponse;
