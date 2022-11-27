import { Html, Head, Main, NextScript } from 'next/document'
import * as ackeeTracker from 'ackee-tracker'

ackeeTracker.detect()

export default function Document() {
  return (
    <Html className="dark" hidden data-ackee-server="https://ackee.catdrout.xyz" data-ackee-domain-id="1e62c274-6f41-4a77-b536-00557518e1a9">
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
