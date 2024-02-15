import axios from 'axios'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const onSubmitHandler = async() => {
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

  return (
    <div className='card'>
     <h1 className='signInTitle'>Sign In:</h1>
<input ref={emailRef} type='email' placeholder='Email'></input><br/>
<input ref={passwordRef} type='password' placeholder='Password'></input><br/> 

     <br/><button className='loginBtn' type='submit' onClick={()=> onSubmitHandler()}>Login</button>
     
     <h3><span className='firstTimeUsing'>First time using Netflix?</span><Link className='link' to={'/signup'}>Create an account</Link></h3>
    </div>

  )
}

export default SignIn