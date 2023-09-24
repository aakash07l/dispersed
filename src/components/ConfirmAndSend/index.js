import { Container, Grid } from "@mui/material";
import ConfirmTable from "./ConfirmTable";

export default function ConfirmAndSend() {
    return (
        <Grid item xs={12}>
            <Container maxWidth="md" >
                <ConfirmTable />
            </Container>
        </Grid>
    )
}