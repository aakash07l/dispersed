import { Avatar,  Grid, Link, List, ListItem, ListItemAvatar, ListItemText,  Stack } from "@mui/material";
import React from "react";
import { AppContext } from "../../context/AppContext";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import CollectionsIcon from '@mui/icons-material/Collections';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { shortenAddress } from "../../utils/Web3Utils";
import { Container } from "@mui/system";
import info from "../../info.json"
import { useWeb3React } from "@web3-react/core";

export default function TokenInfo() {
    const { nftAddress,nftBalance, nftName, nftSymbol } = React.useContext(AppContext);
    const {chainId} = useWeb3React();

    return (
        <Container maxWidth={'md'}>
            <Grid item xs={12}>
                    <List component={Stack} direction="row" overflow={'auto'}>
                        <ListItem>
                            <ListItemAvatar>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CollectionsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemAvatar>
                            <ListItemText secondary={'Name'} primary={nftName} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <ListItemAvatar>
                                    <Avatar>
                                        <BeenhereIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemAvatar>
                            <ListItemText secondary={'Symbol'} primary={nftSymbol} />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AlternateEmailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemAvatar>
                            <ListItemText 
                                secondary={'Address'} 
                                primary={<Link href={`${info.networkInfo[chainId].blockExplorer}address/${nftAddress}`} target={'_blank'}>{shortenAddress(nftAddress)}</Link>} 
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AccountBalanceWalletIcon />
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemAvatar>
                            <ListItemText secondary={'Your balance'} primary={nftBalance} />
                        </ListItem>
                    </List>
            </Grid>
        </Container>
    )
}