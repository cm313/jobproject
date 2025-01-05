import {useRef, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'; 
import {useContext} from 'react';
import userContext from '../utils/context';


const Login = ()=>{
const {setUserName} = useContext(userContext);
const [localUserName, setLocalUserName] = useState(null);
const password = useRef(null);
const navigate = useNavigate();
const [responseData, setResponseData] = useState('');
           
      

    const handleSubmit = async ()=>{
        const obj = {
            userName: localUserName,
            password: password?.current?.value, 
        }
        if(obj.userName && obj.password){
        try{
              const response = await fetch('http://localhost:5000/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj),
              });
              const data = await response.json();
              if(response.ok){
                console.log(data.jwtToken);
                localStorage.setItem('accesstoken', JSON.stringify(data.jwtToken));
                setUserName(localUserName);
                navigate('/userinterface');
              }
              else{
                setResponseData(data);
              }
            }catch(error){
                setResponseData("error occured at fetch Api: "+error);
            }
        }
        else{
            setResponseData("enter the full detials, please");
        }
    }
    
 return (
    
    <>
    <div className="border border-black rounded-md w-3/12 mt-8 m-auto right-0 left-0 p-4">
    <form  onSubmit={(e)=>e.preventDefault()}>
        <div className="flex items-center mt-2">
            <div>UserName:</div>
            <div>
             <input onChange={(e)=>{setLocalUserName(e?.target?.value)}} className="border border-black rounded-md p-2 w-full ml-5" type="text"  placeholder="enter user name"></input>
            </div>
        </div>
        <div className="flex items-center mt-2">
            <div>Password:</div>
            <div>
             <input ref={password} className="border border-black rounded-md p-2 w-full ml-6" type="text" placeholder="enter password"></input>
            </div>
        </div>  
        <div className="text-center my-3">
         <button type="button" className="bg-blue-500 px-3 py-1 rounded-md font-serif hover:bg-blue-300" onClick={handleSubmit}>Login</button>
        </div>
    </form> 
    <div className="font-serif text-green-700 mt-6 text-center">{responseData}</div>
    </div>
    <Link to='/'><div className='text-center font-serif mt-2 text-violet-700'>Not a loggedin user, please Register here</div></Link>
    </>
  
 )
}

export default Login;