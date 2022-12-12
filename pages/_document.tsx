import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <script async src="https://ackee-production-f163.up.railway.app/tracker.js" data-ackee-server="https://ackee-production-f163.up.railway.app" data-ackee-domain-id="612c630c-c3a1-4d74-bff1-94e814099c28"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
