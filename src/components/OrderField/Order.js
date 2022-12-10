import React, {useState,setState}  from 'react';
import Header from '../header/header';
import './style.css'
function Order() {

    
    const [chosenTime, setChosenTime] = useState(null);
    const [requirements, setRequirements] = useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "requirements"){
            setRequirements(value);
        }
        if(id === "chosenTime"){
            setChosenTime(value);
        }
    }

    const handleSubmit = () => {
        console.log(window.id);
        const addOrder = {
            requirements: requirements
        }
        const requestOptions = {
            method: 'POST',
           // headers: { 'Content-Type': 'application/json' },
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                requirements: requirements,
                userId: window.id,
                deliveryDate: chosenTime
            })
        };
        fetch('http://localhost:8080/orders', requestOptions,)
            .then((response) => response.json())
    }

    return(
            <div className='orderContainer'>
                <div className='orderBox'>
                    <h1>Reikalavimai: </h1>

                    <div className='orderRequirements'>
                        <div className='texBox'>
                        <input 
                        value={requirements} onChange = {(e) => handleInputChange(e)} id="requirements"
                        type="text" name="fname"/>
                        </div>

                        <div className='date'>
                        <label
                        className='dateName'
                         for="party">Enter a date and time for your party booking:</label>
                        <input
                        className='datePicker'
                        //id="party"
                        type="date"
                        name="partydate"
                        value={chosenTime} onChange = {(e) => handleInputChange(e)} id="chosenTime"/>
                        </div>

                    </div>
                    <button onClick={()=>handleSubmit()} type="submit" className='submitBtn'>Užsakyti</button>
                    <h1>{window.id}</h1>
                </div>
            </div>
    )

}
export default Order;