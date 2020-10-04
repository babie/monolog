import { GetStaticProps } from 'next'
import { getTextSummaries, TextSummary } from '../../lib/texts'

type Props = { textSummaries: TextSummary[] }
const TextIndex: React.FC<Props> = ({ textSummaries }: Props) => {
  const lists = textSummaries.map((textSummary) => (
    <li key={`textSummary-${textSummary.id}`}>{textSummary.title}</li>
  ))
  return (
    <main>
      <ul>{lists}</ul>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const textSummaries = getTextSummaries()

  return Promise.resolve({
    props: {
      textSummaries,
    },
  })
}

export default TextIndex
