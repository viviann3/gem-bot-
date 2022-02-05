module.exports = {
  name: 'ping',
  description: 'ping ping ping ping ping pong',
  run: async (client, message, args) => {
    message.reply(`${client.ws.ping}ms`)
  }
}