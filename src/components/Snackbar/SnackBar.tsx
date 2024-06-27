import { Alert, AlertColor, Snackbar } from "@mui/material"
import { useEffect, useState } from "react";

interface ISnack {
    message?: string;
    severity: AlertColor; 
}

export const SnackBarCustom = ({ message, severity ='success' }: ISnack) => {
    const [open, setOpen] = useState(false)

    useEffect(()=> {
        if(message) {
            setOpen(true)
        }
    },[message])

    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}> 
            <Alert onClose={handleClose} severity={severity} sx={{ width: "100%"}}>
                {message}
            </Alert>
        </Snackbar>
    )
}