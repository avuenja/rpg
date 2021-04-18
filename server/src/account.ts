import { v4 as uuid } from 'https://deno.land/std@0.93.0/uuid/mod.ts'

import Player from './player.ts'
import { ACCOUNT_TYPE } from './enums.ts'

export default class Account {
  id: string
  name: string
  key: string
  type: ACCOUNT_TYPE
  premiumEndAt!: Date
  characters!: Player[]

  constructor(name: string, key: string) {
    this.id = uuid.generate()
    this.name = name
    this.key = key
    this.type = ACCOUNT_TYPE.NORMAL
  }
}
