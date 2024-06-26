import { Alert, AlertColor, Snackbar } from "@mui/material"

interface ISnack {
    open: boolean;
    onClose: () => void;
    message: string;
    severity: AlertColor; 
}
export const SnackBarCustom = ({ open, onClose, message, severity ='success' }: ISnack) => {

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={onClose}> 
            <Alert onClose={onClose} severity={severity} sx={{ width: "100%"}}>
                {message}
            </Alert>
        </Snackbar>
    )
}