import React from 'react'
import Buttons from 'components/buttons'

function App() {
  return (
    <Buttons
    label = "Large Primaty Button"
    styleClass = ""
    onClick={() => {
      alert("버튼을 만들어보세요")
    }}
    >

    </Buttons>
  )
}

export default App