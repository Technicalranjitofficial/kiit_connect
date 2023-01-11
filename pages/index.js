
import { useRouter } from 'next/router';
import { useEffect } from 'react'
const {getCookie} = require("cookies-next");




export default function Home() {
  const handleOnSignup=()=>{
    window.open("http://localhost:3000/api/google");
  }
  const router = useRouter();
  useEffect(()=>{
    const token = getCookie("token");
    if(token){
      router.replace("/dashboard");
    }
  },[])
  return (
    <>
     <button onClick={handleOnSignup}>Signin with google</button>
    </>
  )
}
