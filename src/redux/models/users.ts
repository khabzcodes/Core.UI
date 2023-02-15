/* eslint-disable import/no-cycle */
import { createModel } from '@rematch/core';
import api from '../../utils/api';
import RootModel from '.';
import BaseErrorResponse from '../../interfaces/authentication/BaseErrorResponse';
import IUserResponse from '../../interfaces/users/UserResponse';

export interface UsersState {
  usersResponse: IUserResponse;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const users = createModel<RootModel>()({
  state: {
    usersResponse: {
      data: [],
      currentPage: 0,
      totalPages: 0,
      totalRecords: 0,
      hasPrevious: false,
      hasNext: false,
    },
    isLoading: false,
    error: null,
    success: false,
  } as UsersState,
  reducers: {
    SET_USERS: (state, payload: IUserResponse) => {
      return { ...state, usersResponse: payload };
    },
    START_LOADING: (state) => {
      return { ...state, isLoading: true };
    },
    STOP_LOADING: (state) => {
      return { ...state, isLoading: false };
    },
    SET_ERROR: (state, errorMessage: string | null) => {
      return { ...state, error: errorMessage };
    },
  },
  effects: (dispatch) => {
    return {
      async getUsersAsync(pageNumber: number): Promise<void> {
        dispatch.users.SET_ERROR(null);
        dispatch.users.START_LOADING();
        await api
          .get(`/api/users?pageNumber=${pageNumber}&pageSize=${5}`)
          .then((res) => {
            dispatch.users.SET_USERS(res.data);
            dispatch.users.START_LOADING();
          })
          .catch((error: BaseErrorResponse) => {
            dispatch.users.START_LOADING();
            dispatch.users.SET_ERROR(error.response.data.title);
          });
      },
    };
  },
});
