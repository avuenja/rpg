import { DataTypes, Model } from 'https://deno.land/x/denodb/mod.ts'

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
}
