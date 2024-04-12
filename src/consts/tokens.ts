import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp UI token configs
// Tokens can be defined here, in tokens.json, or in tokens.yaml
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const tokenConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'taraxa',
      standard: TokenStandard.EvmHypNative,
      name: 'Taraxa',
      symbol: 'TARA',
      decimals: 18,
      addressOrDenom: '0x263CE75A3D73e3657aa39c0aed332f1e0668DDa1',
      connections: [
        {
          token: 'ethereum|alfajores|0xe2022Fb10F91014D0087BEdDA9d279b3Db57d173',
        },
      ],
    },
    {
      chainName: 'alfajores',
      standard: TokenStandard.EvmHypSynthetic,
      name: 'Taraxa',
      symbol: 'TARA',
      decimals: 18,
      addressOrDenom: '0xe2022Fb10F91014D0087BEdDA9d279b3Db57d173',
      connections: [
        {
          token: 'ethereum|taraxa|0x263CE75A3D73e3657aa39c0aed332f1e0668DDa1',
        },
      ],
    },
  ],
  options: {},
};
