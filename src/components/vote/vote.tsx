import { Button, Typography } from "@material-ui/core"
import { Grid } from "@mui/material"
import { FC, useEffect, useState } from "react"

export const Vote: FC = () => {
    const [users, setUsers] = useState<{ name: string; work: string}[]>([])

    useEffect(()=> {
        const storedUsers = localStorage.getItem("formData")
        if(storedUsers) {
            setUsers(JSON.parse(storedUsers))
        }
    }, [])
const handleVote = (userName: string) => {
    alert(`Voce votou em ${userName}`)
}
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