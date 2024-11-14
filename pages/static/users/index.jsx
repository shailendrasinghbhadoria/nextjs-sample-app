import React from 'react'
import Link from 'next/link'

const UsersPage = (props) => {
  return (
    <div>
        <h2>Users</h2>
        {
            props.data.users.map(user=> (
                <Link key={user.id} href={`/static/users/${user.id}`}>
                    <div>{user.firstName}</div>
                </Link>
            ))
        }

    </div>
  )
}

export const getStaticProps = async()=>{

    const data = await (await fetch('https://dummyjson.com/users')).json()
    return{
        props:{
            data,
        }
    }
}

export default UsersPage