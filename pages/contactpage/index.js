import React from 'react'
// import { useEffect } from 'react'
import { useRouter } from 'next/router'
import HomePage from '../homepage'

 const ContactPage = () => {
    const route = useRouter()

    // useEffect(() => {
    //     setTimeout(()=>{
    //      route.push("/");
    //     },3000);
    //    }, []);
    return (
       <> 
         <div className="flex justify-center text-4xl">
             <span>welcome contact page</span>
         </div>
       </>
    )
}

export default ContactPage