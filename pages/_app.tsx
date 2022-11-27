import { useState } from 'react'
import { ReactBricks } from 'react-bricks/frontend'
import type { AppProps } from 'next/app'
import config from '../react-bricks/config'
import * as ackeeTracker from 'ackee-tracker'
import '../css/styles.css'

ackeeTracker.create('https://ackee.catdrout.xyz').record('1e62c274-6f41-4a77-b536-00557518e1a9')



const MyApp = ({ Component, pageProps }: AppProps) => {
  // Color Mode Management
  const savedColorMode =
    typeof window === 'undefined' ? '' : localStorage.getItem('color-mode')
  const [colorMode, setColorMode] = useState(savedColorMode || 'light')
  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    localStorage.setItem('color-mode', newColorMode)
  }

  const reactBricksConfig = {
    ...config,
    isDarkColorMode: colorMode === 'dark',
    toggleColorMode,
    contentClassName: `antialiased font-content ${colorMode} ${
      colorMode === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`,
  }

  return (
    <ReactBricks {...reactBricksConfig}>
      <Component {...pageProps} />
    </ReactBricks>
  )
}

export default MyApp
