import type { GetStaticPaths, GetStaticProps } from 'next'
import { Layout } from '../../components/layout'
import { getAllTextIds, getTextData, TextData, TextIds } from '../../lib/texts'

type Props = { postData: TextData }
const Post = ({ postData }: Props) => {
  return (
    <Layout>
      <article>
        <h1>{postData.title}</h1>
        <time>{postData.date}</time>
        <p>{postData.body}</p>
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
  const postData: TextData = getTextData(id as string)

  return {
    props: {
      postData,
    },
  }
}

export default Post
