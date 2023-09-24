// pass an address and return a shortened version
export const shortenAddress = address => `${address.substring(0,6)}...${address.substring(address.length-4)}`


export async function getNetworkInfo(provider){
    try{
        let net = await provider.getNetwork();        
        return net
    }catch(error){
        return false
    }
}