import type { GetStaticPaths, GetStaticProps } from 'next'
import { Layout } from '../../components/layout'
import { getAllPostIds, getPostData, PostData, PostIds } from '../../lib/blog'

type Props = { postData: PostData }
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
  const paths: PostIds = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params
  const postData: PostData = getPostData(id as string)

  return {
    props: {
      postData,
    },
  }
}

export default Post
