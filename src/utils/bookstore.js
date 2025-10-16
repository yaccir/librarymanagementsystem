import { configureStore } from "@reduxjs/toolkit";
import bookreducer from "./bookSlice";
const bookstore=configureStore({
reducer:{
    booksdata:bookreducer
}


})

export default bookstore;
