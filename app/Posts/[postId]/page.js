import PostLoad from "@/app/componants/postLoad"
import { Suspense } from "react"


export default async function PostId({params}) {
    const test = params.postId
    const sorry = (<div><h1>Loading...</h1></div>)
    
  return (
    <div>
        <h1 className= "text-lg my-6 mx-auto w-fit">Detales Post</h1>
        <Suspense fallback={sorry}>
            <PostLoad  test={test}/>
        </Suspense>
    </div>
  )
}
