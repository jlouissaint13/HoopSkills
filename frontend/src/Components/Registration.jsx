import {use, useState} from 'react'
import basketballAlien from '../assets/maxresdefault.jpg'
import altImage from '../assets/altImage.png'
import './Registration.css'
import {Button, TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Registration() {

const form = {
    hooperID:'',
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    username: ''
};
const [values,setValues] = useState(form);
const navigate = useNavigate();
const handleInputChange = (event) => {
    const {name,value} = event.target;

    setValues( {
        ...values,
        [name]: value,
    });
}
//TODO ADD Validation
async function register() {
    alert("started!")
    const data = {
        //bandaid
        //TODO
        hooperID: Math.floor(Math.random() * 1000),
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim(),
        username: values.username.trim(),
        password: values.password.trim(),
    }
    const response = await fetch('http://localhost:8080/Registration/Request',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    if (response.status === 200) {
        navigate('/position');
    }
   else {
       alert("Failed")
    }
}

    return (
        <>

            <div id="container">
                <h1>Registration</h1>
                <img src={basketballAlien} alt="Basketball Alien" style={{ width: '20%', height: 'auto' }} />
                <TextField id="firstName" label="First name" variant="outlined"
                           name={"firstName"}
                           value={values.firstName}
                           onChange={handleInputChange}
                />
                <TextField id="lastName" label="Last name" variant="outlined"
                           name={"lastName"}
                           value={values.lastName}
                           onChange={handleInputChange}
                />
                <TextField id="username" label="Username" variant="outlined"
                           name={"username"}
                           value={values.username}
                           onChange={handleInputChange}

                />
                <TextField id="email" label="Email" variant="outlined"
                           name={"email"}
                           value={values.email}
                           onChange={handleInputChange}
                />
                <TextField id="password" label="Password" /*type={"password"}*/ variant="outlined"
                           name={"password"}
                           value={values.password}
                           onChange={handleInputChange}
                />
                <Button id="registerButton" variant="contained"
                onClick={register}
                >Register </Button>
            </div>
        </>
    )
}

export default Registration
