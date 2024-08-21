import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Provider/AuthContext/AuthContext";
import { toast } from "react-toastify";


const Register = () => {
    const { createRegister, signInWithGoogle } = useContext(AuthProvider)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleRegister = (e) => {
        setError('')
        e.preventDefault()
        const form = e.target

        // const userName = form.username.value
        const email = form.email.value
        const password = form.password.value

        createRegister(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                if (user) {
                    toast('Successfully Register')
                    navigate(`${location.state ? location?.state : '/'}`)
                    form.reset()
                }
            })
            .catch((error) => {
                setError(error.message)
            });


    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(`${location.state ? location?.state : '/'}`)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div>
            <div className="flex h-screen">

                {/* <!-- Right Pane --> */}
                <div className="w-full bg-gray-100 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-color text-center">Sign Up</h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community </h1>
                        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                                <button onClick={handleSignInWithGoogle} type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                                    <FaGoogle /> Sign Up with Google </button>
                            </div>
                            <div className="w-full lg:w-1/2 ml-0 lg:ml-2">
                                <button disabled type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md ">
                                    <FaFacebook />  Sign Up with Facebook </button>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p> or with email</p>
                        </div>
                        {/* form */}
                        <form onSubmit={handleRegister} className="space-y-4">
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input type="text" id="username" name="username" required className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="text" id="email" name="email" required className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password" id="password" required name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            </div>
                            {error && <p className='text-red-500'>{error}</p>}
                            <div>
                                <button type="submit" className="w-full bg-[#094067] text-white p-2 rounded-md hover:bg-[#094067dd] focus:outline-none focus:bg-[#094067] focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>Already have an account? <Link to='/login' className="text-black hover:underline">Login here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;