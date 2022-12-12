import React, {useState,setState} from 'react';
import './style.css'
import { useForm } from "react-hook-form";

function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {

        const registration = {
                    name: data.firstName,
                    lastName: data.lastName,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    password: password,
                    confirmPassword: confirmPassword,
                    userType: "CLIENT"
                }
            //     axios.post(`http://localhost:8080/register`, { registration })
            //   .then(res => {
            //     console.log(res);
            //     console.log(res.data);
            //   })
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.firstName,
                    surname: data.lastName,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    password: data.password,
                    confirmPassword: confirmPassword,
                    userType: "CLIENT"
                })
            };
            fetch('http://localhost:8080/register', requestOptions)
                .then(response => response.json())
                //.then(data => this.setState({ postId: data.id }));
    }
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "phoneNumber"){
            setPhoneNumber(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    // const handleSubmit = () => {
    //     const registration = {
    //         name: firstName,
    //         lastName: lastName,
    //         phoneNumber: phoneNumber,
    //         email: email,
    //         password: password,
    //         confirmPassword: confirmPassword,
    //         userType: "CLIENT"
    //     }
    // //     axios.post(`http://localhost:8080/register`, { registration })
    // //   .then(res => {
    // //     console.log(res);
    // //     console.log(res.data);
    // //   })
    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //         name: firstName,
    //         surname: lastName,
    //         phoneNumber: phoneNumber,
    //         email: email,
    //         password: password,
    //         confirmPassword: confirmPassword,
    //         userType: "CLIENT"
    //     })
    // };
    // fetch('http://localhost:8080/register', requestOptions)
    //     .then(response => response.json())
    //     //.then(data => this.setState({ postId: data.id }));
    //     console.log(registration);
    // }

    return(
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="footer">
                <button type='submit' className="btn">Register</button>
            </div>
            <div className="form-body">
            
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" placeholder="First Name"
                    {...register("firstName", { required: true })}/>
                </div>
                {errors.firstName && <p>Please check the First Name</p>}
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" className="form__input" placeholder="LastName"
                    {...register("lastName", { required: true })}/>
                </div>
                {errors.lastName && <p>Please check the Last Name</p>}
                <div className="phoneNumber">
                    <label className="form__label" for="phoneNumber">Phone number </label>
                    <input  type="number" className="form__input" placeholder="phone number"
                    {...register("phoneNumber", { required: true, maxLength: 15 })}/>
                </div>
                {errors.phoneNumber && <p>Please check the phone number</p>}
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" className="form__input" placeholder="Email"
                    {...register("email",
                    {
                        required: true,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    })}/>
                </div>
                {errors.email && <p>Please check the Email</p>}
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" placeholder="Password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })}                                    />
                </div>
                {errors.password && <p>Please check the Password</p>}
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" placeholder="Confirm Password"
                     {...register("passwordConfirm", {
                        required: true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                    })}  />
                </div>
                {errors.passwordConfirm && <p>Please check the Password</p>}
            </div>
           
            </form>
        </div>
       
    )       
}

export default RegistrationForm