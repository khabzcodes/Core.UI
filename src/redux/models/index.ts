/* eslint-disable import/no-cycle */
import { Models } from '@rematch/core';
import count from './count';
import { auth } from './auth';

interface RootModel extends Models<RootModel> {
  count: typeof count;
  auth: typeof auth;
}

export default RootModel;
export const models: RootModel = { count, auth };
