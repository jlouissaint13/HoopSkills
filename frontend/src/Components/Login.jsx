import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./Registration.jsx";
import Position from "./Position.jsx";
import Register from "./Registration.jsx"

import "./Login.css"
import {Button, TextField} from '@mui/material';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Login() {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const navigate = useNavigate();
async function login() {
    const data = {
        email : email.trim(),
        password : password.trim()

    };

    try {
        const response = await fetch('http://localhost:8080/Login/Request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        });
        if (response.status === 200) {
         alert("Success");
        }
        else {
            alert("Failure");
        }
    }catch (error) {
        alert(error);
    }
}
function register() {
    navigate("/Register")
}


    return (
        <div className={"container"}>
        <h1>Login</h1>
            <TextField id="email" label="Email" variant="outlined"
                       name={"email"}
                onChange={event => setEmail(event.target.value) }
            />
            <TextField id="password" label="Password" type={"password"} variant={"outlined"} name={"password"}
                       onChange={event => setPassword(event.target.value)}
            ></TextField>
            <Button variant={"contained"} onClick={login}>Login</Button>
            <Button variant={"contained"} onClick={register}>Register</Button>
            </div>


    );
}

export default Login
