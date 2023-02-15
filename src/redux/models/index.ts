/* eslint-disable import/no-cycle */
import { Models } from '@rematch/core';
import { auth } from './auth';
import { profile } from './profile';
import { users } from './users';

interface RootModel extends Models<RootModel> {
  auth: typeof auth;
  profile: typeof profile;
  users: typeof users;
}

export default RootModel;
export const models: RootModel = { auth, profile, users };
