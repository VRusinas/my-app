import React, {useState,setState} from 'react';
import Order from '../OrderField/Order';
import './style.css'


function Login() {
    
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [clickState, setClickState] = useState(null);
    const [id, setId] = useState(null);
   

    let count = 1;

    function initLogin(){
        const requestOptions = {
            method: 'POST',
           // headers: { 'Content-Type': 'application/json' },
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        };
        fetch('http://localhost:8080/users/login', requestOptions,)
            .then((response) => response.json())
            .then((response) => {setId(response.id)
                window.id = id;
                console.log(window.id);
            })
            
            //.then((data) => console.log(window.id))
            window.id = id;
    
           // console.log(window.id);
            
    }


   
   

    const handleInputChange = (e) => {

    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
}
    if(id == null)
{
    initLogin();
}
    
    const handleSubmit = () => {
        initLogin();
     setClickState(count++);
     
    const login = {
        email: email,
        password: password,
    }

    
        
}

    if(clickState < 1)
    {
        
    return(
        <div className="form">
        <div className="form-body">

            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
            </div>
        </div>
        <div className="footer">
            <button onClick={()=>handleSubmit()} type="submit" className="btn">Login</button>
        </div>
    </div>
   
    )
    }
    else{
        return(<Order/>)
    }
}
export default Login;