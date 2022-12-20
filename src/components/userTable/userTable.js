import React, {useState,setState, useEffect} from 'react';
import './userTable.css'
import Preview from '../preview/preview';
import Edit from '../edit/edit';
import Order from '../OrderField/Order';
import toast, { Toaster } from 'react-hot-toast';

function UserTable() {
   

    const [id,setId] = useState([]);
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [orderName, setOrderName] = useState([]);
    const [orderState, setOrderState] = useState([]);
    const [tableRefresh, setTableRefresher] = useState([]);
    const getData =()=>{
        fetch('http://localhost:8080/orders?' + new URLSearchParams({id: window.id}))
            .then((response) => {return response.json();})
            .then((response) => {
                
                setData(response);       
    })
   console.log(data[0]);
}

function OrderDelete(){
    fetch('http://localhost:8080/orders/id?orderDeleteId=' + window.orderId, { method: 'DELETE' })
    .then((response) => {return response.json();})
            .then((response) => {
                if(count === 0) {
                if(response===1) {
                    toast.success("Order was cancelled")
                }
                else if (response === 0) {
               toast.error("Order can't be deleted, since it is already in creation")
                }
                setCount(10);
            }
    })    
}
function UserDelete(){
    fetch('http://localhost:8080/users?deleteId=' +  window.id, { method: 'DELETE' }) 
}

useEffect(()=>{
    setTimeout(() => {
        getData()
       
       
      },100);
}, [window.refreshUserTable])

const [choiceClick, setchoiceClick] = useState(null);
const [choiceClickEdit, setchoiceClickEdit] = useState(null);
const [orderPick, setOrderPick] = useState(null);
const [deletePick, setDeletePick] = useState(null);
const [userDelete, setUserDelete] = useState(null);

let previewClick = 1;
let previewEdit = 1;
let previeworderPick = 1;
let previewDeletePick =1;
let previewUserDelete =1;



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
const handleClickDelete = (event, param) =>{
    window.orderId = param;
    setDeletePick(previewDeletePick++);
}
const handleUserDelete = (event) =>{
    setUserDelete(previewUserDelete++);
}




if(choiceClick == 1){
    return (<Preview/>)
}
if(choiceClickEdit == 1){
    return (<Edit/>)
}
if(orderPick == 1){
    
    return (<Order/>)
}
if(deletePick == 1)
{
   if(window.alertmessage == 1)
   {
    window.alertmessage=2;
    window.refreshUserTable++;
    console.log(window.alertmessage)
    console.log(window.refreshUserTable + "refresh table")

   }
    OrderDelete();    
}
if(userDelete == 1){
    UserDelete();
    setTimeout(() => {
        window.location.reload(false);
          }, 5000);
    return(
        <div><h1>your user has been deleted</h1></div>        
    )      
}
   
   
if(choiceClick == null)
{
    return(           
        <div>
            
            <div className='title'>
            <h1>Your order list:</h1>
            <div className='button-container2'>
            <p  onClick={event => handleUserDelete(event)} className='buttonT'>Delete profile</p>
            </div> 
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
                                <p onClick={event => handleClickDelete(event, dat.id)} className='buttonT'>Cancel</p>
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