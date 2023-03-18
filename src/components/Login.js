import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem("users"));

    if (email !== '' && pswd !== '') {
      const existingUser = registeredUser.filter((ele) => {
        return ele.uEmail === email && ele.uPswd === pswd;
      });
      // console.log(existingUser);
      if (existingUser.length > 0) {
        localStorage.setItem('loggedIn', true)
        navigate("/");
      } else {
        alert("invalid email or password");
      }
    } else {
      console.log("Please enter required fields!");
    }
  };

  return (
    <Container className="border border-success bg-success mt-5">
      <div className="mt-5 d-flex flex-column align-items-center jusitify-content-center">
        <h1 className="text-white">Login Here</h1>
        <Form className="my-5 w-100" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pswd}
              onChange={(e) => setPswd(e.target.value)}
            />
          </Form.Group>

          <div className="w-100 d-flex justify-content-center">
            <Button
              variant="dark"
              type="submit"
              className="py-2 px-4 fs-4 fw-bold"
            >
              Login
            </Button>
          </div>

          <div className="text-center pt-4">
            <p className="text-white">
              Dont have an account{" "}
              <Link to={"/register"} className="text-dark fw-bold">
                Register here
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
