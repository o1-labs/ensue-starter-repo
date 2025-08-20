import { EnsueClient, RpcClient } from '@o1-labs/ensue-db-ts-client';

async function main() {
  console.log('🚀 Starting Ensue Hello World...');
  
  // Initialize RPC client with default settings (localhost:8000)
  const rpcClient = new RpcClient();
  
  // Initialize EnsueClient with RPC client
  const client = await EnsueClient.initialize(rpcClient);

  try {
    console.log('🔍 Calling health_check endpoint...');
    const healthResponse = await client.rpc.healthCheck();
    console.log('✅ Health check successful:', healthResponse);
  } catch (error) {
    console.error('❌ Health check failed:', error);
    process.exit(1);
  }

  console.log('🎉 Ensue Hello World completed successfully!');
}

main().catch((error) => {
  console.error('💥 Application error:', error);
  process.exit(1);
});
