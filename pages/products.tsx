
import ProductsLayout from "@common/layout/ProductsLayout" ;
import { Layout } from "@common/index" ;

import { ReactElement } from "react";
import { PageTitle } from './products/index.style'


const Products = () => {
  
  return <PageTitle> 目前位置 : 商品頁 </PageTitle>
  
} ;

export default Products
       
// Products.Layout = ProductsLayout;


Products.getLayout = function getLayout( page : ReactElement ){


  return <Layout> { page }  </Layout>


}
