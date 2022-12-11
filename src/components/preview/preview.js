import React, {useState,setState, useEffect}  from 'react';
import './preview.css'


function Preview() {
    const [orderName, setOrderName] = useState([]);
    const [previewData, setpreviewData] = useState([]);


    function initPreview(){
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
        fetch('http://localhost:8080/orders/id?orderPreviewId=' +  window.orderId)
            .then((response) => response.json())     
            .then((response) => {
                
                setpreviewData(response);
                console.log(orderName);
                // for(let i; i < response.length; i++){

                // }
       
    })       
    }

   
    console.log(previewData);


    useEffect(()=>{
        initPreview();
        setOrderName(window.orderId)
        }, [])

       

    return(
         
        <div>
            
                
        <h1>Your order list:</h1>

        
    
    
            
    
                <form  className='formClass' >
                    <><label className='labelT'>Id  <input className='inputCl'  readOnly={true} value={previewData.id}  name="name" /></label>
                    <label className='labelT'>Data  <input className='inputCl'  readOnly={true} value={previewData.deliveryDate}  /></label>
                    <label className='labelT'>Order name  <input className='inputCl'  readOnly={true} value={previewData.orderNumber} /></label>
                    <label className='labelT'>Order state  <input className='inputCl'  readOnly={true} value="In progress"  /></label>
                    <div className='button-container'>


                        </div></>
                
                </form>
               
        
    

    </div>
    )
}
export default Preview;