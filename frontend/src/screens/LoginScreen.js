import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import './login.css'

export default function LogInScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post('/api/users/login', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_LOGIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>LOGIN</title>
      </Helmet>
      <h1 className="login-title">LOGIN</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="login-inputs" controlId="email">
          <Form.Label>Username or email address*</Form.Label>
          <Form.Control
            className='input-bar'
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="login-inputs" controlId="password">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            className='input-bar'
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="login-check">
          <div className='log-bt'>
          <Button className='login-btn' type="submit">LOG IN</Button>
          </div>
          <div className='log-chk'>
          <label className="checkbox-wrapper">
            <input type="checkbox" />
            <span className='span'>   Remember me</span>
          </label>
          </div>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link className='link' to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
