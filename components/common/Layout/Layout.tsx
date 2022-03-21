
import Link from "next/link";
import { FC , useState } from "react" ;

const Layout : FC = ( { children } ) => {

  const [ keyword , setKeyword ] = useState("") ;


  const iStyle = { position:"relative" , top:"10px" , border:"1px solid red" } as const

  return <>
            <Link href="/"> 首頁 </Link>  |  
            <Link href="/products"> 商品 </Link>  ｜
            <Link href="/orders"> 訂單 </Link>  ｜
            
            
            <br/>
            

            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} style={ iStyle }/> 
        
          
            <br/><br/>

            { children }
         </>

} ;

export default Layout
       