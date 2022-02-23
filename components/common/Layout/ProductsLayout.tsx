import { FC } from "react";
import Layout from "./Layout";


const ProductsLayout : FC = ({ children }) => {

  return <Layout>
           { children }
         </Layout>

};

export default ProductsLayout;