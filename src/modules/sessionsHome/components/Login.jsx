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
    <div className={`flex flex-col justify-center items-center ${loginStyle.container_form} 
    ${loginStyle.contentForm}`}>
      <h1 className='mb-10 font-bold text-5xl cursor-pointer flex items-center text-slate-300'>
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
          log in
        </button>
      </form>
    </div>
  );
}
