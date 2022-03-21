

import Link from "next/link";
import { FC , useState } from "react" ;

const Order_Layout : FC = ( { children } ) => {

 
  return <>
             訂單版面 : <br/>
            
            { children }
         </>

} ;

export default Order_Layout
       