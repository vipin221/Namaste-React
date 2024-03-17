import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },
    reducers:{
        additems: ((state, action) =>{
            state.items.push(action.payload)
        }),
        removeItem: ((state, action) =>{
           state.items =  state.items.filter(item => item.card.info.id !== action.payload);
        }),
        clearItems: ((state)=>{
            state.items.length = 0;
        })
    }
});


export const {additems, removeItem, clearItems} = cartSlice.actions;
export default cartSlice.reducer;