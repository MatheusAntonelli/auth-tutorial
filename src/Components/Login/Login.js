import React from 'react'
import './Login.css'




export default function Login() {
    return (
        <>
        <div className='login-wrapper'>
            Login
            <form>
            <label>
                <p>Username</p>    
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" name="password" id="" />   
            </label>  
            <div className='btn'>
                <button type='submit'>Submit</button>    
            </div>   
         </form>  
        </div>
         
        </>
    )
}
