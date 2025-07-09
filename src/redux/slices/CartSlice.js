import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartQuantity:0,
        cartProducts:[]
    },
    reducers:{
        addToCart:(state, data)=>{
            state.cartQuantity++; //+1
            const productToBeAdded = data.payload;
            const requireProduct =state.cartProducts
               .find((cProduct)=>{return cProduct.id === productToBeAdded.id});
            if(requireProduct === undefined){
                productToBeAdded.indQuantity = 1;
                state.cartProducts.push(productToBeAdded)
            }else{
                requireProduct.indQuantity++;
            }
           
        },
        deleteFromCart:(state, data)=>{
            const productToBeDeleted=data.payload;
            const productIdx =state.cartProducts
                       .findIndex((cProduct)=>{return cProduct.id ==productToBeDeleted.id})
            if(productIdx == -1){
                alert("No Product available in the cart")

            }else{
                let product =state.cartProducts[productIdx];
                if(product.indQuantity ==0){
                    state.cartProducts.splice(productIdx,0);
                }else{
                    state.cartProducts[productIdx].indQuantity--;
                    state.cartQuantity--;
                }
            }
        }
    }
})

export default cartSlice