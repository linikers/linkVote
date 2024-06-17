import { useState } from 'react'
import './App.css'
import { Grid, Typography } from '@material-ui/core'
import { Vote } from './components/vote/vote'
import { Register } from './components/Register'

function App() {
  const [isRegistred, setIsRegistred] = useState(0)

  return (
    <>
 <Grid container>
  <Grid>
    <Grid>
  <Typography >Rocket Tattoo feat linikerS.Dev</Typography>
  {isRegistred ? <Vote /> : <Register />}
    </Grid>
  </Grid>
 </Grid>
    </>
  )
}

export default App
