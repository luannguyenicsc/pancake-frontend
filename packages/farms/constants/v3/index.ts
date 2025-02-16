import { ChainId } from '@pancakeswap/sdk'
import { ComputedFarmConfigV3 } from '../../src/types'
import { FarmV3SupportedChainId } from '../../src'
import { farmsV3 as farm1 } from '../1'
import { farmsV3 as farm5 } from '../5'
import { farmsV3 as farm56 } from '../56'
import { farmsV3 as farm97 } from '../97'
import { farmsV3 as farm280 } from '../280'
import { farmsV3 as farm1442 } from '../1442'
import { farmsV3 as farm2006 } from '../2006'

export const farmsV3ConfigChainMap: Record<FarmV3SupportedChainId, ComputedFarmConfigV3[]> = {
  [ChainId.ETHEREUM]: farm1,
  [ChainId.GOERLI]: farm5,
  [ChainId.BSC]: farm56,
  [ChainId.BSC_TESTNET]: farm97,
  [ChainId.ZKSYNC_TESTNET]: farm280,
  [ChainId.POLYGON_ZKEVM_TESTNET]: farm1442,
  [ChainId.FDAX]: farm2006,
}
