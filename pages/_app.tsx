import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

import { AppProps } from "next/app";
import { FC } from "react"
import "@assets/main.css"


const Noop = ( { children } ) => <> { children } </> // 若無 Layout，僅顯示 children



// 1. 整個應用，僅使用一種 Layout
// function MyApp({ Component , pageProps } : AppProps & { Component : { Layout : FC } } ) {


//   const Layout = Component.Layout ?? Noop 

//   return <Layout>

//             <Component { ...pageProps } /> 

//          </Layout>

// }


// 2. 整個應用，有多種 Layout

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component , pageProps } : AppPropsWithLayout ) {


  const getLayout = Component.getLayout || ( ( page ) => page )
  

  return getLayout( <Component { ...pageProps } />  )

}



export default MyApp;