import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserType } from '../../../modules/login/types/UserType';

interface UserState {
  users: UserType[];
}

const initialState: UserState = {
  users: [],
};

export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUsersAction: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersAction } = userReducer.actions;

export default userReducer.reducer;
