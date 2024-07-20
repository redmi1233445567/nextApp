import Link from "next/link";

export default async function Post() {

  const resu = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      // cache: "force-cache"    SSG
      // cache: "no-store"     SSR 
      next: {
        revalidate: 120    //ISR
      }
    }
  );
  const posts = await resu.json()
      
  const postsJsx = posts.map((post) => {
    return (
      <Link href= {`/Posts/${post.id}`}>
        <div className = "bg-white text-black m-7 p-4 rounded-md ">
          <h1 className= "font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    )
  })


  return (
    <>
      <h1 className= "p-7">Post Page</h1>

      <div>
        {postsJsx}
      </div>
    </>
  )
}
