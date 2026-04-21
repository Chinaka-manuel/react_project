import React from 'react'



const App = () => {

  const Style = {
    color: 'red',
    backgroundColor: 'yellow',
    padding: '0',
    margin: '0',
    borderRadius: '5px',
    textAlign: 'center'
  }

  return (
   <>
    <h1 style={Style}>Hello World</h1>
    <p>This is a simple React application.</p>
   </>
  )
}

export default App;