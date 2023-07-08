import React, { useContext, } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
          const user = result.user;
         
          console.log(user)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Successful',
            showConfirmButton: false,
            timer: 1500
          })
        })
       
        .catch(error=>{
          console.log(error)
          
        });
        navigate(from, {replace:true});

    }
  return (
    <>
    <Helmet>
        <title>Foodie Panda || Login</title>
      </Helmet>

    <div className="hero min-h-screen bg-base-200">
      <div className="">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 text-pink-600 font-serif"> Login Here</h1>
         <img src="" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full md:w-96 mx-auto max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              
              <input className="btn btn-outline btn-secondary" type="submit" value="Login" />
            </div>
          </form>
          <div>
            <p className="ml-3 mb-3">New Here? <span><Link className="text-primary underline font-semibold" to='/signUp'>Create An Account</Link></span></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
