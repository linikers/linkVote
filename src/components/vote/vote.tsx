import { Button, Typography } from "@material-ui/core";
import { Grid, LinearProgress } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IUser } from "../Register";

export const Vote: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [totalVotes, setTotalVotes] = useState(0);
    const [usersWithPercent, setUsersWithPercent] = useState<IUser[]>([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            const parsedUsers = JSON.parse(storedUsers);
            const initializedUsers = parsedUsers.map((user: IUser) => ({
                ...user,
                votes: user.votes || 0, // Garantir que todos os usuários tenham o campo 'votes' inicializado
            }));
            setUsers(initializedUsers);
        }
    }, []);

    const handleVote = (userName: string) => {
        const updatedUsers = users.map(
            user => user.name === userName ? { ...user, votes: user.votes + 1 } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        alert(`Você votou em ${userName}`);
    };

    useEffect(() => {
        const total = users.reduce((total, user) => total + user.votes, 0);
        setTotalVotes(total);
        console.log(total);

        const updatedUsersWithPercent = users.map(user => ({
            ...user,
            percent: total > 0 ? ((user.votes / total) * 100) : 0,
        }));
        setUsersWithPercent(updatedUsersWithPercent);
    }, [users]);

    return (
        <Grid container sx={{ margin: "1rem"}}>
            <Typography variant="h4" gutterBottom>Vote Agora</Typography>
        
            <form>
                <Grid container spacing={6}>
                    {usersWithPercent.length > 0 ? (
                        usersWithPercent.map((user, index) => (
                            <Grid
                                key={index}
                                xs={12} item
                                sx={{
                                    padding: "1rem",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    marginBottom: "1rem",
                                }}>
                                <Typography>{user.name}</Typography>
                                <Typography>{user.work}</Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleVote(user.name)}
                                    style={{ marginTop: "0.5rem" }}
                                >
                                    Votar
                                </Button>
                                <LinearProgress
                                    variant="determinate"
                                    value={user.percent}
                                    style={{ marginTop: "0.5rem", height: "10px", borderRadius: "5px" }}
                                />
                                <Typography variant="caption">
                                    {user.votes} votos ({user.percent.toFixed(2)} %)
                                </Typography>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="body1">Nenhum participante cadastrado</Typography>
                    )}
                </Grid>
            </form>
        </Grid>
    );
};
