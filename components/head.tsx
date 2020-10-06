import NextHead from 'next/head'

type Props = {
  title: string
  description: string
}
export const Head: React.FC<Props> = ({ title, description }: Props) => {
  const sitename = 'pieces'

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="canonical" href="https://babie.dev/" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, viewport-fit=cover"
      />
      <meta name="application-name" content={sitename} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description} />
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
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://babie.dev/images/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@babie" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={sitename} />
      <meta property="og:url" content="https://babie.dev" />
      <meta
        property="og:image"
        content="https://babie.dev/images/icons/apple-touch-icon.png"
      />
    </NextHead>
  )
}
