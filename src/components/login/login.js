import React, {useState,setState, useEffect} from 'react';
import Header from '../header/header';
import RegButton from '../regButton/regButton';
import Order from '../OrderField/Order';
import UserTable from '../userTable/userTable';
import './style.css'
import SpecialistTable from '../specialistTable/specialistTable';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
function Login() {
    
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [clickState, setClickState] = useState(null);
    const [id, setId] = useState(null);
    const [validator, setValidator] = useState(0);
    const [userType, setuserType] = useState(null);
    const [a, setA] = useState(0);
    let b=1;
   
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        const requestOptions = {
            method: 'POST',
           // headers: { 'Content-Type': 'application/json' },
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        };
        fetch('http://localhost:8080/users/login', requestOptions,)
            .then((response) => response.json())
            .then((response) => {
                setId(response.id)
                if(response.id !==-1){
                setuserType(response.userType)
                setValidator(1);  
                window.id = response.id;
                }              
            })
            
            //.then((data) => console.log(window.id))
            //window.id = id;

    }
   
    useEffect(()=>{
        
        console.log(id,"aaaa");
        if(id===-1) {
                toast.error("Failed to login", {
                    position: "bottom-center"
                  })
            }
            else if(id===null) {
            
            }
            else {
                toast.success('Login successful', {
                    position: "bottom-center"
                  })
        }
        setClickState(count++)

        }, [id, a])
    let count = 1;

    function initLogin(){
        const requestOptions = {
            method: 'POST',
           // headers: { 'Content-Type': 'application/json' },
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        };
        fetch('http://localhost:8080/users/login', requestOptions,)
            .then((response) => response.json())
            .then((response) => {
                if(response.id !== -1) {
                    toast.error("Failed to login", {
                        position: "bottom-center"
                      })
                setId(response.id)
                setuserType(response.userType)
                setValidator(1);
                console.log(window.id);
                } else {
                    toast.success('Login successful', {
                        position: "bottom-center"
                      })
                }
            })
            
            //.then((data) => console.log(window.id))
            window.id = id;

           // console.log(window.id);
            
    }
      
    const handleInputChange = (e) => {

    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }

    }
    //     if(id == null)
    // {
    //     onSubmit();
    // }
    
//     const handleSubmit = () => {
//         initLogin();
//      setClickState(count++);
     
//     const login = {
//         email: email,
//         password: password,
//     }

    
        
// }



    if(clickState < 1 || validator === 0)
    {
        
    return(
        <>
        <div className='flexForm'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formLogin">
            <div className="form-body1">

                <div className="email">
                    <label className="form__label1" for="email">Email </label>
                    <input type="email" id="email" className="form__input" placeholder="Email"
                    {...register("email", { required: true })}/>
                </div>
                {errors.email && <label><b className='red'>Please enter the Email</b></label>}
                <div className="password">
                    <label className="form__label1" for="password">Password </label>
                    <input className="form__input1" type="password" placeholder="Password"
                    {...register("password", { required: true })} />
                </div>
                {errors.password && <label><b className='red'>Please enter the Password</b></label>}
            </div>
            <div className="footer1">
                <button className='btn' type='submit'>Login</button>

            </div>
        </div>
        </form>
        </div>
        <RegButton /></>
   
    )
    }
    else{
        if(userType == "CLIENT"){
            return (<UserTable/>)
        }
        if(userType == "CUSTOMER_SERVICE_SPECIALIST"){
            return (<SpecialistTable/>)
        }
    }




}
export default Login;