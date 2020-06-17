const dotenv = require("dotenv");

dotenv.config();
// This can be a function or an object literal.
module.exports = function () {
  const host = process.env.SQL_SERVER_NAME;
  const port = process.env.SQL_SERVER_PORT;
  const databaseName = process.env.SQL_DATABASE_NAME;
  const username = process.env.SQL_USER_NAME;
  const password = process.env.SQL_PASSWORD;

  return {
    flywayArgs: {
      url: `jdbc:sqlserver://${host}:${port};databaseName=${databaseName}`,
      schemas: "dbo",
      locations: `filesystem:${__dirname}/migration`,
      user: username,
      password: password,
      sqlMigrationSuffixes: ".sql",
      baselineOnMigrate: true,
      baselineVersion: 0,
      baselineDescription: "This_is_the_flyway_db_baseline"
    }
  };
};

// can return/specify flyway version and environment variables:
// version: "6.3.2", // we can specify version
// Use to configure environment variables used by flyway
// env: {
//   JAVA_ARGS: "-Djava.util.logging.config.file=./conf/logging.properties"
// },

// Other config settings:
// var connectionConfig = {
//   server: process.env.SQL_SERVER_NAME,
//   userName: process.env.SQL_USER_NAME,
//   password: process.env.SQL_PASSWORD,
//   options: {
//     database: process.env.SQL_DATABASE_NAME,
//     instanceName: process.env.SQL_INSTANCE_NAME,
//     port: process.env.SQL_SERVER_PORT || 1433,
//     encrypt: process.env.SQL_ENCRYPT
//   }
// };

// Other possible args:
// Sample configuration on flyway CLI docs for baseline
// flyway.driver=org.hsqldb.jdbcDriver
// flyway.url=jdbc:hsqldb:file:/db/flyway_sample
// flyway.user=SA
// flyway.password=mySecretPwd
// flyway.connectRetries=10
// flyway.initSql=SET ROLE 'myuser'
// flyway.schemas=schema1,schema2,schema3
// flyway.table=schema_history
// flyway.tablespace=my_tablespace
// flyway.callbacks=com.mycomp.project.CustomCallback,com.mycomp.project.AnotherCallback
// flyway.skipDefaultCallbacks=false
// flyway.baselineVersion=1.0
// flyway.baselineDescription=Base Migration
// flyway.workingDirectory=C:/myProject
