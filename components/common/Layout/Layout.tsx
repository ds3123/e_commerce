
import Link from "next/link";
import { FC , useState } from "react" ;

const Layout : FC = ( { children } ) => {

  const [keyword, setKeyword] = useState("");

  return <>
            <Link href="/"> 首頁 </Link>  | 
            <Link href="/products"> 商品</Link> <br/><br/>
            
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} /> <br/><br/>
            { children }
         </>

} ;

export default Layout
       