import {configureStore} from "@reduxjs/toolkit";
import dataReducer from  "./Slice/productItem";
import cartReducer from  "./Slice/cartItem"
import filterReducer from "./Slice/filterItems"

export const store=configureStore({

    reducer:{

       data:dataReducer,
       cart:cartReducer,
       filter:filterReducer,
    }
});