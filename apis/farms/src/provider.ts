import { ChainId } from '@pancakeswap/sdk'
import { createPublicClient, http, PublicClient, Chain} from 'viem'
import { bsc, bscTestnet, goerli, mainnet, zkSyncTestnet } from 'viem/chains'

export const  fdax = {
  id: 2006,
  name: "FDAX Smart Chain",
  network: "fdax",
  nativeCurrency: {
      decimals: 18,
      name: "FDX",
      symbol: "FDX",
 },
  rpcUrls: {
      default: {
          http:  ["https://mainnet-rpc.5dax.com"],
     },
      public: {
          http:  ["https://mainnet-rpc.5dax.com"],
     },
 },
  blockExplorers: {
      default: {
          name: "FdaxScan",
          url: "https://scan.5dax.com",
     },
 },
 contracts: {
   multicall3: {
       address: "0x85C163aAeb2ecfA61Ea6D6f1b525e091A94aDB33" as `0x${string}`,
       blockCreated: 1_651_639,
   },
 },
 testnet: false,
} as const satisfies Chain

const requireCheck = [ETH_NODE, GOERLI_NODE, BSC_NODE, BSC_TESTNET_NODE, FDAX_NODE]
requireCheck.forEach((node) => {
  if (!node) {
    throw new Error('Missing env var')
  }
})

const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(ETH_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

export const bscClient: PublicClient = createPublicClient({
  chain: bsc,
  transport: http(BSC_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

export const bscTestnetClient: PublicClient = createPublicClient({
  chain: bscTestnet,
  transport: http(BSC_TESTNET_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

const goerliClient = createPublicClient({
  chain: goerli,
  transport: http(GOERLI_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

const zksyncTestnetClient = createPublicClient({
  chain: zkSyncTestnet,
  transport: http(),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

export const fdaxClient: PublicClient = createPublicClient({
  chain: fdax,
  transport: http(FDAX_NODE),
  batch: {
    multicall: {
      batchSize: 1024 * 200,
    },
  },
})

export const viemProviders = ({ chainId }: { chainId?: ChainId }): PublicClient => {
  switch (chainId) {
    case ChainId.ETHEREUM:
      return mainnetClient
    case ChainId.BSC:
      return bscClient
    case ChainId.BSC_TESTNET:
      return bscTestnetClient
    case ChainId.GOERLI:
      return goerliClient
    case ChainId.ZKSYNC_TESTNET:
      return zksyncTestnetClient
    case ChainId.FDAX:
      return fdaxClient
    default:
      return bscClient
  }
}
