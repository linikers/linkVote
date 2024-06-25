import { useState } from 'react'
import './App.css'
import { Button, Grid, Typography } from '@material-ui/core'
import { Header } from './components/header'
import { Vote } from './components/vote/vote'
import { Register } from './components/Register'
import { Top10 } from './components/Top10'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigateVote = () => {
    setCurrentPage('vote')
  }
  const handleNavigateRegister = () => {
    setCurrentPage('register')
  }
  const handleNavigateTop10 = () => {
    setCurrentPage('top10')
  }
  
  return (
    <>
 <Grid container>
  <Grid>
    <Grid>
<Header />

  </Grid>
  <Grid>
  {/* {isRegistred ? (<Vote />) : (<Register onRegister={handleNavigateToVote} />)} */}
    <Button color='default' onClick={handleNavigateVote}>Vote Agora</Button>
    <Button color='primary' onClick={handleNavigateRegister}>Registre o participante</Button>
    <Button color='secondary' onClick={handleNavigateTop10}>Top 10</Button>
    <Grid item xs={12}>
          {currentPage === 'vote' && <Vote />}
          {currentPage === 'register' && <Register onRegister={handleNavigateVote} />}
          {currentPage === 'top10' && <Top10 />}
        </Grid>
    </Grid>
  </Grid>
 </Grid>
    </>
  )
}

export default App
