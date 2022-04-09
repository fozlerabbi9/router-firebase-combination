import React from 'react';
import './Register.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';



const Register = () => {
    return (
        <div>
            <h3>Please Register Here </h3>

            <div className='form-style w-50 mt-4 ms-5 p-4'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name : </Form.Label>
                        <Form.Control  type="text" placeholder="Enter Your Name" />
                        <Form.Text className="text-muted">
                            Enter Your Valid Name
                        </Form.Text>
                    </Form.Group>

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
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;