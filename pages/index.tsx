import { Head, Layout } from '../components'

const Home: React.FC = () => {
  const title = 'monolog'
  const description = "babie's web site and `pieces` demo site."

  return (
    <Layout>
      <Head title={title} description={description} />
      <div className="container">
        <h1 className="title">{title}</h1>

        <p className="description">{description}</p>

        <div className="grid">
          <a
            href="https://twitter.com/babie"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Twitter &rarr;</h2>
            <p>毎日くだらないことを呟いている。</p>
          </a>

          <a
            href="https://github.com/babie"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Github &rarr;</h2>
            <p>たまにコードを書く。</p>
          </a>
        </div>

        <style jsx>{`
          .container {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h2 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
      </div>
      <ul className="toolbar">
        <li>User</li>
        <li>New</li>
        <li>Edit</li>
        <li>Remove</li>
      </ul>
    </Layout>
  )
}

export default Home
