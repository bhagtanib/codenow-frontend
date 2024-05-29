// slices.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload.userWithoutSensitiveInfo;
    },
    
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});
const currentProblemsSlice = createSlice({
  name: 'currentProblems',
  initialState: {
    problems: [],
    listName: "",
    filteredProblems: [],
    loading: true
  },
  reducers: {
    updateProblems(state, action) {
      state.problems = action.payload.problems !== undefined ? action.payload.problems : [];
      state.listName = action.payload.listName !== undefined ? action.payload.listName : "";
      state.filteredProblems = action.payload.filteredProblems !== undefined ? action.payload.filteredProblems : state.problems;
    },
    resetProblems(state, action) {
      state.problems = [];
      state.listName = "";
      state.filteredProblems = []; // Reset filteredProblems
    },
    setLoading(state, action){
      state.loading = action.payload
    }
  },
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state - 1;
    },
  },
});

const initialState = {
  theme: 'light',
  themes: {
    light: {
      backgroundColor: '#fff',
      color: '#333',
    },
    dark: {
      backgroundColor: '#333',
      color: '#fff',
    },
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});


export const { login, logout } = authSlice.actions;
export const { updateProblems, resetProblems, setLoading } = currentProblemsSlice.actions;
export const { increment, decrement } = counterSlice.actions;

export const authReducer = authSlice.reducer;
export const counterReducer = counterSlice.reducer;
export const currentProblemsReducer = currentProblemsSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = state => state.theme;

export const themeReducer = themeSlice.reducer;