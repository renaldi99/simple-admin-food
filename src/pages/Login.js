import React, { Component } from "react";
import swal from "sweetalert";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isValid: true,
      errorMessage: { email: "", password: "" },
    };
  }

  handleChange = (event) => {
    // const { email, password } = this.state;
    // let passwordError = "";
    // let emailError = "";

    // if (event.target.name === "password" && password.length < 7) {
    //   this.setState({
    //     [event.target.name]: event.target.value,
    //     errorMessage: { password: "Password must be at least 7 characters" },
    //   });
    // } else if (event.target.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
    //   this.setState({
    //     [event.target.name]: event.target.value,
    //     errorMessage: { email: "Invalid Format" },
    //   });
    // }

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { setLoginStatus } = this.props;

    if (email === "" && password === "") {
      swal("Failed!", "Email and Password Cannot Be Empty", "error");
    } else if (email === "") {
      swal("Failed!", "Email Cannot Be Empty", "error");
    } else if (password === "") {
      swal("Failed!", "Password Cannot Be Empty", "error");
    } else if (email === "admin@example.com" && password === "12345678") {
      setLoginStatus(true);
      swal("Success!", "Login Success", "success");
    } else {
      swal("Failed!", "Incorrect login username or password", "error");
    }
  };

  render() {
    const { email, password, errorMessage, isValid } = this.state;
    return (
      <div>
        <div className="container-login">
          <div className="container-fluid">
            <div className="logo-login">
              <h3>WMB</h3>
            </div>
            <div className="row">
              <div className="col section-left d-flex align-items-center">
                <div className="card">
                  <div className="card-body">
                    <form
                      action=""
                      onSubmit={(event) => this.handleSubmit(event)}
                    >
                      <h3>Login</h3>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Input your email"
                          onChange={(event) => this.handleChange(event)}
                        />
                        <span>{errorMessage.email}</span>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Input your password"
                          onChange={(event) => this.handleChange(event)}
                        />
                        <span>{errorMessage.password}</span>
                      </div>
                      <div className="mb-3 form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="exampleCheck1"
                        >
                          Check me out
                        </label>
                      </div>
                      {isValid ? (
                        <button type="submit" className="btn btn-login w-100">
                          Login
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled
                          className="btn btn-login w-100"
                        >
                          Login
                        </button>
                      )}
                    </form>
                    <button
                      type="submit"
                      className="btn btn-register w-100 mt-2"
                      onClick={this.switchRegister}
                    >
                      Register
                    </button>
                    <span className="small-text-bottom">
                      This site is protected by reCAPTCHA and Google{" "}
                      <span className="text-bottom-blue"> Privacy Policy </span>
                      and{" "}
                      <span className="text-bottom-blue">
                        {" "}
                        Terms of Service{" "}
                      </span>
                      apply
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
