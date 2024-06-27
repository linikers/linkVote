import { Button, Grid, LinearProgress, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IUser } from "../Register";

interface VoteProps {
    onOpenSnackBar: (message: string) => void;
    users: IUser[];
    setUsers: (users: IUser[]) => void;
}
export const Vote: FC<VoteProps> = ({ onOpenSnackBar, users, setUsers }) => {

    const [, setTotalVotes] = useState(0);
    const [usersWithPercent, setUsersWithPercent] = useState<IUser[]>([]);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            const parsedUsers = JSON.parse(storedUsers);
            const initializedUsers = parsedUsers.map((user: IUser) => ({
                ...user,
                votes: user.votes || 0,
                anatomy: user.anatomy || 0,
                creativity: user.creativity || 0,
                pigmentation: user.pigmentation || 0,
                traces: user.traces || 0,
                readability: user.readability || 0,
                visualImpact:  user.visualImpact || 0,
                totalScore: user.totalScore || 0,
            }));
            setUsers(initializedUsers);
        }
    }, []);

    const handleVote = (userName: string) => {
        const updatedUsers = users.map(user => {
            if(user.name === userName) {
                const totalScore = user.anatomy + user.creativity + user.pigmentation + user.traces + user.traces + user.readability + user.visualImpact
                return {...user, votes:user.votes + 1, totalScore}
            }
            return user;
        });
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        onOpenSnackBar(`Você votou em ${userName}`);
    };
    const handleInputChange = (userName: string, field: keyof IUser, value: number) => {
        const updatedUsers = users.map(user => {
            if(user.name === userName) {
                return {...user, [field]: value}
            }
            return user;
        });
        setUsers(updatedUsers)    
    }

    useEffect(() => {
        const total = users.reduce((total, user) => total + user.votes, 0);
        setTotalVotes(total);

        const updatedUsersWithPercent = users.map(user => ({
            ...user,
            percent: total > 0 ? ((user.votes / total) * 100) : 0,
        }));
        setUsersWithPercent(updatedUsersWithPercent);
    }, [users]);

    return (
        <Grid container 
            sx={{ 
                margin: "2rem", 
                display: "flex", 
                flexDirection:"column", 
                alignItems: "center", 
                maxWidth: "80%"
            }}
        >
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
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    backgroundColor:"#6c757d",
                                    padding: "1rem",
                                    borderRadius: "8px",
                                    marginBottom: "1rem",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    maxWidth: "800px",
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
                                
                                <TextField 
                                    label="Anatomia"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={user.anatomy}
                                    onChange={(e) => handleInputChange(user.name, "anatomy", Number(e.target.value))}
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Criatividade"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={user.creativity}
                                    onChange={(e) => handleInputChange(user.name, "creativity", Number(e.target.value))}
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Pigmanetação"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={user.pigmentation}
                                    onChange={(e) => handleInputChange(user.name, "pigmentation", Number(e.target.value))}
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Traços"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={user.traces}
                                    onChange={(e) => handleInputChange(user.name, "traces", Number(e.target.value))}
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Legibilidade"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={user.readability}
                                    onChange={(e) => handleInputChange(user.name, "readability", Number(e.target.value))}
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Impacto Visual"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={user.visualImpact}
                                    onChange={(e) => handleInputChange(user.name, "visualImpact", Number(e.target.value))}
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleVote(user.name)}
                                    style={{ marginTop: "0.5rem", backgroundColor: "#adb5bd", width: "6rem" }}
                                >
                                    Votar
                                </Button>
                                <LinearProgress
                                    variant="determinate"
                                    value={user.percent}
                                    sx={{ 
                                        backgroundColor: "#414141",
                                        marginTop: "0.5rem", 
                                        height: "10px", 
                                        borderRadius: "8px", 
                                        "& .MuiLinearProgress-bar": {
                                            backgroundColor: "#3f51b5",
                                        },
                                    }}
                                />
                                <Typography variant="caption" style={{ display: "block", marginTop: "0.5rem" }}>
                                    {user.votes} votos ({user.percent?.toFixed()} %)
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
