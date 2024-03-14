import axios from 'axios'
import { useState } from 'react'
import style from './styles/SignUp.module.css'
import { useNavigate } from 'react-router-dom';

interface UserInfo {
  id: string;
  username: string;
  email: string;
  password: string;
  // Add more properties as needed
}



const SignUp = () => {

    const [userInfo, setUserInfo] = useState({})
    const [currentStep, setCurrentStep]= useState("email");
const navigate = useNavigate();
    const onSubmitHandler = async() => {

       if(currentStep === 'password') {
        try{
        const { data } = await axios.post('http://localhost:8080/api/v1/users/signup', {
            email: userInfo?.email,
            password: userInfo?.password
        })
        navigate('/signin')
     
    } catch (error: unknown) { // Specify 'unknown' as the type for the error variable
        if (axios.isAxiosError(error)) {
            alert(error.response?.data?.message || 'An error occurred');
        } else {
            // Handle non-Axios errors
            alert('An error occurred');
        }
        
    }         

  }
if(currentStep === 'password') {
 console.log(userInfo?.email, userInfo?.password);
}

  setCurrentStep('password');

}

  return (
    <div className={style.signUpContainer}>
     <div className={style.container}>
      <h1 className={style.title}>Unlimited movies, TV shows, and more </h1>
      <h2 className={style.textLine1}>Watch anywhere. Cancel anytime.</h2>
      <h3 className={style.textLine2}>Ready to watch? Enter your email to create or restart your membership.</h3>
    <div>
      {currentStep === "email" && <input  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} type='email' placeholder={"Email address"} className={style.signUpInput} ></input>}
     { currentStep === "password" &&  <input className={style.signUpInput}  onChange={(e) => setUserInfo({...userInfo, password: e.target.value })} type='password' placeholder={currentStep}></input>}
      <button className='signUpBtn w-60 py-2 hover:bg-red-800' type='submit' onClick={()=> onSubmitHandler()}>Get Started {">"}</button>
   
    </div>
     </div>
    </div>
  )
}

export default SignUp