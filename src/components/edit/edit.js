import React,  {useState,setState, useEffect}  from 'react';
import UserTable from '../userTable/userTable';
function Edit() {


    const [editData, setEditData] = useState([]);
    const [editclk, setedtClick] = useState([]);
    const [editrequirements, setEditRequirements] = useState([]);



    function initEdit(){
        const requestOptions = {
            method: 'GET',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                previewId: editData
            })
        };
        fetch('http://localhost:8080/orders/id?orderPreviewId=' +  window.orderId)
            .then((response) => response.json())     
            .then((response) => {
                
                setEditData(response);
                console.log(editData);
                // for(let i; i < response.length; i++){

                // }
       
    })       
    }
    
    function initEditPost(){
        const requestOptions = {
            method: 'POST',
           // headers: { 'Content-Type': 'application/json' },
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                id: window.orderId,
                requirements: editrequirements
            })
        };
        fetch('http://localhost:8080/orders/id?', requestOptions)
            
    }



    useEffect(()=>{
        initEdit();
        }, [])

        const handleClick = (event) =>{
            initEditPost()
            alert("You have edited your order requirements");

            
            let clk = 1;
            setedtClick(clk++);
        }

       
    const handleInputChange = (e) => {
        const {value} = e.target;
            setEditRequirements(value);
        
    }


        if(editclk < 1){
        return(
      
            <div className='preview-main'>
                
                    <form  className='form-preview' >
                    <div className='headerPrw'>
                    <h1>Your order information:</h1>
                    <p  onClick={event => handleClick(event)} className='buttonT'>Save</p>
                    </div>
                
                        <>
                        <div className='big-data'>
                        <p>Order requirements:</p>
                        <label className='lb-bg'> <textarea 
                         rows="4" cols="80" type="text" className='prw-impt-bg' defaultValue={editData.requirements} onChange = {(e) => handleInputChange(e)}   /></label>
                        </div></>
                    </form>
        </div>
        )
    }   
    else return (<UserTable/>)
}
export default Edit;