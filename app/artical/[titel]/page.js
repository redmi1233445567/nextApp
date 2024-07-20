
export default function Art(props) {
    console.log(props)
    return (
      <>
        <h1>Hello Page</h1>
        <h1>{props.params.titel}</h1>
      </>
    )
  }
  