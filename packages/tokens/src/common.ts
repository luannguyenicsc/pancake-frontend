import { ChainId, ERC20Token } from '@pancakeswap/sdk'

// FDAX
export const CAKE_FDAX = new ERC20Token(
  ChainId.FDAX,
  '0x4B96c9c245E3b852Bc071f53C81f0412eCdD26ac',
  18,
  'MIEXX',
  'MiexxSwap Token',
  'https://pancakeswap.finance/',
)

export const USDT_FDAX = new ERC20Token(
  ChainId.FDAX,
  '0x3f851192d8b2d8dadc7c2b49f7a9fa27cdcea680',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_FDAX = new ERC20Token(
  ChainId.FDAX,
  '0xe5e8ca35b7bf7045288bf6731f071f9f98c5ce47',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const WBTC_FDAX = new ERC20Token(
  ChainId.FDAX,
  '0x51db507c3aFAD70b944Bd9d3b11822a515bbAD82',
  8,
  'WBTC',
  'Wrapped BTC',
)

export const CAKE_MAINNET = new ERC20Token(
  ChainId.BSC,
  '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x8d008B313C1d6C7fE2982F62d32Da7507cF43551',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

export const USDC_BSC = new ERC20Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

export const USDC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  6,
  'USDC',
  'USD Coin',
)

export const USDC_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  6,
  'tUSDC',
  'test USD Coin',
)

export const USDT_BSC = new ERC20Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const BUSD_BSC = new ERC20Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_TESTNET = new ERC20Token(
  ChainId.BSC_TESTNET,
  '0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD_GOERLI = new ERC20Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_BSC,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
  [ChainId.ZKSYNC]: new ERC20Token(
    ChainId.ZKSYNC,
    '0x2039bb4116B4EFc145Ec4f0e2eA75012D6C0f181',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.FDAX]: BUSD_FDAX,
}

export const CAKE = {
  [ChainId.ETHEREUM]: new ERC20Token(
    ChainId.ETHEREUM,
    '0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  [ChainId.GOERLI]: new ERC20Token(
    ChainId.GOERLI,
    '0xc2C3eAbE0368a2Ea97f485b03D1098cdD7d0c081',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  [ChainId.BSC]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
  [ChainId.POLYGON_ZKEVM_TESTNET]: new ERC20Token(
    ChainId.POLYGON_ZKEVM_TESTNET,
    '0x2B3C5df29F73dbF028BA82C33e0A5A6e5800F75e',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  [ChainId.ZKSYNC_TESTNET]: new ERC20Token(
    ChainId.ZKSYNC_TESTNET,
    '0xFf2FA31273c1aedB67017B52C625633d2F021f67',
    18,
    'CAKE',
    'PancakeSwap Token',
    'https://pancakeswap.finance/',
  ),
  [ChainId.FDAX]: CAKE_FDAX,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.GOERLI]: USDC_GOERLI,
  [ChainId.ZKSYNC]: new ERC20Token(ChainId.ZKSYNC, '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4', 6, 'USDC', 'USD Coin'),
  [ChainId.ZKSYNC_TESTNET]: new ERC20Token(
    ChainId.ZKSYNC_TESTNET,
    '0x0faF6df7054946141266420b43783387A78d82A9',
    6,
    'USDC',
    'USD Coin',
  ),
  [ChainId.ARBITRUM_ONE]: new ERC20Token(
    ChainId.ARBITRUM_ONE,
    '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    6,
    'USDC',
    'USD Coin',
  ),
  [ChainId.ARBITRUM_GOERLI]: new ERC20Token(
    ChainId.ARBITRUM_GOERLI,
    '0x179522635726710Dd7D2035a81d856de4Aa7836c',
    6,
    'USDC',
    'USD Coin',
  ),
  [ChainId.POLYGON_ZKEVM]: new ERC20Token(
    ChainId.POLYGON_ZKEVM,
    '0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035',
    6,
    'USDC',
    'USD Coin',
  ),
  [ChainId.LINEA_TESTNET]: new ERC20Token(
    ChainId.LINEA_TESTNET,
    '0xf56dc6695cF1f5c364eDEbC7Dc7077ac9B586068',
    6,
    'USDC',
    'USD Coin',
  ),
}

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
  [ChainId.ARBITRUM_ONE]: new ERC20Token(
    ChainId.ARBITRUM_ONE,
    '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    6,
    'USDT',
    'Tether USD',
  ),
  [ChainId.POLYGON_ZKEVM]: new ERC20Token(
    ChainId.POLYGON_ZKEVM,
    '0x1E4a5963aBFD975d8c9021ce480b42188849D41d',
    6,
    'USDT',
    'Tether USD',
  ),
  [ChainId.POLYGON_ZKEVM_TESTNET]: new ERC20Token(
    ChainId.POLYGON_ZKEVM_TESTNET,
    '0x7379a261bC347BDD445484A91648Abf4A2BDEe5E',
    6,
    'USDT',
    'Tether USD',
  ),
  [ChainId.FDAX]: USDT_FDAX,
}

export const WBTC_ETH = new ERC20Token(
  ChainId.ETHEREUM,
  '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  8,
  'WBTC',
  'Wrapped BTC',
)

export const STABLE_COIN = {
  [ChainId.ETHEREUM]: USDT[ChainId.ETHEREUM],
  [ChainId.GOERLI]: USDC[ChainId.GOERLI],
  [ChainId.BSC]: USDT[ChainId.BSC],
  [ChainId.BSC_TESTNET]: BUSD[ChainId.BSC_TESTNET],
  [ChainId.ARBITRUM_ONE]: USDC[ChainId.ARBITRUM_ONE],
  [ChainId.ARBITRUM_GOERLI]: USDC[ChainId.ARBITRUM_GOERLI],
  [ChainId.ZKSYNC]: USDC[ChainId.ZKSYNC],
  [ChainId.ZKSYNC_TESTNET]: USDC[ChainId.ZKSYNC_TESTNET],
  [ChainId.POLYGON_ZKEVM]: USDT[ChainId.POLYGON_ZKEVM],
  [ChainId.POLYGON_ZKEVM_TESTNET]: USDT[ChainId.POLYGON_ZKEVM_TESTNET],
  [ChainId.LINEA_TESTNET]: USDC[ChainId.LINEA_TESTNET],
  [ChainId.FDAX]: USDT[ChainId.FDAX],
} satisfies Record<ChainId, ERC20Token>
