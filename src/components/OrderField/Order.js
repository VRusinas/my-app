import React, {useState,setState}  from 'react';
import Header from '../header/header';
import UserTable from '../userTable/userTable';
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
        if(chosenTime===null || requirements===null) {
alert("All field must be filled before submitting")
        } else{
        alert("Your order has been submitted")
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

    }
    let orderlist = 1;
    const handleClickOrderList = (event, param) =>{
        window.orderId = param;
        setorderList(orderlist++);
    }
    const [orderList, setorderList] = useState(null);
    if(orderList == 1){
        return (<UserTable/>)
    }

    return(
            <div className='orderContainer'>
                <div className='orderBox'>
                    <h1>State you order requirement: </h1>

                    <div className='orderRequirements'>
                        <div className='texBox'>
                        <input 
                        value={requirements} onChange = {(e) => handleInputChange(e)} id="requirements"
                        type="text" name="fname"/>
                        </div>

                        <div className='date'>
                        <label
                        className='dateName'
                         for="party">Enter the date you want your order to be completed:</label>
                        <input
                        className='datePicker'
                        //id="party"
                        type="date"
                        name="partydate"
                        value={chosenTime} onChange = {(e) => handleInputChange(e)} id="chosenTime"/>
                        </div>

                    </div>
                    <div className='button-container2'>

                    <button onClick={()=>handleSubmit()} type="submit" className='buttonT'>Submit</button>
                    <button onClick={event => handleClickOrderList(event)} type="submit" className='buttonT'>Order list</button>
                    </div>
                </div>
            </div>
    )

}
export default Order;