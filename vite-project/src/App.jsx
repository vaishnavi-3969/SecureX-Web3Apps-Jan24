import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import abi from './contractjson/SecureX.json'
import Buy from '../components/Buy'
import Memos from '../components/Memos'
import Logo from './assets/securex2.svg'

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
        if (!ethereum) {
          console.error("Ethereum provider not found");
          return;
        }
        //shows metamask popup
        const account = await ethereum.request({
          method: 'eth_requestAccounts'
        })

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
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
    <div className='bg-gray-900 rounded-lg p-10'>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <h2>Connected Account: {account}</h2>
      <Buy state={state} />
      <Memos state={state} />
    </div>
  )
}

export default App
