import { getProviders, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Login = () => {
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const router = useRouter()
  const providers = getProviders()

  const loginHandler = async () => {
    const status = await signIn('creditLogin', {
      redirect: false,
      username: userId,
      password: userPassword,
      callbackUrl: 'http://localhost:3000/about',
    })
    const provid = await getProviders()
    console.log(provid)
    if (status.ok) router.push('/')
  }

  const githubHandler = async () => {
    signIn('githubLogin')
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={({ target }) => {
            setUserId(target.value)
          }}
          placeholder="아이디를 입력해주세요"
        />

        <input
          type="password"
          onChange={({ target }) => {
            setUserPassword(target.value)
          }}
          placeholder="비밀번호를 입력해주세요"
        />
        <button onClick={loginHandler}>Login</button>
        <button onClick={githubHandler}>github Login</button>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 500px;
        }
        input {
          width: 300px;
          height: 40px;
          margin-bottom: 30px;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #cacaca;
          border-radius: 10px;
          outline: none;
        }
        button {
          width: 300px;
          height: 40px;
          border: 1px solid #cacaca;
          border-radius: 10px;
          background-color: white;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Login
