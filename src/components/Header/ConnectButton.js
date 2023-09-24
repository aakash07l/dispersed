import { Button } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import {shortenAddress} from "../../utils/Web3Utils";
import {injected} from "../../context/connectors";
import { AppContext } from "../../context/AppContext";
import React from "react";

export default function ConnectButton() {

  const {active, activate, account} = useWeb3React();
  const {handleError} = React.useContext(AppContext);
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
      <Button color="inherit" variant="text" onClick={onClick}>
        {active && account ? shortenAddress(account) : "Connect wallet"}
      </Button>            
  )
}