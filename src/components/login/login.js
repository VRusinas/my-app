import React, {useState,setState} from 'react';
import Header from '../header/header';
import RegButton from '../regButton/regButton';
import Order from '../OrderField/Order';
import UserTable from '../userTable/userTable';
import './style.css'
import SpecialistTable from '../specialistTable/specialistTable';


function Login() {
    
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [clickState, setClickState] = useState(null);
    const [id, setId] = useState(null);
    const [validator, setValidator] = useState(0);
    const [userType, setuserType] = useState(null);
   

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
            .then((response) => {
                if(response.id !== -1) {
                setId(response.id)
                setuserType(response.userType)
                setValidator(1);
                console.log(window.id);
                }
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



    if(clickState < 1 || validator === 0)
    {
        
    return(
        <>
        <div className='flexForm'>
        <div className="form1">
            <div className="form-body1">

                <div className="email">
                    <label className="form__label1" for="email">Email </label>
                    <input type="email" id="email" className="form__input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label1" for="password">Password </label>
                    <input className="form__input1" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="Password" />
                </div>
            </div>
            <div className="footer1">
                <button onClick={() => handleSubmit()} type="submit" className="btn">Login</button>

            </div>
        </div>
        </div>
        <RegButton /></>
   
    )
    }
    else{
        if(userType == "CLIENT"){
            return (<UserTable/>)
        }
        if(userType == "CUSTOMER_SERVICE_SPECIALIST"){
            return (<SpecialistTable/>)
        }
    }




}
export default Login;