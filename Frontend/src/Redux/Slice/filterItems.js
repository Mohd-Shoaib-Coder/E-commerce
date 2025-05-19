import { createSlice } from "@reduxjs/toolkit";



const initialState={

    Filter:[],


}


const filterSlice=createSlice({

name:"filter",
initialState,
reducers:{

   PriceInc:(state,action)=>{

    const item=action.payload;
const sorted=[...item].sort((a,b)=>a.price -b.price)

state.Filter=sorted;
   } ,

  resetFilter: (state) => {
  state.Filter = initialState;
},


   PriceDec:(state,action)=>{

const item=action.payload;

const sorted=[...item].sort((a,b)=>b.price-a.price);

state.Filter=sorted;

   },

   



Sortalpha:(state,action)=>{


     const items = action.payload;

  if (!Array.isArray(items)) return;

  const sorted = [...items].sort((a, b) => {
    const titleA = a?.title?.toLowerCase() || "";
    const titleB = b?.title?.toLowerCase() || "";
    return titleA.localeCompare(titleB);
  });

  state.Filter = sorted;
},


sortMen:(state,action)=>{

    const items=action.payload;
 const sorted= items.filter(product => product.category === "men's clothing");

  state.Filter = sorted;


},


sortWomen:(state,action)=>{

    const items=action.payload;
 const sorted= items.filter(product => product.category === "women's clothing");

  state.Filter = sorted;


}























}




})


export const  {PriceInc,resetFilter,PriceDec,Sortalpha,sortMen,sortWomen}=filterSlice.actions;
export default filterSlice.reducer;