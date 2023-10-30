import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        showSearch: false,
        searchResults: null
    },
    reducers : {
        toggleSearch: (state)=> {
            state.showSearch = !state.showSearch;
        },
        addSearchResults: (state,action) => {
            state.searchResults = action.payload;
        }
    }
})

export const {toggleSearch,addSearchResults} = searchSlice.actions;
export default searchSlice.reducer;