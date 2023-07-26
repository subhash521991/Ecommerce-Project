import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const SignUp = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  //const [name,setName] = useState("");
  //const [email,setEmail] = useState("");
  //const [phone,setPhone] = useState("");
  //const [pswd,setPswd] = useState("");
  //const [name,setName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(inputs);
    let { uname, uemail, uphone, upwd } = inputs;
    let result = await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({ name: uname, email: uemail, phone: uphone, password: upwd }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }
    });
    result = await result.json();
    console.log(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));

      navigate('/');
    }

  }

  return (
    <>
      <Container>
        <Row>
          <Col sm={8} xs={12} md={8}>
            <h2>Register Here</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" name="uname" value={inputs.uname || ""} onChange={handleChange} placeholder="Enter User Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name="uemail" value={inputs.uemail || ""} onChange={handleChange} placeholder="Enter email" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control type="tel" name="uphone" value={inputs.uphone || ""} onChange={handleChange} placeholder="Enter Phone No." required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" name="upwd" value={inputs.upwd || ""} onChange={handleChange} placeholder="Password" required />
              </Form.Group>
              <Button variant="primary" type="submit" name="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>


    </>

  )
}

export default SignUp
