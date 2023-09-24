import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../context/connectors";


export function useEagerConnect() {
    const { activate, active } = useWeb3React()
  
    const [tried, setTried] = React.useState(false)
  
    React.useEffect(() => {
      injected.isAuthorized().then((isAuthorized) => {
        if (isAuthorized) {
          activate(injected, undefined, true).catch(() => {
            setTried(true)
          })
        } else {
          setTried(true)
        }
      })
      // eslint-disable-next-line
    }, []) // intentionally only running on mount (make sure it's only mounted once :))
  
    // if the connection worked, wait until we get confirmation of that to flip the flag
    React.useEffect(() => {
      if (!tried && active) {
        setTried(true)
      }
    }, [tried, active])
  
    return tried
  }