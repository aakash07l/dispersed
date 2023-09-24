import { InjectedConnector } from '@web3-react/injected-connector'
import networkData from "../info.json";;


const supportedChainIds = networkData.ALLOWED_CHAINS;

export const injected = new InjectedConnector(
    {
        supportedChainIds,
    }
)

