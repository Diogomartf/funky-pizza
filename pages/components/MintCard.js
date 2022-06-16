import { useState } from "react";
import { ethers } from "ethers";
import {
  useContractWrite,
  useContractRead,
  useWaitForTransaction,
  useConnect,
  useNetwork,
} from "wagmi";

import funkyPizzaABI from "../abi/FunkyPizza";
import MintForm from "./MintForm";
import LoadingOverCard from "./LoadingOvenCard";

export default function MintCard() {
  const [mintAmount, setMintAmount] = useState(1);
  const { isConnected } = useConnect();
  const { activeChain } = useNetwork();

  const contractConfig = {
    addressOrName: process.env.NEXT_PUBLIC_FUNKY_PIZZA_ADDRESS,
    contractInterface: funkyPizzaABI.abi,
  };

  const { data: price, isSuccess: isPriceSuccess } = useContractRead(
    contractConfig,
    "price",
    {
      watch: true,
    }
  );

  const { data: totalSupply, isSuccess: isTotalSupplySuccess } =
    useContractRead(contractConfig, "totalSupply", {
      watch: true,
    });

  const { data: max_supply } = useContractRead(contractConfig, "max_supply");

  const { data: maxPerMint } = useContractRead(contractConfig, "maxPerMint", {
    watch: true,
  });

  const { data: paused } = useContractRead(contractConfig, "paused", {
    watch: true,
  });

  const increment = () =>
    mintAmount < maxPerMint && setMintAmount(mintAmount + 1);
  const decrement = () => mintAmount > 1 && setMintAmount(mintAmount - 1);

  const mintValue = () =>
    isPriceSuccess && mintAmount < 5
      ? price.mul(mintAmount)
      : ethers.utils.parseEther("0.0261");

  const {
    data: mintData,
    write: mintNFT,
    isLoading: isMintLoading,
    isSuccess: isMintStarted,
    error: mintError,
  } = useContractWrite(contractConfig, "mint", {
    args: mintAmount,
    overrides: {
      value: mintValue(),
    },
  });

  const {
    data: mintedData,
    isSuccess: isMinted,
    error: txError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  const priceFormated = (price) => {
    let etherPrice = ethers.utils.formatUnits(price, 18);
    return parseFloat(etherPrice, 10);
  };

  const soldOut = isTotalSupplySuccess && totalSupply.gte(max_supply);

  const tokenId = () => parseInt(mintedData.logs[0].topics[3]);

  const etherscanUrl = () =>
    activeChain.id === 1
      ? `https://etherscan.io/tx/${mintData.hash}`
      : `https://rinkeby.etherscan.io/tx/${mintData.hash}`;

  const openseaUrl = () =>
    activeChain.id === 1
      ? `https://opensea.io/assets/${mintData?.to}/${tokenId()}`
      : `https://testnets.opensea.io/assets/rinkeby/${
          mintData?.to
        }/${tokenId()}`;

  return (
    <div>
      {isMintLoading ? (
        <LoadingOverCard></LoadingOverCard>
      ) : (
        <div>
          {isMintStarted ? (
            <div className="flex flex-col space-y-2 items-end justify-end p-4 mx-auto bg-[url('/pizza-leds.jpeg')] shadow w-60 h-52 md:w-80 md:h-64 md:mb-0 lg:mb-0 md:p-8 rounded-xl bg-center bg-cover ">
              <a
                href={etherscanUrl()}
                className="p-2 px-4 mx-auto text-xs text-white bg-gradient-to-r from-orangy to-orangeCrust hover:drop-shadow-lg hover:duration-200 rounded-2xl"
                target="_blank"
              >
                Check transaction
              </a>

              {isMinted && (
                <a
                  className="p-2 px-4 mx-auto text-xs text-white bg-gradient-to-b from-teal-500 to-blue-500 hover:drop-shadow-lg hover:duration-200 rounded-2xl"
                  href={openseaUrl()}
                  target="_blank"
                >
                  Check on Opensea
                </a>
              )}
            </div>
          ) : (
            <div className="min-w-[350px] flex flex-col p-4 mx-auto space-y-6 bg-white border shadow md:mb-0 lg:mb-0 md:p-8 rounded-xl max-w-min">
              <div className="flex justify-between text-tomato">
                <div className="text-sm font-semibold">Mint a Funky Pizza</div>
                <div className="text-sm font-semibold">ETH</div>
              </div>
              <div className="text-5xl text-center text-tomato md:text-6xl font-modak">
                {soldOut
                  ? "No more pizza 🍕"
                  : isPriceSuccess && priceFormated(price)}
              </div>
              {!soldOut ? (
                <MintForm
                  mintNFT={mintNFT}
                  error={mintError}
                  loading={isMintLoading}
                  mintAmount={mintAmount}
                  increment={increment}
                  decrement={decrement}
                  isPaused={paused}
                  isConnected={isConnected}
                />
              ) : (
                <a
                  href="https://opensea.io/collection/funky-pizza"
                  target="_blank"
                  className="text-sm text-center text-blue-600 hover:underline"
                >
                  Check Funky Pizza on Opensea
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
