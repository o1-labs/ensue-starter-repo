import { RpcClient } from '@o1-labs/saffron-db-ts-client';

async function main() {
  console.log('🚀 Starting Saffron Hello World...');
  
  // Initialize RPC client with default settings (localhost:8000)
  const client = new RpcClient();
  
  try {
    console.log('🔍 Calling health_check endpoint...');
    const healthResponse = await client.healthCheck();
    console.log('✅ Health check successful:', healthResponse);
  } catch (error) {
    console.error('❌ Health check failed:', error);
    process.exit(1);
  }
  
  console.log('🎉 Saffron Hello World completed successfully!');
}

main().catch((error) => {
  console.error('💥 Application error:', error);
  process.exit(1);
});
