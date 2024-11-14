import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut} from 'next-auth/react'

export default function Home() {

  const myImageLoader=({src, width, quality})=>{
      return `https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=${width}&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
  }

  const session = useSession()
  console.log(session)
  if(session.data===null){
    return <button onClick={signIn}>Login</button>
  }

  return (
    <div>
      <h1>Hello {session?.data?.user?.name}</h1>

      <button onClick={signOut}>Logout</button>
      {/* <Image  
        loader={myImageLoader}
      src={'https://images.unsplash.com/photo-1515879218367-8466d910aaa4'}
        alt='Code Image'
        width={1370}
        height={500}

      /> */}
      
    </div>
  )
}
