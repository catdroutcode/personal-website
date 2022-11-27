import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <script async src="https://ackee.catdrout.xyz/tracker.js" data-ackee-server="https://ackee.catdrout.xyz" data-ackee-domain-id="1e62c274-6f41-4a77-b536-00557518e1a9"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
