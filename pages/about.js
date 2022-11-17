import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Link from 'next/link'
import { useRouter } from 'next/router'

const About = () => {
  const router = useRouter()
  const getPreview = () => {
    fetch('http://localhost:3000/api/productList')
    // router.push('/contact')
  }

  return (
    <AboutTitle>
      <Link href="/about">
        <a>About</a>
      </Link>
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

About.getLayout = function getLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  )
}
