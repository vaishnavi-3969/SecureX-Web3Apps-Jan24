import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { ethers } from 'hardhat'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not connected');

  useEffect(() => {
    const template = async () => {
      const contractAddress = "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e";
      const contractABI = "";

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
