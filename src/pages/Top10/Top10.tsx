import { Box, Grid, Paper, Typography } from "@mui/material"
import { IUser } from "../Register"
import { FC } from "react"

interface Top10Props {
    users: IUser[]
}
export const Top10:FC<Top10Props> = ({ users }) => {

    const sortedUsers = [...users].sort((a,b) => b.totalScore - a.totalScore).slice(0, 100)

    return (
        <Grid container spacing={2} sx={{ margin: "3rem", marginTop: "6rem" }}>
            <Grid xs={12}>
            <Typography gutterBottom variant="h4">Top 100</Typography>
            </Grid>
            {sortedUsers.map((user, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <Paper sx={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"}}>
                        <Box sx={{ textAlign: "center", marginBottom: "1rem"}}>
                            <Typography variant="h6" sx={{ fontWeight: "bold"}}>{index + 1}. {user.name}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1">Anatomia: {user.anatomy}</Typography>
                            <Typography variant="body1">Criatividade: {user.creativity}</Typography>
                            <Typography variant="body1">Pigmentação: {user.pigmentation}</Typography>
                            <Typography variant="body1">Traços: {user.traces}</Typography>
                            <Typography variant="body1">Legibilidade: {user.readability}</Typography>
                            <Typography variant="body1">Impacto Visual: {user.visualImpact}</Typography>
                            <Typography variant="body2">Nota Geral: {user.totalScore}</Typography>
                        </Box>
                    </Paper>
                 

                </Grid>
            ))}
        </Grid>
    )
}