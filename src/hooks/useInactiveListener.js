import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { injected } from "../context/connectors";

export function useInactiveListener(suppress = false) {
    const { active, error, activate } = useWeb3React()
  
    useEffect(() => {
      const { ethereum } = window
      if (ethereum && ethereum.on && !active && !error && !suppress) {
        const handleConnect = () => {
          console.log("Handling 'connect' event")
          console.log("???")
          activate(injected)
        }
        const handleChainChanged = (chainId) => {
          console.log("Handling 'chainChanged' event with payload", chainId)
          console.log("???")
          activate(injected)
        }
        const handleAccountsChanged = (accounts) => {
          console.log("Handling 'accountsChanged' event with payload", accounts)
          if (accounts.length > 0) {
            activate(injected)
          }
        }
        const handleNetworkChanged = (networkId) => {
          console.log("Handling 'networkChanged' event with payload", networkId)          
          console.log("???")
          activate(injected)
        }
  
        ethereum.on('connect', handleConnect)
        ethereum.on('chainChanged', handleChainChanged)
        ethereum.on('accountsChanged', handleAccountsChanged)
        ethereum.on('networkChanged', handleNetworkChanged)
  
        return () => {
          if (ethereum.removeListener) {
            ethereum.removeListener('connect', handleConnect)
            ethereum.removeListener('chainChanged', handleChainChanged)
            ethereum.removeListener('accountsChanged', handleAccountsChanged)
            ethereum.removeListener('networkChanged', handleNetworkChanged)
          }
        }
      }
    }, [active, error, suppress, activate])
  }