
import ProductsLayout from "@layout/ProductsLayout" ;
import Layout from "@layout/Layout" ;

import { ReactElement } from "react";
import { PageTitle } from './products/index.style'


const Products = () => {
  
  return <PageTitle> 目前位置 : 商品頁 </PageTitle>
  
} ;

export default Products
       
// Products.Layout = ProductsLayout;


Products.getLayout = function getLayout( page : ReactElement ){


  return <Layout> 版面內容  </Layout>


}
