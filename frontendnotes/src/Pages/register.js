import React, {useState} from 'react';
import {Form,Button,Container} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../Components/Navbar';

const styles={
    heading1: {
        color:"blue"
    }
}

function Register() {
    const [enteredEmail,setEmail]=useState('');
    const [enteredName,setName]=useState('');
    const [enteredMobile,setMobile]=useState('');
    const [enteredPassword,setPassword]=useState('');
    const [enteredOrg,setOrg]=useState('');

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const nameChangeHandler =(event) => {
        setName(event.target.value);
    }

    const mobileChangeHandler =(event) => {
        setMobile(event.target.value);
    }

    const passwordChangeHandler =(event) => {
        setPassword(event.target.value);
    }
    const orgChangeHandler =(event) => {
        setOrg(event.target.value);
    }

    const registerHandler= (event) => {
        event.preventDefault();

        //reset values
        setEmail('');
        setName('');
        setMobile('');
        setPassword('');
        setOrg('');

        console.log(enteredName,enteredEmail,enteredMobile,enteredPassword,enteredOrg);


        //calling the backend
        fetch('http://127.0.0.1:2000/newregistration?'+'name='+enteredName +'&mobile='+enteredMobile+'&email='+enteredEmail+'&org='+enteredOrg+'&password='+enteredPassword)
       .then(
            (response) => (response.json())
        ).then((response)=>{
            if(response.status==='success'){
                document.getElementById('res').innerHTML='Registered successfully';
                document.getElementById('err').innerHTML='';
            }else if(response.status==='failure'){
                document.getElementById('err').innerHTML='Account Existed Already';
                document.getElementById('res').innerHTML='';
            }

        });
    }

    return(
        <div>
            <Navbar />
            <Container className='col-sm-3'>
                <h1 style={styles.heading1}>Register page</h1> <br/>

                <Form onSubmit={registerHandler}>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={enteredName} onChange={nameChangeHandler} placeholder='Enter Name' />
                    </Form.Group> <br/>

                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text"  value={enteredEmail} onChange={emailChangeHandler} placeholder='Enter email' />
                    </Form.Group><br/>

                    <Form.Group>
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="text"  value={enteredMobile} onChange={mobileChangeHandler} placeholder='Enter Mobile' />
                    </Form.Group><br/>

                    <Form.Group>
                        <Form.Label>Organization</Form.Label>
                        <Form.Control type="text" value={enteredOrg} onChange={orgChangeHandler} placeholder='Enter Organization' />
                    </Form.Group><br/>

                    <Form.Group>
                        <Form.Label>password</Form.Label>
                        <Form.Control type="password"  value={enteredPassword} onChange={passwordChangeHandler} placeholder='Enter password' />
                    </Form.Group><br/>

                    <Button type='submit'>Register</Button>
                </Form>

                <span style={{color:"red"}} id="err" ></span>
                <span style={{color:"green"}}id="res"></span>          
            </Container>
        </div>
    );
}

export default Register;