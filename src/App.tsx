import { useState } from 'react'
import './App.css'
import { Button, Grid} from '@material-ui/core'
import { Header } from './components/header'
import { Vote } from './pages/vote/vote'
import { Register } from './pages/Register'
import { Top10 } from './pages/Top10'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

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
    <Grid container style={{ margin: "1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Button color='default' onClick={handleNavigateVote}>Vote Agora</Button>
        <Button color='primary' onClick={handleNavigateRegister}>Registre o participante</Button>
        <Button color='secondary' onClick={handleNavigateTop10}>Top 10</Button>
        <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
          {currentPage === 'vote' && <Vote />}
          {currentPage === 'register' && <Register onRegister={handleNavigateVote} />}
          {currentPage === 'top10' && <Top10 />}
        </Grid>
      </Grid>
    </Grid>
  </>
  )
}

export default App
