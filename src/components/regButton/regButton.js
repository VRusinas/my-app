import React, {useState,setState, useEffect} from 'react';
import RegistrationForm from '../registration/registration';
import './regButton.css'
function RegButton() {

    const [btn, btnSetClick] = useState([]);
    const handleClick = (event) =>{
        let btn1 = 1;
        btnSetClick(btn1++);
    }

    if(btn < 1){
    return(
        <div className='btnConteiner'>
            <div className='btncc'>
            <p onClick={event => handleClick(event)} className='regBtn'>Registration</p>
            </div>
    
        </div>
    
    )
    }
    else return (<RegistrationForm/>)
}
export default RegButton;