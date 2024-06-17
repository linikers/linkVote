import { useState } from 'react'
import './App.css'
import { Typography } from '@material-ui/core'
import { Vote } from './components/vote/vote'
import { Register } from './components/Register'

function App() {
  const [isRegistred, setIsRegistred] = useState(0)

  return (
    <>
 <form>
  <Typography>Rocket Tattoo feat linikerS.Dev</Typography>
  {isRegistred ? <Vote /> : <Register />}
 </form>
    </>
  )
}

export default App
