import {createContext, useState} from 'react'

export const PageContainer = createContext()

export function PageinationContextProvider({children}){
    const [pageNo, setPageNo] = useState(1)
    const [pageSize, setPageSize] = useState(5)
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(1)
    const pageValues ={
        pageNo,
        pageSize,
        setPageNo,
        setPageSize,
        cart,
        setCart,
        count,
        setCount
    }
    return(
        <div>
            <PageContainer.Provider value={pageValues}>
                {children}
            </PageContainer.Provider>
        </div>
    )
}
