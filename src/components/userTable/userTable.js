import React, {useState,setState, useEffect} from 'react';
import './userTable.css'
import Preview from '../preview/preview';
import Edit from '../edit/edit';
import Order from '../OrderField/Order';

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
const [choiceClickEdit, setchoiceClickEdit] = useState(null);
const [orderPick, setOrderPick] = useState(null);

let previewClick = 1;
let previewEdit = 1;
let previeworderPick = 1;


const handleClick = (event, param) =>{
    window.orderId = param;
    setchoiceClick(previewClick++);
}
const handleClickedit = (event, param) =>{
    window.orderId = param;
    setchoiceClickEdit(previewEdit++);
}
const handleClickOrder = (event, param) =>{
    window.orderId = param;
    setOrderPick(previeworderPick++);
}

//console.log(id.get(0));
//console.log(id[0].valueOf('userId'));

if(choiceClick == 1){
    return (<Preview/>)
}
   if(choiceClickEdit == 1){
    return (<Edit/>)
}
if(orderPick == 1){
    return (<Order/>)
}
   
   
if(choiceClick == null)
{
    return(           
            <div>
                
                <div>
                <h1>Your order list:</h1>
           
                </div>
       
        
                    {data.map((dat, index) => (
            
                        <form key={index} className='formClass' >
                            <><label className='labelT'>Id  <input className='inputCl'  readOnly={true} value={dat.id} name="name" /></label>
                            <label className='labelT'>Data  <input className='inputCl'  readOnly={true} value={dat.deliveryDate}  /></label>
                            <label className='labelT'>Order name  <input className='inputCl'  readOnly={true} value={dat.orderNumber} /></label>
                            <label className='labelT'>Order state  <input className='inputCl'  readOnly={true} value={dat.state}  /></label>
                            <div className='button-container'>

                                    <p onClick={event => handleClickedit(event, dat.id)} className='buttonT'>Edit</p>
                                    <p onClick={event => handleClick(event, dat.id)} className='buttonT'>Preview</p>
                                    <p className='buttonT'>Cancel</p>
                                </div></>              
                        </form>
                        ))}

                        <div className='button-container2'>
                        <p onClick={event => handleClickOrder(event)} className='buttonT'>Add order</p>
                        <a href="" className='buttonST'>Logout</a>
                            </div> 
                        </div> 
        )
   }  

  
    
  
   
   {console.log(choiceClickEdit)}
 






  




}
export default UserTable;