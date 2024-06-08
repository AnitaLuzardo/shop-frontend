import loginStyle from '../styles/login.module.css';
import { useState }  from 'react';
import { startLogin } from '../../../Redux/actions/authentication';
import { useDispatch, useSelector } from 'react-redux';

const validateForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
 
  if(!form.email) {
    errors.email = 'The "Email" field is required'
  } else if(!regexEmail.test(form.email.trim())) {
    errors.email = 'The "Email" field is incorrect'
  }

  if(!form.pwd) {
    errors.pwd = 'The "Password" field is required'
  }

  return errors;
}

export default function Login() {
  const dispatch = useDispatch();
  const sessionErrors = useSelector(state => state.session.errors);

  const login = async (form) =>{
    await startLogin(form, dispatch);
  }

  const [dataLogin, setDataLogin] = useState({
    email: '',
    pwd: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    // console.log('name', e.target.name, '- value', e.target.value);

    const{name, value} = e.target
    setDataLogin({
      ...dataLogin,
      [name]: value
    });
  }

  const handleBlur = (e) => {
    handleChange(e);
    setFormErrors(validateForm(dataLogin))
  };

  const handleLogin = e => { //evita el procesamiento automatico 
    e.preventDefault();
    login(dataLogin);

    setDataLogin({
      email: '',
      pwd: ''
    });
  }
 
  return (
    <div className={`flex flex-col justify-center items-center ${loginStyle.container_form} ${loginStyle.contentForm}`}>
      <h1 className='mb-10 font-bold text-5xl cursor-pointer flex items-center text-slate-300'>
        SIGN IN
      </h1>
      {formErrors.email && 
        <p className={`${loginStyle.errorsLogin} ${loginStyle.pwdStyle}`}>
          {formErrors.email}
        </p>
      }
      {formErrors.pwd && 
        <p className={`${loginStyle.errorsLogin} ${loginStyle.pwdStyle}`}>
          {formErrors.pwd}
        </p>}
        {sessionErrors && (
          <p className={loginStyle.errors}>{sessionErrors}</p>
        )}
      <form className={`w-90 ${loginStyle.container_form}`} onSubmit={handleLogin}>
        <input type="email" 
          name="email"
          placeholder="Email"
          className={loginStyle.input_login}
          onChange={handleChange}
          value={dataLogin.email}
          onBlur={handleBlur}
        />
        <input type="password" 
          name="pwd"
          placeholder="Password"
          className={loginStyle.input_login}
          value={dataLogin.pwd}
          onChange={handleChange}
          onBlur={handleBlur}
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
