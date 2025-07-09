export default function basicOps(productsArr, searchValue, sort, currentCategory, pageNo, pageSize){
    if (productsArr === null){
        return
    }
    let filteredArr = productsArr
    if(searchValue !== ""){
        filteredArr = filteredArr.filter(product => {
            let lowerTitle = product.title.toLowerCase()
            let lowerSearch = searchValue.toLowerCase()
            return lowerTitle.includes(lowerSearch)
        }) 
        
    }
    // let min=0
    // let arr=[]
    // const upArrow = () => {
    //     const filteredArr = filteredArr.map(each => {
    //         if (each.price >min){
    //             min=each.price
    //             arr.append(each)
    //         }
    //     })
    // }
    // let max=1000000000
    // let arr1=[]
    // const downArrow = () => {
    //     const filteredArr = filteredArr.map(each => {
    //         if (each.price < max){
    //             max=each.price
    //             arr1.append(each)
    //         }
    //     })
    // }
    let filteredSortedArr = [...filteredArr]
    if (sort !== 0){
        if (sort == 1){
            filteredSortedArr = filteredSortedArr.sort(onIncrementCom)
        } else{
            filteredSortedArr = filteredSortedArr.sort(onDecrementCom)
        }
    }
    let filteredSortedGroupByArr = filteredSortedArr
    if (currentCategory !== "All categories"){
        filteredSortedGroupByArr = filteredSortedGroupByArr.filter(product => {
            return product.category === currentCategory
        })
    }
    
    let totalPages = filteredSortedGroupByArr.length/pageSize
    let sidx = (pageNo - 1) * pageSize
    let eidx = sidx + pageSize
    filteredSortedGroupByArr = filteredSortedGroupByArr.slice(sidx, eidx)
    console.log(filteredSortedGroupByArr)
    let details = {
        filteredSortedGroupByArr,
        totalPages
    }
    return details
}

function onIncrementCom(pro1, pro2){
    if (pro1.price>pro2.price){
        return 1;
    }
    else{
        return -1;
    }
} 
function onDecrementCom(pro1, pro2){
    if (pro1.price<pro2.price){
        return 1;
    }
    else{
        return -1;
    }
}