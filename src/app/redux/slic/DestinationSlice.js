import { createSlice } from "@reduxjs/toolkit";
const initialState =()=>
    {
        return {
            destinations: [
                {
                    name: "mkhzoumi",
                    days: "7",
                    fact: "very smart"
                },
                {
                    name: "humamm",
                    days: "79",
                    fact: "very very  smart"
                },
                {
                name : "waleed",
                days : "10",
                fact : "good"
             },
            ]
        }
    }
    const destinationSlic = createSlice({
        name : "destination",
        initialState:initialState,
        reducers : {}
    })
    export const destinationReducer = destinationSlic.reducer;