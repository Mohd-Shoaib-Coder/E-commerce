import { createSlice} from "@reduxjs/toolkit";




const initialState={


    cart:[], 
    totalAmount:0,
    totalQuantity:0,
}



const cartSlice=createSlice({


    name:"cart",
    initialState,
    reducers:{

        addToCart:(state,action)=>{
         const item =action.payload;
         const existingItem=state.cart.find((i)=> i.id===item.id)
           
if(existingItem){

    existingItem.quantity +=1;

}else{


    state.cart.push({...item,quantity:1})
}


state.totalQuantity +=1;
if(null){
    state.totalAmount+=0
}else{
    state.totalAmount=parseFloat((state.totalAmount+item.price).toFixed(2))
}


        },


removeFromCart:(state,action)=>{

const id=action.payload;

const removeItem=state.cart.find((i)=>i.id===i.id)

if(removeItem){

    state.totalQuantity -=removeItem.quantity;
    // state.totalAmount -=removeItem.price * removeItem.quantity;
    state.totalAmount=parseFloat((removeItem.price * removeItem.quantity).toFixed(2))
    state.cart =state.cart.filter((item)=>item.id !== id);
}

}



    }
})


export const  {addToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer;

