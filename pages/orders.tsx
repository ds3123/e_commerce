

import { ReactElement } from "react";
import Order_Layout from "@components/common/layout/Order_Layout";
import { PageTitle } from './products/index.style'


const Orders = () => {
  
  return <PageTitle> 目前位置 : 訂單 SSSS </PageTitle>
  
} ;

export default Orders
       

// Orders.Layout = Layout;
Orders.getLayout = function getLayout( page : ReactElement ){


  return <Order_Layout> { page }  </Order_Layout>


}