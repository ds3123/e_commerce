import { AppProps } from "next/app";
import { FC } from "react"
import "@assets/main.css"


const Noop = ( { children } ) => <> { children } </> // 若無 Layout，僅顯示 children


function MyApp({ Component , pageProps } : AppProps & { Component : { Layout : FC } } ) {

  const Layout = Component.Layout ?? Noop 

  return <Layout>

            <Component { ...pageProps } /> 

         </Layout>

}

export default MyApp;