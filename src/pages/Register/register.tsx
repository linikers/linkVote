import { Button, FormControl, Grid, TextField } from "@material-ui/core";
import React, { FC, FormEvent, useState } from "react";
import { SnackBarCustom } from "../../components/Snackbar";
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
    onRegister: () => void
}
export const Register: FC<IRegisterProps> = ({onRegister}) => {
    console.log(uuidV4)
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
    })


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,  value } = e.target;
        setFormData({ 
            ...formData, 
            [name]: value,
            // [work]: value,
        })
    }
    const handleRegister = (e: FormEvent) => {
        e.preventDefault()

        try {
            const storedUsers = localStorage.getItem("users")
            const users: IUser[] = storedUsers ? JSON.parse(storedUsers) : []
            // users.push(formData)
            const userExists = users.some(user => user.name === formData.name)
            if(userExists) {
                // SnackBarCustom(`Esse competidor já foi cadastrado ${userName}`)
                return
            }
            const newUser = {
                ...formData,
                id: uuidV4(),
            }
            users.push(newUser)
            localStorage.setItem("users", JSON.stringify(users));
            // console.log(formData)
            SnackBarCustom({message: "Registrado com sucesso!", severity: "success"});
            setFormData({
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
                totalScore: 0
            });
            onRegister();
        } catch (error) {
            // console.error("erro ao salvar ", error)
            SnackBarCustom({message: "Erro ao salvar", severity: "error"})
        }
    }
    return (
    <form onSubmit={handleRegister}>
        <Grid container spacing={2}  >
            <FormControl fullWidth>

            <Grid item xs={12} style={{ margin: "1rem" }}>
                <TextField label="Nome" name="name" value={formData.name} color="secondary" onChange={handleInputChange}  fullWidth/>
            </Grid>
            <Grid item xs={12} style={{ margin: "1rem" }}>
                <TextField label="Estudio" name="work" value={formData.work} onChange={handleInputChange}/>
            </Grid>
            <Grid item style={{margin: "2rem"}}>
                <Button variant="contained" color="primary" type="submit">Salvar</Button>
            </Grid>
            </FormControl>
        </Grid>
    </form>
    )
}