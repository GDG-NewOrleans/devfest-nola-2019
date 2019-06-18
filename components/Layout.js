import styled from 'styled-components'
import Head from 'next/head'
import { Navbar } from './Navbar';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`

const Layout = (props) => (
  <div>
    <Head>
      <title>DevFest New Orleans 2019</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true"></link>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Product+Sans:400&amp;lang=en&amp;display=swap" rel="stylesheet"></link>
      <style>
        {`
          body{
            color:#555555;
            font-family: 'Open Sans', "Helvetica", "Arial", sans-serif;
            margin: 0;}
          body h1 {
            font-size: 1.6em;
            font-family: 'Product Sans', "Helvetica", "Arial", sans-serif;}
          body h2 {
            font-size: 1.4em;
            font-family: 'Product Sans', "Helvetica", "Arial", sans-serif;}
        `}
      </style>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-col</meta>or" content="#ffffff" />
    </Head>
    <Navbar/>
    <Main>
      {props.children}
    </Main>
  </div>
)

export default Layout
