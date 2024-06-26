import { Alert, Snackbar } from "@mui/material"

interface ISnack {
    open: () => void;
    onClose: () => void;
    message: string;
    severity: string; 
}
export const SnackBarCustom = ({ open, onClose, message, severity }: ISnack) => {

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={onClose}> 
            <Alert onClose={onClose} severity={severity} sx={{ width: "100%"}}>
                {message}
            </Alert>
        </Snackbar>
    )
}