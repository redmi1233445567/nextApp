
export default async function PostLoad({test}) {
    await new Promise ((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
    const resu2 = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${test}`,
        {
          next: {
            revalidate: 120  
          }
        }
      );
      const post = await resu2.json()
  return (
    <div className= " bg-white text-black m-7 p-4 rounded-md">
      <h1 className= "font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
