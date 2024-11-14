import React, { useEffect, useState } from 'react'
import Link from "next/link"
import useSWR from 'swr'

export const fetcher = (...args)=> fetch(...args).then(res=> res.json())

const UsersPage = () => {

    // const [users, setUsers] = useState([])

    const {data, error} = useSWR('https://dummyjson.com/users', fetcher)

    
    // useEffect(()=>{
    //    const fetchData = async()=>{
    //         const data = await fetch("https://dummyjson.com/users")
    //         setUsers(await data.json())
    //     }
    //     fetchData()
    // },[])


    if(error){
        return <h1>Some Thing Went Wrong</h1>
    }

    if(!data) return <h2>Loading...</h2>

  return (
    <div>
        <h2>Users</h2>
        {
            data.users && data.users.map((user)=>(
            <Link key={user.id} href={`users/${user.id}`}>
                <div>{user.firstName}</div>
            </Link>
        ))
        }
    </div>
  )
}

export default UsersPage