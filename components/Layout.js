import styled from 'styled-components'
import Head from 'next/head'
import { Navbar } from './Navbar';

const Main = styled.main`
  margin-top: 70px;
  padding: 40px 20px 20px 20px;
`

const Layout = (props) => (
  <div>
    <Head>
      <title>DevFest New Orleans 2019</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin></link>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Product+Sans:400&amp;lang=en&amp;display=swap" rel="stylesheet"></link>
      <style>
        {`
          body{
            color:#555555;
            font-family: 'Open Sans', sans-serif;}
          body h1 {
            font-size: 1.6em;
            font-family: 'Product Sans', sans-serif;}
          body h2 {
            font-size: 1.3em;
            font-family: 'Product Sans', sans-serif;}
        `}
      </style>
    </Head>
    <Navbar/>
    <Main>
      {props.children}
    </Main>
  </div>
)

export default Layout
