import {useState} from 'react'
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
function register() {
    //set local storage for the next page where we actually choose a positon;
    setLocalStorage()
    navigate("/position")

}
    function setLocalStorage(){
        //bandaid
        //TODO
        localStorage.setItem("hooperID", Math.floor(Math.random() * 10000).toString());
        localStorage.setItem("firstName", values.firstName.trim());
        localStorage.setItem("lastName", values.lastName.trim());
        localStorage.setItem("email", values.email.trim());
        localStorage.setItem("username", values.username.trim());
        localStorage.setItem("password", values.password.trim());
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
