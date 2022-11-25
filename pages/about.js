import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getSession, useSession } from 'next-auth/react'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]'

const About = ({ data }) => {
  const router = useRouter()
  const getPreview = () => {
    fetch('http://localhost:3000/api/productList')
    // router.push('/contact')
  }
  const { data: session, status } = useSession()
  console.log(session, '/////', status, '///////', data)

  return (
    <AboutTitle>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br></br>
      {session ? <p>login success</p> : <p>Login Plz</p>}
      <button onClick={getPreview}>go contact</button>
    </AboutTitle>
  )
}

export default About

const AboutTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  a {
    color: black;
  }
`

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  )
  // const session = await getSession()
  return { props: { data: session } }
}

About.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>AboutPage</title>
      </Head>
      <Header />
      {page}
      <Footer />
    </>
  )
}
