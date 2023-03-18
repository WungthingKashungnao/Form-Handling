import React, {useState, useEffect} from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let [users, setUsers] = useState([])
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [pswd, setPswd] = useState(''); 
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    let newData = {uName:name, uEmail:email, uPswd:pswd}
    let newValues = [...users, newData];
    setUsers(newValues);
    localStorage.setItem('users', JSON.stringify(newValues)) // use this method when you dont want to use useEffect()
    navigate('/login')
  }
  // useEffect(()=>{
  //   localStorage.setItem('users',JSON.stringify(users))
  // },[users])

  return (
    <>
      <Container className="border border-success bg-success mt-5">
        <div className="mt-5 d-flex flex-column align-items-center jusitify-content-center">
        <h1 className="text-white">Create An Account</h1>
        <Form className="my-5 w-100" onSubmit={(e)=>handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={name}  onChange={(e)=>setName(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={pswd} onChange={(e)=>setPswd(e.target.value)}/>
          </Form.Group>

          <div className="w-100 d-flex justify-content-center">
          <Button variant="dark" type="submit" className="py-2 px-4 fs-4 fw-bold">
            Register
          </Button>
          </div>

          <div className="text-center pt-4">
            <p className="text-white">Have an account already? <Link to={'/login'} className='text-dark fw-bold'>Login here</Link></p>
          </div>
        </Form>
        </div>
      </Container>
    </>
  );
};

export default Register;
