import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AutoContext } from "../Components/AuthContext";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";



const Login = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AutoContext)
    const { register, handleSubmit, reset, formState: { error } } = useForm();
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const [eye, SetEye] = useState(true)
    const handleEye = () => {
        SetEye(!eye)
    }
    const onSubmit = data => {
        // console.log(data)
        const { email } = data;
        const { password } = data;
        const { name } = data;
        const { image } = data;
        if (!uppercaseRegex.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.")
        }

        if (!lowercaseRegex.test(password)) {

            return toast.error("Password must contain at least one lowercase letter.")
        }

        if (password.length < 6) {
            return toast.error("Password length must be at least 6 characters.")
        }
        if (image.length > 128) {
            toast.error("Too long image url.Firebase Authentication has a limit of 128 characters for the length of the photo URL")
        }

        createUser(email, password)
            .then((userCredential) => {
                updateProfile(userCredential.user, {
                    photoURL: image
                })
                    .then()
                    .catch((error) => {
                        return toast.error(error.message)
                    })
                updateProfile(userCredential.user, {
                    displayName: name,
                })
                    .then()
                    .catch((error) => {
                        return toast.error(error.message)
                    })
                // console.log(userCredential.user)
                navigate("/");
                return toast.success('login succesfull')

            })
            .catch((error) => {
                const errorMessage = error.message;
                return toast.error(errorMessage)
            });

    }
    return (

        <div className="hero min-h-screen  rounded-xl bg " >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-[250px] sm:w-[400px] max-w-sm shadow-2xl bg-transparent">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="name" className="input bg-transparent input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input {...register("image")} type="text" placeholder="image url" className="input bg-transparent input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input bg-transparent input-bordered" required />
                        </div>
                        <div className="form-control ">
                            <div className="relative" >
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input   {...register("password")} type={eye ? 'password' : 'text'} placeholder="password" className=" bg-transparent input input-bordered w-[186px] sm:w-[320px]" required />
                                <span onClick={handleEye} className="absolute  top-[65%] right-2 " >{eye ? <FaEye /> : <FaEyeSlash />}</span>
                            </div>
                            <label className="label">
                                <NavLink to="/login" className="label-text-alt link link-hover">Already have a account?<span>Login Now</span></NavLink>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn rounded-full btn-primary border-none" style={{ backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' }}>Register now</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Login;