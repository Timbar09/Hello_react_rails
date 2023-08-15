import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/greeting');
  const data = await response.data.greeting;
  return data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchGreeting.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greeting = action.payload;
      state.loading = false;
    },
    [fetchGreeting.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export { fetchGreeting };
export default greetingSlice.reducer;
