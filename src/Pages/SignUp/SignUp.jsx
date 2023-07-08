import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {createUser, updateProfile} = useContext(AuthContext);
  const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
       
        formState: { errors },
      } = useForm();

    const onSubmit = (data) =>{
      console.log(data)
      createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    updateProfile(data.name, data.photo)
    .then(()=>{
      console.log('user profile info updated')
      reset();
      navigate('/')
    })
    .catch(error=>{
      console.log(error)
    })
    }
    
  return (
    <>
     <Helmet>
        <title>Foodie Panda || Sign Up</title>
      </Helmet>

    <div className="hero min-h-screen bg-pink-600">
      <div className="">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-10 font-serif text-white">SignUp Here</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full md:w-96 mx-auto max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                name="name"
                className="input input-bordered"
              />
               {errors.name && <span>Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                {...register("photo", { required: true })}
                name="photo"
                className="input input-bordered"
              />
               {errors.photo && <span>Photo URL is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
               {errors.email && <span>Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true, maxLength: 20 , minLength: 6 })}
                placeholder="password"
                className="input input-bordered"
              />
               {errors.password && <span>Password is required</span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-outline btn-secondary" type="submit" value="SignUp" />
             
            </div>
          </form>
          <div>
            <p className="ml-3 mb-3">Already Have Account? <span><Link className="text-primary font-semibold underline" to='/login'>Login</Link></span></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
