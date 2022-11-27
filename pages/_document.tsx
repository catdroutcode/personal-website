import { Html, Head, Main, NextScript } from 'next/document'
import * as ackeeTracker from 'ackee-tracker'

ackeeTracker.create('https://ackee.catdrout.xyz').record('1e62c274-6f41-4a77-b536-00557518e1a9')

export default function Document() {
  return (
    <Html className="dark">
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
