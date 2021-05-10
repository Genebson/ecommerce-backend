import fs from 'fs'

interface Message {
  date: string
  user: string
  text: string
}

let messages: Array<Message> = []

const messagesFile = '../messages.json'
if (fs.existsSync(messagesFile)) {
  const content: string = fs.readFileSync(messagesFile, 'utf-8')
  messages = JSON.parse(content)
}

const socketIo = (io: any) => {
  io.on('connection', (socket: any) => {
    socket.emit('chat', [...messages, { date: new Date().toLocaleTimeString(), user: 'Admin', text: 'Bienvenido!' }])

    socket.on('chat', (message: Message) => {

      message.date = new Date().toLocaleTimeString()

      messages = [...messages, message]

      fs.promises.writeFile(messagesFile, JSON.stringify(messages, null, 2), { encoding: 'utf8' })

      io.sockets.emit('chat', [message])
    })
  })
}

export default socketIo