import { Avatar, Box, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core"
import info from "../../info.json";

export default function CurrentNetworkHeader(){
    const {chainId} = useWeb3React();
    return(
        <Box  sx={{p:"0.2rem",display:"flex",alignItems:"center", justifyContent:"center", gap:1}}>
            <Avatar  src={info.networkInfo[chainId].logo} variant="rounded" width={32} height={32} /> 
            <Typography variant="overline" >{info.networkInfo[chainId].name}</Typography>
        </Box>
    )
}