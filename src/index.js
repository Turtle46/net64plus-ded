import WebSocketServer from './WebSocketServer'

const PORT = 3000
const UPDATE_INTERVAL = 16

const server = new WebSocketServer(PORT)

export let gameMode = 1

const main = async () => {
  server.broadcastPlayerData()
  setTimeout(main, UPDATE_INTERVAL)
}
main()
