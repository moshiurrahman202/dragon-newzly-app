import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Login = () => {
  const [error, setError] = useState("")
  const { logIn, resetPassEmail } = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const emailRef = useRef()
  
  const handleLogIn = e => {
    e.preventDefault()
    setError("")
    const email = e.target.email.value;
    const pass = e.target.password.value;
    // console.log(email, pass);

    logIn(email, pass)
      .then(()=> {
        toast.success("Welcome!")
        navigate(`${location.state ? location.state : "/"} `)
        console.log( "Signed in");

      })
      .catch(err => {
        setError(err.code)
      })
  }
  const forgotpass = () => {
  const email = emailRef.current.value;
    resetPassEmail(email)
    .then(() => {
      toast.success("Reset email sent!")
      console.log("Send a password reset email");
      
    })
    .catch(err => {
      toast.error(err.code);
      
    })
    
  }
  return (
    <div className="flex justify-center">
      
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-body">
          <p className="font-semibold text-2xl text-center">Login Your Account</p>
          <ToastContainer />
          <form onSubmit={handleLogIn} className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" ref={emailRef} />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div><a onClick={forgotpass} className="link link-hover">Forgot password?</a></div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="py-5">Dont't Have an Account ? <Link className="text-secondary" to="/auth/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;