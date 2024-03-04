import axios from 'axios'
import { useContext, useEffect, useReducer, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userAuthReducer from '../Reducers/userAuthReducer.tsx'
import { USER_SIGNIN, USER_SIGNOUT } from '../actions'
import { Store } from '../store.tsx'

const SignIn = () => {
 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {userInfo} = state;

    useEffect(()=>{
      if(userInfo){
        navigate('/');
      }
    },[])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      if (!isValidEmail(value)) {
        setEmailError('Please enter a valid email.');
      } else {
        setEmailError('');
      }
    };
  
    const handlePasswordChange = (e) => {
      const value = e.target.value;
      setPassword(value);
      if (!isValidPassword(value)) {
        setPasswordError('Your password must contain between 4 and 60 characters.');
      } else {
        setPasswordError('');
      }
    };

    const isValidEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    const isValidPassword = (password: string) => {
      return password.length >= 4 && password.length <= 60;
    };

    const onSubmitHandler = async() => {
      console.log("Entered onsubmit handler");
      try{
        const { data } = await axios.post('http://localhost:8080/api/v1/users/signin', {
          email: email,
          password: password});
          await ctxDispatch({ type: USER_SIGNIN, payload: data });
            console.log("Response data:", JSON.stringify(data)); 
            navigate('/');
        } catch (error: unknown) { // Specify 'unknown' as the type for the error variable
            if (axios.isAxiosError(error)) {
                alert(error.response?.data?.message || 'An error occurred');
            } else {
                // Handle non-Axios errors
                alert('An error occurred');
            }
        }
    }

  return (
 <div className='sign-in-container'>
    <div className='card'>
      <h1 className='signInTitle'>Sign In:</h1>
      {/* <label htmlFor='email'>Email address</label>
      <input name='email' ref={email} type='email'></input><br/> */}
      {/* <label htmlFor='password'>Email address</label>
      <input name='password' ref={password} type='password' ></input><br/>  */}
      
      <div className="relative mt-5">
    <input type="email" value={email} onChange={handleEmailChange} id="floating_filled" aria-describedby='filled_error_help'  className={`block rounded-md px-2.5 pb-2.5 pt-5 w-60 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 ${emailError ? 'border-orange-500' : 'border-gray-300'} focus:border-orange-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500 focus:outline-none focus:ring-0 focus:border-600 peer`} placeholder=" " />
    <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address</label>
     </div>
     {emailError && (
          <div>
            <p id="email_error_help" className="mt-2 text-xs text-orange-500 dark:text-orange-400">
              <span className="font-medium"></span> {emailError}
            </p>
          </div>
        )}
     
      <div className="relative mt-5">
    <input type="password" value={password} onChange={handlePasswordChange} id="floating_filled2" className={`block rounded-md px-2.5 pb-2.5 pt-5 w-60 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300  ${passwordError ? 'border-orange-500' : 'border-gray-300'} appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500  focus:outline-none focus:ring-0 focus:border-600 peer`} placeholder=" " />
    <label htmlFor="floating_filled2" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
     </div>
     {passwordError && (
          <div>
            <p id="password_error_help" className="mt-2 text-xs text-orange-500 dark:text-orange-400">
              <span className="font-medium"></span> {passwordError}
            </p>
          </div>
        )}


      <br/><button className='loginBtn w-60' type='submit' onClick={onSubmitHandler}>Login</button>
      <h3><span className='firstTimeUsing'>First time using Netflix?</span><Link className='link' to={'/signup'}>Create an account</Link></h3>

      {/* <checkbox className=''>Remember me</checkbox> */}
     </div>
 </div>
  )
}

export default SignIn