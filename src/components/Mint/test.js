// components/ConnectWalletButton.js

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const ConnectWalletButton = () => {
  const [provider, setProvider] = useState(null);
  const [connectedAddress, setConnectedAddress] = useState(null);

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);

      // Check if already connected to MetaMask
      provider.listAccounts().then(accounts => {
        if (accounts.length > 0) {
          setConnectedAddress(accounts[0]);
        }
      });

      // Listen for account changes
      window.ethereum.on('accountsChanged', accounts => {
        setConnectedAddress(accounts[0]);
      });
    }
  }, []);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await provider.listAccounts();
      setConnectedAddress(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!connectedAddress ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <p>Connected: {connectedAddress}</p>
      )}
    </div>
  );
};

export default ConnectWalletButton;
