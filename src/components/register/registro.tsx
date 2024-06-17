import { Button, TextField, Typography } from "@material-ui/core"
import { FC, FormEvent, useState } from "react"

export const Registro: FC () => {

    const [name, setName] = useState()

    const handleRegister = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={handleRegister}>
        <Typography>Nome</Typography>
        <TextField label="Nome" onChange={}></TextField>
<Button>Cadastrar</Button>
        </form>
    )
}