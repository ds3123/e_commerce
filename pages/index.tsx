

import Layout from "@components/common/Layout/Layout" ;


const Home = () => {
  
  return <div className="bg-gray-100 mx-auto sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-purple-500"> 

             <h1 className="border-2 text-4xl font-bold text-center text-blue-500">
                  目前位置 : 首頁 
             </h1>

             <div className="flex">

                <div className="px-8 py-12 max-w-md mx-auto lg:hidden lg:w-1/2">

                  <img className="mt-10 mb-10 rounded-lg" src="https://placeimg.com/640/480/any" /> 

                </div>

                <div className="hidden lg:block lg:w-1/2 lg:relative">

                  <img className="absolute inset-0 h-full w-full rounded-lg object-cover object-center" src="https://placeimg.com/640/480/any" /> 

                </div>

            </div>  

        
             <div className="border-2 columns-4 p-10">

                <h1 className="text-2xl text-gray-600 font-bold leading-loose"> 
                  You can work anywher. <span className="text-indigo-400"> Take advantage of it </span>  
                </h1> 
                <h1 className="text-2xl text-gray-600 font-bold"> You can work anywher. Take advantage of it  </h1> 
                <h1 className="text-2xl text-gray-600 font-bold"> You can work anywher. Take advantage of it  </h1> 
                <h1 className="text-2xl text-gray-600 font-bold"> You can work anywher. Take advantage of it  </h1> 

             </div>

             <p  className="mt-10 text-xl" > 
                Workcation helps you find work friendly rentals in beautiful locations. 
                So you can enjoy nice weather even when you're not on vocation.
             </p>

             <div className="mt-4">
               
               <a href="#" className="inline-block bg-indigo-500 font-b text-white px-5 py-3 rounded-md shadow-lg"> 
                   Book Your Escape 
               </a>
               
             </div> 
 


         </div>

} ;

export default Home
       
// Home.Layout = Layout 


Home.getLayout = function getLayout( page ){


  return <Layout> { page }  </Layout>


}