import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters")
        }

        else if (!/[A-Z]/.test(password)) {
            return toast.error("Password must have at least one uppercase letter")
        }

        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\-|/"'`]/.test(password)) {
            return toast.error("Password must contain at least one special character")
        }

        console.log(name, email, password);
        createUser(email, password)
            .then((result) => {
                console.log(result);
                toast.success('Successfully Registered!')
            })
            .catch(err => {
                console.log(err);
            })




    }

    return (
        <div>

            <h2 className='text-4xl font-bold text-center mt-10'>Register</h2>
            <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 mt-10">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User name</span>
                        </label>
                        <input type="text" name='name' placeholder="User name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <h2 className="mt-1">Already have an account?  <span><Link className="text-blue-800 font-bold ml-1" to='/login'>Login</Link></span> </h2>
                </form>
            </div>
        </div>
    );
};

export default Register;