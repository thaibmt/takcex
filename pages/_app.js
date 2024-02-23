import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import {
  coinbaseWallet, metaMaskWallet,
  trustWallet
} from "@rainbow-me/rainbowkit/wallets";
import "react-toastify/dist/ReactToastify.css";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";

import {
  injectedWallet, walletConnectWallet
} from "@rainbow-me/rainbowkit/wallets";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()],
);
import 'react-toastify/dist/ReactToastify.css';

const projectId = "6eb809ef4585d41898ff8eff2cb74c98";

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      walletConnectWallet({ projectId, chains }),
      coinbaseWallet({
        chains,
        appName: "Knet",
      }),
      metaMaskWallet({
        projectId,
        chains,
      }),
      trustWallet({
        projectId,
        chains
      })
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        {/* Your App */}
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
