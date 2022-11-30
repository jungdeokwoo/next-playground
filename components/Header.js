import Link from 'next/link'
import styled from 'styled-components'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const session = useSession()

  console.log(session)

  const signOutHandler = () => {
    signOut()
    // signOut({ callbackUrl: 'http://localhost:3000/contact' })
  }

  return (
    <HeaderTitle>
      <Logo>Next.Js</Logo>
      <NavList>
        <Listitem>
          <Link href="/about">
            <a>about</a>
          </Link>
        </Listitem>
        <Listitem>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </Listitem>
        <Listitem>
          <Link href="/product">
            <a>product</a>
          </Link>
        </Listitem>
        {!session.data && (
          <Listitem>
            <Link href="/login">
              <a>SignIn</a>
            </Link>
          </Listitem>
        )}
        {session.data && <Listitem onClick={signOutHandler}>Signout</Listitem>}
      </NavList>
    </HeaderTitle>
  )
}

export default Header

const HeaderTitle = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: orange;
  background-color: #264653;
  text-align: center;
  padding: 30px;
`

const Logo = styled.h1``

const NavList = styled.ul`
  display: flex;
  align-items: center;
`

const Listitem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 15px;
  list-style: none;

  :hover {
    background-color: white;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: orange;
  }
`
