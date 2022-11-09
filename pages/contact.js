import styled from 'styled-components'
import Header from '../components/Header'

const Contact = () => {
  return <ContactTitle>Contact</ContactTitle>
}

export default Contact

const ContactTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

Contact.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  )
}
