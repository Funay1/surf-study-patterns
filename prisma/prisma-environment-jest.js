/* eslint-disable node/no-unpublished-require */
const NodeEnvironment = require('jest-environment-node');
const {v4: uuid} = require('uuid');
const {execSync} = require('child_process');
const {resolve} = require('path');
const {Client} = require('pg');

const prismaCli = './node_modules/.bin/prisma';

const customEnviroment = require('dotenv').config({
  path: resolve(__dirname, '..', '.env.test'),
}).parsed;

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.schema = `wave_forecast_schema_${uuid()}`;
    this.connectionString = `${customEnviroment.DATABASE_URL}${this.schema}`;
  }

  setup() {
    process.env.DATABASE_URL = this.connectionString;
    this.global.process.env.DATABASE_URL = this.connectionString;
    execSync(`${prismaCli} migrate dev`);
  }

  async teardown() {
    const client = new Client({
      connectionString: this.connectionString,
    });
    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
  }
}

module.exports = CustomEnvironment;
