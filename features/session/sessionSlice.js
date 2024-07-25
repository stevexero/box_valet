import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import sessionService from './sessionService';
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from '../../utils/storage';

const initialState = {
  userIp: null,
  startTime: null,
  userSignedUp: false,
  reloadCount: 0,
  lastUnloadTime: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

/*
 *
 * Get User Session IP Address
 *
 */
export const getSessionIp = createAsyncThunk(
  'session/getSessionIp',
  async (_, thunkAPI) => {
    try {
      return await sessionService.getSessionIp();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    initializeSession: (state) => {
      const savedStartTime = getLocalStorageItem('startTime');
      const savedReloadCount = getLocalStorageItem('reloadCount');
      const savedLastUnloadTime = getLocalStorageItem('lastUnloadTime');

      if (savedStartTime !== null && savedReloadCount !== null) {
        state.startTime = savedStartTime;
        state.reloadCount = savedReloadCount;
        state.lastUnloadTime = savedLastUnloadTime;
      } else {
        state.startTime = Date.now();
        state.reloadCount = 0;
        setLocalStorageItem('startTime', state.startTime);
        setLocalStorageItem('reloadCount', state.reloadCount);
      }
    },
    startSession: (state) => {
      state.startTime = Date.now();
      state.reloadCount += 1;
      setLocalStorageItem('startTime', state.startTime);
      setLocalStorageItem('reloadCount', state.reloadCount);
    },
    setLastUnloadTime: (state, action) => {
      state.lastUnloadTime = action.payload;
      setLocalStorageItem('lastUnloadTime', state.lastUnloadTime);
    },
    endSession: (state) => {
      state.startTime = null;
      state.reloadCount = 0;
      removeLocalStorageItem('startTime');
      removeLocalStorageItem('reloadCount');
      removeLocalStorageItem('lastUnloadTime');
    },
    userSignup: (state) => {
      state.userSignedUp = true;
    },
    resetSignup: (state) => {
      state.userSignedUp = false;
    },
  },
  extraReducers: (builder) => {
    builder
      /* Get IP */
      .addCase(getSessionIp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSessionIp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userIp = action.payload;
      })
      .addCase(getSessionIp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.userIp = null;
      });
  },
});

export const {
  reset,
  initializeSession,
  startSession,
  endSession,
  setLastUnloadTime,
  userSignup,
  resetSignup,
} = sessionSlice.actions;

export default sessionSlice.reducer;
