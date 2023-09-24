import {Grid, Container } from "@mui/material";
import TextAreaInput from "./TextAreaInputs";

export default function AddressTextArea() {
  return (
    <Container maxWidth="md">
      <Grid item xs={12} sx={{ mt:2,mb: 2 }}>
        <TextAreaInput />
      </Grid>
    </Container>
  )
}