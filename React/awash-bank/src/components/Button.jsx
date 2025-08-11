import { useDispatch,useSelector } from "react-redux";
import { add,subtract,reset } from "./readux/CounterSlice";
export default function Button(){
    const dispatch = useDispatch()
    return(
        <>
            <div style={{display:"flex"}}>
                <button onClick={()=> dispatch(add())}>Add</button>
                <button onClick={()=> dispatch(subtract())}>subtract</button>
                <button onClick={()=> dispatch(reset())}>reset</button>
           
            </div>
        </>
    )

}
