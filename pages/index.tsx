


import {  Front_Common_Header ,
          React_Responsive_Carousel , 
          Left_Main_Pic ,
          Banner_Right_Image ,
          Scroll_Card ,
          Small_Card
       } from "@layout/index" ;
 
import { I_Scroll_Card } from "@type/basic_Types" ;
import { I_Small_Card } from "@type/basic_Types" ;


type Props = {

  small_Card_Data  : [ I_Small_Card ] ;
  scroll_Card_Data : [ I_Scroll_Card ] ; 

}




const Home = ( { small_Card_Data , scroll_Card_Data } : Props ) => {



  return <div className="mt-10 container mx-auto 
                         border-2 sm:border-emerald-300 md:border-yellow-400 
                         lg:border-orange-400 xl:border-red-400 2xl:border-blue-400" >

            <Front_Common_Header />            

            <React_Responsive_Carousel images={[]} />

            <Banner_Right_Image img_Title    = "Medium is a place to write, red, and connect." 
                                img_Subtitle = "It's easy and free to post your thinking on any topic and connect with millions of readers." 
                                img_Url      = "https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" />   
            
          

            <Small_Card section_Title="Explore Nearby" card_Data={ small_Card_Data  } />

            <Scroll_Card section_Title="Live Anywhere" card_Data={ scroll_Card_Data } /> 



            <Left_Main_Pic images={[]} />

         </div>  
            
      
} ;

export default Home
       

// Home.Layout = Layout 
// Home.getLayout = function getLayout( page ){

//   return <Layout> 
    
//            { page }  

//          </Layout>


// }


export async function getStaticProps(){

  const small_Card_Data  = await fetch( "https://links.papareact.com/pyp" )
                                 .then( res => res.json()  ) ;
                  
  const scroll_Card_Data = await fetch( "https://links.papareact.com/zp1" )
                                 .then( res => res.json() ) ;      
  
 
  return {
           props :{
                    small_Card_Data , 
                    scroll_Card_Data     
                  }

         }

}


