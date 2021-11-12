import { DataTypes, Model } from '../../deps.ts'

import { ACCOUNT_TYPE } from '../enums.ts'

export default class Account extends Model {
  static table = 'accounts'
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
    password: DataTypes.STRING,
    type: DataTypes.INTEGER,
    premiumEndAt: DataTypes.DATETIME,
  }

  static defaults = {
    type: ACCOUNT_TYPE.NORMAL,
  }

  id!: number
  name!: string
  password!: string
  type!: ACCOUNT_TYPE
  premiumEndAt!: Date
}
