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
    const handleRegister = (e: FormEvent) => {
        e.preventDefault()

        try {
            
 
            localStorage.setItem("dataUser", JSON.stringify(formData))
            console.log(formData)
            alert("Registrado com sucesso!")
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