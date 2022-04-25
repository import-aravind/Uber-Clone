import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    curr_location : null,
    destination : "Manchester, UK",
    travel_time : null,

}
// create slice
export const navslice = createSlice({
    name:'nav',
    initialState,
    reducer: {
        setcurr_location : (state,action) => {
            state.curr_location = action.payload;
        },
        setdestination : (state,action) => {
            state.destination = action.payload;
        },
        settravel_time : (state,action) => {
            state.travel_time = action.payload;
        },

    }
});

export const {setcurr_location,setdestination,settravel_time} = navslice.actions;

// selectors -  for using the slice in store

export const selectcurr_location = (state) => state.nav.curr_location;
export const selectdestination = (state) => state.nav.destination;
export const selecttravel_time = (state) => state.nav.travel_time;

// reducer for store.js

export default navslice.reducer;
