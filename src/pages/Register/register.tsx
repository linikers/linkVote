import { Button, FormControl, Grid, TextField } from "@material-ui/core";
import React, { FC, FormEvent, useState } from "react";
// import { SnackBarCustom } from "../../components/Snackbar";
import { v4 as uuidV4 } from "uuid";

export interface IUser {
    id: string;
    name: string;
    work: string;
    votes: number;
    percent?: number;
    anatomy: number;
    creativity: number;
    pigmentation: number;
    traces: number;
    readability: number;
    visualImpact: number;
    totalScore: number;
}

interface IRegisterProps {
    onRegister: () => void;
}

export const Register: FC<IRegisterProps> = ({ onRegister }) => {
    
    const [, setSnackbarOpen] = useState(false);
    const [ , setSnackbarMessage] = useState("");
    const [ , setSnackbarSeverity] = useState<"success" | "error" | "warning" | "info">("success");
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        work: "",
        votes: 0,
        percent: 0,
        anatomy: 0,
        creativity: 0,
        pigmentation: 0,
        traces: 0,
        readability: 0,
        visualImpact: 0,
        totalScore: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
      
        try {
          const response = await fetch('/api/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ key: "users", value: formData }),
          });
      
          if (!response.ok) {
            const error = await response.json();
            setSnackbarMessage(`Erro ao salvar: ${error.message}`);
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            return; 
          }
      
          const savedUsers: IUser[] = await response.json(); 
      
          const userExists = savedUsers.some((user) => user.name === formData.name);
          if (userExists) {
            setSnackbarMessage(`Esse competidor já foi cadastrado ${formData.name}`);
            setSnackbarSeverity("warning");
            setSnackbarOpen(true);
            return;
          }
      
          const newUser = {
            ...formData,
            id: uuidV4(),
          };
      
          setFormData((prevState) => ({
            ...prevState,
            users: [...savedUsers, newUser]
        }));
      
          setSnackbarMessage("Registrado com sucesso!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          onRegister(); 
      
        } catch (error) {
          setSnackbarMessage("Erro ao salvar");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      };
      

    return (
        <form onSubmit={handleRegister}>
            <Grid container spacing={2}>
                <FormControl fullWidth>
                    <Grid item xs={12} style={{ margin: "1rem" }}>
                        <TextField label="Nome" name="name" value={formData.name} color="secondary" onChange={handleInputChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} style={{ margin: "1rem" }}>
                        <TextField label="Estudio" name="work" value={formData.work} onChange={handleInputChange} />
                    </Grid>
                    <Grid item style={{ margin: "2rem" }}>
                        <Button variant="contained" color="primary" type="submit">
                            Salvar
                        </Button>
                    </Grid>
                </FormControl>
            </Grid>
            {/* <SnackBarCustom message={snackbar.message} severity={snackbar.severity} /> */}
        </form>
    );
};
