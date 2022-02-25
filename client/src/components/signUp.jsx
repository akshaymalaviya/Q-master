import React, { useState } from 'react';

const Signup = () => {
  const initialValues = { email: '', password: '', confirmPassword: '' };
  const [signupData, setSignupData] = useState({ initialValues });
  //to set errors of data
  const [signupErrors, setSignupErrors] = useState({});

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const signupForm = (e) => {
    //it will not refresh the page;
    e.preventDefault();
    //first validate the data and then set errors values
    setSignupErrors(validate(signupData));
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required!';
    }
    if (!values.password) {
      errors.password = 'password is required!';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'password is required!';
    }
    if (values.password !== values.confirmPassword) {
      errors.comparePassword = 'password must be same!';
    }
    return errors;
  };

  return (
    <>
      <div className="backgroung">
        <div className="container1 ">
          <div class="card_signup">
            <div class="content">
              <h2>Q-Master</h2>
              <h3>Sign Up</h3>
              <form onSubmit={signupForm}>
                <div class="mb-1">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={signupData.email}
                    onChange={InputEvent}
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                {/* Show the errors */}
                <p className="formError">{signupErrors.email}</p>
                <div class="mb-1">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={signupData.password}
                    onChange={InputEvent}
                  />
                </div>
                <p className="formError">{signupErrors.password}</p>
                <div class="mb-1">
                  <label for="exampleInputPassword1" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={InputEvent}
                  />
                </div>
                <p className="formError">{signupErrors.comparePassword}</p>
                <p className="formError">{signupErrors.confirmPassword}</p>
                <button type="submit" class="btn btn-primary">
                  Sign Up
                </button>
              </form>
              {/* <a href="#">read more</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
