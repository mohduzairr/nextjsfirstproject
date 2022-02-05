import { useRouter } from 'next/router'

 const Header=()=> {
  const route = useRouter()
  return (
   <>
     <div className="h-12 w-full bg-slate-800 ">
      <div className="flex justify-evenly pt-3 text-white">
        <div onClick={()=>route.push("/homepage")} ><span>Home</span></div>
        <div onClick={()=>route.push("/contactpage")}><span>Contact</span></div>
        <div onClick={()=>route.push("/aboutpage")}><span>About</span></div>
        <div onClick={()=>route.push("/blogpage")}><span> Blog</span></div>      
        <div onClick={()=>route.push("/loginpage")}><span> Login</span></div>

      </div>
     </div>
   </>
  )
}



export default Header;

