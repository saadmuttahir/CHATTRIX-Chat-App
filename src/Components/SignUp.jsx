import {  Link } from 'react-router-dom'
import {getAuth,createUserWithEmailAndPassword} from "../Config/Firebase"
import image from "../assets/image.png"
function SignUp() {
    
  return (
    <>
    
    

      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-black backdrop-blur-lg">
        <div className=" mx-auto  ">
          <img
            alt="Your Company"
            src={image}
            className="mx-auto h-18 w-60"
          />
          <h2 className=" mt-3 text-center text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-violet-500 to-pink-500">Create your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-100">
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>


             <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>


            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gradient-to-tr from-violet-500 to-pink-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500  hover:from-indigo-700 hover:to-violet-5 transition-all duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{' '}
            <Link
             className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 hover:from-indigo-500 hover:to-violet-500 transition-all duration-300"
             to={`/login`}>
                 Already have an Account go to login
                 </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp