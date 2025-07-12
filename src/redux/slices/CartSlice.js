import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cartQuantity:0,
        cartProducts:[]
    },
   reducers: {
  addToCart: (state, action) => {
    state.cartQuantity++;
    const productToBeAdded = action.payload;

    const requireProduct = state.cartProducts.find(
      (cProduct) => cProduct.id === productToBeAdded.id
    );

    if (!requireProduct) {
      const productCopy = { ...productToBeAdded, indQuantity: 1 };
      state.cartProducts.push(productCopy);
    } else {
      requireProduct.indQuantity++;
    }
  },

  deleteFromCart: (state, action) => {
    const productToBeDeleted = action.payload;
    const productIdx = state.cartProducts.findIndex(
      (cProduct) => cProduct.id === productToBeDeleted.id
    );

    if (productIdx === -1) {
      alert("no");
    } else {
      const product = state.cartProducts[productIdx];
      if (product.indQuantity === 1) {
        state.cartProducts.splice(productIdx, 1);
      } else {
        state.cartProducts[productIdx].indQuantity--;
      }
      state.cartQuantity--;
    }
  },
}

})
export default cartSlice