import React, {useState,setState, useEffect} from 'react';
import Review from '../review/review';

function SpecialistTable() {
   

    const [id,setId] = useState([]);
    const [data, setData] = useState([]);
    const [orderName, setOrderName] = useState([]);
    const [orderState, setOrderState] = useState([]);

    const getData =()=>{
        fetch('http://localhost:8080/orders/css' )
            .then((response) => {return response.json();})
            .then((response) => {
                
                setData(response);
       
    })
   console.log(data[0]);
}
   
useEffect(()=>{
 
getData()
}, [])

const [choiceClick, setchoiceClick] = useState(null);
const [choiceClickEdit, setchoiceClickEdit] = useState(null);

let previewClick = 1;
let previewEdit = 1;


const handleClick = (event, param) =>{
    window.orderId = param;
    setchoiceClick(previewClick++);
}
const handleClickedit = (event, param) =>{
    window.orderId = param;
    setchoiceClickEdit(previewEdit++);
}

   if(choiceClickEdit == 1){
    return (<Review/>)
}
   
if(choiceClick == null)
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

                                    <h1 onClick={event => handleClickedit(event, dat.id)} className='buttonT'>Review</h1>
            
                                </div></>              
                        </form>
                        ))}
            </div> 
        )
   }  

   {console.log(choiceClickEdit)}


}
export default SpecialistTable;