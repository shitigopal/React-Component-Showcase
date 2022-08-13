import { Formik } from "formik"
import React from "react"
import Swal from "sweetalert2"

const Register = () => {
  // 1. Create a function for form submit events
  const userSubmit = async (formdata) => {
    console.log(formdata)
    // code to save data to database


    // To Create a request 
    // 1. URL
    // 2. Request Method
    // 3. Data to send
    // 4. Data format

    const response = await fetch('http://localhost:5000/user/add', {
      method: 'POST',
      body : JSON.stringify(formdata),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    // 200 status code means success
    // 400 status code means error on client
    // 500 status code means error on server
    console.log(response.status);
    if(response.status === 200){

      Swal.fire({
        icon : "success",
        title : "Nice🎉",
        text : "You are registered"
      })
    }else{
      Swal.fire({
        icon : "error",
        title : "Oops🤔",
        text : "Something went wrong"
      })
    }

  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-warning" style={{ height: "90vh" }}>
      <div className="container">
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <div style={{ background: "url('https://i.ytimg.com/vi/L9ZYdShgtPE/maxresdefault.jpg')", height: "100%" }}></div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="text-center">Register Here to Continue</h3>
                <hr />

                <Formik
                  initialValues={{
                    username: "",
                    email: "",
                    password: "",
                    age: "",
                  }}
                  onSubmit={userSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <label>Username</label>
                      <input className="form-control mb-4" value={values.username} onChange={handleChange} id="username" />
                      <label>Email</label>
                      <input className="form-control mb-4" value={values.email} onChange={handleChange} id="email" />
                      <label>Password</label>
                      <input type="password" className="form-control mb-4" value={values.password} onChange={handleChange} id="password" />
                      <label>Age</label>
                      <input type="number" className="form-control mb-4" value={values.age} onChange={handleChange} id="age" />
                      <button className="btn btn-primary">Signup</button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register