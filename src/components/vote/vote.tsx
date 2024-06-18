import { Typography } from "@material-ui/core"
import { FC, useEffect, useState } from "react"

export const Vote: FC = () => {
    const [users, setUsers] = useState([])

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
            
        </Grid>
        </form>
    )
}