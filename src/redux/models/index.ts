/* eslint-disable import/no-cycle */
import { Models } from '@rematch/core';
import count from './count';

interface RootModel extends Models<RootModel> {
  count: typeof count;
}

export default RootModel;
export const models: RootModel = { count };
