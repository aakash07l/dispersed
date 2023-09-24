import React from "react";
import { ethers } from "ethers";
import ERC721 from '../../abi/ERC721.json';
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { AppContext } from "../../context/AppContext";

export default function AllowanceButton() {
    const {library} = useWeb3React();
    const { SENDER_ADDRESS,nftAddress , updateAllowance, handleError, handleHash, handleTransacting, nftAllowance} = React.useContext(AppContext);

    const [disabled, setDisabled] = React.useState(null);

    React.useEffect(()=>{
        setDisabled(nftAllowance);
    },[nftAllowance])

    const onClick = async (e) => {
        try{
            //create a new nft contract instance
            const contract = new ethers.Contract(nftAddress, ERC721, library.getSigner());        
            // send the tx
            handleTransacting(true);
            let tx = await contract.setApprovalForAll(SENDER_ADDRESS, true);            
            handleHash(tx.hash);
            // process the receipt
            let receipt = await tx.wait();
            console.log(receipt);
            updateAllowance(true);
            handleTransacting(false);
        }catch(error){            
            console.log(error);
            handleTransacting(false);
            handleError(error.message);
        }
        
    }
    return (
        <Tooltip title={
            <Typography variant={"caption"} color="inherit">Allow the smart contract to transfer your tokens</Typography>
        }>
            <Box>
                <Button
                    fullWidth 
                    variant="outlined" 
                    onClick={onClick}
                    color={"success"}
                    disabled={disabled}
                    >
                    Allow tokens
                </Button>
            </Box>
        </Tooltip>
    )
}