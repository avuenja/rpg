import { listenAndServe } from 'https://deno.land/std@0.93.0/http/server.ts'
import {
  acceptWebSocket,
  acceptable,
} from 'https://deno.land/std@0.93.0/ws/mod.ts'

import Connection from './connection.ts'

export default class Server {
  port: number

  constructor(port = 8080) {
    this.port = port
  }

  listen() {
    listenAndServe({ port: this.port }, async (req) => {
      if (acceptable(req)) {
        const { conn, r: bufReader, w: bufWriter, headers } = req

        const webSocket = await acceptWebSocket({
          conn,
          bufReader,
          bufWriter,
          headers,
        })

        const connection = new Connection(webSocket)
        connection.listen()
      }
    })

    console.log(`Server liten on port: ${this.port}`)
  }
}
