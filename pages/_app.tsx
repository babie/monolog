import { AppProps } from 'next/app'
import 'cssremedy/css/remedy.css'

const App = ({ Component, pageProps }: AppProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default App
