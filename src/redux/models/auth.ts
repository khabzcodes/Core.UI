/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core';
import axios from 'axios';
import RootModel from '.';
import BaseErrorResponse from '../../interfaces/authentication/BaseErrorResponse';
import LoginRequest from '../../interfaces/authentication/request/LoginRequest';
import AuthResponse from '../../interfaces/authentication/response/AuthResponse';
import setToken from '../../utils/setToken';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

// const baseUrl: string | undefined = process.env.REACT_API_URI;

export const auth = createModel<RootModel>()({
  state: {
    token: localStorage.getItem('accessToken'),
    isAuthenticated: !!localStorage.getItem('accessToken'),
    isLoading: false,
    error: null,
  } as AuthState,
  reducers: {
    SET_TOKEN: (state, token: string | null) => {
      if (typeof token === 'string') {
        return { ...state, success: true, token, isAuthenticated: true };
      }

      return { ...state, token: null };
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
      async loginUserAsync(request: LoginRequest): Promise<void> {
        dispatch.auth.START_LOADING();
        dispatch.auth.SET_ERROR(null);

        await axios
          .post('https://localhost:7057/api/auth/login', request)
          .then((res) => {
            const { token }: AuthResponse = res.data;
            if (token) {
              setToken(token);
            }
            dispatch.auth.SET_TOKEN(token);
            dispatch.auth.STOP_LOADING();
          })
          .catch((error: BaseErrorResponse) => {
            const errorMessage: string = error.response.data.title;
            dispatch.auth.SET_ERROR(errorMessage);
            dispatch.auth.STOP_LOADING();
          });
      },
    };
  },
});
