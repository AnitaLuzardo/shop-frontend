// import React from 'react'

// const Login = () => {
//   return (
//     <div className='flex justify-center align-center'>Login</div>
//   )
// }

// export default Login

import loginStyle from '../styles/login.module.css'
 
export default function Login() {
  return (

  
    <div className='flex flex-col justify-center items-center'>
      <h1 className='mb-10'>
        SIGN IN
      </h1>
      <form className={`w-90 ${loginStyle.container_form}`}>
        <input type="email" 
          name="email"
          placeholder="Email"
          className={loginStyle.input_login}
        />
        <input type="password" 
          name="pwd"
          placeholder="Password"
          className={loginStyle.input_login}
        /> 
        <button 
          type='submit'
          className="bg-indigo-600 text-white py-1 px-4 rounded hover:bg-indigo-800 duration-500 w-40">
          Iniciar sesión
        </button>
      </form>
    </div>

    // <div className='flex'>
    //   <div className={`w-72 h-screen bg-black`}></div>
    //   <div className='p-7 text-2x1 front-semibold'>
    //     <h1>Home page</h1>
    //   </div>

    // </div>
      // <div>Home</div>

  );
}
