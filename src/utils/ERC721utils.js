import { ethers } from 'ethers'
import ERC165 from '../abi/ERC165.json'
import ERC721 from '../abi/ERC721.json'

const ERC721Bytes4 = '0x80ac58cd'

export const isERC721 = async (address, provider) => {
    try{
        const contract = new ethers.Contract(address, ERC165, provider)
        const isContract =  await contract.supportsInterface(ERC721Bytes4)
        return isContract
    }
    catch(error){
        return false
    }
}
export const isApprovedForAll = async (nftAddress, ownerAddress, operatorAddress, provider) => {
    try{
        const contract = new ethers.Contract(nftAddress, ERC721, provider);
        const isApproved = await contract.isApprovedForAll(ownerAddress,operatorAddress);
        return isApproved
    }catch(error){
        return false
    }
}

export const getNFTData = async(address,provider) => {
    try{
        const contract = new ethers.Contract(address, ERC721, provider);
        const name = await contract.name();
        const symbol = await contract.symbol();
        return {name, symbol}

    }
    catch(error){
        return false
    }
}
export const getBalanceOf = async(nftAddress, userAddress, provider) => {
    try{
        const contract = new ethers.Contract(nftAddress, ERC721, provider);
        const balance = await contract.balanceOf(userAddress);
        // const name = await contract.name()
        // const symbol = await contract.symbol()
        return balance.toNumber()
    }
    catch(error){
        return false
    }
}