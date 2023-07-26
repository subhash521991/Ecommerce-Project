import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, []);

  const handleChange = async(event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    let {uemail, uphone, upwd } = inputs;

    let result = await fetch("http://localhost:5000/login", {
      method: 'post',
      body: JSON.stringify({email: uemail,password: upwd }),
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
    console.log(inputs);

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8">
          <h1>Login Here</h1>
          <form onSubmit={handleSubmit} >
            <div className="mb-3 mt-3">
              <input type="email" className="form-control" placeholder="Enter email" name="uemail" value={inputs.uemail || ""} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Enter password" name="upwd" value={inputs.upwd || ""} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary" name="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>


  )
}

export default Login
