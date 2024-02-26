Database Migrations with MongoDB and Umzug
This repository contains a simple example of how to use Umzug for database migrations with MongoDB.

Setup
Make sure you have Node.js and npm installed.
Clone this repository.
Install dependencies by running npm install.
Set the MONGO_URL environment variable to your MongoDB connection string.
Running Migrations
Migrations are defined in the migrations folder. Each migration file should export two functions: up and down. The up function is used to apply the migration, while the down function is used to rollback the migration.

To run the migrations, simply execute the script:

bash
Copy code
npm run migrate
This will connect to the MongoDB database, configure Umzug, and run any pending migrations up to the latest version. The database connection will be closed when finished.

Running Rollback
To rollback the migrations to the initial state, execute the following command:

bash
Copy code
npm run rollback
This will connect to the MongoDB database, configure Umzug, and rollback all migrations to the first version. The database connection will be closed when finished.

Writing Migrations
To create a new migration, simply add a new TypeScript file to the migrations folder. The file should export an object with up and down functions, like this:

typescript
Copy code
export const up = async (params: MigrationParams<any>) => {
  const db = params.connection;
  // Perform database operations here
};

export const down = async (params: MigrationParams<any>) => {
  const db = params.connection;
  // Perform rollback operations here
};
Make sure to update the glob option in the Umzug configuration to include the new migration file.

Logging
By default, Umzug logs migration events to the console. To change the logging behavior, modify the logging option in the Umzug configuration.

Error Handling
If an error occurs during the migration process, the error will be logged to the console and the database connection will be closed. Make sure to handle any errors appropriately in your migration functions.