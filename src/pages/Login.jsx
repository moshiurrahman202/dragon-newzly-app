import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
  const [error, setError] = useState("")
  const { logIn } = use(AuthContext)
  const navigate = useNavigate()
  const handleLogIn = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);
    
    logIn(email, pass)
    .then(userCredential => {
      navigate("/")
      console.log(userCredential.user.email, "Signed in");
      
    })
    .catch(err => {
      setError(err.code)
    })
  }
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-body">
          <p className="font-semibold text-2xl text-center">Login Your Account</p>
          <form onSubmit={handleLogIn} className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
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