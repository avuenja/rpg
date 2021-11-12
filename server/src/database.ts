import { MySQLDatabase, MySQLConnector } from '../deps.ts'

import Account from './models/account.ts'
import Lineage from './models/lineage.ts'
import Player from './models/player.ts'
import Quest from './models/quest.ts'
import Rank from './models/rank.ts'
import World from './models/world.ts'

export default class Database {
  private connection: MySQLConnector
  private database: MySQLDatabase

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
    this.database = new MySQLDatabase(this.connection)
  }

  link() {
    this.database.link([Account, Lineage, Player, Quest, Rank, World])
  }

  async sync() {
    await this.database.sync({ drop: true })
  }

  async transaction(queries: () => Promise<void>) {
    await this.database.transaction(queries)
  }

  close() {
    this.database.close()
  }
}
