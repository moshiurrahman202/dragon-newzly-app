import { Link } from "react-router";

const Register = () => {
    return (
        <div className="flex justify-center">
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
      <div className="card-body">
        <p className="font-semibold text-2xl text-center">Register Your Account</p>
        <fieldset className="fieldset">
          <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Enter Your Name" name="name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="password" />
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="py-5">Alrady Have an Account ? <Link className="text-secondary" to="/auth/login">Login</Link></p>
      </div>
    </div>
        </div>
    );
};

export default Register;