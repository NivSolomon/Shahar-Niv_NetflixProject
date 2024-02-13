import axios from 'axios'
import React, { useRef } from 'react'

const SignIn = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const VerifyPasswordRef = useRef<HTMLInputElement>(null)

    const onSubmitHandler = async() => {
        if(passwordRef.current?.value === VerifyPasswordRef.current?.value) {
            try{
            const { data } = await axios.post('http://localhost:8080/api/v1/users/signin', {
                email: emailRef.current?.value,
                password: passwordRef.current?.value
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
    }

  return (
    <div>
     <h1>Sign In:</h1>
     <label>Email: <input ref={emailRef} type='email'></input></label><br/>
     <label>Password: <input ref={passwordRef} type='password'></input></label><br/> 
     <label>Verify Password: <input ref={VerifyPasswordRef} type='password'></input></label><br/>

     <button type='submit' onClick={()=> onSubmitHandler()}>Submit</button>
    </div>

  )
}

export default SignIn