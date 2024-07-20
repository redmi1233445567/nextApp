
export const metadata = {
    title: "Artical Page"
}

export default function layout({children}) {
  return (
    <div>
      <h1>Artical</h1>
      <div className= "mt-8 bg-orange-400 p-8">{children}</div>
    </div>
  )
}
