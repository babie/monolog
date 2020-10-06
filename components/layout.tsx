import { PortraitStyle, LandscapeStyle } from './styles'
import { RefreshButton } from './refresh-button'
import { useOrientationChange } from '../lib/use-orientation-change'

const switchStyle = (orientation: string): React.FC => {
  switch (orientation) {
    case 'portrait':
      return PortraitStyle
    case 'landscape':
      return LandscapeStyle
    default:
      return PortraitStyle
  }
}

type Props = {
  children: React.ReactNode
}
export const Layout: React.FC<Props> = ({ children }: Props) => {
  const orientation = useOrientationChange()
  const Style = switchStyle(orientation)

  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Index</li>
          <li>Search</li>
          <li>Author</li>
        </ul>
      </nav>
      {children}
      <ul>
        <li>
          <RefreshButton />
        </li>
      </ul>
      <footer>©︎️ 2020 babie</footer>
      <Style />
      <style jsx>{`
        ul {
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
