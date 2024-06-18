import { useState } from 'react'
import './App.css'
import { Grid, Typography } from '@material-ui/core'
import { Vote } from './components/vote/vote'
import { Register } from './components/Register'

function App() {
  const [isRegistred, setIsRegistred] = useState(false)

  const handleNavigateToVote = () => {
    setIsRegistred(true)
  }
  return (
    <>
 <Grid container>
  <Grid>
    <Grid>

  <Typography style={{ marginBottom: "3rem"}}>Rocket Tattoo feat linikerS.Dev</Typography>
  </Grid>
  <Grid>
  {isRegistred ? (<Vote />) : (<Register onRegister={handleNavigateToVote} />)}

    </Grid>
  </Grid>
 </Grid>
    </>
  )
}

export default App
