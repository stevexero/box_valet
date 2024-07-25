import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import userReducer from '@/features/user/userSlice';
import sessionReducer from '@/features/session/sessionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    session: sessionReducer,
  },
});
