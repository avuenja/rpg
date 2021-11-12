import { env } from './deps.ts'

import Server from './src/server.ts'
import Database from './src/database.ts'

const config = env()

const server = new Server()
const database = new Database(
  config.DB_HOSTNAME,
  config.DB_DATABASE,
  config.DB_USERNAME,
  config.DB_PASSWORD
)

await server.listen()

database.link()
await database.sync()
