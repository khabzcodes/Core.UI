/* eslint-disable import/no-cycle */
import { createModel } from '@rematch/core';
import RootModel from '.';

const count = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment(state, payload: number) {
      return state + payload;
    },
    decrement(state, payload: number) {
      return state - payload;
    },
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number, state) {
      console.log('This is current root state', state);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      dispatch.count.increment(payload);
    },
    async decrementAsync(payload, number, state) {
      console.log('This is current root state', state);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      dispatch.count.decrement(payload);
    },
  }),
});

export default count;
