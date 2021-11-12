import { DataTypes, Model, Relationships } from '../../deps.ts'

import Account from './account.ts'

export default class Player extends Model {
  static table = 'players'
  static timestamps = true

  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }

  static account() {
    return this.hasOne(Account)
  }

  id!: number
  name!: string
}

Relationships.belongsTo(Player, Account)
