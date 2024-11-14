import React from 'react'
import { useRouter } from 'next/router'

const Setting = () => {

    let router = useRouter()

  return (
    <h2>This is Setting page of {router.query.first}</h2>
  )
}

export default Setting