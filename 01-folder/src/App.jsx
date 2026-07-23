
const App = () => {
  return (
    // <div id="parent">
    //   <h1 id="child1">App</h1>
    //   <h2 id="child2">Hello world</h2>
    // </div>
    // <div id="chacha"></div> This gives an error

    <>
    <div id="parent">
      <h1 id="child1">App</h1>
      <h2 id="child2">Hello world</h2>
    </div>
    <div id="chacha">
      <h3 id="child3">Chacha</h3>
    </div>
    </> //Fragments
  )
}

export default App
