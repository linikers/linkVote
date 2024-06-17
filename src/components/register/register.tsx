import { Button, Grid, TextField } from "@material-ui/core"
import { FC, FormEvent, useState } from "react"

export const Register: FC = () => {

    const [name, setName] = useState()

    const handleRegister = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
    <Grid container>
        <Grid item>
            <TextField label="Nome" />
        </Grid>
        <Grid item>
            <TextField label="Estudio" />
        </Grid>
        <Grid>
            <Button>Salvar</Button>
        </Grid>
    </Grid>
    )
}