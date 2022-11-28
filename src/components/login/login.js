import React, {useState,setState} from 'react';
import './style.css'



function Login() {

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
}
    const handleSubmit  = () => {
    const login = {
        email: email,
        password: password,
    }
    console.log(login);
}

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
export default Login;