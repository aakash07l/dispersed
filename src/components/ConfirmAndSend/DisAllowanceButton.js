import React from "react";
import { ethers } from "ethers";
import ERC721 from '../../abi/ERC721.json';
import { Button, Tooltip, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { AppContext } from "../../context/AppContext";
import { Box } from "@mui/system";

export default function DisAllowanceButton() {

    const {library} = useWeb3React();
    const { nftAddress ,nftAllowance, updateAllowance, handleError, SENDER_ADDRESS, handleTransacting,handleHash} = React.useContext(AppContext);

    const [disabled, setDisabled] = React.useState(null);

    React.useEffect(()=>{
        setDisabled(!nftAllowance); // allowance true = disabled false
    },[nftAllowance])

    const onClick = async (e) => {        
        //create a new nft contract instance
        const contract = new ethers.Contract(nftAddress, ERC721, library.getSigner());
        try{
            // send the tx
            handleTransacting(true);
            let tx = await contract.setApprovalForAll(SENDER_ADDRESS, false);
            handleHash(tx.hash);
            // process the receipt
            let receipt = await tx.wait();
            console.log(receipt);
            updateAllowance(false);
            handleTransacting(false);
        }
        catch(err){
            console.log(err);
            if(err.code === 4001){                
                handleError('user denied tx...');
            }
            handleError(err.message);
            handleTransacting(false);
        }
    }
    return (
        <Tooltip title={
            <Typography variant={"caption"} color="inherit">Remove permission to transfer your tokens</Typography>
        }>
            <Box>
                <Button 
                    fullWidth 
                    variant="outlined" 
                    color="error"
                    onClick={onClick}
                    disabled={disabled}
                    >
                    Remove allowance
                </Button>
            </Box>
        </Tooltip>
    )
}