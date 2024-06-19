import { useState } from 'react'
import './App.css'
import { Grid, Typography } from '@material-ui/core'
import { Vote } from './components/vote/vote'
import { Register } from './components/Register'
import { DesktopMac, Launch, RocketLaunch } from '@mui/icons-material'
import { Header } from './components/header'

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
<Header />
  <Typography style={{ marginBottom: "3rem", display:"flex"}}>Rocket Tattoo <RocketLaunch /> feat. linikerS.Dev <DesktopMac /></Typography>
  {/* <Typography>feat.</Typography> */}
  {/* <Typography>linikerS.Dev<DesktopMac /></Typography> */}
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
