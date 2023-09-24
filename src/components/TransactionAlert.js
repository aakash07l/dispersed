import { Alert, IconButton, Link, Snackbar } from "@mui/material";
import React from "react";
import { AppContext } from "../context/AppContext";
import { useWeb3React } from "@web3-react/core";
import info from "../info.json";
import CloseIcon from '@mui/icons-material/Close';


export default function TransactionAlert() {
    const { hash, handleTransacting , handleHash } = React.useContext(AppContext);
    const [open, setOpen] = React.useState(false);
    const {chainId} = useWeb3React();
    
    React.useEffect(()=>{
        setOpen(Boolean(hash))
    },[hash]);

    const onClose = (event, reason) => {
        if (reason === 'clickaway') return
        handleTransacting(false);
        handleHash("");
    }
    
    return (
        <Snackbar open={open} autoHideDuration={30000} onClose={onClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
            <Alert severity="success"  action={<IconButton onClick={onClose}><CloseIcon /></IconButton>}>
                Your transaction is being processed. Check on <Link href={chainId && `${info.networkInfo[chainId].blockExplorer}tx/${hash}`} target={"_blank"} color={"inherit"}>block explorer</Link>
            </Alert>
        </Snackbar>
    )
}