export default class Connection {
  private socket: WebSocket

  constructor(socket: WebSocket) {
    this.socket = socket
  }

  listen() {
    this.socket.onopen = () => {
      console.log('WebSocket connection established.')
    }

    this.onMessage()
  }

  send(event: string) {
    this.socket.send(event)
  }

  onMessage() {
    this.socket.onmessage = (event) => {
      console.log('onmessage', event.data)
      this.close()
    }
  }

  onError() {
    this.socket.onerror = (e) =>
      console.error(
        'WebSocket error:',
        e instanceof ErrorEvent ? e.message : e.type
      )
  }

  close() {
    this.socket.onclose = () => console.log('WebSocket has been closed.')
  }
}
