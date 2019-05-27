import { Pool as GoTDb } from 'pg';
const gotdb = new GoTDb({
  user: 'lixxir',
  host: 'localhost',
  database: 'GoTAPI',
  password: 'xxx',
  port: '5432',
});

export default gotdb;
