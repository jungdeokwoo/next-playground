import Layout from 'components/layout'
import { getAllPostIds, getPostData } from 'lib/posts'
import Head from 'next/head'
import Date from 'components/date'
import styled from 'styled-components'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <ArticleHeader>{postData.title}</ArticleHeader>
        <DateWrapper>
          <Date dateString={postData.date} />
        </DateWrapper>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

const ArticleHeader = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

const DateWrapper = styled.div`
  color: #666;
`
