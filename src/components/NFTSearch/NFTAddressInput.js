import React from "react";
import { ethers } from "ethers"
import { Container, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import { getBalanceOf, getNFTData, isApprovedForAll, isERC721 } from "../../utils/ERC721utils";
import { useWeb3React } from "@web3-react/core";
import { AppContext } from "../../context/AppContext";
import { Box } from "@mui/system";


export default function NFTAddressInput() {
    const [value, setValue] = React.useState("");
    const { account, library } = useWeb3React()
    const { assignNftData , handleError , SENDER_ADDRESS} = React.useContext(AppContext);

    const onClick = async (e) => {
        if (ethers.utils.isAddress(value)) {            
            let isNft = await isERC721(value, library);
            if (isNft) {
                let { name, symbol } = await getNFTData(value, library);
                let nftAddress = value;
                let userBalance = await getBalanceOf(nftAddress, account, library);
                let allowance = await isApprovedForAll(nftAddress, account, SENDER_ADDRESS, library);
                assignNftData(value, name, symbol, userBalance, allowance);
            }
            else {
                handleError("Not an ERC721 contract");
                assignNftData();
            }
        }
        else {
            handleError("Not a valid address");
            assignNftData();
        }
    }
    return (
        <Container maxWidth={'sm'}>
        <Box sx={{display:'flex',justifyContent:"center"}}>        
                <TextField                       
                    type="text"
                    autoComplete="off"
                    color="secondary"
                    name="nftAddress"
                    placeholder=""
                    fullWidth
                    label={'Search for a ERC721 contract address'}                    
                    value={value}                    
                    onChange={(e) => setValue(e.target.value)}
                />
                <IconButton onClick={onClick}>
                    <SearchIcon fontSize="large" />
                </IconButton>
        </Box>        
        </Container>

    )
}