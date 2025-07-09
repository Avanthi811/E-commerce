import { useSelector, useDispatch } from "react-redux";
import homeSlice from "../redux/slices/HomeSlice";

const actions = homeSlice.actions

const Categories = (props) => {
    const {setPageNo} = props
    const {categories} = useSelector((store)=>{
        return store.homeState
    })
    const dispatch = useDispatch()
    return (
    <div>
    {categories===null ? "" : <div>
        <button className="border-1 pr-3 pl-3 m-3 rounded-lg p-1 border-[gray] hover:bg-[lightgray]" onClick={() => {dispatch(actions.setCurrentCategory("All categories")); setPageNo(1)}}>All categories</button>
    {categories.map(each => {
        return (
            <button className="border-1 pr-3 pl-3 m-3 rounded-lg p-1 border-[gray] hover:bg-[lightgray]" onClick={() => {dispatch(actions.setCurrentCategory(each)); setPageNo(1)}}>{each}</button>
        )
    })}
    </div>}
    </div>
)
}
export default Categories