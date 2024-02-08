import React from "react";

function Register() {
  return (
    <>
      <div className="card text-center mx-auto">
        <div className="card-header bg-info text-white">New User</div>
        <div className="card-body">
          <div className="form-group row">
            <label className="col-sm-4" for="txtfirstname">
              First Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="firstName"
                placeholder="Enter first Name"
                className="form-control"
                id="txtfirstname"
              />
            </div>
          </div>
          <div className="form-group row m-2">
            <label className="col-sm-4" for="txtlastname">
              Last Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="lastName"
                placeholder="Enter last Name"
                className="form-control"
                id="txtlastname"
              />
            </div>
          </div>
          <div className="form-group row m-2">
            <label className="col-sm-4" for="txtemail">
              Email
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                className="form-control"
                id="txtemail"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4" for="txtpassword">
              Password
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="password"
                placeholder="Enter password"
                className="form-control"
                id="txtpassword"
              />
            </div>
          </div>
          <div className="form-group row m-2">
            <label className="col-sm-4" for="txtconfirmPassword">
              Confirm Password
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="confirmPassword"
                placeholder="Confirm password"
                className="form-control"
                id="txtconfirmPassword"
              />
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <button className="btn btn-info">Register</button>
        </div>
      </div>
    </>
  );
}

export default Register;
