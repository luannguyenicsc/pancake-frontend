import { fdaxTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { getAddress } from 'viem'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'
import { SerializedFarmConfig } from '..'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    token0: fdaxTokens.cake,
    token1: fdaxTokens.wfdx,
    lpAddress: '0xe644ee79524e53cdb5622582a81cd28322489cf3',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 2,
    token0: fdaxTokens.cake,
    token1: fdaxTokens.busd,
    lpAddress: '0x124b482daaf3e0c1554441377b8f97453781312f',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 3,
    token0: fdaxTokens.cake,
    token1: fdaxTokens.usdt,
    lpAddress: '0xb8bb7ddd794d86d547a830c3deb05c5554ee97bd',
    feeAmount: FeeAmount.MEDIUM,
  },
  {
    pid: 4,
    token0: fdaxTokens.wfdx,
    token1: fdaxTokens.busd,
    lpAddress: '0x3582fc0c363d5a4c9bbb1251252afafe5e7a70a5',
    feeAmount: FeeAmount.LOW,
  },
  {
    pid: 5,
    token0: fdaxTokens.usdt,
    token1: fdaxTokens.wfdx,
    lpAddress: '0x15900188ef55317fa1d9f3c9a57fdd01e07dcd72',
    feeAmount: FeeAmount.LOW,
  },
  // keep those farms on top

])

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  // {
  //   pid: 0,
  //   v1pid: 0,
  //   lpSymbol: 'MIEXX',
  //   lpAddress: '0x4B96c9c245E3b852Bc071f53C81f0412eCdD26ac',
  //   token: fdaxTokens.syrup,
  //   quoteToken: fdaxTokens.wfdx,
  // },
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'MIEXX-FDX LP',
    lpAddress: '0xe3d880a9560f68e03ae7cabfa8958dfb1b7e79ea',
    token: fdaxTokens.cake,
    quoteToken: fdaxTokens.wfdx,
    boosted: true,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'MIEXX-BUSD LP',
    lpAddress: '0xee0395d63eb98f3e163e6ecf41cbcf4553a49dcd',
    boosted: true,
    token: fdaxTokens.cake,
    quoteToken: fdaxTokens.busd,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'BUSD-FDX LP',
    lpAddress: '0x7b700d06187dd27dae3f50adb10b97dd219ba264',
    token: fdaxTokens.busd,
    quoteToken: fdaxTokens.wfdx,
  },
  {
    pid: 3,
    v1pid: 3,
    lpSymbol: 'MIEXX-USDT LP',
    lpAddress: '0x8795eed7ab5ebd687b805a92defe6a9e38e8b1d0',
    token: fdaxTokens.cake,
    quoteToken: fdaxTokens.usdt,
    boosted: true,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default farms