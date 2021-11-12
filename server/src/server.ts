import Connection from './connection.ts'

export default class Server {
  private port: number

  constructor(port = 8080) {
    this.port = port
  }

  async listen() {
    const listener = await Deno.listen({ port: this.port })

    for await (const conn of listener) {
      const httpConn = Deno.serveHttp(conn)
      const reqEvent = await httpConn.nextRequest()

      if (reqEvent) {
        const { socket, response } = Deno.upgradeWebSocket(reqEvent.request)

        const connection = new Connection(socket)
        connection.listen()

        reqEvent.respondWith(response)
      }
    }

    console.log(`Server liten on port: ${this.port}`)
  }
}
