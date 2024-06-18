import { Button, FormControl, Grid, TextField } from "@material-ui/core"
import React, { FC, FormEvent, useState } from "react"

export const Register: FC = () => {

    const [formData, setFormData] = useState({name: "", work: "",})


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,  value } = e.target;
        setFormData({ 
            ...formData, 
            [name]: value,
            // [work]: value,
        })
    }
    const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        try {
            
 
            localStorage.setItem("dataUser", JSON.stringify(formData))
            alert("Registrado com sucesso!")
        } catch (error) {
            console.error("erro ao salvar ", error)
            alert("Erro ao salvar")
        }
    }
    return (
    <Grid container spacing={2}  onSubmit={handleRegister}>
        <FormControl fullWidth>

        <Grid item xs={12} >
            <TextField label="Nome" value={formData.name} color="secondary" onChange={handleInputChange}  fullWidth/>
        </Grid>
        <Grid item xs={12}>
            <TextField label="Estudio" value={formData.work} onChange={handleRegister}/>
        </Grid>
        <Grid>
            <Button variant="contained" color="primary" type="submit">Salvar</Button>
        </Grid>
        </FormControl>
    </Grid>
    )
}