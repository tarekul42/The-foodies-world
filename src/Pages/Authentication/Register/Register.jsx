import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/places/1';

    
    const handlePassword = event =>{
        const password = event.target.value;
        // password validation
        setError('')
        if (password.length < 6) {
            setError('Your Password should at least 6 character.');
            return;
        }
        else if (password === '') {
            setError('Your password must contain any character or digit.');
            return;
        }
        else {
            setError('')
        }
    }


    const handleRegisterWithEmailPass = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(username, email, password);

        // create a new user
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true })
                event.target.reset();
                setSuccess('Your registration in successful');
                setError('')

            })
            .catch(error => {
                setError(error.message);
                setSuccess('')
            })

    }



    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row lg:w-2/5 md:w-3/5 w-11/12">
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <form onSubmit={handleRegisterWithEmailPass} className="card-body border border-gray-100 rounded">
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold">Create an account</h1>
                        </div>
                        <div className="form-control">
                            <input type="test" placeholder="username" name='username' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="PhotoURL" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input onChange={handlePassword} type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-amber-400 text-black text-base">Create an account</button>
                        </div>
                        <p className='text-xs text-center'>
                            Already have an account? <Link to='/' className='text-amber-300 underline'>Login</Link>
                        </p>
                        {
                            error ?
                            <p className='text-red-700'>{error}</p> :
                            <p className='text-cyan-600'>{success}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;