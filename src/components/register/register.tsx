import { Button, FormControl, Grid, TextField } from "@material-ui/core"
import React, { FC, FormEvent, useState } from "react"

export interface IUser {
    name: string;
    work: string;
    votes: number;
    percent: number;
}
interface IRegisterProps {
    onRegister: () => void
}
export const Register: FC<IRegisterProps> = ({onRegister}) => {

    const [formData, setFormData] = useState({name: "", work: "", votes: 0})


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
            const users = storedUsers ? JSON.parse(storedUsers) : []
            users.push(formData)
            localStorage.setItem("users", JSON.stringify(users))
            console.log(formData)
            alert("Registrado com sucesso!")
            setFormData({ name: "", work: "", votes: 0})
            onRegister()
        } catch (error) {
            console.error("erro ao salvar ", error)
            alert("Erro ao salvar")
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