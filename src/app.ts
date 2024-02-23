
import { MongoClient, Db } from 'mongodb';
import { Umzug, MigrationParams } from 'umzug';
import path from 'path';

import { up as upMigration, down as downMigration } from '../migrations/1708706838669-test'; // replace with actual migration file

const mongoUrl = process.env.MONGO_URL;
const dbName = 'client';

async function connectToMongo(): Promise<any> {
    //@ts-ignore
  const client = new MongoClient(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  return client.db(dbName);
}

async function runMigrations(): Promise<void> {
  const db = await connectToMongo();
  
  const umzug = new Umzug({
    migrations: {
      glob: 'migrations/*.ts', // define the path over here
      resolve: (params: MigrationParams<any>) => {
        //@ts-ignore
        return require(path.resolve(__dirname, params.path));
      },
    },
    //@ts-ignore
    storage: 'mongodb',
    storageOptions: {
      connection: db,
    },
    logging: console.log,
  });

  try {
    await umzug.up();
    console.log('Migrations applied successfully');
  } catch (error) {
    console.error('Error applying migrations:', error);
  } finally {
    await db.client.close();
  }
}

async function runRollback(): Promise<void> {
  const db = await connectToMongo();

  const umzug = new Umzug({
    migrations: {
      glob: "migrations/*.ts",
      resolve: (params: MigrationParams<any>) => {
        //@ts-ignore
        return require(path.resolve(__dirname, params.path));
      },
    },
    //@ts-ignore
    storage: "mongodb",
    storageOptions: {
      connection: db,
    },
    logging: console.log,
  }) as any;

  try {
    await umzug.down({ to: 0 });
    console.log("Rollback completed successfully");
  } catch (error) {
    console.error("Error during rollback:", error);
  } finally {
    await db.client.close();
  }
}

// Uncomment one of the following lines based on whether you want to run migrations or rollback
runMigrations();
// runRollback();
