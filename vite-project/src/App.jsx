import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import abi from './contractjson/SecureX.json'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not connected');

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xBC8C00440dd64b698c19D36773690Fcee2a8dd29";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;
        //shows metamask popup
        const account = await ethereum.request({
          method: 'eth_requestAccounts'
        })
        setAccount(account);
        //read blockchain
        const provider = new ethers.providers.Web3Provider(ethereum);
        //write blockchain
        const signer = provider.getSigner();
        //connect to contract
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        setState({
          provider,
          signer,
          contract
        })
        console.log(contract);
      } catch (err) {
        alert(err);
      }

    }
    template();
  }, [])
  return (
    <>

    </>
  )
}

export default App
