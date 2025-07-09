import { useEffect, useContext } from "react"
import ProductsList from "../components/ProductList";
import Categories from '../components/Categories'
import basicOps from "../utility/basicOps";
import {Link} from 'react-router-dom';
import { PageContainer } from "../context/PageinationContextProvider";
import { userDarkContext } from "../context/DarkModeContextProvider";
import {useSelector, useDispatch} from 'react-redux'
import homeSlice from "../redux/slices/HomeSlice";

const actions = homeSlice.actions
const Home = () => {
    // const [productsArr, setProducts] = useState(null)
    // const [searchValue, setSearchVlue] = useState("")
    // const [sort, setSort] = useState(0)
    // const [categories, setCategories] = useState(null)
    // const [currentCategory, setCurrentCategory] = useState("All categories")
    const {pageNo, pageSize, setPageNo} = useContext(PageContainer)

    const {darkMode, toggleDarkMode} = userDarkContext()

    const cartQuantity = useSelector((store)=>{
        return store.cartState.cartQuantity
    });

    const {productsArr, searchValue, sort, currentCategory} = useSelector((store)=>{
        return store.homeState 
    })

    const dispatch = useDispatch(

    )
    const inputValue = (event) => {
        let value = event.target.value
        dispatch(actions.setSearchValue(value))
        setPageNo(1)
    }
     function fetchData() {
        async function dataFunc() {
            const response = await fetch('https://fakestoreapi.com/products')
            const datajson = await response.json()
            console.log(datajson)
            // setProducts(datajson)
            dispatch(actions.setProducts(datajson))
        }
        dataFunc()
    }
    useEffect(fetchData,[])

    function fetchCategory(){
        async function category(){
            const response = await fetch("https://fakestoreapi.com/products/categories")
            const catData = await response.json()
            console.log(catData)
            // setCategories(catData)
            dispatch(actions.setCategories(catData))

        }
        category()
    }
    useEffect(fetchCategory, [])

    let details = basicOps(productsArr, searchValue, sort, currentCategory, pageNo, pageSize)
    
    if (!details){
        return null
    }
    
    let filteredSortedGroupByArr = details.filteredSortedGroupByArr
    let totalPages = details.totalPages

    return (
        
            <div className="flex flex-col justify-center relative">
                <header className="flex justify-center">
                    <input className="w-80 p-2 rounded-lg bg-gray-200/50 mt-2" type="search" placeholder="Search" value={searchValue} onChange={inputValue}/>
                    <div className="flex flex-row m-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8" onClick={()=>dispatch(actions.setSort(1))}>
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8" onClick={()=>dispatch(actions.setSort(-1))}>
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z" clipRule="evenodd" />
                        </svg>
                        <div className="flex ml-5">
                    {darkMode ? <button onClick={toggleDarkMode}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    </button> : <button onClick={toggleDarkMode}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </button>}
                </div>
                    </div>
                </header>
                <div className="flex flex-row justify-end mr-30">
                    <Link to="/" className="m-2">Home</Link>
                    <Link to="/user" className="m-2">Users</Link>
                    <Link to="/cart" className="m-2">
                    <div className="flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                    <div className="text-lightblue-900 pl-2 size-4">{cartQuantity}</div>
                    </div>
                    </Link>
                </div>
                
                <div className="flex flex-row justify-center mt-4 p-2">
                    <Categories setPageNo={setPageNo} />
                </div>
            <div className={darkMode ? 'dark' : ''}>
                <div className="h-screen flex flex-col">
                    <main className="min-w-60 bg-white text-black dark:bg-gray-800 dark:text-white">
                        <ProductsList productsList={filteredSortedGroupByArr} />
                    </main>
                
            <div className="flex justify-center items-end h-[30vh] bg-white text-black dark:bg-gray-800 dark:text-white">
                <button onClick={()=>{
                    if (pageNo>1){
                        setPageNo(prepageNo => prepageNo-1)
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z" clipRule="evenodd" />
                    </svg>
                </button>
                <button onClick={()=>{
                    if (pageNo<totalPages){
                        setPageNo(prepageNo => prepageNo+1)
                    }
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                    </svg>
                </button>
                </div>
            </div>
            </div>
        </div>
    )
} 
export default Home