import {configureStore} from "@reduxjs/toolkit";
import { sinacolaSlice } from "./sinacolaSlice";

export const store = configureStore({
    reducer : {
   sinacola : sinacolaSlice.reducer
    }
 
});
