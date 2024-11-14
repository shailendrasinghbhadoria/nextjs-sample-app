import { useRouter } from "next/router"
import { useEffect } from "react"

const useUser = ()=> ({user:"Shailendra", loading: false})

const IndexPage = () => {
    let Router = useRouter()
    console.log(Router)

    const user = useUser()

useEffect(()=>{
    if(user.user==null){
        Router.replace("/")
    }
},[user, Router])

  return (
    <>
    <div>This is index page of {Router.query.first} </div>

    <button onClick={()=>Router.push(`/user/${Router.query.first}/setting`)}>Setting</button><br/>
    <button onClick={()=>Router.push({
        pathname:'/user/[first]/setting',
        query:{first:Router.query.first}
    })}>Setting</button>
    <button onClick={()=>Router.replace("/")}>Back to Home</button><br/>

    </>
  )
}

export default IndexPage