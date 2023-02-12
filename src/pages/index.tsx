import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import { NextPageContext } from 'next'
import Image from 'next/image'

export default function Home() {
  const { data: session } = useSession()
  console.info(session)
  return (
    <>
      <h1 className="text-red-700 text-4xl bg-yellow-300">{session?.user?.name}</h1>
      <Image
        src={session?.user?.image as string}
        alt=""
        width="128"
        height="128"
        className="rounded-full w-[128px] h-32"
      />
      {session ? (
        <button onClick={() => signOut()} className="bg-blue-400">
          SignOut
        </button>
      ) : (
        <button onClick={() => signIn()} className="bg-blue-400">
          SignIn
        </button>
      )}
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
