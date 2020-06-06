export type PostIds = { params: { id: string } }[]
export const getAllPostIds = (): PostIds => {
  return [
    {
      params: {
        id: 'first-post',
      },
    },
  ]
}

export type PostData = {
  id: string
  date: string
  title: string
  body: string
}
export const getPostData = (id: string): PostData => {
  const res = {
    date: '2020-06-07',
    title: 'First Post',
    body: '始まるよ',
  }

  return {
    id,
    ...res,
  }
}
