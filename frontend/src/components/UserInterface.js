import {useContext} from "react";
import userContext from "../utils/context";

const UserInterface = ()=>{
    const {userName} = useContext(userContext); 
    return (
        <div>
        <div className="text-center mt-10 text-4xl font-serif text-red-700"> Welcome {userName} </div>
        <div className="m-auto left-0 right-0 items-center">
        <button className="py-1 px-2 mty-3 bg-red-600 text-white font-serif rounded-md hover:bg-red-400" type='submit'>Logout</button>
        </div>
        </div>
    )
}


export default UserInterface;