import { useState } from "react";
import { Header } from "../components/header";
import { SnackBarCustom } from "../components/Snackbar";
import Top10 from "./Top10/Top10.tsx";
import Register, { IUser } from "./Register/Register.tsx";
import Vote from "./vote/Vote.tsx";
import { Button, Grid } from "@mui/material";

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
          width: "100%", 
          boxSizing: "border-box",
        }}
      >
        <Grid item style={{ width: "100%", maxWidth: "1200px" }}>
          <Header />
        </Grid>
        <Grid item 
          style={{ 
            display: "flex", 
            flexDirection: "row", 
            alignItems: "center" ,
            justifyContent: "center",
            width: "100%",        }}
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
            {currentPage === 'top10' && <Top10 />}
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
  