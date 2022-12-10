import React, {useState,setState, useEffect} from 'react';
import './userTable.css'
import Preview from '../preview/preview';

let a = {};

function UserTable() {
   

    const [id,setId] = useState([]);
    const [data, setData] = useState([]);
    const [orderName, setOrderName] = useState([]);
    const [orderState, setOrderState] = useState([]);

    const getData =()=>{
        fetch('http://localhost:8080/orders?' + new URLSearchParams({id: window.id}))
            .then((response) => {return response.json();})
            .then((response) => {
                
                setData(response);
                // for(let i; i < response.length; i++){

                // }
       
    })
   console.log(data[0]);
}
   
useEffect(()=>{
 
getData()
}, [])

const [choiceClick, setchoiceClick] = useState(null);
let previewClick = 1;
const handleClick = (event, param) =>{
window.orderId = param;
setchoiceClick(previewClick++);
}
//console.log(id.get(0));

//console.log(id[0].valueOf('userId'));

if(choiceClick < 1)
{
    return(
            
            <div>
            
                
                <h1>Your order list:</h1>
        
                
            
            
                    {data.map((dat, index) => (
            
                        <form key={index} className='formClass' >
                            <><label className='labelT'>Id  <input className='inputCl'  readOnly={true} value={dat.id} name="name" /></label>
                            <label className='labelT'>Data  <input className='inputCl'  readOnly={true} value={dat.deliveryDate}  /></label>
                            <label className='labelT'>Order name  <input className='inputCl'  readOnly={true} value={dat.orderNumber} /></label>
                            <label className='labelT'>Order state  <input className='inputCl'  readOnly={true} value="In progress"  /></label>
                            <div className='button-container'>


                                    <h1 onClick={event => handleClick(event, dat.id)} className='buttonT'>Edit</h1>
                                    <h1 onClick={event => handleClick(event, dat.id)} className='buttonT'>Preview</h1>
                                </div></>
                        
                        </form>
                        ))}
                
            

            </div>
        
        

        
        )
   }
   else return (<Preview/>)
}
export default UserTable;