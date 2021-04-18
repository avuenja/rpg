import {
  Database as MySQLDatabase,
  MySQLConnector,
} from 'https://deno.land/x/denodb/mod.ts'

import Account from './models/account.ts'
import Player from './models/player.ts'

export default class Database {
  connection: MySQLConnector
  database!: MySQLDatabase

  constructor(
    host: string,
    database: string,
    username: string,
    password: string
  ) {
    this.connection = new MySQLConnector({
      host,
      database,
      username,
      password,
    })
  }

  connect() {
    this.database = new MySQLDatabase(this.connection)
  }

  link() {
    if (this.database) this.database.link([Account, Player])
  }

  async sync() {
    if (this.database) await this.database.sync({ drop: true })
  }

  close() {
    if (this.database) this.database.close()
  }
}
