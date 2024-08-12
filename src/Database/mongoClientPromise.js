import { MongoClient } from "mongodb";

let mongoClientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

// In development mode, use a global variable to preserve the value
// across module reloads caused by HMR (Hot Module Replacement).
if (process.env.ENVIRONMENT === "development") {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new MongoClient instance
  const client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. This allows the client to
// be shared across functions and modules.
export default mongoClientPromise;
