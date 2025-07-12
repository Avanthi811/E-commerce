import React from 'react'
import { useSelector } from 'react-redux'
import ProductList from '../components/ProductList'
function Cart() {
  const cartProducts =useSelector((store)=>{
    return store.cartState.cartProducts
  })

  let productsList =cartProducts;
  return (
    <div>
      <h1 className='text-8xl text-center'>Cart</h1>
      <div>
         <ProductList productsList={productsList}/>
      </div>
    </div>
  )
}

export default Cart
