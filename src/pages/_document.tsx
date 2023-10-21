/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{fontSize: "14px"}}>
      <Head />
      {/* <link rel="stylesheet" href="https://unpkg.com/primeicons@6.0.1/primeicons.css"></link> */}

      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
