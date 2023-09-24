import { Box, Container, Link } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer(){
    return(
        <Container sx={{marginTop:20, display:"flex",justifyContent:"center" , flexDirection:"column", alignItems:"center", gap:1}}>
        <Box sx={{display:"flex", gap:1, alignItems:'center'}}>
            <Link href="https://github.com/ismaventuras" target="_blank" color="inherit">
                <GitHubIcon color='inherit' fontSize="large"/>
            </Link>                                
        </Box>
        </Container>  
    )
}