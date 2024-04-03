'use client'

import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import "./Signup.css";
import axios from "axios";
import Cookies from 'universal-cookie';
import google from './google.png';
import apple from './apple.svg';
import Link from 'next/link';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const cookies = new Cookies();

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
        method: "post",
        url: "http://localhost:3080/register",
        data: {
          name,
          email,
          password,
        },
    };

    // call the api
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
    });
  }

  return (
    <div className="signup-main">
        <div className="register-container">
            <Form className="register-form" onSubmit={(e) => handleSubmit(e)}>

            <h1 className='register-title'>Sign up to Adneta</h1>

            <p className='already-have-an-account'>Already have an account?&nbsp;<Link href='login'>Log in</Link></p>

            {/* google button */}
            <div className='google-button-container'>
              <button className="google-button">
                <img src={google.src} alt="google" className="google-icon" />
                  Continue with Google
              </button>
            </div>

            {/* apple button */}
            <div className='apple-button-container'>
              <button className="apple-button">
                <img src={apple.src} alt="apple" className="apple-icon" />
                Continue with Apple
              </button>
            </div>

            <div className='horizontal-line-container'>
              <hr className='horizontal-line' />
            </div>

            <p className='signup-with-email'>Or sign up with your email address</p>

            {/* name */}
            <Form.Group controlId="formNameAdminRegister">

                <Form.Label className='full-name'>What's your full name?</Form.Label>
                <Form.Control
                type="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name" />

            </Form.Group>

            {/* email */}
            <Form.Group controlId="formEmailAdminRegister">
                {/* display success message */}
                {/* {register ? (
                <p className="text-success">New admin registered successfully</p>
                ) : (
                <p className="text-danger">Something failed. New admin is not registered.</p>
                )} */}

                <Form.Label className='whats-email'>What's your email?</Form.Label>
                <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formPasswordAdminRegister">
                <Form.Label className='create-password'>Create a password</Form.Label>
                <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password" />
            </Form.Group>

            <div className='tos-container'>
                <p>By clicking on 'Sign up', you agree to Adneta's&nbsp;<a href="#">Terms and Conditions of Use</a>.</p>
            </div>

            <div className='tos2-container'>
              <p className='tos2'>To learn more about how Adneta collects, uses, shares and protects your personal<br></br>data, please see&nbsp;<a href="#">Adneta's Privacy Policy</a>.</p>
            </div>

            {/* submit button */}
            <Button
            variant="primary"
            type="submit"
            className='signup-button'
            onClick={(e) => handleSubmit(e)}
            >
                Sign up
            </Button>
            </Form>
        </div>
    </div>
  );
}

export default Signup;