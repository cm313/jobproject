import {useContext} from "react";
import userContext from "../utils/context";
import {useNavigate} from "react-router-dom";

const UserInterface = ()=>{
    const {userName} = useContext(userContext);
    const navigate = useNavigate(); 
    

 
    const handleLogout = ()=>{
      localStorage.removeItem("accesstoken");
      navigate('/');
    }

    return (
        <div>
        <div className="text-center mt-10 text-4xl font-serif text-red-700"> Welcome {userName} </div>
        <div className="text-center my-2 ">
        <button onClick={handleLogout} className="py-1 px-2 bg-red-600 text-white font-serif rounded-md hover:bg-red-400 hover:text-black" type='submit'>Logout</button>
        </div>
        </div>
    )
}


export default UserInterface;