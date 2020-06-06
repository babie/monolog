import type { GetStaticPaths, GetStaticProps } from 'next'
import { Layout } from '../../components/layout'
import { getAllTextIds, getTextData, TextData, TextIds } from '../../lib/texts'

type Props = { textData: TextData }
const Post = ({ textData }: Props) => {
  return (
    <Layout>
      <article>
        <h1>{textData.title}</h1>
        <time>{textData.date}</time>
        <p>{textData.body}</p>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: TextIds = getAllTextIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params
  const textData: TextData = getTextData(id as string)

  return {
    props: {
      textData,
    },
  }
}

export default Post
