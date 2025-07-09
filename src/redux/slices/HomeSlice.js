import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name:"homeSlice",
    initialState:{
        productsArr:null,
        searchValue:"",
        sort:0,
        categories:null,
        currentCategory:"All categories"
    }, 
    reducers:{
        setProducts:(state, data)=>{
            state.productsArr = data.payload
        },
        setCategories:(state, data)=>{
            state.categories = data.payload
        },
        setSort:(state, data) => {
            state.sort = data.payload
        },
        setCurrentCategory:(state, data)=>{
            state.currentCategory = data.payload
        },
        setSearchValue:(state, data)=>{
            state.searchValue = data.payload
        }
    }
})
export default homeSlice