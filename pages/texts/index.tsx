import { GetStaticProps } from 'next'
import { getTextSummaries, TextSummary } from '../../lib/texts'

type Props = { textSummaries: TextSummary[] }
const TextIndex = ({ textSummaries }: Props) => {
  const lists = textSummaries.map((textSummary) => (
    <li key={`textSummary-${textSummary}`}>{textSummary.title}</li>
  ))
  return (
    <main>
      <ul>{lists}</ul>
    </main>
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

export default TextIndex
