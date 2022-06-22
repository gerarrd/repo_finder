import { createSlice } from '@reduxjs/toolkit';
import api from '../api';

const initialState = {
  searchResults: {},
  searchResultsError: false,
  searchResultsLoading: false,
};

export const gitRepositorySlice = createSlice({
  name: 'git',
  initialState,
  reducers: {
    clearSearchResults: (state) => ({
      ...state,
      searchResults: {},
      searchResultsLoading: true,
      searchResultsError: false
    }),
    loadMoreSearchResults: (state) => ({
      ...state,
      searchResultsLoading: true,
    }),
    setSearchResults: (state, { payload }) => ({
      ...state,
      searchResults: payload,
      searchResultsLoading: false,
      searchResultsError: false
    }),
    addMoreSearchResults: (state, { payload: { items } }) => ({
      ...state,
      searchResultsLoading: false,
      searchResults: {
        ...state.searchResults,
        items: [
          ...state.searchResults.items,
          ...items
        ]
      }
    }),
    setSearchResultError: (state) => ({
      ...state,
      searchResults: {},
      searchResultsError: true,
      searchResultsLoading: false
    })
  },
});

export const {
  clearSearchResults,
  setSearchResultError,
  setSearchResults,
  loadMoreSearchResults,
  addMoreSearchResults
} = gitRepositorySlice.actions;

let currentPage = 1;
let currentSearchQuery = null;

export const getRepositoriesBySearchQuery = (searchQuery, loadNext) => async (dispatch) => {
  currentSearchQuery = searchQuery || currentSearchQuery;

  if(!loadNext) {
    currentPage = 0;
    dispatch(clearSearchResults());
  } else {
    dispatch(loadMoreSearchResults());
  }

  currentPage += 1;

  const {data, error} = await api.findRepositoriesBySearchQuery(currentSearchQuery, currentPage);
  
  if(error) {
    console.error(error);
    dispatch(setSearchResultError());
  } else if(data) {
    if(loadNext) {
      dispatch(addMoreSearchResults(data));
    } else {
      dispatch(setSearchResults(data));
    }
  }
}

export default gitRepositorySlice.reducer;