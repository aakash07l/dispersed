import { Container, Grid} from "@mui/material";
import NFTAddressInput from "./NFTAddressInput";

export default function NFTSearch() {
    return (
      <Grid item xs={12} sx={{  }}>
        <Container sx={{ pb:3 }}>
          {/* <Typography 
            mb={2} 
            component="h3"
            variant='h4'
            color="text.primary"
            align='center'
          >
            Paste the contract address
          </Typography> */}
          <NFTAddressInput  />
        </Container>
      </Grid>
    )
  }