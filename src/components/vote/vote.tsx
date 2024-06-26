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
                votes: user.votes || 0,
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
        <Grid container sx={{ margin: "2rem", display: "flex", flexDirection:"column", alignItems: "center"}}>
            <Grid item>
                <Typography variant="h4" gutterBottom style={{ marginBottom: "6rem" }}>Vote Agora</Typography>
            </Grid>
        
            <form>
                <Grid container spacing={6} sx={{ width:"100%" }}>
                    {usersWithPercent.length > 0 ? (
                        usersWithPercent.map((user, index) => (
                            <Grid
                                key={index}
                                xs={12} item
                                sx={{
                                    // backgroundColor:"#5a108f",
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    marginBottom: "1rem",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        transform: "scale(1.02)",
                                        boxShadow: "0 16px rgba(0,0,0, 0.2",
                                    }
                                }}>
                                <Typography 
                                    style={{ fontWeight: "bold" }}
                                >
                                {user.name}
                                </Typography>
                                <Typography style={{ color: "#757575"}}>{user.work}</Typography>
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
                                    style={{ 
                                        marginTop: "0.5rem", 
                                        height: "10px", 
                                        borderRadius: "8px", 
                                        backgroundColor: "#e0e0e0",
                                        // "& .MuiLinearProgress-bar": {
                                        //     backgroundColor: "#3f51b5",
                                        // },
                                    }}
                                />
                                <Typography variant="caption" style={{ display: "block", marginTop: "0.5rem" }}>
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
