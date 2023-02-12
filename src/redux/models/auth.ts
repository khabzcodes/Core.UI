/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core';
import axios from 'axios';
import RootModel from '.';
import LoginRequest from '../../interfaces/authentication/request/LoginRequest';
import AuthResponse from '../../interfaces/authentication/response/AuthResponse';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

export const auth = createModel<RootModel>()({
  state: {
    isAuthenticated: false,
    token: localStorage.getItem('accessToken'),
  } as AuthState,
  reducers: {
    SET_AUTH_STATE: (state, payload: AuthResponse) => {
      const { token } = payload;
      if (typeof token === 'string') {
        state.isAuthenticated = true;
        state.token = payload.token;
        localStorage.setItem('accessToken', token);
      }
    },
  },
  effects: (dispatch) => {
    const { token } = dispatch;
    return {
      async loginUserAsync(request: LoginRequest): Promise<void> {
        const response = await axios({ method: 'POST', data: request });
        const { data }: { data: AuthResponse } = await response.data;
        token.SET_AUTH_STATE(data);
      },
    };
  },
});
