import { useRouter } from "next/router"

const namePage = () => {

    let {query} = useRouter()
    console.log(query)
  return (
    <h1>This first dynamic router {query.name} page</h1>
  )
}

export default namePage