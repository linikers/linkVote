import { Button, Grid, LinearProgress, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IUser } from "../Register";
import { useFormik } from "formik";
import * as yup from "yup";


const schema = yup.object({
    name: yup.string().required("Campo obrigatório"),
    anatomy: yup
        .number()
        .min(0, "nota mínima é 0")
        .max(10, " Nota máxima é 10")
        .required("Campo obrigatório"),
    creativity: yup
        .number()
        .min(0, "nota mínima é 0")
        .max(10, " Nota máxima é 10")
        .required("Campo obrigatório"),
    pigmentation: yup
        .number()
        .min(0, "nota mínima é 0")
        .max(10, " Nota máxima é 10")
        .required("Campo obrigatório"),
    traces: yup
        .number()
        .min(0, "nota mínima é 0")
        .max(10, " Nota máxima é 10")
        .required("Campo obrigatório"),
    readability: yup
        .number()
        .min(0, "nota mínima é 0")
        .max(10, " Nota máxima é 10")
        .required("Campo obrigatório"),
    visualImpact: yup
        .number()
        .min(0, "nota mínima é 0")
        .max(10, " Nota máxima é 10")
        .required("Campo obrigatório"),
});

interface VoteProps {
    onOpenSnackBar: (message: string) => void;
    users: IUser[];
    setUsers: (users: IUser[]) => void;
}

export const Vote: FC<VoteProps> = ({ onOpenSnackBar, users, setUsers }) => {
    const [, setTotalVotes] = useState(0);
    const [ , setUsersWithPercent] = useState<IUser[]>([]);
    
    const [dataBlobs, setDataBlobs] = useState<IUser[]>([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const timeout = 5000; 
            const controller = new AbortController();
            const signal = controller.signal;
          
            const timer = setTimeout(() => {
              controller.abort();
              console.error('Solicitação expirada');
            }, timeout);
          
            try {
              const response = await fetch('/api/list', { signal });
              // ... lidar com a resposta bem-sucedida
            } catch (error: any) {
              if (error.name === 'AbortError') {
                console.error('Solicitação abortada devido ao tempo limite');
                // Lidar com o erro de tempo limite com elegância (por exemplo, exibir mensagem para o usuário)
              } else {
                // Lidar com outros erros
              }
            } finally {
              clearTimeout(timer);
            }
          };
    
        fetchData();
    }, []);
    
    
    

    const handleVote = async (userName: string) => {
        const votedUsers = JSON.parse(localStorage.getItem('votedUsers') || '[]');
    
        if (votedUsers.includes(userName)) {
            onOpenSnackBar(`Você já votou em ${userName}`);
            return;
        }
    
        const updatedUsers = users.map(user => {
            if (user.name === userName) {
                const totalScore = user.anatomy + user.creativity + user.pigmentation + user.traces + user.readability + user.visualImpact;
                return { ...user, votes: user.votes + 1, totalScore };
            }
            return user;
        });
    
        setUsers(updatedUsers);
        
        await fetch('/api/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: `competidores/users-${userName}.json`, value: updatedUsers.find(user => user.name === userName) }),
        });
    
        localStorage.setItem('votedUsers', JSON.stringify([...votedUsers, userName]));
    
        onOpenSnackBar(`Você votou em ${userName}`);
    };
    
    

    const formik = useFormik({
        initialValues: {
            name: '',
            anatomy: 0,
            creativity: 0,
            pigmentation: 0,
            traces: 0,
            readability: 0,
            visualImpact: 0,
        },
        validationSchema: schema,
        onSubmit: async (values, {resetForm}) => {
            const updatedUsers = users.map((user) => {
                if(user.name === values.name) {
                    return { ...user, ...values };
                }
                return user;
            });
            setUsers(updatedUsers);

            await fetch('/api/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ key: 'votes', value: updatedUsers }),
            });

            onOpenSnackBar(`Você votou em ${values.name}`);
            resetForm();
        },
    });

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
                minWidth: "320px",
            }}
        >
            <Grid item>
                <Typography variant="h4" gutterBottom style={{ marginBottom: "6rem" }}>Vote Agora</Typography>
            </Grid>
        
            <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} sx={{ width:"100%" }}>
                    {dataBlobs.length > 0 ? (
                        dataBlobs.map((user, index) => (
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
                                    minWidth: "320px",
                                    "&:hover": {
                                        transform: "scale(1.02)",
                                        boxShadow: "0 16px rgba(0,0,0, 0.2",
                                    }
                                }}>
                                <Typography 
                                    style={{ fontWeight: "bold" }}
                                >
                                {/* {console.log(user)} */}
                                {user.name}
                                </Typography>
                                <Typography style={{ color: "#757575"}}>{user.work}</Typography>
                                
                                <TextField 
                                    label="Anatomia"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={formik.values.anatomy}
                                    onChange={formik.handleChange}
                                    error={formik.touched.anatomy && Boolean(formik.errors.anatomy)}
                                    helperText={formik.touched.anatomy && formik.errors.anatomy}
                                    name="anatomy"
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Criatividade"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={formik.values.creativity}
                                    onChange={formik.handleChange}
                                    error={formik.touched.creativity && Boolean(formik.errors.creativity)}
                                    helperText={formik.touched.creativity && formik.errors.creativity}
                                    name="creativity"
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Pigmanetação"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={formik.values.pigmentation}
                                    onChange={formik.handleChange}
                                    error={formik.touched.pigmentation && Boolean(formik.errors.pigmentation)}
                                    helperText={formik.touched.pigmentation && formik.errors.pigmentation}
                                    name="pigmentation"
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Traços"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={formik.values.traces}
                                    onChange={formik.handleChange}
                                    error={formik.touched.traces && Boolean(formik.errors.traces)}
                                    helperText={formik.touched.traces && formik.errors.traces}
                                    name="traces"
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Legibilidade"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={formik.values.readability}
                                    onChange={formik.handleChange}
                                    error={formik.touched.readability && Boolean(formik.errors.readability)}
                                    helperText={formik.touched.readability && formik.errors.readability}
                                    name="readability"
                                    style={{ marginBottom: "0.5rem" }}
                                    fullWidth
                                />
                                <TextField 
                                    label="Impacto Visual"
                                    type="number"
                                    inputProps={{min:0, max: 10}}
                                    value={formik.values.visualImpact}
                                    onChange={formik.handleChange}
                                    error={formik.touched.visualImpact && Boolean(formik.errors.visualImpact)}
                                    helperText={formik.touched.visualImpact && formik.errors.visualImpact}
                                    name="visualImpact"
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
