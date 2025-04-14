import { ethers } from "ethers";
import * as bip39 from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";

export async function generateWallet() {
  const mnemonic = bip39.generateMnemonic(wordlist);
  const wallet = ethers.Wallet.fromPhrase(mnemonic);
  //co
  return {
    mnemonic,
    address: wallet.address,
    privateKey: wallet.privateKey
  };
}
