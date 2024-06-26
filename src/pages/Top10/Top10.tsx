import { Grid, Typography } from "@mui/material"
import { IUser } from "../Register"
import { FC } from "react"

interface Top10Props {
    users: IUser[]
}
export const Top10:FC<Top10Props> = ({ users }) => {

    const sortedUsers = [...users].sort((a,b) => b.totalScore - a.totalScore).slice(0, 100)

    return (
        <Grid container>
            <Grid>

            <Typography>Top 100</Typography>
            </Grid>
            {sortedUsers.map((user, index) => (
                <Grid item xs={12} key={index}>
                    <Typography variant="h6">{index + 1}. {user.name}</Typography>
                    <Typography variant="body1">Anatomia: {user.anatomy}</Typography>
                    <Typography variant="body1">Criatividade: {user.creativity}</Typography>
                    <Typography variant="body1">Pigmentação: {user.pigmentation}</Typography>
                    <Typography variant="body1">Traços: {user.traces}</Typography>
                    <Typography variant="body1">Legibilidade: {user.readability}</Typography>
                    <Typography variant="body1">Impacto Visual: {user.visualImpact}</Typography>
                    <Typography variant="body1">Nota Total: {user.totalScore}</Typography>
                </Grid>
            ))}
        </Grid>
    )
}