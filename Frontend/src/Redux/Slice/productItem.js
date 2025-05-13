import { createAsyncThunk ,createSlice} from "@reduxjs/toolkit";


export const fetchData=createAsyncThunk("data",async()=>{

    const response=await fetch("https://fakestoreapi.com/products");

  return response.json();

})


const dataSlice=createSlice({

    name:"Data",
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },


    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{

            state.isLoading=true;
            
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{

           state.isLoading=false;
           state.data=action.payload;
        })

        builder.addCase(fetchData.rejected,(state,action)=>{
            console.log("Error",action.payload)
            state.isError=true;
            
        })
    }

})

export default dataSlice.reducer;