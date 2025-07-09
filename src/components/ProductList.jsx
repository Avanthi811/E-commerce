import { useDispatch,useSelector } from "react-redux"
import cartSlice from "../redux/slices/CartSlice"

const actions =cartSlice.actions

function ProductsList(props){
    const {productsList} = props

    const dispatch = useDispatch();
    
    const cartProducts =useSelector((store)=>{
        return store.cartState.cartProducts
    })

    function handleAddToCart(product){
        dispatch(actions.addToCart(product))
    }
    function handleDeleteFromCart(product){
        dispatch(actions.deleteFromCart(product))
    }
    return(
        <ul className="flex flex-wrap justify-center">
        {productsList==null? <h1>Loading.....</h1> :
            productsList.map((product) =>{
                return(
                    <li key={product.title} className="flex flex-col justify-center items-center m-8 w-80 h-90 border-1 p-3  hover:shadow-2xl border-[lightgray]">
                        <img src={product.image} className="size-45 mt-4"/>
                        <h2 className="mt-3 text-center text-blue-800/75 flex-wrap">{product.title}</h2>
                        <p className="mb-2 text-center font-semibold text-2xl">${product.price}</p>
                        <div className="flex justify-center mt-4">
                            <svg onClick={()=>handleAddToCart(product)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <div className="pl-2 pr-2">{<PrintCount cartProducts={cartProducts} id={product.id}/>}</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path onClick={()=>handleDeleteFromCart(product)} strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

function PrintCount(props){
    const {cartProducts,id} =props;
    let quantity = 0 ;
    for(let i=0; i < cartProducts.length; i++){
        if(cartProducts[i].id == id){
           quantity =cartProducts[i].indQuantity;
        }
    }
    return(<>
    {quantity}
    </>)
}
export default ProductsList