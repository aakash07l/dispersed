import React from "react";
import { ethers } from "ethers";
import ERC721Sender from "../../abi/ERC721Sender.json"
import { Button,  } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { AppContext } from "../../context/AppContext";

export default function SendTokensButton( ) {
    
    const {library} = useWeb3React();
    const { nftAddress , addressRows, handleError, handleTransacting, SENDER_ADDRESS,nftAllowance} = React.useContext(AppContext);
    const [disabled, setDisabled] = React.useState(null);

    React.useEffect(()=>{
        setDisabled(!nftAllowance);
    },[nftAllowance])


    const onClick = async (e) => {
        // format addreses
        let addressList = []
        let tokenIdList = []
        for (let item of addressRows) {
            addressList.push(item.address)
            tokenIdList.push(item.tokenId);
        }
        try {
            const contract = new ethers.Contract(SENDER_ADDRESS, ERC721Sender, library.getSigner());
            handleTransacting(true);
            let tx = await contract.sendERC721(nftAddress, addressList, tokenIdList);
            console.log(tx);
            // process the receipt
            let receipt = await tx.wait();
            console.log(receipt);
            handleTransacting(false);
        } catch (err) {
            handleTransacting(false);
            console.log(err)
            if(err.error && err.error.code === -32603){
                handleError(err.error.data.message);
            }else{
                handleError(err.message);
            }
            
        }
    }

    return (
        <Button size="large" variant="outlined" color="secondary" onClick={onClick} disabled={disabled}>
            send tokens
        </Button>
    )
}