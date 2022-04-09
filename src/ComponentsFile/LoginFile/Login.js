import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import useFireBase from '../CustomeHooks/useFireBase';

const Login = () => {
    const {signInWithGoogle} = useFireBase();
    return (
        <div>
            <h4>Please Login Here</h4>

            <div className='form-style w-50 mt-4 ms-5 p-4'>
                <button onClick={signInWithGoogle} className='mb-1'>Sign in with Google</button>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address : </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password : </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default Login;