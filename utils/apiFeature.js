import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import { ChatAppABI, ChatAppAddress } from '@/Context/constants';

export const CheckIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return alert("Install Metamask");
        const accounts = await window.ethereum.request({
            method: 'eth_accounts'
        });
        const firstAccount = accounts[0];
        if (!firstAccount) return alert("No account found");
    } catch (err) {
        console.log(err);
    }
}

export const connectWallet = async () => {
    try {
        if (!window.ethereum) return alert("Install Metamask");
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });
        const firstAccount = accounts[0];
        if (!firstAccount) return alert("No account found");
        return firstAccount;
    } catch (err) {
        console.log(err);
    }
}

const fetchContract = (signerOrProvider) =>
    new ethers.Contract(ChatAppABI, ChatAppAddress, signerOrProvider);

export const connectingWithContract = async () => {
    try {
        const web3modal = new web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract;
    } catch (err) {
        console.log(err);
    }
}

export const coverTime = (time) => {
    const newTime = new Date(time.toNumber());
    const realTime =
        newTime.getHours() + '/' +
        newTime.getMinutes() + '/' +
        newTime.getSeconds() +
        "Date: " +
        newTime.getDate() + "/" +
        (newTime.getMonth() + 1)("") +
        "/" + newTime.getFullYear();
    return realTime;
}




