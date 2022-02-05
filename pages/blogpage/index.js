import Link from 'next/link'
import React from 'react'
import ContactPage from '../contactpage'

 const blogpage = () => {
    return (
       <> 
       <ContactPage/>
         <div className="flex justify-center text-4xl">
           <Link href={`/aboutpage/${"3"}`}>
             <span>welcome blog page</span>
             </Link>
         </div>
       </>
    )
}

export default blogpage