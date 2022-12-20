import React, {useState,setState, useEffect} from 'react';
import ProjectLeadTable from '../projectLead/projectLeadTable';
function FormTask() {
   
    const [editData, setEditData] = useState([]);
    const [editclk, setedtClick] = useState([]);
    const [editrequirements, setEditRequirements] = useState([]);



    function initReview(){
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
    
    function initReviewPost(){
        const requestOptions = {
            method: 'POST',
           // headers: { 'Content-Type': 'application/json' },
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                id: window.orderId,
                systematizedRequirement: editrequirements
            })
        };
        fetch('http://localhost:8080/orders/projects', requestOptions)
            
    }



    useEffect(()=>{
        initReview();
        }, [])

        const handleClick = (event) =>{
            initReviewPost();
            alert("Task list has been created successfully")
            
            let clk = 1;
            setedtClick(clk++);
        }

       
    const handleInputChange = (e) => {
        const {value} = e.target;
            setEditRequirements(value);
        
    }


        if(editclk < 1){
        return(
      
            <div className='reviewContainer'>
                
                    <form  className='reviewBox' >
                    <div className='reviewbtncontainer'>
                    <h1>Your order information</h1>
                    <p  onClick={event => handleClick(event)} className='reviewT'>Save</p>
                    </div>
                
                        <>
                        <div className='big-data'>
                        <p>Systemized order requirement:</p>
                        <label className='lb-bg'> <textarea 
                         rows="4" cols="80" type="text" className='prw-impt-bg' readOnly={true} value={editData.systematizedRequirement}  /></label>
                        </div>
                        <div className='big-data'>
                        <br/><p>Form tasks:</p>
                        <label className='lb-bg'> <textarea 
                         rows="4" cols="80" type="text" className='prw-impt-bg' defaultValue={editData.systematizedRequirement} onChange = {(e) => handleInputChange(e)}   /></label>
                        </div></>
                    </form>
        </div>
        )
    }   
    else return (<ProjectLeadTable/>)
}
export default FormTask;