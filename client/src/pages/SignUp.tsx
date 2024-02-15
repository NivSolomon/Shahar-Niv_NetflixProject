import axios from 'axios'
import React, { useRef, useState } from 'react'

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
     <div>
      <h1>Sign Up:</h1>
      {currentStep === "email" && <input onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} type='email' placeholder={currentStep}></input>}
     { currentStep === "password" &&  <input onChange={(e) => setUserInfo({...userInfo, password: e.target.value })} type='password' placeholder={currentStep}></input>}
      <button type='submit' onClick={()=> onSubmitHandler()}>Get Started</button>
     </div>
    </div>
  )
}

export default SignUp