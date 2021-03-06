import { DataTypes, Model } from '../../deps.ts'

export default class Rank extends Model {
  static table = 'ranks'
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

  id!: number
  name!: string
}
