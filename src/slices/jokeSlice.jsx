// src/slices/jokeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch joke from Chuck Norris API based on category
export const fetchJoke = createAsyncThunk(
  'joke/fetchJoke',
  async (category = '') => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random${category ? `?category=${category}` : ''}`
    );
    return response.data.value; // Returning the joke text
  }
);

const initialState = {
  joke: '',
  loading: false,
  error: null,
  category: '',
};

const jokeSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.loading = false;
        state.joke = action.payload;
      })
      .addCase(fetchJoke.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCategory } = jokeSlice.actions;
export default jokeSlice.reducer;
