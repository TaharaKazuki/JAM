import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import { NextPageContext } from 'next'

export default function Home() {
  const { data: session } = useSession()
  console.info(session)
  return (
    <>
      <h1 className="text-red-700 text-xl">Welcome</h1>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const session = await getSession(ctx)

  return {
    props: {
      session,
    },
  }
}
