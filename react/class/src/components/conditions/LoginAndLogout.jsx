import Button from "../Button";

function LoginAndLogout(){
    const isLockedIn = 1;
//     if(isLockedIn){
//         return <Button text="Logout"/>
//     } else{
//         return <Button text="Login"/>
//     }
    
// }
// return isLockedIn? <Button text="LOGOUT"/> : <Button text="LOG IN"/>
return isLockedIn == 1 && <Button text="LOGOUT"/>
}
export default LoginAndLogout;
