
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { http, createConfig, cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { walletConnect,injected, coinbaseWallet } from 'wagmi/connectors'


export const projectId = process.env.WEB3MODAL_PROJECT_ID || '1234567890'
if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'dev Dapp',
  description: 'dev Dapp',
  url: 'https://cloud.walletconnect.com',
  icons: ['/favicon.ico']
}



// 1. Get projectId at https://cloud.walletconnect.com

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http()
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0]
    })
  ],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})


