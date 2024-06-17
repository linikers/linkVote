import { Button, FormControl, Grid, TextField } from "@material-ui/core"
import { FC, FormEvent, useState } from "react"

export const Register: FC = () => {

    const [formData, setFormData] = useState({name: "", work: "",})

    const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const { name, work } = e.target;
        try {
            
            setFormData({ 
                ...formData, 
                name: name.value,
                work: work.value,
            })
            localStorage.setItem("dataUser", JSON.stringify(formData))
            alert("Registrado com sucesso!")
        } catch (error) {
            console.error("erro ao salvar ", error)
            alert("Erro ao salvar")
        }
    }
    return (
    <Grid container spacing={2}>
        <FormControl>

        <Grid item xs={12}>
            <TextField label="Nome" value={name} onChange={handleRegister}  fullWidth/>
        </Grid>
        <Grid item xs={12}>
            {/* <TextField label="Estudio" value={work} onChange={handleRegister}/> */}
        </Grid>
        <Grid>
            {/* <Button variant="contained" color="primary" onClick={handleRegister}>Salvar</Button> */}
        </Grid>
        </FormControl>
    </Grid>
    )
}