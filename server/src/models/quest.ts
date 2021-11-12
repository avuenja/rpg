import { DataTypes, Model } from '../../deps.ts'

import { QUEST_TYPE } from '../enums.ts'

export default class Quest extends Model {
  static table = 'quests'
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
    description: DataTypes.TEXT,
    type: DataTypes.INTEGER,
  }

  static defaults = {
    type: QUEST_TYPE.TIME,
  }

  id!: number
  name!: string
  description!: string
  type!: number
}
