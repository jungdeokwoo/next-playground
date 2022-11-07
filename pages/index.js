import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styled from 'styled-components'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: { allPostsData },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeSection>
        <p>Hello World</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="/product">go Product</Link>
      </HomeSection>
      <ListSection>
        <HeadingLg>Blog</HeadingLg>
        <ListWrapper>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <DateWrapper>
                <Date dateString={date} />
              </DateWrapper>
            </ListItem>
          ))}
        </ListWrapper>
      </ListSection>
    </Layout>
  )
}

const HomeSection = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`

const ListSection = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: 1px;
`

const HeadingLg = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  margin: 0 0 1.25rem;
`

const DateWrapper = styled.small`
  color: #666;
`
