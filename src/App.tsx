import { useState } from 'react'
// import './App.css'
import { Button, Grid} from '@material-ui/core'
import { Header } from './components/header'
import { Vote } from './pages/vote/vote'
import { IUser, Register } from './pages/Register'
import { Top10 } from './pages/Top10'
import { SnackBarCustom } from './components/Snackbar'

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentPage, setCurrentPage] = useState('home')
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [, setSnackBarOpen] = useState(false);

  const handleNavigateVote = () => {
    setCurrentPage('vote')
  }
  const handleNavigateRegister = () => {
    setCurrentPage('register')
  }
  const handleNavigateTop10 = () => {
    setCurrentPage('top10')
  }

  const handleOpenSnackBar = (message: string) => {
    setSnackBarMessage(message)
    setSnackBarOpen(true);
  }
  
  return (
    <>
    <Grid container 
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center" ,
        margin: "1rem", 
      }}
    >
      <Grid item>
        <Header />
      </Grid>
      <Grid item 
        style={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "center" ,
          justifyContent: "center",
        }}
      >
        <Button color= 'secondary' onClick={handleNavigateVote}>Vote Agora</Button>
        <Button color= 'secondary' onClick={handleNavigateRegister}>Registre o participante</Button>
        <Button color= 'secondary' onClick={handleNavigateTop10}>Classificação Geral</Button>
      </Grid>
        <Grid item xs={12} style={{ 
          display: "flex", justifyContent: "center" }}>
          {currentPage === 'vote' && 
            <Vote onOpenSnackBar={handleOpenSnackBar} users={users} setUsers={setUsers} />}
          {currentPage === 'register' && <Register onRegister={handleNavigateVote} />}
          {currentPage === 'top10' && <Top10  users={users}/>}
        </Grid>
    </Grid>
    <SnackBarCustom 
      message={snackBarMessage}
      severity="success"
    />
  </>
  )
}

export default App
