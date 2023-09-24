import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AppContext } from "../../context/AppContext";
import AllowanceButton from "./AllowanceButton";
import DisAllowanceButton from "./DisAllowanceButton";
import SendTokensButton from "./SendTokensButton";

export default function ConfirmTable() {
    const {addressRows, nftAllowance} = React.useContext(AppContext);

    return (
            <Grid container sx={{ mb: 2 }} spacing={2}>
                <Grid item xs={6} align="center">
                    <Typography  align="center" variant="subtitle2">Total: {addressRows.length}</Typography>                    
                </Grid>
                <Grid item xs={6} align="center">
                    <Typography align="center" variant="subtitle2">Allowance: 
                        <Typography color={nftAllowance ? 'green' : 'error' } textTransform={"uppercase"} component={"span"} variant={"subtitle2"}> {nftAllowance ? "Allowed" : "Not Allowed"}</Typography>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <TableContainer sx={{ maxHeight: "300px" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Index</TableCell>
                                    <TableCell align="center">Address</TableCell>
                                    <TableCell align="center">TokenId</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {addressRows.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{index}</TableCell>
                                        <TableCell align="center">{item.address}</TableCell>
                                        <TableCell align="center">{item.tokenId}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Box sx={{display:"flex",flexWrap:"wrap", flexDirection:"column", gap:2}}>
                        <DisAllowanceButton />
                        <AllowanceButton />
                        <SendTokensButton />
                    </Box>
                </Grid>
            </Grid>
    )
}