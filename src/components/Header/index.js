import { useTheme } from "@emotion/react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from "react";
import { MUIContext } from "../../context/MUIContext";
import ConnectButton from "./ConnectButton";
import { useWeb3React } from "@web3-react/core";
import CurrentNetworkHeader from "./CurrentNetworkHeader";

export default function Header() {

  const theme = useTheme()
  const colorMode = React.useContext(MUIContext)
  const {active} = useWeb3React();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color="inherit" elevation={0}>
        <Toolbar>          
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexDirection: { xs: 'row', md: 'row' },
              justifyContent: { xs: "flex-end" },
              gap: { xs: 1, md: 1 },
              marginTop: { xs: 1, md: 0 },
              marginBottom: { xs: 1, md: 0 },
            }}
          >
            {active && <CurrentNetworkHeader />}
            <ConnectButton />
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}