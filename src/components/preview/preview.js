import React, {useState,setState, useEffect}  from 'react';
import './preview.css'


function Preview() {
    const [orderName, setOrderName] = useState([]);

    useEffect(()=>{
       
        setOrderName(window.orderId)
        }, [])

        console.log(orderName);

    return(
        <div className='preview-conatiner'>
            <div className='preview-body'>
                <h1>Order preview</h1>
                    <div className='order-preview-container'>

                        <p>{orderName}</p>
                    </div>

            </div>
        </div>
    )
}
export default Preview;