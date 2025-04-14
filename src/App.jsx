import { useState } from "react";
import { generateWallet } from "./utils/walletUtils";

function App() {
  const [wallet, setWallet] = useState(null);

  const handleGenerateWallet = async () => {
    const newWallet = await generateWallet();
    setWallet(newWallet);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Indust Wallet</h1>
      <button onClick={handleGenerateWallet}>Generate Wallet</button>
      {wallet && (
        <div style={{ marginTop: "20px" }}>
          <p><strong>Mnemonic:</strong> {wallet.mnemonic}</p>
          <p><strong>Address:</strong> {wallet.address}</p>
          <p><strong>Private Key:</strong> {wallet.privateKey}</p>
        </div>
      )}
    </div>
  );
}

export default App;
