import axios from 'axios'
import { useState } from 'react'

const SignUp = () => {

    const [userInfo, setUserInfo] = useState({})
    const [currentStep, setCurrentStep]= useState("email");

    const onSubmitHandler = async() => {

       if(currentStep === 'password') {
        try{
        const { data } = await axios.post('http://localhost:8080/api/v1/users/signup', {
            email: userInfo?.email,
            password: userInfo?.password
        })
        console.log(data);
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
    <div>
     <div className='sign-up-container'>
      <h1 className='sign-up-title'>Unlimited movies, TV shows, and more </h1>
      <h2 className='sign-up-text-line-1'>Watch anywhere. Cancel anytime.</h2>
      <h3 className='sign-up-text-line-2'>Ready to watch? Enter your email to create or restart your membership.</h3>
    <div>
      {currentStep === "email" && <input className='sign-up-input'  onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} type='email' placeholder={"Email address"}></input>}
     { currentStep === "password" &&  <input className='sign-up-input' onChange={(e) => setUserInfo({...userInfo, password: e.target.value })} type='password' placeholder={currentStep}></input>}
      <button className='sign-up-btn' type='submit' onClick={()=> onSubmitHandler()}>Get Started {">"}</button>
    </div>
     </div>
    </div>
  )
}

export default SignUp