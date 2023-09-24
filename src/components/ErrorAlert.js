import { Alert, IconButton, Snackbar } from "@mui/material";
import React from "react";
import { AppContext } from "../context/AppContext";
import CloseIcon from '@mui/icons-material/Close';


export default function ErrorAlert() {
    const { error, handleError } = React.useContext(AppContext);
    const [open, setOpen] = React.useState();
    
    React.useEffect(()=>{
        setOpen(Boolean(error));
    },[error])

    const onClose = (event, reason) => {
        if (reason === 'clickaway') return
        setOpen(false);
        handleError();
    }

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
            <Alert severity="error" action={<IconButton onClick={onClose}><CloseIcon /></IconButton>} >
                {error}
            </Alert>
        </Snackbar>
    )
}