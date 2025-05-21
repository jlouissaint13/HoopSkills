import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "./Registration.jsx";
import Position from "./Position.jsx";
import "./Login.css"
import {Button, TextField} from '@mui/material';
import {useState} from "react";
function Login() {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

//async function Login()

    return (
        <div className={"container"}>
        <h1>Login</h1>
            <TextField id="email" label="Email" variant="outlined"
                       name={"email"}

            />
            <TextField id="password" label="Password" type={"password"} variant={"outlined"} name={"password"}

            ></TextField>
            </div>


    );
}

export default Login
