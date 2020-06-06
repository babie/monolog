export type TextIds = { params: { id: string } }[]
export const getAllTextIds = (): TextIds => {
  return [
    {
      params: {
        id: 'first-post',
      },
    },
  ]
}

export type TextData = {
  id: string
  date: string
  title: string
  body: string
}
export const getTextData = (id: string): TextData => {
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

export type TextSummary = {
  id: string
  date: string
  title: string
}
export const getTextSummaries = (): TextSummary[] => {
  const text = getTextData('first-post')
  return [text]
}
