import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => {
  return (
    <AboutTitle>
      <a href="/about">About</a>
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
