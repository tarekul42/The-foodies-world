import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();

    const { signIn, forgetPassword, signInGoogle, signInGithub } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/places/1';

    const handleSignInEmailPass = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true })
                event.target.reset();
                setSuccess('Your login in successful');
                setError('')
            })
            .catch(error => {
                console.log(error);
                setError('Your Email or Password not valid');
                setSuccess('')
            })
    }

    // handle forget password
    const handleResetPassword = event => {
        const email = emailRef.current.value;
        console.log(email);
        if (!email) {
            setError('Please Provide your email address to reset password')
            return;
        }
        forgetPassword(email)
            .then(() => {
                setSuccess('Please check your email')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const signInWithGooglePopup = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const signInWithGithubPopup = () => {
        signInGithub()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row lg:w-2/5 md:w-3/5 w-11/12">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleSignInEmailPass} className="card-body border border-gray-100 rounded">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold">Login</h1>
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" ref={emailRef} name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />

                            <label className="label">
                                <a onClick={handleResetPassword} href="#" className="underline text-xs link link-hover text-amber-300">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-amber-400 text-black text-base">Login</button>
                        </div>
                        <p className='text-xs text-center'>
                            Don't have an Account? <Link to='/register' className='text-amber-300 underline'>Create an account</Link>
                        </p>
                        {
                            error ?
                                <p className='text-red-700'>{error}</p> :
                                <p className='text-cyan-600'>{success}</p>
                        }
                    </form>
                {/* google and github sign in */}
                <div className="flex flex-col w-full border-opacity-50 px-8">
                    <div className="divider">OR</div>
                    <div onClick={signInWithGithubPopup} className="btn h-10 border-gray-100 border rounded-3xl place-items-center mb-2 flex cursor-pointer">
                        <div className='grow-0'>
                            {/* <img className='w-9 h-9 p-1' src={fb} alt="" /> */}
                        </div>
                        <div className='grow'>
                            <p className='text-center'>Continue with Github</p>
                        </div>
                    </div>
                    <div onClick={signInWithGooglePopup} className="btn h-10 border-gray-100 border rounded-3xl place-items-center mb-2 flex cursor-pointer">
                        <div className='flex-none'>
                            {/* <img className='w-9 h-9 p-1' src={google} alt="" /> */}
                        </div>
                        <div className='flex-1'>
                            <p className='text-center'>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
                </div>
        </div>
    );
};

export default Login;