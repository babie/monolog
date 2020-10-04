import type { GetStaticPaths, GetStaticProps } from 'next'
import { getAllTextIds, getTextData, TextData, TextIds } from '../../lib/texts'

type Props = { textData: TextData }
const TextShow: React.FC<Props> = ({ textData }: Props) => {
  return (
    <article>
      <h1>{textData.title}</h1>
      <time>{textData.date}</time>
      <p>{textData.body}</p>
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: TextIds = getAllTextIds()

  return Promise.resolve({
    paths,
    fallback: false,
  })
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params
  const textData: TextData = getTextData(id as string)

  return Promise.resolve({
    props: {
      textData,
    },
  })
}

export default TextShow
