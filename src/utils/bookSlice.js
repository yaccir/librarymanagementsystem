import { createSlice } from "@reduxjs/toolkit"

import books from "./books";

const bookSlice=createSlice({
    name:"booksdata",
    initialState:{
        bookitems:books,
    },
    reducers:{
        addBookItem:(state,action)=>{
            state.bookitems.push(action.payload)
        },
        removeBookItem:(state,action)=>{

           
            state.bookitems=state.bookitems.filter((item,index)=>{
                return (index!==action.payload[0])
            })

            alert(`${action.payload[1].name} Deleted Successfully!!!`)
        },

        clearbookStore:(state,action)=>{

            state.bookitems.length=0;
            alert("All Books Deleted Successfully!!!")
        },

        deletebooklist:(state,action)=>{
           

            state.bookitems=state.bookitems.filter((item,index)=>{
                return !action.payload.includes(index)
            })

            alert("Selected Books Deleted Successfully!!!")


        }
    }
})

export default bookSlice.reducer;
export const{addBookItem,removeBookItem, deletebooklist,clearbookStore}=bookSlice.actions