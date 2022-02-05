import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Header from '../common/components/header';
// import axios from 'axios';
   
  export const getStaticProps = async()=>{
    console.log("11111")

    // const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
    const rest = await fetch("http://localhost:4000/employees");

     const data = await rest.json();
    return{ 
      props:{
        data:data,
      }
    }
  }

 const aboutpage = ({data}) => {
  const orig = 'http://localhost:4000/employees';
    return (
       <>
       <Header/>
       <div className="flex justify-center  items-center mt-4 p-4">
         <div> 
           {data.slice(0,10).map((curelem)=>{
             return(
             
                <div key={curelem.id} className="pr-64 shadow-2xl">
                
                 <span> {curelem.id}</span>
                 {/* <div className="rounded-full text-center pt-1 mt-5  mr-8"><Image src="/shoeb.jpeg"  alt="Picture of the author" width="100px" height="100px" className="rounded-2xl shadow-2xl" /></div> */}

                 <div className="rounded-full text-center pt-1 mt-5"> <Image src=/*{orig + curelem.image}*/"/shoeb.jpeg" alt="Picture of the author" width="100px" height="100px" className="rounded-2xl shadow-2xl" /></div>
                 <span>First Name:</span> 
                 <Link href={`/aboutpage/${curelem.id}`}>
                        <span className="text-sm ml-8 bg-gray-300 p-1 cursor-pointer hover:bg-lime-300">{curelem.first_name}</span>
                </Link>
                <br/>
               <span>Last Name:</span>  <span className="text-sm ml-8 ">{curelem.last_name}</span>
             <br/>  <span>Email:</span>     <span className="text-sm ml-8 ">{curelem.email}</span>
              </div>
             );
           })}
           
           
      </div>
      </div>
       </>
    )
}

export default aboutpage