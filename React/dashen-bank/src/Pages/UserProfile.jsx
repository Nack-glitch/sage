import {useParams} from "react-router-dom"
export default function UserProfile(){
    const param =useParams()
    return <>
    <h1>{param.UserId}</h1>
    </>
}