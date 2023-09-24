import { Avatar, Button, Container, Tooltip, Typography } from "@mui/material"
import { Box } from "@mui/system";
import { useWeb3React } from "@web3-react/core"
import React from "react";
import { AppContext } from "../context/AppContext";
import { injected } from "../context/connectors";
import info from "../info.json";

export default function Hero() {
    const { active, activate } = useWeb3React();
    const { handleError } = React.useContext(AppContext);
    const onClick = async (e) => {
        e.preventDefault();

        try {
            await activate(injected, null, true);
        } catch (error) {
            console.error(error);
            handleError(error.message);
        }
    };
    return (
        <Container disableGutters maxWidth="sm" component="div" sx={{ pt: 8, pb: 1 }}>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
            >
                Disperse721
            </Typography>
            <Typography variant="h5" color="text.secondary" component="p" align="center">
                Are you tired of sending your NFT tokens one by one?
                Do you want to do an NFT airdrop like disperse app does for ERC20 tokens? <br />
                With this app you will be able to paste a list of addresses and tokens and send all of them in one transaction.
            </Typography>
            <Typography variant="h6" color="rebeccapurple" component={"p"} align="center">
                Available on:
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
                {
                    info.ALLOWED_CHAINS.filter(chain => !info.networkInfo[chain].testnet).map(chain => (
                        <Tooltip key={chain} title={info.networkInfo[chain].name}>
                            <Avatar src={info.networkInfo[chain].logo} variant="rounded" width={32} height={32} />
                        </Tooltip>
                    ))
                }
            </Box>
            {!active &&
                <Button sx={{ mt: 2, p: 4 }} fullWidth variant={'outlined'} color={'secondary'} onClick={onClick}>
                    Connect your wallet
                </Button>
            }
        </Container>
    )
}
