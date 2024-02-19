import { useFormik } from "formik";
import React from "react";

function Register() {
  const formInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: formInitialValues,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <>
      <div className="card text-center mx-auto">
        <div className="card-header bg-info text-white">New User</div>
        <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label" htmlFor="txtfirstname">
              First Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="firstName"
                placeholder="Enter first Name"
                className="form-control"
                id="txtfirstname"
                onChange={handleChange}
                value={values.firstName}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-4 col-form-label" htmlFor="txtlastname">
              Last Name
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="lastName"
                placeholder="Enter last Name"
                className="form-control"
                id="txtlastname"
                onChange={handleChange}
                value={values.lastName}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-4 col-form-label" htmlFor="txtemail">
              Email
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                className="form-control"
                id="txtemail"
                onChange={handleChange}
                value={values.email}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-4 col-form-label" htmlFor="txtpassword">
              Password
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="password"
                placeholder="Enter password"
                className="form-control"
                id="txtpassword"
                onChange={handleChange}
                value={values.password}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label
              className="col-sm-4 col-form-label"
              htmlFor="txtconfirmPassword">
              Confirm Password
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                name="confirmPassword"
                placeholder="Confirm password"
                className="form-control"
                id="txtconfirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
              />
            </div>
          </div>
          <br />
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-info">Register</button>
        </div>
        </form>
      </div>
     
    </>
  );
}

export default Register;
