import { GetStaticProps } from 'next'
import { getTextSummaries, TextSummary } from '../../lib/texts'
import { Layout } from '../../components/layout'

type Props = { textSummaries: TextSummary[] }
const Index = ({ textSummaries }: Props) => {
  const lists = textSummaries.map((textSummary) => (
    <li key={`textSummary-${textSummary}`}>{textSummary.title}</li>
  ))
  return (
    <Layout>
      <main>
        <ul>{lists}</ul>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const textSummaries = getTextSummaries()
  return {
    props: {
      textSummaries,
    },
  }
}

export default Index
