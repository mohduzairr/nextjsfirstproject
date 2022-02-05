import React from 'react';

const loginpage = () => {
  return (
      <>
        <div className="text-4xl ">login page</div>
               <form method="POST" action="https://tailwindcomponents.com/login">
                 <input type="hidden" name="_token" value="TbGNmXPFUqO7MjBKurGkLSEuIFBjbXsxovdkAv4Y"/> 
                 <div class="mt-4"><label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">E-Mail Address</label> 
                 <input type="email" name="email" value="" required="required" autocomplete="email" class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"/>
                 </div>
                  <div class="mt-4"><label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label> 
                  <input type="password" name="password" required="required" class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"/></div> 
                  <div class="flex justify-between mt-4">
                    <div class="col-md-6 offset-md-4">
                      <div class="flex items-center">
                        <input type="checkbox" name="remember" id="remember" class="border-gray-300 rounded shadow-sm dark:bg-gray-900 text-primary focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/> 
                        <label for="remember" class="ml-2 text-gray-700 dark:text-gray-300">
                            Remember Me
                        </label></div></div> <a href="https://tailwindcomponents.com/password/reset" class="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                        Forgot Your Password?
                    </a></div> <div class="mt-8"><button type="submit" class="w-96 px-4 py-2 tracking-wide text-black transition-colors duration-200 transform rounded-md bg-primary hover:bg-teal-300 focus:outline-none focus:bg-teal-300">
                    Sign in
                </button></div></form>
      </>
  )
  
};

export default loginpage;
