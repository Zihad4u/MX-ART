import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useContext, useState } from "react";
import { AutoContext } from "../Components/AuthContext";
// import { toast } from 'react-toastify';
// import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa6";
import {  signInWithPopup, GoogleAuthProvider ,GithubAuthProvider } from "firebase/auth";
import auth from "../Firebase/Firebase";
// import {  } from "firebase/auth/cordova";

const Login = () => {
    const [eye, SetEye] = useState(true)
    const handleEye = () => {
        SetEye(!eye)
    }

    const povider = new GithubAuthProvider();
    const handleGithub=()=>{
        signInWithPopup(auth,povider)
        .then(()=>{
            navigate("/");
            return toast.success('Login Successfully')
        })
        .catch((error)=>{
            return toast.error(error.message)
        })
    }

    const provider = new GoogleAuthProvider();
    const handleGoogle=()=>{
        signInWithPopup(auth, provider)
        .then(()=>{
            navigate("/");
            return toast.success('Login Successfully')
            
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }
    const navigate = useNavigate();
    const { loginWithemail } = useContext(AutoContext)
    const { register, handleSubmit, reset, formState: { error } } = useForm();
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const onSubmit = data => {
        const { email } = data;
        const { password } = data;
        if (!uppercaseRegex.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.")
        }

        if (!lowercaseRegex.test(password)) {

            return toast.error("Password must contain at least one lowercase letter.")
        }

        if (password.length < 6) {
            return toast.error("Password length must be at least 6 characters.")
        }
        // console.log(email,password)
        loginWithemail(email, password)
            .then(() => {
                navigate("/");
                return toast.success('Login Successfully')
            })
            .catch((error) => {
                return toast.error(error.message)
            })
        reset()
    }

    return (
        <div className="hero min-h-screen  rounded-xl bg " >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-[250px] sm:w-[400px] max-w-sm shadow-2xl bg-transparent">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input bg-transparent input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="relative" >
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input   {...register("password")} type={eye ? 'password' : 'text'} placeholder="password" className=" bg-transparent input input-bordered w-[186px] sm:w-[320px]" required />
                                <span onClick={handleEye} className="absolute top-[65%] right-2 " >{eye ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                            <label className="label">
                                < NavLink to="/register" className="label-text-alt link link-hover">Dont have a account? Register Now</NavLink>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-full btn-primary border-none" style={{ backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' }}>Login</button>
                        </div>
                        <div className="relative flex py-5 items-center">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400"> Continue With</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className="flex justify-center gap-3 " >
                            <span onClick={handleGoogle}  className="btn-circle btn" ><FaGoogle /></span>
                            <span onClick={handleGithub} className="btn-circle btn" ><FaGithub /></span>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;