import { Button,  Typography } from "@material-ui/core"
import { Grid, LinearProgress } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { IUser } from "../Register"

export const Vote: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=> {
        const storedUsers = localStorage.getItem("users")
        if(storedUsers) {
            setUsers(JSON.parse(storedUsers))
        }
    }, [])
const handleVote = (userName: string) => {
    const updateUsers = users.map(user => user.name === userName ? {...user, votes: user.votes + 1} : user)
    setUsers(updateUsers)
    localStorage.setItem("users", JSON.stringify(updateUsers))
    alert(`Voce votou em ${userName}`)

}
const totalVotes = users.reduce((total, user) => total + user.votes, 0)
    return(
        <form>
        <Typography variant="h4">Vote Agora</Typography>
        <Grid>
            {users.length > 0 ? (
                users.map((user, index) => (

                    <Grid>
                        <Typography>{user.name}</Typography>
                        <Typography>{user.work}</Typography>
                        <Button variant="contained" color="primary" onClick={()=> handleVote(user.name)} style={{ marginTop: "0.5rem"}}>Votar</Button>
                        <LinearProgress 
                        variant="determinate"
                        value={totalVotes > 0 ? (user.votes / totalVotes) * 100 : 0}
                        style={{ marginTop: "0.5rem", height: "10px"}}
                        />
                        <Typography variant="caption">{user.votes} votos ({totalVotes > 0 ? ((user.votes / totalVotes) * 100).toFixed(2) : 0} %)</Typography>
                    </Grid>
                ))
                ) : (
                    <Typography variant="body1">Nenhum participante cadastrado</Typography>
                )
            }
        </Grid>
        </form>
    )
}