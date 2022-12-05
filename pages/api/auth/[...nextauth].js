import NextAuth from 'next-auth/next'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

const USER = [
  {
    id: '1',
    name: 'asdf',
    password: 'asdf',
    email: 'jsmith@example.com',
    image: 'https://avatars.githubusercontent.com/u/97271725?v=4',
  },
]

export const authOptions = {
  providers: [
    GitHubProvider({
      id: 'githubLogin',
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: 'creditLogin',
      name: 'Credentials',
      // credentials: {
      //   username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
      //   password: { label: 'Password', type: 'password' },
      // },
      async authorize(credentials, req) {
        const user = USER.filter(
          el =>
            el.name === credentials.username &&
            el.password === credentials.password,
        )[0]
        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          }
        } else {
          return 'hi'
        }
      },
    }),
    // Provider.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
  ],
}

export default NextAuth(authOptions)
