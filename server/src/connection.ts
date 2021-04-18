import { WebSocket } from 'https://deno.land/std@0.93.0/ws/mod.ts'

export default class Connection {
  socket: WebSocket

  constructor(socket: WebSocket) {
    this.socket = socket
  }

  async listen() {
    for await (const conn of this.socket) {
      if (typeof conn === 'string') {
        console.log(conn)
      }
    }
  }

  async send(event: string) {
    await this.socket.send(event)
  }

  async close() {
    await this.socket.close()
  }
}
