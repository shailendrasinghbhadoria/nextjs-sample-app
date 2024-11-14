import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {fetcher} from '../../users/index'
import useSWR from 'swr'

const UserInfo = () => {
    // const [userInfo, setUserInfo] = useState({})
    const router = useRouter()
    let id = router.query.id
    

    const {data, error} = useSWR(`https://dummyjson.com/users/${id}`, fetcher)

    // useEffect(()=>{
    //     let id = router.query.id
    //     const fetchData = async(id)=>{
    //         const data = await fetch(`https://dummyjson.com/users/${id}`)
    //         setUserInfo(await data.json())
    //     }
    //     fetchData(id)
    // })

    if(error){
        return <h1>Some Thing Went Wrong</h1>
    }

    if(!data) return <h2>Loading...</h2>

  return (
    <div>
        <h1>{data?.firstName}</h1>
        <h1>{data?.email}</h1>
    </div>
  )
}

export default UserInfo