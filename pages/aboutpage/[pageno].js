import React from 'react';
import axios from "axios";
import Image from 'next/image'
import MainPage from '../mainpage';

  export const getStaticPaths = async()=>{
    // const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
    const rest = await fetch("http://localhost:4000/employees");

     const data = await rest.json();

    const paths = data.map((curelement)=>{
     return {
      params:{
        pageno:curelement.id.toString(),
      },
     };
    });

    return{ 
      paths,
      fallback:false,      
      
    };
     
  };

  export const getStaticProps = async(context)=>{
    const id = context.params.pageno;
    
    const rest = await fetch(`http://localhost:4000/employees/${id}`);
     const data = await rest.json();

    return{ 
      props:{
        data:data,
      }
    }
  }



const MyData= ({data}) => {
  const orig = 'http://localhost:4000/employees';

  return (
    <>
      <MainPage/>
    <div  className="ml-10 ">
                
    <div className="h-10 w-10 bg-slate-500 rounded-full text-center pt-1 mt-5 "><span className="text-2xl mb-2 ml-1  ">{data.id}.</span></div>
    <div className="rounded-full text-center pt-1 mt-5"> <Image src=/*{'http://localhost:4000/employees' + data.image}*/"/shoeb.jpeg" alt="Picture of the author" width="100px" height="100px" className="rounded-2xl shadow-2xl" /></div>

   <div> <span className="text-sm ml-8 bg-gray-300 p-1">{data.first_name}</span></div>
   <div> <span className="text-sm ml-8  ">{data.last_name}</span></div>

   </div>
   </>
  )
};

export default MyData;
