import { useState, useEffect } from "react";
import { useContract, useReadOnlyContract } from "@web3-ui/hooks";
import funkyPizzaABI from "../abi/FunkyPizza";
import { ethers } from "ethers";
import MintForm from "./MintForm";

export default function MintCard() {
  const [maxSupply, setMaxSupply] = useState("-");
  const [totalSupply, setTotalSupply] = useState("-");
  const [mintPrice, setMintPrice] = useState("-");
  const [maxPerMint, setMaxPerMint] = useState(1);

  const [readOnlyFunkyPizzaContract, isReadOnlyFunkyPizzaContract] =
    useReadOnlyContract(
      process.env.NEXT_PUBLIC_FUNKY_PIZZA_ADDRESS,
      funkyPizzaABI.abi
    );
  const [funkyPizzaContract, isReady] = useContract(
    process.env.NEXT_PUBLIC_FUNKY_PIZZA_ADDRESS,
    funkyPizzaABI.abi
  );

  const fetchData = async () => {
    const [maxSupply, totalSupply, mintPrice, maxPerMint] = await Promise.all([
      await readOnlyFunkyPizzaContract.max_supply(),
      await readOnlyFunkyPizzaContract.totalSupply(),
      await readOnlyFunkyPizzaContract.price(),
      await readOnlyFunkyPizzaContract.maxPerMint(),
    ]);
    setMaxSupply(maxSupply.toString());
    setTotalSupply(totalSupply.toString());
    setMintPrice(ethers.utils.formatEther(mintPrice.toString()));
    setMaxPerMint(maxPerMint.toString());
  };

  useEffect(() => {
    if (
      isReadOnlyFunkyPizzaContract &&
      readOnlyFunkyPizzaContract &&
      Object.entries(readOnlyFunkyPizzaContract).length > 0
    ) {
      fetchData();
    }
  }, [readOnlyFunkyPizzaContract]);

  return (
    <div className="flex flex-col p-4 mx-auto space-y-6 bg-white border shadow md:mb-0 lg:mb-0 md:p-8 rounded-xl max-w-min min-w-min">
      <div className="flex justify-between text-tomato">
        <div className="text-sm font-semibold">Mint a Funky Pizza</div>
        <div className="text-sm font-semibold">ETH</div>
      </div>
      <div className="text-center text-7xl text-tomato md:text-8xl font-modak">
        {mintPrice}
      </div>
      <MintForm
        mintPrice={mintPrice}
        maxPerMint={maxPerMint}
        contract={funkyPizzaContract}
      />
    </div>
  );
}