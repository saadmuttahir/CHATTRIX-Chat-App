import Login from '../Components/Login'

function LoginPage() {
  return (
     <div className='flex w-full h-screen'>
        <div className='w-h  items-center justify-center lg:w-1/2'><Login /></div>
        <div className='  hidden relative lg:flex h-full w-1/2 items-center justify-center bg-black'>
         <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce flex
  flex-col items-center justify-center text-center text-white font-semibold p-4 shadow-lg hover:scale-105
  transition-transform duration-300 font-poppins">
  <p className="text-lg leading-snug text-black">
    You remembered <br />your password this time, right?😜
  </p>


          </div>
          <div className='w-full h-1/2 absolute bottom-0 bg-black/0 backdrop-blur-lg' />
        </div>


      </div>
  )
}

export default LoginPage