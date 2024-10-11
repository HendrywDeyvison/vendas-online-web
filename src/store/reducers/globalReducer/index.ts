import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NotificationType } from '../../../shared/types/NotificationType';
import { UserType } from './../../../modules/login/types/UserType';

interface GlobalState {
  notification?: NotificationType;
  user?: UserType;
}

const initialState: GlobalState = {
  notification: undefined,
  user: undefined,
};

export const globalReducer = createSlice({
  name: 'globalReducer',
  initialState,
  reducers: {
    setNotificationAction: (state, action: PayloadAction<NotificationType>) => {
      state.notification = action.payload;
    },
    setUserAction: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
  },
});

export const { setNotificationAction, setUserAction } = globalReducer.actions;

export default globalReducer.reducer;
