import React, {useState,setState, useEffect}  from 'react';
import './preview.css'


function Preview() {
    const [orderName, setOrderName] = useState([]);
    const [previewData, setpreviewData] = useState([]);


    function initLogin(){
        const requestOptions = {
            method: 'GET',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                previewId: orderName
            })
        };
        fetch('http://localhost:8080/orders/id?' + new URLSearchParams({id: orderName}))
            .then((response) => response.json())     
            .then((response) => {
                
                setpreviewData(response);
                // for(let i; i < response.length; i++){

                // }
       
    })       
    }

    initLogin();



    useEffect(()=>{
       
        setOrderName(window.orderId)
        }, [])

        console.log(orderName);

    return(
        <div>
            
                
                <h1>Your order list:</h1>
        
                
            
            
                    {previewData.map((dat, index) => (
            
                        <form key={index} className='formClass' >
                            <><label className='labelT'>Id  <input className='inputCl'  readOnly={true} value={dat.id} name="name" /></label>
                            <label className='labelT'>Data  <input className='inputCl'  readOnly={true} value={dat.deliveryDate}  /></label>
                            <label className='labelT'>Order name  <input className='inputCl'  readOnly={true} value={dat.orderNumber} /></label>
                            <label className='labelT'>Order state  <input className='inputCl'  readOnly={true} value="In progress"  /></label>
                            <div className='button-container'>


                                </div></>
                        
                        </form>
                        ))}
                
            

            </div>
    )
}
export default Preview;