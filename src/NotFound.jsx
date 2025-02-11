import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFound(){
const navigate=useNavigate()
useEffect(()=>{
    setTimeout(() => {
        navigate("/Home")
    }, 5000);
})
    return(
<>
<h1>This is the not found </h1>
<img src="OIP.jpg"></img>
</>
    )
}
export default NotFound;