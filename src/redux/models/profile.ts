/* eslint-disable import/no-cycle */
import { createModel } from '@rematch/core';
import axiosInstance from '../../utils/api';
import RootModel from '.';
import IProfile from '../../interfaces/profile/Profile';
import BaseErrorResponse from '../../interfaces/authentication/BaseErrorResponse';

export interface ProfileState {
  profile: IProfile | null;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const profile = createModel<RootModel>()({
  state: {
    profile: null,
    isLoading: false,
    error: null,
  } as ProfileState,

  reducers: {
    SET_PROFILE: (state, payload: IProfile) => {
      return { ...state, profile: payload };
    },
    START_LOADING: (state) => {
      return { ...state, isLoading: true };
    },
    SET_ERROR: (state, errorMessage: string | null) => {
      return { ...state, error: errorMessage };
    },
  },
  effects: (dispatch) => {
    return {
      async getUserProfileAsync(): Promise<void> {
        dispatch.profile.SET_ERROR(null);
        dispatch.profile.START_LOADING();
        await axiosInstance
          .get('/api/accounts', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          })
          .then((res) => {
            const { data } = res;
            dispatch.profile.SET_PROFILE(data);
          })
          .catch((error: BaseErrorResponse) => {
            console.log(error);
          });
      },
    };
  },
});
