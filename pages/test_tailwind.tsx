
/*

  Tailwind CSS 練習

*/


const Test_Tailwind = () => {
  
    return <div className="bg-gray-30"> 
        
             <div className="flex">

                <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
                    
                    <div className="xl:max-w-lg xl:ml-auto">

                        <img className="h-10" src="/images/logo.png" />
                        <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/images/vocation.jpg" />
                        <h1 className="mt-6 text-2xl font-bold text-gray-800 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl"> 
                            You can work from anywhere. 
                            <br className="hidden lg:inline"/> <span className="text-indigo-500"> Take advantage of it. </span>
                        </h1>

                        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                            Workcation helps you find work-friendly rentals in beautiful locations 
                            so you can enjoy some nice weather even when you're not on vocation.
                        </p>

                        <div className="mt-4 sm:mt-6 ">

                            <a href="#" className="inline-block px-5 py-3 rounded-lg text-sm bg-indigo-500 text-white uppercase tracking-wider font-semibold sm:text-base"> 
                                Book Your Escape
                            </a>   

                        </div>
                        
                    </div>  

                </div>
    
                { /* ----------------------------------------------- */ } 

                <div className="hidden lg:block lg:w-1/2 lg:relative">

                    <img className="absolute inset-0 h-full w-full object-cover object-center" src="/images/vocation.jpg" />

                </div>
                 
             </div> 
 
           </div>
    
  } ;
  
  export default Test_Tailwind