import React from 'react'
import Link from 'next/link'

const UserPage = (props) => {

  return (
    <div>
        <h1>Users</h1>
        {
            props.data.users.map((user)=>(
                <Link key={user.id} href={`/users/${user.id}`}>
                    <div>{user.firstName}</div>
                </Link>
            ))
        }
        
    </div>
  )
}

export const getServerSideProps = async()=>{

    const data = await (await fetch('https://dummyjson.com/users')).json()
    return {
        props:{
            data,
        }
    }
}

export default UserPage