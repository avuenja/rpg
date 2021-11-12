import { DataTypes, Model } from '../../deps.ts'

export default class World extends Model {
  static table = 'worlds'
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
    accountsLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }

  static defaults = {
    accountsLimit: 50,
  }

  id!: number
  name!: string
  accountsLimit!: number
}
