

// import { useEffect } from 'react'
const {getCookie} = require("cookies-next");




export default function Home() {
  const handleOnSignup=()=>{
    window.open("http://localhost:3000/api/google");
  }

  // useEffect(()=>{
  //   const token = getCookie("token");
  //   if(token){
  //     window.open("http:localhost:3000/dashboard");
  //   }
  // },[])
  return (
    <>
     <button onClick={handleOnSignup}>Signin with google</button>
    </>
  )
}
