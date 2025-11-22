import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const {createUser} = use(AuthContext)
    const formHandler = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const pass = e.target.password.value
            createUser(email, pass)
            .then(res => {
                console.log("user created done");
                console.log(res);
                
                
                
            })
            .catch(err => {
                console.log(err);
                
            })
        
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
          <button type="submit" className="btn btn-neutral mt-4">Login</button>
        </form>
        <p className="py-5">Alrady Have an Account ? <Link className="text-secondary" to="/auth/login">Login</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Register;