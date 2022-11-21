import styled from 'styled-components'
import Header from 'components/Header'
import { useEffect } from 'react'
import Footer from 'components/Footer'
import Head from 'next/head'

const Contact = props => {
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/productList')
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // })

  return <ContactTitle>{props.data}</ContactTitle>
}

export default Contact

const ContactTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export async function getStaticProps(context) {
  console.log(context)
  return {
    props: context.preview
      ? { data: context.previewData.title }
      : { data: 'normal Page' },
  }
}

Contact.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Header />
      {page}
      <Footer />
    </>
  )
}
