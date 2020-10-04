import Head from 'next/head'
import RefreshButton from './refresh-button'

type Props = {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>babie.dev</title>
        <link rel="canonical" href="https://babie.dev/" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover"
        />
        <meta name="application-name" content="babie.dev" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="babie.dev" />
        <meta
          name="description"
          content="ソフトウェア・エンジニアであるbabieのウェブサイトです。"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ffc40d" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        {/*
        <link
          rel="mask-icon"
          href="/static/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        */}
        <link rel="shortcut icon" href="/images/icons/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://babie.dev" />
        <meta name="twitter:title" content="babie.dev" />
        <meta
          name="twitter:description"
          content="ソフトウェア・エンジニアであるbabieのウェブサイトです。"
        />
        <meta
          name="twitter:image"
          content="https://babie.dev/images/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@babie" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="babie.dev" />
        <meta
          property="og:description"
          content="ソフトウェア・エンジニアであるbabieのウェブサイトです。"
        />
        <meta property="og:site_name" content="babie.dev" />
        <meta property="og:url" content="https://babie.dev" />
        <meta
          property="og:image"
          content="https://babie.dev/images/icons/apple-touch-icon.png"
        />
      </Head>

      {children}

      <nav>
        <ul>
          <li>
            <RefreshButton />
          </li>
        </ul>
      </nav>

      <footer>©︎️ 2020 babie</footer>

      <style jsx>{`
        nav ul {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
