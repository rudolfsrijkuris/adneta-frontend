'use client'

import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './Login.css';
import Header from '../../Common/Header/Header';
import axios from "axios";
import Link from 'next/link';
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        
        // set configurations
        const configuration = {
            method: "post",
            url: "http://localhost:3080/login",
            data: {
                email,
                password,
            },
        };

        // make the API call
        axios(configuration)
        .then((result) => {
                cookies.set("userLoginToken", result.data.token, {
                path: "/",
            });
            window.location.href = "/dashboard"
        })
        .catch((error) => {console.log(error);})
    }

  return (
    <div className='login-main'>
      <div className='header'>
        <Header />
      </div>
      <div className="login-container">
        <Form className="login-form" onSubmit={(e)=>handleSubmit(e)}>
          <h1 className='login-title'>Log in to Adneta</h1>
          <p className='no-account'>No account?&nbsp;<Link href='signup'> Sign Up</Link></p>
          {/* email */}
          <Form.Group controlId="formBasicEmail">
          <Form.Label className='form-title'>Email address</Form.Label>
              <Form.Control
              className='email-input'
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or username"
              />
          </Form.Group>

          <br></br>

          {/* password */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label className='form-title'>Password</Form.Label>
            <Form.Control
              className='password-input'
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              />
          </Form.Group>

          {/* remember me? */}
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Remember me"
            className='remember-me'
          />

          <br></br>

          {/* submit button */}
          <Button
          variant="light"
          type="submit"
          className='login-button'
          onClick={(e) => handleSubmit(e)}
          >
              Log in
          </Button>
          <a href='#' className='forgot-password'>Forgot your password?</a>
        </Form>
      </div>
    </div>
  );
}

export default Login;
