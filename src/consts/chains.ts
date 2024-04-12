import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  taraxa: {
    protocol: ProtocolType.Ethereum,
    chainId: 842,
    domainId: 842,
    name: 'taraxa',
    displayName: 'Taraxa Testnet',
    nativeToken: { name: 'Taraxa', symbol: 'TARA', decimals: 18 },
    rpcUrls: [{ http: 'https://rpc.testnet.taraxa.io' }],
    blockExplorers: [
      {
        name: 'Taraxa Explorer',
        url: 'https://testnet.explorer.taraxa.io',
        apiUrl: 'https://testnet.explorer.taraxa.io/api',
        family: ExplorerFamily.Other,
      },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 4,
    },
    logoURI: '/logos/taraxa.svg',
  },
};
