import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const [error, setError] = useState("")
    const {createUser} = use(AuthContext)
    const navigate = useNavigate()
    const formHandler = e => {
        e.preventDefault()
        setError("")
        // const name = e.target.name.value
        const email = e.target.email.value
        const pass = e.target.password.value
        const checkpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
        if(!checkpass.test(pass)){
            setError("Password must contain 6 chars, uppercase, lowercase, number, & special char.")
            return
        }else{
            createUser(email, pass)
            .then(res => {
                const user = res.user
                console.log(user);
                navigate("/")
            })
            .catch(err => {
                setError(err.code) 
            })
        }

    }
    
    return (
        <div className="flex justify-center">
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
      <div className="card-body">
        <p className="font-semibold text-2xl text-center">Register Your Account</p>
        <form onSubmit={formHandler} className="fieldset">
          <label className="label">Your Name</label>
          <input required type="text" className="input" placeholder="Enter Your Name" name="name" />
          <label className="label">Email</label>
          <input required type="email" className="input" placeholder="Email" name="email" />
          <label className="label">Password</label>
          <input required type="password" className="input" placeholder="Password" name="password" />
          {error && <p className="test-sm text-red-500">{error}</p>}
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
        </form>
        <p className="py-5">Alrady Have an Account ? <Link className="text-secondary" to="/auth/login">Login</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Register;