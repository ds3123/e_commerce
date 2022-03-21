import { FC } from "react";
import Layout from "./Layout";


const ProductsLayout : FC = ({ children }) => {

  return <Layout>
           <div> 商品 Layout  </div>
           { children }
         </Layout>

};

export default ProductsLayout;