import 'cssremedy/css/remedy.css'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps): React.ReactNode => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

export default App
