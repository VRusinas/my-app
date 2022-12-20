import React, {useState,setState, useEffect}  from 'react';
import UserTable from '../userTable/userTable';
import './preview.css'


function Preview() {
    const [orderName, setOrderName] = useState([]);
    const [previewData, setpreviewData] = useState([]);

    const [prwClick, setPrwClick] = useState(0);


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
               
                // for(let i; i < response.length; i++){

                // }
       
    })       
    }

   
    console.log(previewData);


    useEffect(()=>{
        initPreview();
        setOrderName(window.orderId)
        }, [])

        const handleClick = (event) =>{
            let clk = 1;
            setPrwClick(clk++);
        }
        console.log(prwClick);


        if(prwClick < 1){
    return(
      
            <div className='preview-main'>
                
                    <form  className='form-preview' >
                    <div className='headerPrw'>
                    <h1>Your order information</h1>
                    <p  onClick={event => handleClick(event)} className='buttonT'>Back</p>
                    </div>
                
                        <>
                        <div  className='small-data'>
                        <label className=''>Order name  <input className='prw-impt-sm'  readOnly={true} value={previewData.orderNumber} /></label>
                        <label className=''>Data  <input className='prw-impt-sm'  readOnly={true} value={previewData.deliveryDate}  /></label>
                        <label className=''>Order state  <input className='prw-impt-sm'  readOnly={true} value={previewData.state}   /></label>
                        </div>


                        <div className='big-data'>
                        <p>Order requirements</p>
                        <label className='lb-bg'> <textarea 
                         rows="4" cols="80" className='prw-impt-bg'  readOnly={true} value={previewData.requirements}   /></label>
                        </div></>
                    
                    </form>
        </div>
        )
    }   
    else return (<UserTable/>)
}
export default Preview;