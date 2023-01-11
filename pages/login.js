import React, { useEffect } from 'react'
import style from "../Components/styles/login.module.scss"
import GoogleIcon from "@mui/icons-material/Google"
import Image from 'next/image'
import LoginIcon from '@mui/icons-material/Login';

const {getCookie}  = require("cookies-next")

const login = () => {
    const handleOnSubmit=()=>{
        console.log("Login");
    }

   
    useEffect(()=>{
      const token = getCookie("token");
      if(token){
        window.open("http:localhost:3000/dashboard");
      }
    },[])


    const handleOnGoogleSignup=()=>{
        window.open("http://localhost:3000/api/google","_self");
      }
      
  return (

    <div className={style.login}>
     <div className={style.loginWrapper}>
        <div className={style.left}>
           <div className={style.leftWrapper}>
            <div className={style.title}><LoginIcon className={style.logicon}/> Login</div>
            <p><span>Note:</span>Login Accepted from only Kiit mail id.</p>
            <div className={style.google}><button onClick={handleOnGoogleSignup}><Image className={style.gicon} src="/gicon.png" width={25} height={25}/> Signup with google</button></div>
            <span className={style.or}>Or signin with email</span>
            <form className={style.form} onSubmit={handleOnSubmit}>
                <div className={style.input}>
                    <span>Email</span>
                    <input className={style.in} type="text" placeholder='Enter your @kiit.ac.in'/>
                </div>
                <div className={style.input}>
                    <span>Password</span>
                    <input className={style.in} type="text" placeholder='Enter your password'/>
                </div>
                <button className={style.loginbtn}>Login</button>
            <span className={style.notregister}>Not registered yet?<span className={style.signup}> Create an account!</span></span>
            </form>
           </div>
        </div>
        <div className={style.right}>
            <img src="/right.png" className={style.rimage} />
            <h2>Welcome to <span>KIIT CONNECT</span></h2></div>

     </div>
    </div>
  )
}

export default login
