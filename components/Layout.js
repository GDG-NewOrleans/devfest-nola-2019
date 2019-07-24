import styled from 'styled-components'
import Head from 'next/head'
import { Navbar } from './Navbar';
import { GA_TRACKING_ID } from '../lib/gtag'

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
      <meta name="description" content="DevFest New Orleans is a single-day, single-track, inclusive conference for all developers. GDG New Orleans and Women Techmakers New Orleans invite you to join us on Saturday, October 5, 2019 at Loyola University in New Orleans for our first annual DevFest!" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:image" content="http://devfest2019.gdgneworleans.com/static/share.jpg"/>
      <meta property="og:image:type" content="image/jpeg"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@GDG_NewOrleans"/>
      <meta name="twitter:title" content="DevFest New Orleans 2019"/>
      <meta name="twitter:description" content="DevFest New Orleans is a single-day, single-track, inclusive conference for all developers. Join us on Saturday, October 5, 2019 at Loyola University in New Orleans for our first annual DevFest!"/>
      <meta name="twitter:creator" content="@GDG_NewOrleans"/>
      <meta name="twitter:image" content="http://devfest2019.gdgneworleans.com/static/share.jpg"/>
      <meta name="twitter:image:alt" content="New Orleans skyline" />
      <meta name="twitter:domain" content="devfest2019.gdgneworleans.com"/>

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
      {/* {Global site tag (gtag.js) - Google Analytics} --> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
        }}
      />
    </Head>
    <Navbar/>
    <Main>
      {props.children}
    </Main>
  </div>
)

export default Layout
