import { PublicKey } from '@solana/web3.js';

export const DEFAULTS = {
  CLUSTER: 'devnet',
  //todo these need to be PER cluster
  GEM_BANK_PROG_ID: new PublicKey(
    '57rL5hf9Gj5aHKyW4563wMKi6eLuSuDQdqvoYbuS3bbV'
  ),
  GEM_FARM_PROG_ID: new PublicKey(
    'ZfRV6mhNAyWnW22XvhpidZQHYhpTXbsQD36j25SXPmF'
  ),
};
